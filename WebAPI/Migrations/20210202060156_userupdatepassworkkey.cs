using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace WebAPI.Migrations
{
    public partial class userupdatepassworkkey : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn("Password", "Users");
            migrationBuilder.AddColumn<byte[]>(
                name: "Password",
                table: "Users",
                nullable: false,
                defaultValue: "test@123"
                //oldClrType: typeof(string),
                //oldType: "nvarchar(max)"
                );
                

            migrationBuilder.AddColumn<byte[]>(
                name: "PasswordKey",
                table: "Users",
                nullable: false,
                defaultValue: new byte[] {  });

            migrationBuilder.CreateTable(
                name: "MenuList",
                columns: table => new
                {
                    ModuleID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    title = table.Column<string>(nullable: true),
                    ParentModuleID = table.Column<int>(nullable: false),
                    ModuleType = table.Column<string>(nullable: true),
                    icon = table.Column<string>(nullable: true),
                    page = table.Column<string>(nullable: true),
                    OrderMenuHeader = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MenuList", x => x.ModuleID);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "MenuList");

            migrationBuilder.DropColumn(
                name: "PasswordKey",
                table: "Users");

            migrationBuilder.AlterColumn<string>(
                name: "Password",
                table: "Users",
                type: "nvarchar(max)",
                nullable: false,
                oldClrType: typeof(byte[]));
        }
    }
}
