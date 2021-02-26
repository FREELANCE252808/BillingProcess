using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
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
    public class EmailSMSTemplateController : BaseController
    {
        private readonly IUnitOfWork uow;
        private readonly IMapper mapper;
        private readonly ILogger<EmailSMSTemplateController> logger;

        public EmailSMSTemplateController(IUnitOfWork uow, IMapper mapper, ILogger<EmailSMSTemplateController> logger)
        {
            this.uow = uow;
            this.mapper = mapper;
            this.logger = logger;
        }

        [HttpGet]
        [Route("GetEmailSMSTemplate")]
        public async Task<IActionResult> GetEmailTemplates()
        {
            ResponseResultDto res = new ResponseResultDto();
            List<EmailSMSTemplate> lstEmailSMSTemplate = new List<EmailSMSTemplate>();
            try
            {
                var identity = User.Identity as ClaimsIdentity;
                if (identity != null)
                {
                    IEnumerable<Claim> claims = identity.Claims;
                    var CompanyId = claims.Where(p => p.Type == "companyId").FirstOrDefault()?.Value;
                    int companyID = Convert.ToInt32(CompanyId);

                    lstEmailSMSTemplate = await uow.EmailSMSTemplateRepository.GetEmailTemplatesAsync(companyID);
                    res.data = lstEmailSMSTemplate;
                    res.MessageType = "S";
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
                res.Message = MessageConstant.Something_went_wrong;

                logger.Log(LogLevel.Error, ex.Message);
            }

            return Ok(new { ResponseResultDto = res });
        }


        [HttpGet("{id}", Name = "GetTemplatesByID")]
        [Route("GetTemplatesByID")]
        public async Task<EmailSMSTemplateReqDto> GetTemplatesByID(int TemplateID)
        {
            EmailSMSTemplateReqDto lstEmailSMSTemplate = new EmailSMSTemplateReqDto();
            try
            {
                IQueryable<EmailSMSTemplate> emailSMSTemplate = await uow.EmailSMSTemplateRepository.GetEmailTemplateById(TemplateID);

                lstEmailSMSTemplate = mapper.Map<EmailSMSTemplateReqDto>(emailSMSTemplate.FirstOrDefault());

            }
            catch (Exception ex)
            {
                logger.Log(LogLevel.Error, ex.Message);
            }

            return lstEmailSMSTemplate;
        }

        [HttpPost]
        [Route("AddEditEmailSMSTemplate")]
        public async Task<IActionResult> AddEditEmailSMSTemplate([FromBody] EmailSMSTemplateReqDto emailSMSTemplateData)
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

                    var emailTemplate = mapper.Map<EmailSMSTemplate>(emailSMSTemplateData);

                    emailTemplate.ModifiedOn = DateTime.Now;
                    emailTemplate.ModifiedBy = userID;

                    if (emailTemplate.EmailSMSTemplateID == 0)
                    {
                        emailTemplate.CompanyID = companyID;
                        emailTemplate.CreatedOn = DateTime.Now;
                        emailTemplate.CreatedBy = userID;

                        uow.EmailSMSTemplateRepository.AddEmailSMSTemplate(emailTemplate);
                    }
                    else
                    {
                        EmailSMSTemplate objEmailSMSTemplate = (await uow.EmailSMSTemplateRepository.GetEmailTemplateById(emailTemplate.EmailSMSTemplateID)).FirstOrDefault();

                        emailTemplate.CompanyID = objEmailSMSTemplate.CompanyID;
                        emailTemplate.EmailDesc = objEmailSMSTemplate.EmailDesc;
                        emailTemplate.CreatedOn = objEmailSMSTemplate.CreatedOn;
                        emailTemplate.CreatedBy = objEmailSMSTemplate.CreatedBy;

                        uow.EmailSMSTemplateRepository.UpdateEmailSMSTemplate(emailTemplate);
                    }

                    await uow.SaveAsync();

                    res.MessageType = "S";
                    if (emailSMSTemplateData.EmailSMSTemplateID == 0)
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
            catch (Exception ex)
            {
                res.MessageType = "E";
                if (emailSMSTemplateData.EmailSMSTemplateID == 0)
                    res.Message = MessageConstant.FailedToAddRecord;
                else
                    res.Message = MessageConstant.FailedToUpdateRecord;

                logger.Log(LogLevel.Error, ex.Message);
            }

            return Ok(new { ResponseResultDto = res });
        }

        [HttpPost]
        [Route("UpdateEmailSMSTemplateStatus")]
        public async Task<IActionResult> UpdateEmailSMSTemplateStatus(int emailSMSTemplateID, string status)
        {
            ResponseResultDto res = new ResponseResultDto();

            try
            {
                var identity = User.Identity as ClaimsIdentity;
                if (identity != null)
                {
                    IEnumerable<Claim> claims = identity.Claims;
                    var UserId = claims.Where(p => p.Type == "userId").FirstOrDefault()?.Value;
                    int userID = Convert.ToInt32(UserId);

                    EmailSMSTemplate emailTemplate = (await uow.EmailSMSTemplateRepository.GetEmailTemplateById(emailSMSTemplateID)).FirstOrDefault();
                    emailTemplate.Status = status;
                    emailTemplate.ModifiedOn = DateTime.Now;
                    emailTemplate.ModifiedBy = userID;

                    uow.EmailSMSTemplateRepository.UpdateEmailSMSTemplate(emailTemplate);
                    await uow.SaveAsync();

                    res.MessageType = "S";
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
                res.Message = MessageConstant.FailedToUpdateRecord;

                logger.Log(LogLevel.Error, ex.Message);
            }

            return Ok(new { ResponseResultDto = res });
        }
    }
}
