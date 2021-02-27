using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mail;
using System.Security.Cryptography;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using WebAPI.Helpers;
using WebAPI.Interfaces;
using WebAPI.Models;

namespace WebAPI.Data.Repo
{
    public class UserRepository : IUserRepository
    {
        private readonly DataContext dc;

        public UserRepository(DataContext dc)
        {
            this.dc = dc;
        }

        public void AddUser(User user)
        {
            dc.Users.Add(user);
        }

        public void DeleteUser(int userID)
        {
            var user = dc.Users.AsNoTracking().Where(u => u.userId == userID).FirstOrDefault();
            dc.Users.Remove(user);
        }

        public async Task<IQueryable<User>> FindUser(int userID)
        {
            return await Task.Run(() => dc.Users.AsNoTracking().Where(u => u.userId == userID));
        }

        public async Task<List<User>> GetUsersAsync()
        {
            return await dc.Users.ToListAsync();
        }

        public void UpdateUser(User user)
        {
            dc.Users.Update(user);
        }

        public bool IsUserNameExists(string userName, int companyID, int userID = 0)
        {
            if (userID == 0)
                return dc.Users.Where(u => u.userName == userName && u.isActive == true).Count() > 0 ? true : false;
            else
                return dc.Users.Where(u => u.userName == userName && u.isActive == true && u.userId != userID).Count() > 0 ? true : false;
        }

        public bool IsUserDeleteAllow(int userID)
        {
            return CommonFuntions.DeleteCheckOnMaster(dc, userID, "User")[0].CanDelete == "Y" ? true : false;
        }

        public async Task<bool> SendEmailToUserNewPwd(User objUser)
        {
            bool mailSent = false;
            MailMessage message = new MailMessage();
            var EmailConfigdata = dc.EmailConfig.FirstOrDefaultAsync().Result;

            try
            {
                string EmailTemplate = EmailSMSTemplateRepository.GetEmailTemplateDesc(EmailSMSTemplateRepository.enu_EmailSMSTemplate.NewUserCreated);
                EmailSMSTemplate objBEEmailTemplate = null;// await dc.EmailSMSTemplate.FirstOrDefaultAsync(a => a.EmailDesc == EmailTemplate && a.CompanyID == objUser.co && a.Status == "A");
                String emailDesc = objBEEmailTemplate.EmailMessageBody;
                String emailSubject = objBEEmailTemplate.EmailSubject;
                String username = Convert.ToString(objUser.firstName) + " " + Convert.ToString(objUser.lastName);
                MailAddress mailID = new MailAddress(objUser.userName, username);
                message.To.Add(mailID);
                message.Subject = emailSubject;

                emailDesc = emailDesc.Replace("#ToUser#", username);
                //emailDesc = emailDesc.Replace("#UserEmailID#", objUser.EmailId);
               // emailDesc = emailDesc.Replace("#Password#", CommonFuntions.Decrypt(objUser.Password));
                emailDesc = emailDesc.Replace("#EmailBy#", EmailConfigdata.AppAdmin);
                message.Body = emailDesc;

                mailSent = false;                 //CommonFuntions.SendEmailsAuthenticate(message, EmailConfigdata, objUser.EmailId);
            }
            catch (Exception ex)
            {

            }


            return mailSent;

        }
    }
}