﻿using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.Interfaces;
using WebAPI.Models;

namespace WebAPI.Data.Repo
{
    public class EmailSMSTemplateRepository: IEmailSMSTemplateRepository
    {
        private readonly DataContext dc;

        public EmailSMSTemplateRepository(DataContext dc)
        {
            this.dc = dc;
        }

        public async Task<List<EmailSMSTemplate>> GetEmailTemplatesAsync(int companyID)
        {
            return await dc.EmailSMSTemplate.Where(ur => ur.CompanyID == companyID).ToListAsync();
        }

        public static string GetEmailTemplateDesc(enu_EmailSMSTemplate etDesc)
        {
            switch (etDesc)
            {
                case enu_EmailSMSTemplate.NewUserCreated:
                    return "New User Created";
                case enu_EmailSMSTemplate.ForgotPassword:
                    return "Forgot Password";
                case enu_EmailSMSTemplate.ChangePassword:
                    return "Change Password";
                case enu_EmailSMSTemplate.PasswordReset:
                    return "Password Reset";

                default: return "";
            }
        }

        public async Task<IQueryable<EmailSMSTemplate>> GetEmailTemplateById(int emailSMSTemplateID)
        {
            return await Task.Run(() => dc.EmailSMSTemplate.AsNoTracking().Where(e => e.EmailSMSTemplateID == emailSMSTemplateID));
        }

        public void AddEmailSMSTemplate(EmailSMSTemplate entity)
        {
            dc.EmailSMSTemplate.Add(entity);
        }

        public void UpdateEmailSMSTemplate(EmailSMSTemplate entity)
        {
            dc.EmailSMSTemplate.Update(entity);
        }

        public enum enu_EmailSMSTemplate
        {
            NewUserCreated = 1,
            ForgotPassword = 2,
            ChangePassword = 3,
            PasswordReset = 4,
        }
    }
}
