using Microsoft.EntityFrameworkCore.Migrations;

namespace WebAPI.Migrations
{
    public partial class usermaster : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Status",
                table: "User");

            migrationBuilder.AddColumn<string>(
                name: "CompanyCode",
                table: "UserCompany",
                maxLength: 200,
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CompanyCode",
                table: "UserCompany");

            migrationBuilder.AddColumn<string>(
                name: "Status",
                table: "User",
                type: "nvarchar(1)",
                maxLength: 1,
                nullable: true);
        }
    }
}
