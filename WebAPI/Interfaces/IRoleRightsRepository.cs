using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using WebAPI.Dtos;
using WebAPI.Models;

namespace WebAPI.Interfaces
{
    public interface IRoleRightsRepository
    {
        Task<List<MenuList>> GetMenuList(int userID, int companyID);

        Task<List<RoleRightsResDto>> GetRoleRightsAsync(int roleID);

        void AddRoleRights(List<RoleRights> rolerights);

        void DeleteRoleRights(int roleID);

        RoleRightsAccessResDto GetRoleRightsByRoute(int moduleID, List<int> roleID);
    }
}