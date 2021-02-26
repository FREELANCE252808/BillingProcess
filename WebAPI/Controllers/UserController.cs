﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using System.Transactions;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using WebAPI.Dtos;
using WebAPI.Helpers;
using WebAPI.Interfaces;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : BaseController
    {
        private readonly IUnitOfWork uow;
        private readonly IMapper mapper;
        private readonly ILogger<UserController> logger;

        public UserController(IUnitOfWork uow, IMapper mapper, ILogger<UserController> logger)
        {
            this.uow = uow;
            this.mapper = mapper;
            this.logger = logger;
        }

        [HttpGet]
        [Route("GetUsers")]
        public async Task<IActionResult> GetUsers()
        {
            ResponseResultDto result = new ResponseResultDto();
            List<User> lstUsers = new List<User>();
            try
            {

                var identity = User.Identity as ClaimsIdentity;
                if (identity != null)
                {
                    IEnumerable<Claim> claims = identity.Claims;
                    var CompanyId = claims.Where(p => p.Type == "companyId").FirstOrDefault()?.Value;
                    int companyID = Convert.ToInt32(CompanyId);

                    lstUsers = await uow.UserRepository.GetUsersAsync(companyID);
                    result.data = lstUsers;
                    result.MessageType = "S";
                }
                else
                {
                    result.MessageType = "E";
                    result.Message = MessageConstant.Something_went_wrong;
                }
            }
            catch (Exception ex)
            {
                logger.Log(LogLevel.Error, ex.Message);
            }

            return Ok(new { ResponseResultDto = result });
        }

        // GET: api/User/5
        [HttpGet("{id}", Name = "GetUserByUserID")]
        [Route("GetUserByUserID")]
        public async Task<UserResDto> GetUserByUserID(int userID)
        {
            UserResDto userResDto = new UserResDto();
            try
            {
                IQueryable<User> user = await uow.UserRepository.FindUser(userID);
                userResDto = mapper.Map<UserResDto>(user.FirstOrDefault());
                List<UserRole> userRole = await uow.UserRoleRepository.GetUserRoleByUserId(userID);

                List<int> RoleIds = new List<int>();
                foreach (var item in userRole)
                {
                    RoleIds.Add(item.RoleID);
                }
                userResDto.RoleId = RoleIds;
            }
            catch (Exception ex)
            {
                logger.Log(LogLevel.Error, ex.Message);
            }

            return userResDto;
        }



        // GET: api/User/5
        [HttpGet()]
        [Route("CheckDuplicateEmailID")]
        public bool CheckDuplicateEmailID(string emailId, int userID)
        {
            try
            {
                return uow.UserRepository.IsEmailIdExists(emailId, userID);
            }
            catch (Exception ex)
            {
                logger.Log(LogLevel.Error, ex.Message);
                throw ex;
            }
        }




        [HttpPost]
        [Route("AddEditUser")]
        public async Task<IActionResult> AddEditUser([FromBody] UserReqDto userData)
        {
            ResponseResultDto res = new ResponseResultDto();

            try
            {
                var identity = User.Identity as ClaimsIdentity;
                if (identity != null)
                {
                    IEnumerable<Claim> claims = identity.Claims;
                    var CompanyId = claims.Where(p => p.Type == "companyId").FirstOrDefault()?.Value;
                    int companyID = Convert.ToInt32(CompanyId);
                    var UserId = claims.Where(p => p.Type == "userId").FirstOrDefault()?.Value;
                    int userID = Convert.ToInt32(UserId);

                    if (uow.UserRepository.IsEmailIdExists(userData.EmailId, companyID, userData.UserID))
                    {
                        res.MessageType = "E";
                        res.Message = String.Format(MessageConstant.RecordAlreadyExists, "EmailId '" + userData.EmailId + "'");
                        return Ok(new { ResponseResultDto = res });
                    }

                    var user = mapper.Map<User>(userData);

                    List<UserRole> userRole = new List<UserRole>();
                    foreach (var roleId in userData.RoleId)
                    {
                        UserRole ur = new UserRole();
                        ur.CompanyID = companyID;
                        ur.CreatedBy = userID;
                        ur.CreatedOn = DateTime.Now;
                        ur.RoleID = roleId;
                        userRole.Add(ur);
                    }
                    user.UserRoles = userRole;

                    user.ModifiedOn = DateTime.Now;
                    user.ModifiedBy = userID;

                    if (user.UserID == 0)
                    {
                        user.CompanyID = companyID;
                        user.ImagePath = "./assets/images/userProfile/100_1.jpg";
                        user.CreatedOn = DateTime.Now;
                        user.CreatedBy = userID;
                        string Randampass = CommonFuntions.GenerateRandomPassword(user.FirstName.Substring(0, 2), 8);
                        user.Password = CommonFuntions.Encrypt(Randampass);
                        uow.UserRepository.AddUser(user);
                    }
                    else
                    {
                        User objUser = (await uow.UserRepository.FindUser(userData.UserID)).FirstOrDefault();

                        user.CompanyID = objUser.CompanyID;
                        user.ImagePath = objUser.ImagePath;
                        user.Password = objUser.Password;
                        user.CreatedOn = objUser.CreatedOn;
                        user.CreatedBy = objUser.CreatedBy;

                        uow.UserRepository.UpdateUser(user);
                        uow.UserRoleRepository.DeleteUserRoleByUserId(user.UserID);
                    }

                    //user.UserRoles = userRole;
                    uow.UserRoleRepository.AddUserRole(user.UserRoles);

                    await uow.SaveAsync();
                   
                    res.MessageType = "S";
                    if (userData.UserID == 0)
                    {
                        bool isMailsent = await uow.UserRepository.SendEmailToUserNewPwd(user);

                        res.Message = isMailsent ? MessageConstant.RecordAdded + " " + MessageConstant.PasswordSentToEmailID : MessageConstant.RecordAdded + " " + MessageConstant.FailedToSentEmail;
                    }
                    else
                        res.Message = MessageConstant.RecordUpdated;
                }
                else
                {
                    res.MessageType = "E";
                    res.Message = MessageConstant.Something_went_wrong;
                }
            }
            catch (Exception ex)
            {
                res.MessageType = "E";
                if (userData.UserID == 0)
                    res.Message = MessageConstant.FailedToAddRecord;
                else
                    res.Message = MessageConstant.FailedToUpdateRecord;

                logger.Log(LogLevel.Error, ex.Message);
            }

            return Ok(new { ResponseResultDto = res });
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        [Route("DeleteUser")]
        public async Task<IActionResult> DeleteUser(int userID)
        {
            ResponseResultDto res = new ResponseResultDto();

            try
            {
                if (uow.UserRepository.IsUserDeleteAllow(userID))
                {
                    res.MessageType = "E";
                    res.Message = MessageConstant.RecordIsInUse;
                    return Ok(new { ResponseResultDto = res });
                }

                uow.UserRoleRepository.DeleteUserRoleByUserId(userID);
                uow.UserRepository.DeleteUser(userID);
                await uow.SaveAsync();

                var identity = User.Identity as ClaimsIdentity;
                if (identity != null)
                {
                    IEnumerable<Claim> claims = identity.Claims;
                    var CompanyId = claims.Where(p => p.Type == "companyId").FirstOrDefault()?.Value;
                    int companyID = Convert.ToInt32(CompanyId);
                    List<User> lstUsers = await uow.UserRepository.GetUsersAsync(companyID);
                    res.data = lstUsers;
                }

                res.MessageType = "S";
                res.Message = MessageConstant.RecordDeleted;
                return Ok(new { ResponseResultDto = res });
            }
            catch(Exception ex)
            {
                logger.Log(LogLevel.Error, ex.Message);

                res.MessageType = "E";
                res.Message = MessageConstant.FailedToDeleteRecord;
                return Ok(new { ResponseResultDto = res });
            }
        }
    }
}
