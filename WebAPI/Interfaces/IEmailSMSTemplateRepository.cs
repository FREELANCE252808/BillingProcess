using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.Data.Repo;
using WebAPI.Models;

namespace WebAPI.Interfaces
{
    public interface IEmailSMSTemplateRepository
    {
        Task<List<EmailSMSTemplate>> GetEmailTemplatesAsync(int CompanyID);

        Task<IQueryable<EmailSMSTemplate>> GetEmailTemplateById(int emailSMSTemplateID);

        void AddEmailSMSTemplate(EmailSMSTemplate entity);

        void UpdateEmailSMSTemplate(EmailSMSTemplate entity);
    }
}