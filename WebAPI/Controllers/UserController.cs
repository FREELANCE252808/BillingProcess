using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Security.Claims;
using System.Text.Json;
using System.Threading.Tasks;
using System.Transactions;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
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
        [Route("GetAllUsers")]
        public async Task<IActionResult> GetUsers()
        {
            UserResDto responseResult = new UserResDto();
            List<User> lstUsers = new List<User>();
            try
            {

                lstUsers = await uow.UserRepository.GetUsersAsync();
                List<UserReqDto> lstreqDto = new List<UserReqDto>();
                foreach (var item in lstUsers)
                {
                    UserReqDto reqDto = new UserReqDto();
                    reqDto = mapper.Map<UserReqDto>(item);
                    List<UserCompanyList> lstUserCompany = new List<UserCompanyList>();
                    List<UserCompany> lstcom = await uow.UserCompanyRepository.GetUserCompanyByUserId(reqDto.userId);
                    foreach (var userCompany in lstcom)
                    {
                        UserCompanyList lst = new UserCompanyList();
                        lst.companyCode = userCompany.CompanyCode;
                        lst.companyName = userCompany.CompanyName;
                        lstUserCompany.Add(lst);
                    }
                    reqDto.userCompanyList = lstUserCompany;
                    lstreqDto.Add(reqDto);
                }
                responseResult.UserReqDto = lstreqDto;
                responseResult.messageType = "S";
            }
            catch (Exception ex)
            {
                logger.Log(LogLevel.Error, ex.Message);
            }

            return Ok(new { responseDto = responseResult });
        }

        
             [HttpGet]
        [Route("GetCompanyList")]
        public async Task<IActionResult> GetCompanyList()
        {

            List<CompanyListDto> lstcompanyListDto = new List<CompanyListDto>();
            try
            {
             
                var folderDetails = Path.Combine(Directory.GetCurrentDirectory(), $"{"MasterData\\CompanyList.json"}");
                var JSON =System.IO.File.ReadAllText(folderDetails);
                return Ok(new { responseDto = JSON });


            }
            catch (Exception ex)
            {
                logger.Log(LogLevel.Error, ex.Message);
            }

            return Ok(new { responseDto = lstcompanyListDto });
        }


    

        [HttpPost]
        [Route("changePassword")]
        public async Task<IActionResult> changePassword(ChangePasswordReqDto changePassword)
        {

            ResponseDto res = new ResponseDto();
            try
            {
                var identity = User.Identity as ClaimsIdentity;
                if (identity != null)
                {
                    IEnumerable<Claim> claims = identity.Claims;
                    var UserId = claims.Where(p => p.Type == "userId").FirstOrDefault()?.Value;
                    var CompanyId = claims.Where(p => p.Type == "companyId").FirstOrDefault()?.Value;
                    int companyID = Convert.ToInt32(CompanyId);
                    int userID = Convert.ToInt32(UserId);
                    User userObj = await uow.AccountRepository.FindUser(changePassword.userId);
                    if (userObj == null)
                    {
                        res.MessageType = "S";
                        res.Message = MessageConstant.BadRequest;
                        return Ok(new { ResponseDto = res });
                    }
                    string newPwd = CommonFuntions.Encrypt(changePassword.newPassword.Trim());
                    userObj.password = newPwd;
                    userObj.ModifiedBy = userID;
                    userObj.ModifiedOn = DateTime.Now;
                    userObj.userId = Convert.ToInt32(changePassword.userId);
                    //  userObj.co = companyID;
                    userObj.ModifiedBy = userID;
                    userObj.ModifiedOn = DateTime.Now;
                    await uow.SaveAsync();
                    res.MessageType = "S";
                    res.Message = MessageConstant.Password_changed_successfully;
                    return Ok(new { ResponseDto = res });
                }
                else
                {

                    res.MessageType = "E";
                    res.Message = MessageConstant.BadRequest;
                    return Ok(new { ResponseDto = res });

                }
            }
            catch (Exception ex)
            {
                logger.Log(LogLevel.Error, ex.Message);

                res.MessageType = "E";
                res.Message = MessageConstant.Something_went_wrong;
                return Ok(new { ResponseDto = res });
            }
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
                List<UserRole> userRole = null;// await uow.UserRoleRepository.GetUserRoleByUserId(userID);

                List<int> RoleIds = new List<int>();
                foreach (var item in userRole)
                {
                    RoleIds.Add(item.RoleID);
                }
               // userResDto.RoleId = RoleIds;
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
        public bool CheckDuplicateEmailID(string userName, int userID)
        {
            try
            {
                return uow.UserRepository.IsUserNameExists(userName, userID);
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

            UserResDto responseResult = new UserResDto();

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

                    if (uow.UserRepository.IsUserNameExists(userData.userName,  userData.userId))
                    {
                        res.MessageType = "E";
                        res.Message = String.Format(MessageConstant.RecordAlreadyExists, "username '" + userData.userName + "'");
                        return Ok(new { ResponseResultDto = res });
                    }

                    var user = mapper.Map<User>(userData);

               
                    user.ModifiedOn = DateTime.Now;
                    user.ModifiedBy = userID;

                    if (user.userId == 0)
                    {
                        user.CreatedOn = DateTime.Now;
                        user.CreatedBy = userID;
                         user.password = CommonFuntions.Encrypt(user.password);
                        uow.UserRepository.AddUser(user);
                    }
                    else
                    {
                        User objUser = (await uow.UserRepository.FindUser(userData.userId)).FirstOrDefault();
                        user.password = objUser.password;
                        user.CreatedOn = objUser.CreatedOn;
                        user.CreatedBy = objUser.CreatedBy;
                        uow.UserRepository.UpdateUser(user);
                        uow.UserCompanyRepository.DeleteUserCompanyByUserId(user.userId);
                    }
                    List<UserCompany> lstuserCompany = new List<UserCompany>();
                    foreach (var item in userData.userCompanyList)
                    {
                        UserCompany userCompany = new UserCompany();
                        userCompany.CompanyCode = item.companyCode;
                        userCompany.CompanyName = item.companyName;
                        userCompany.CreatedBy = userID;
                        userCompany.CreatedOn = DateTime.Now;
                        userCompany.userID = user.userId;
                        lstuserCompany.Add(userCompany);
                    }
                    user.Usercompany = lstuserCompany;
                   
                    uow.UserCompanyRepository.AddUserCompany(lstuserCompany);
                    await uow.SaveAsync();

                    List<User> lstUsers = new List<User>();
                    lstUsers=await uow.UserRepository.GetUsersAsync();
                    List<UserReqDto> lstreqDto = new List<UserReqDto>();
                    foreach (var item in lstUsers)
                    {
                       UserReqDto reqDto = new UserReqDto();
                        reqDto = mapper.Map<UserReqDto>(item);
                        List<UserCompanyList> lstUserCompany = new List<UserCompanyList>();
                        List<UserCompany> lstcom = await uow.UserCompanyRepository.GetUserCompanyByUserId(reqDto.userId);
                        foreach (var userCompany in lstcom)
                        {
                            UserCompanyList lst = new UserCompanyList();
                            lst.companyCode = userCompany.CompanyCode;
                            lst.companyName = userCompany.CompanyName;
                            lstUserCompany.Add(lst);
                        }
                        reqDto.userCompanyList = lstUserCompany;
                        lstreqDto.Add(reqDto);
                    }



                    responseResult.UserReqDto = lstreqDto;
                    responseResult.messageType = "S";
                    if (userData.userId == 0)
                    {

                        responseResult.message = MessageConstant.RecordAdded;
                    }
                    else
                        responseResult.message = MessageConstant.RecordUpdated;
                }
                else
                {
                    responseResult.messageType = "E";
                    responseResult.message = MessageConstant.Something_went_wrong;
                }
            }
            catch (Exception ex)
            {
                responseResult.messageType = "E";
                if (userData.userId == 0)
                    responseResult.message = MessageConstant.FailedToAddRecord;
                else
                    responseResult.message = MessageConstant.FailedToUpdateRecord;

                logger.Log(LogLevel.Error, ex.Message);
            }

            return Ok(new { responseDto = responseResult });
        }

    }
}
