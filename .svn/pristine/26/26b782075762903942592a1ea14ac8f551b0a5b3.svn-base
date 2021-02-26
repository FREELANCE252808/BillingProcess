using Microsoft.EntityFrameworkCore.Migrations;

namespace WebAPI.Migrations
{
    public partial class MenuList : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "MenuList",
                columns: table => new
                {
                    MenuID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ModuleID = table.Column<int>(nullable: false),
                    title = table.Column<string>(nullable: true),
                    ParentModuleID = table.Column<int>(nullable: false),
                    ModuleType = table.Column<string>(nullable: true),
                    icon = table.Column<string>(nullable: true),
                    page = table.Column<string>(nullable: true),
                    OrderMenuHeader = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MenuList", x => x.MenuID);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "MenuList");
        }
    }
}
