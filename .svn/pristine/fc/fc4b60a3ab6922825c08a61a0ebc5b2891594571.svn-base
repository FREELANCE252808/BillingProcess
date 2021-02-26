using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace WebAPI.Migrations
{
    public partial class Modules : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Modules",
                columns: table => new
                {
                    ModuleID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ModuleName = table.Column<string>(maxLength: 50, nullable: false),
                    ParentModuleID = table.Column<int>(nullable: false),
                    ModuleType = table.Column<string>(maxLength: 1, nullable: false),
                    URL = table.Column<string>(maxLength: 200, nullable: true),
                    AncharClass = table.Column<string>(maxLength: 200, nullable: true),
                    CountClass = table.Column<string>(maxLength: 200, nullable: true),
                    SortOrder = table.Column<string>(maxLength: 8, nullable: true),
                    MenuVisible = table.Column<int>(nullable: false),
                    OrderMenuHeader = table.Column<int>(nullable: false),
                    CreatedOn = table.Column<DateTime>(nullable: false),
                    CreatedBy = table.Column<int>(nullable: false),
                    ModifiedOn = table.Column<DateTime>(nullable: false),
                    ModifiedBy = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Modules", x => x.ModuleID);
                });

            migrationBuilder.CreateTable(
                name: "RoleRights",
                columns: table => new
                {
                    RoleRightsID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CompanyID = table.Column<int>(nullable: false),
                    RoleID = table.Column<int>(nullable: false),
                    ModuleID = table.Column<int>(nullable: false),
                    View = table.Column<bool>(nullable: false),
                    Add = table.Column<bool>(nullable: false),
                    Edit = table.Column<bool>(nullable: false),
                    Delete = table.Column<bool>(nullable: false),
                    CreatedOn = table.Column<DateTime>(nullable: false),
                    CreatedBy = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RoleRights", x => x.RoleRightsID);
                    table.ForeignKey(
                        name: "FK_RoleRights_Roles_RoleID",
                        column: x => x.RoleID,
                        principalTable: "Roles",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_RoleRights_RoleID",
                table: "RoleRights",
                column: "RoleID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Modules");

            migrationBuilder.DropTable(
                name: "RoleRights");
        }
    }
}
