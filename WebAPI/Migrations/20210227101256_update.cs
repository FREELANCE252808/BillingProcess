using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace WebAPI.Migrations
{
    public partial class update : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CompanyID",
                table: "User");

            migrationBuilder.DropColumn(
                name: "EmailId",
                table: "User");

            migrationBuilder.DropColumn(
                name: "ImagePath",
                table: "User");

            migrationBuilder.DropColumn(
                name: "Status",
                table: "User");

            migrationBuilder.DropColumn(
                name: "CompanyAddress",
                table: "CompanyMaster");

            migrationBuilder.DropColumn(
                name: "ContactNumber",
                table: "CompanyMaster");

            migrationBuilder.DropColumn(
                name: "LogoPath",
                table: "CompanyMaster");

            migrationBuilder.RenameColumn(
                name: "Password",
                table: "User",
                newName: "password");

            migrationBuilder.RenameColumn(
                name: "LastName",
                table: "User",
                newName: "lastName");

            migrationBuilder.RenameColumn(
                name: "FirstName",
                table: "User",
                newName: "firstName");

            migrationBuilder.RenameColumn(
                name: "UserID",
                table: "User",
                newName: "userId");

            migrationBuilder.AddColumn<bool>(
                name: "isActive",
                table: "User",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "isAdmin",
                table: "User",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "userName",
                table: "User",
                maxLength: 200,
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "companyCode",
                table: "CompanyMaster",
                maxLength: 300,
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "userId",
                table: "CompanyMaster",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "UserCompany",
                columns: table => new
                {
                    userCompanyId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    userID = table.Column<int>(nullable: false),
                    CompanyName = table.Column<string>(maxLength: 200, nullable: true),
                    CompanyCode = table.Column<string>(maxLength: 200, nullable: true),
                    CreatedOn = table.Column<DateTime>(nullable: false),
                    CreatedBy = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserCompany", x => x.userCompanyId);
                    table.ForeignKey(
                        name: "FK_UserCompany_User_userID",
                        column: x => x.userID,
                        principalTable: "User",
                        principalColumn: "userId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_UserCompany_userID",
                table: "UserCompany",
                column: "userID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "UserCompany");

            migrationBuilder.DropColumn(
                name: "isActive",
                table: "User");

            migrationBuilder.DropColumn(
                name: "isAdmin",
                table: "User");

            migrationBuilder.DropColumn(
                name: "userName",
                table: "User");

            migrationBuilder.DropColumn(
                name: "companyCode",
                table: "CompanyMaster");

            migrationBuilder.DropColumn(
                name: "userId",
                table: "CompanyMaster");

            migrationBuilder.RenameColumn(
                name: "password",
                table: "User",
                newName: "Password");

            migrationBuilder.RenameColumn(
                name: "lastName",
                table: "User",
                newName: "LastName");

            migrationBuilder.RenameColumn(
                name: "firstName",
                table: "User",
                newName: "FirstName");

            migrationBuilder.RenameColumn(
                name: "userId",
                table: "User",
                newName: "UserID");

            migrationBuilder.AddColumn<int>(
                name: "CompanyID",
                table: "User",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "EmailId",
                table: "User",
                type: "nvarchar(200)",
                maxLength: 200,
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ImagePath",
                table: "User",
                type: "nvarchar(400)",
                maxLength: 400,
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Status",
                table: "User",
                type: "nvarchar(1)",
                maxLength: 1,
                nullable: true);

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
