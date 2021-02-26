using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using WebAPI.Interfaces;
using WebAPI.Models;

namespace WebAPI.Data.Repo
{
    public class UserRoleRepository : IUserRoleRepository
    {
        private readonly DataContext dc;

        public UserRoleRepository(DataContext dc)
        {
            this.dc = dc;
        }
        public void AddUserRole(ICollection<UserRole> userRole)
        {
            dc.UserRole.AddRange(userRole);
        }

        public void DeleteUserRoleByUserId(int userID)
        {
            List<UserRole> userRole = dc.UserRole.AsNoTracking().Where(ur => ur.UserID == userID).ToList();
            dc.UserRole.RemoveRange(userRole);
        }

        public async Task<List<UserRole>> GetUserRoleByUserId(int userID)
        {
            return await dc.UserRole.Where(ur => ur.UserID == userID).ToListAsync();
        }

        public async Task<List<int>> GetRoleIDByUserID(int userID)
        {
            return await dc.UserRole.Where(ur => ur.UserID == userID).Select(ur => ur.RoleID).ToListAsync();
        }
    }
}