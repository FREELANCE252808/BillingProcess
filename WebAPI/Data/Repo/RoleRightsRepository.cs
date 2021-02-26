using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebAPI.Dtos;
using WebAPI.Interfaces;
using WebAPI.Models;

namespace WebAPI.Data.Repo
{
    public class RoleRightsRepository : IRoleRightsRepository
    {
        private readonly DataContext dc;

        public RoleRightsRepository(DataContext dc)
        {
            this.dc = dc;
        }

        public void AddRoleRights(List<RoleRights> rolerights)
        {
            dc.RoleRights.AddRange(rolerights);
        }

        public void DeleteRoleRights(int roleID)
        {
            var roleRights = dc.RoleRights.Where(rr => rr.RoleID == roleID);
            dc.RoleRights.RemoveRange(roleRights);
        }

        public async Task<List<MenuList>> GetMenuList(int userID, int companyID)
        {
            List<MenuList> lstMenuList = new List<MenuList>();

            try
            {
                string StoredProc = "exec SPGetMenuList " +
                                    "@UserID = " + userID + "," +
                                    "@CompanyID = " + companyID + "";
                lstMenuList = await dc.MenuList.FromSqlRaw(StoredProc).ToListAsync<MenuList>();


            }
            catch (Exception ex)
            {

                string msg = ex.Message;
            }

            return lstMenuList;
        }

        public async Task<List<RoleRightsResDto>> GetRoleRightsAsync(int roleID)
        {
            var result = from m in dc.Modules
                         join rr in dc.RoleRights.Where(r => r.RoleID == roleID) on m.ModuleID equals rr.ModuleID
                         into RoleRighstDetails
                         from rolerights in RoleRighstDetails.DefaultIfEmpty()
                         select new RoleRightsResDto
                         {
                             id = m.ModuleID,
                             text = m.ModuleName,
                             parentid = m.ParentModuleID,
                             ModuleType = m.ModuleType,
                             Icon = m.AncharClass,
                             page = m.URL,
                             ViewRight = rolerights.View,
                             AddRight = rolerights.Add,
                             EditRight = rolerights.Edit,
                             DeleteRight = rolerights.Delete
                         };

            List<RoleRightsResDto> roleRights = await result.ToListAsync();

            return roleRights;
        }

        public RoleRightsAccessResDto GetRoleRightsByRoute(int moduleID, List<int> roleID)
        {
           
          
            var results = dc.RoleRights.Where(r => r.ModuleID == moduleID & roleID.Contains(r.RoleID)).AsEnumerable().GroupBy(
                            p => p.ModuleID).Select(a => new RoleRightsAccessResDto
                            {
                                canAdd = Convert.ToBoolean(a.Max(b => Convert.ToInt32(b.Add))),
                                canEdit = Convert.ToBoolean(a.Max(b => Convert.ToInt32(b.Edit))),
                                canDelete = Convert.ToBoolean(a.Max(b => Convert.ToInt32(b.Delete))),
                                canView = Convert.ToBoolean(a.Max(b => Convert.ToInt32(b.View))),
                            });
            RoleRightsAccessResDto roleRights = results.FirstOrDefault();

            return roleRights;
        }
    }
}