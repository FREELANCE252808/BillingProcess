using System.Collections.Generic;
using System.Threading.Tasks;
using WebAPI.Models;
using System.Linq;

namespace WebAPI.Interfaces
{
    public interface IUserRepository
    {
        public void AddUser(User user);

        public void UpdateUser(User user);

        public void DeleteUser(int userId);

        public Task<IQueryable<User>> FindUser(int userId);

        public Task<List<User>> GetUsersAsync();

        public bool IsUserNameExists(string username, int companyID, int userID = 0);

        public bool IsUserDeleteAllow(int userID);

        public Task<bool> SendEmailToUserNewPwd(User objUser);
    }
}