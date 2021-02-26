using System.Collections.Generic;
using System.Threading.Tasks;
using WebAPI.Models;

namespace WebAPI.Interfaces
{
    public interface IAccountRepository
    {
        public void AddUser(User user);
        public void DeleteUser(int UserID);
        public Task<bool> SendEmailToUserForgotPwd(User userObj);
        public Task<bool> SendEmailForChangePwd(User userObj);
        void Register(string userName, string password);
        Task<bool> UserAlreadyExists(string userName);
        public  Task<User> FindUser(int id);

        public  Task<IEnumerable<User>> GetUsersAsync();

        public Task<User> Authenticate(string userName, string password);


        public Task<User> GetUserByUserID(string userName);
       
        Task<User> GetUserDetailByUserID(string userName);

       
    }
}