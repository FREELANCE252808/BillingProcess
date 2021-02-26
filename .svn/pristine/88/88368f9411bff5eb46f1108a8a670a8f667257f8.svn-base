using System.Collections.Generic;
using System.Threading.Tasks;
using WebAPI.Models;

namespace WebAPI.Interfaces
{
    public interface IUserRoleRepository
    {
        public void AddUserRole(ICollection<UserRole> userRole);

        public void DeleteUserRoleByUserId(int userID);

        public Task<List<UserRole>> GetUserRoleByUserId(int userID);

        Task<List<int>> GetRoleIDByUserID(int userID);
    }
}