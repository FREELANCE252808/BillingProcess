using Microsoft.EntityFrameworkCore.Migrations;

namespace WebAPI.Migrations
{
    public partial class CompanyChanges : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CompanyAddress",
                table: "CompanyMaster");

            migrationBuilder.DropColumn(
                name: "ContactNumber",
                table: "CompanyMaster");

            migrationBuilder.DropColumn(
                name: "LogoPath",
                table: "CompanyMaster");

            migrationBuilder.AddColumn<string>(
                name: "companyCode",
                table: "CompanyMaster",
                maxLength: 300,
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "companyCode",
                table: "CompanyMaster");

            migrationBuilder.AddColumn<string>(
                name: "CompanyAddress",
                table: "CompanyMaster",
                type: "nvarchar(500)",
                maxLength: 500,
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ContactNumber",
                table: "CompanyMaster",
                type: "nvarchar(15)",
                maxLength: 15,
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "LogoPath",
                table: "CompanyMaster",
                type: "nvarchar(300)",
                maxLength: 300,
                nullable: true);
        }
    }
}
