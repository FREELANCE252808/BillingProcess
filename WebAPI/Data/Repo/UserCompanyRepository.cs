using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using WebAPI.Interfaces;
using WebAPI.Models;

namespace WebAPI.Data.Repo
{
    public class UserCompanyRepository : IUserCompanyRepository
    {
        private readonly DataContext dc;

        public UserCompanyRepository(DataContext dc)
        {
            this.dc = dc;
        }
   
        public void AddUserCompany(ICollection<UserCompany> UserCompany)
        {
            dc.UserCompany.AddRange(UserCompany);
        }

        public void DeleteUserCompanyByUserId(int userID)
        {
            List<UserCompany> UserCompany = dc.UserCompany.AsNoTracking().Where(ur => ur.userID == userID).ToList();
            dc.UserCompany.RemoveRange(UserCompany);
        }

        public async Task<List<UserCompany>> GetUserCompanyByUserId(int userID)
        {
            return await dc.UserCompany.Where(ur => ur.userID == userID).ToListAsync();
        }

        public async Task<List<string>> GetCompanyCodeByUserID(int userID)
        {
            return await dc.UserCompany.Where(ur => ur.userID == userID).Select(ur => ur.CompanyCode).ToListAsync();
        }

     

     
    

      
    }
}