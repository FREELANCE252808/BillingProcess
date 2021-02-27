using System.Collections.Generic;
using System.Threading.Tasks;
using WebAPI.Models;

namespace WebAPI.Interfaces
{
    public interface IUserCompanyRepository
    {
        public void AddUserCompany(ICollection<UserCompany> UserCompany);

        public void DeleteUserCompanyByUserId(int userID);

        public Task<List<UserCompany>> GetUserCompanyByUserId(int userID);

    }
}