using Microsoft.EntityFrameworkCore.Migrations;

namespace WebAPI.Migrations
{
    public partial class DELETE_CHECK_ON_MASTER : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            var sp = @"CREATE PROCEDURE [dbo].[DELETE_CHECK_ON_MASTER]   
                        @PKID int,  
                        @TableName varchar(200)=''  
                        AS  
                        Declare @Exists varchar(1)='N';  

                          IF(@TableName='User')  
                          BEGIN  
                                select 1 as ID, case when Count(*)>0 then 'N' else 'Y' end as CanDelete from (  select UserID from UserRole where UserID=@PKID  ) t  
                          END  
                          ELSE IF(@TableName='Roles')  
                          BEGIN  
                                select 1 as ID, case when Count(*)>0 then 'N' else 'Y' end as CanDelete from (select RoleID from UserRole where RoleID=@PKID  ) t  
                           END  
                         ELSE   
                               select 1 as ID, 'N' as CanDelete";

            migrationBuilder.Sql(sp);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {

        }
    }
}
