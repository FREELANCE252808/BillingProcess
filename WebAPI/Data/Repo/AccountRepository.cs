using System;
using System.Collections.Generic;
using System.Security.Cryptography;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using WebAPI.Interfaces;
using WebAPI.Models;
using WebAPI.Helpers;
using System.Text;
using System.Net.Mail;
using AutoMapper;

namespace WebAPI.Data.Repo
{
    public class AccountRepository : IAccountRepository
    {
        private readonly DataContext dc;
        private readonly IMapper mapper;

        public AccountRepository(DataContext dc)
        {
           
            this.dc = dc;
        }
        public void AddUser(User user)
        {
            dc.Users.Add(user);             
        }

        public void DeleteUser(int UserID)
        {
            var User = dc.Users.Find(UserID);
            dc.Users.Remove(User);
        }

        public async Task<User> FindUser(int id)
        {
            return await dc.Users.FindAsync(id);
        }

        public async Task<IEnumerable<User>> GetUsersAsync()
        {
            return await dc.Users.ToListAsync();
        }
        public async Task<User> Authenticate(string userName, string password)
        {           
               
                return await dc.Users.FirstOrDefaultAsync(x => x.userName == userName
                    && x.password ==CommonFuntions.Encrypt(password) ); 
            
        }

        public async Task<User> GetUserByUserID(string userName)
        {
            return await dc.Users.FirstOrDefaultAsync(x => x.userName == userName);
        }
        public void Register(string userName, string password)
        {

            string Randampass= CommonFuntions.GenerateRandomPassword(userName.Substring(0,2),8);
            User user = new User();
            //user.CompanyID = 2;
            //user.FirstName = "Demo";
            //user.LastName = "one";
            //user.EmailId = "demo@gmail.com";
            //user.Password = CommonFuntions.Encrypt(Randampass); 
            //user.Status = "1";
            //user.ImagePath = "./assets/images/userProfile/100_1.jpg";
            user.CreatedBy = 1;
            user.CreatedOn = DateTime.Now;
            dc.Users.Add(user);
        }

        public async Task<bool> UserAlreadyExists(string userName)
        {
            return await dc.Users.AnyAsync(x => x.userName == userName);
        }
     

        public async Task<User> GetUserDetailByUserID(string userName)
        {
            return await dc.Users.FirstOrDefaultAsync(x => x.userName == userName);
        }

        public async Task<bool> SendEmailToUserForgotPwd(User userObj)
        {


            bool mailSent = false;
            MailMessage message = new MailMessage();
            var EmailConfigdata = dc.EmailConfig.FirstOrDefaultAsync().Result;          

            try
            {
                string EmailTemplate = EmailSMSTemplateRepository.GetEmailTemplateDesc(EmailSMSTemplateRepository.enu_EmailSMSTemplate.ForgotPassword);
                EmailSMSTemplate objBEEmailTemplate = null;// await dc.EmailSMSTemplate.FirstOrDefaultAsync(a=>a.EmailDesc == EmailTemplate && a.CompanyID == userObj.CompanyID && a.Status == "A");
                String emailDesc = objBEEmailTemplate.EmailMessageBody;
                String emailSubject = objBEEmailTemplate.EmailSubject;
                String username = Convert.ToString(userObj.firstName) + " " + Convert.ToString(userObj.lastName);
                MailAddress mailID = null;// new MailAddress(userObj.EmailId, username);
                message.To.Add(mailID);
                message.Subject = emailSubject;
                emailDesc = emailDesc.Replace("#ToName#", username);
                emailDesc = emailDesc.Replace("#EmailBy#", EmailConfigdata.AppAdmin);
                //emailDesc = emailDesc.Replace("#UserEmailId#", userObj.EmailId);
               // emailDesc = emailDesc.Replace("#UserPassword#", CommonFuntions.Decrypt(userObj.Password));
                message.Body = emailDesc;
                mailSent = false;// CommonFuntions.SendEmailsAuthenticate(message, EmailConfigdata, userObj.EmailId);
            }
            catch (Exception ex)
            {

            }


            return mailSent;

        }



        public async Task<bool> SendEmailForChangePwd(User userObj)
        {


            bool mailSent = false;
            MailMessage message = new MailMessage();
            var EmailConfigdata = dc.EmailConfig.FirstOrDefaultAsync().Result;
            try
            {
                string EmailTemplate = EmailSMSTemplateRepository.GetEmailTemplateDesc(EmailSMSTemplateRepository.enu_EmailSMSTemplate.ChangePassword);
                EmailSMSTemplate objBEEmailTemplate = null;// await dc.EmailSMSTemplate.FirstOrDefaultAsync(a => a.EmailDesc == EmailTemplate && a.CompanyID == userObj.CompanyID && a.Status == "A");
                String emailDesc = objBEEmailTemplate.EmailMessageBody;
                String emailSubject = objBEEmailTemplate.EmailSubject;
                String username = Convert.ToString(userObj.firstName) + " " + Convert.ToString(userObj.lastName);
                MailAddress mailID = null;// new MailAddress(userObj.EmailId, username);
                message.To.Add(mailID);
                message.Subject = emailSubject;
                emailDesc = emailDesc.Replace("#ToName#", username);
                emailDesc = emailDesc.Replace("#EmailBy#", EmailConfigdata.AppAdmin);
               // emailDesc = emailDesc.Replace("#UserEmailId#", userObj.EmailId);
               // emailDesc = emailDesc.Replace("#DateAndTime#", userObj.EmailId);
                //emailDesc = emailDesc.Replace("#UserEmailId#", userObj.EmailId);
                //emailDesc = emailDesc.Replace("#UserPassword#", CommonFuntions.Decrypt(userObj.Password));
                message.Body = emailDesc;
                mailSent = false;// CommonFuntions.SendEmailsAuthenticate(message, EmailConfigdata, userObj.EmailId);
                mailSent = true;
            }
            catch (Exception ex)
            {

            }


            return mailSent;

        }




    }
}