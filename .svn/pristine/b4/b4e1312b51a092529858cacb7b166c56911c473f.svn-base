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
    public class CompanyMasterController : ControllerBase
    {
        private readonly IUnitOfWork uow;
        private readonly IMapper mapper;
        private readonly ILogger<CompanyMasterController> logger;

        public CompanyMasterController(IUnitOfWork uow, IMapper mapper, ILogger<CompanyMasterController> logger)
        {
            this.uow = uow;
            this.mapper = mapper;
            this.logger = logger;
        }

        [HttpGet]
        [Route("GetCompanyDetails")]
        public async Task<IActionResult> GetCompanyDetails()
        {
            ResponseResultDto result = new ResponseResultDto();
            CompanyMaster company = new CompanyMaster();

            try
            {
                var identity = User.Identity as ClaimsIdentity;
                if (identity != null)
                {
                    IEnumerable<Claim> claims = identity.Claims;
                    var CompanyId = claims.Where(p => p.Type == "companyId").FirstOrDefault()?.Value;
                    int companyID = Convert.ToInt32(CompanyId);
                    IQueryable<CompanyMaster> companydata =await uow.CompanyMasterRepository.GetCompanyByID(companyID);
                    result.data = companydata.FirstOrDefault();
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

        [HttpPost]
        [Route("AddEditCompanyDetails")]
        public async Task<IActionResult> AddEditCompanyDetails([FromBody] CompanyMasterReqDto companyData)
        {
            ResponseResultDto res = new ResponseResultDto();

            try
            {
                if (uow.CompanyMasterRepository.IsCompanyNameExists(companyData.CompanyName, companyData.CompanyID))
                {
                    res.MessageType = "E";
                    res.Message = String.Format(MessageConstant.RecordAlreadyExists, "Company '" + companyData.CompanyName + "'");
                    return Ok(new { ResponseResultDto = res });
                }

                var identity = User.Identity as ClaimsIdentity;
                if (identity != null)
                {
                    IEnumerable<Claim> claims = identity.Claims;
                    var CompanyId = claims.Where(p => p.Type == "companyId").FirstOrDefault()?.Value;
                    int companyID = Convert.ToInt32(CompanyId);
                    var UserId = claims.Where(p => p.Type == "userId").FirstOrDefault()?.Value;
                    int userID = Convert.ToInt32(UserId);

                    var company = mapper.Map<CompanyMaster>(companyData);

                    company.ModifiedOn = DateTime.Now;
                    company.ModifiedBy = userID;
                    company.LogoPath = "./assets/images/userProfile/100_1.jpg";
                    if (company.CompanyID == 0)
                    {
                        company.CreatedOn = DateTime.Now;
                        company.CreatedBy = userID;

                        uow.CompanyMasterRepository.AddCompany(company);
                    }
                    else
                    {
                        IQueryable<CompanyMaster>   objCompany =await uow.CompanyMasterRepository.GetCompanyByID(companyData.CompanyID);
                        company.CreatedOn = objCompany.FirstOrDefault().CreatedOn;
                        company.CreatedBy = objCompany.FirstOrDefault().CreatedBy;
                        uow.CompanyMasterRepository.UpdateCompany(company);
                    }

                    await uow.SaveAsync();

                    res.MessageType = "S";
                    if (companyData.CompanyID == 0)
                    {
                        res.Message = MessageConstant.RecordAdded;
                    }
                    else
                        res.Message = MessageConstant.RecordUpdated;
                }

            }
            catch (Exception ex)
            {
                res.MessageType = "E";
                if (companyData.CompanyID == 0)
                    res.Message = MessageConstant.FailedToAddRecord;
                else
                    res.Message = MessageConstant.FailedToUpdateRecord;

                logger.Log(LogLevel.Error, ex.Message);
            }

            return Ok(new { ResponseResultDto = res });
        }
    }
}
