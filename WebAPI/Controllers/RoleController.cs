using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
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
    public class RoleController : BaseController
    {
        private readonly IUnitOfWork uow;
        private readonly IMapper mapper;
        private readonly ILogger<RoleController> logger;

        public RoleController(IUnitOfWork uow, IMapper mapper, ILogger<RoleController> logger)
        {
            this.uow = uow;
            this.mapper = mapper;
            this.logger = logger;
        }

        [HttpGet]
        [Route("GetRoles")]
        public async Task<ResponseResultDto> GetRoles()
        {
            ResponseResultDto result = new ResponseResultDto();
            List<Role> lstroles = new List<Role>();

            try
            {
                var identity = User.Identity as ClaimsIdentity;
                if (identity != null)
                {
                    IEnumerable<Claim> claims = identity.Claims;
                    var CompanyId = claims.Where(p => p.Type == "companyId").FirstOrDefault()?.Value;
                    int companyID = Convert.ToInt32(CompanyId);

                    lstroles = await uow.RolesRepository.GetRolesAsync(companyID);
                    result.data = lstroles;
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

            return result;
        }

        // GET: api/Role/5
        [HttpGet("{id}", Name = "Get")]
        [Route("GetRoleByRoleID")]
        public async Task<Role> GetRoleByRoleID(int roleID)
        {
            Role role = new Role();

            try
            {
                role = (await uow.RolesRepository.FindRole(roleID)).FirstOrDefault();
            }
            catch (Exception ex)
            {
                logger.Log(LogLevel.Error, ex.Message);
            }

            return role;
        }

        [HttpPost]
        [Route("AddEditRole")]
        public async Task<IActionResult> AddEditRole([FromBody] RoleAddEditDto roledata)
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

                    if (uow.RolesRepository.IsRoleExists(roledata.RoleName, companyID, roledata.id))
                    {
                        res.MessageType = "E";
                        res.Message = String.Format(MessageConstant.RecordAlreadyExists, "Role '" + roledata.RoleName + "'");
                        return Ok(new { ResponseResultDto = res });
                    }

                    var role = mapper.Map<Role>(roledata);
                    role.CompanyID = companyID;

                    if (role.id == 0)
                        uow.RolesRepository.AddRole(role);
                    else
                        uow.RolesRepository.UpdateRole(role);
                    await uow.SaveAsync();

                    res.MessageType = "S";
                    if (roledata.id == 0)
                        res.Message = MessageConstant.RecordAdded;
                    else
                        res.Message = MessageConstant.RecordUpdated;
                }
                else
                {
                    res.MessageType = "E";
                    res.Message = MessageConstant.Something_went_wrong;
                }
            }
            catch(Exception ex)
            {
                res.MessageType = "E";
                if (roledata.id == 0)
                    res.Message = MessageConstant.FailedToUpdateRecord;
                else
                    res.Message = MessageConstant.FailedToAddRecord;

                logger.Log(LogLevel.Error, ex.Message);
            }

            return Ok(new { ResponseResultDto = res });
        }


        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        [Route("DeleteRole")]
        public async Task<IActionResult> DeleteRole(int roleID)
        {
            ResponseResultDto res = new ResponseResultDto();

            try
            {
                if (!uow.RolesRepository.IsRoleDeleteAllow(roleID))
                {
                    res.MessageType = "E";
                    res.Message = MessageConstant.RecordIsInUse;
                    return Ok(new { ResponseResultDto = res });
                }

                uow.RolesRepository.DeleteRole(roleID);
                await uow.SaveAsync();
                var identity = User.Identity as ClaimsIdentity;
                if (identity != null)
                {
                    IEnumerable<Claim> claims = identity.Claims;
                    var CompanyId = claims.Where(p => p.Type == "companyId").FirstOrDefault()?.Value;
                    int companyID = Convert.ToInt32(CompanyId);
                    List<Role> lstRoles = await uow.RolesRepository.GetRolesAsync(companyID);
                    res.data = lstRoles;
                }

                res.MessageType = "S";
                res.Message = MessageConstant.RecordDeleted;
                return Ok(new { ResponseResultDto = res });
            }
            catch (Exception ex)
            {
                logger.Log(LogLevel.Error, ex.Message);

                res.MessageType = "E";
                res.Message = MessageConstant.FailedToDeleteRecord;
                return Ok(new { ResponseResultDto = res });
            }
        }
    }
}
