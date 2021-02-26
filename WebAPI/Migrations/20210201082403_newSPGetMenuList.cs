using Microsoft.EntityFrameworkCore.Migrations;

namespace WebAPI.Migrations
{
    public partial class newSPGetMenuList : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            var sp = @"CREATE Procedure [dbo].[SPGetMenuList]
                        @UserID int,@CompanyID int
                        AS
                        select distinct M.ModuleID,M.ModuleName as title ,M.ParentModuleID,
                        M.ModuleType,M.AncharClass as icon ,M.URL as page,m.OrderMenuHeader 
                        from Modules M INNER JOIN RoleRights RR  ON M.ModuleID = RR.ModuleiD    
                        Where RoleID in(select RoleID from UserRole Where UserID =@UserID) 
                        and RR.CompanyID = @CompanyID Order by OrderMenuHeader";

            migrationBuilder.Sql(sp);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {

        }
    }
}
