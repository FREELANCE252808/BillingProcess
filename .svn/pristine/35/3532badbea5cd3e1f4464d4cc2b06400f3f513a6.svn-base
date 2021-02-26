using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace WebAPI.Migrations
{
    public partial class NotificationMessage : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "NotificationMessage",
                columns: table => new
                {
                    NotificationMessageID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FromUserID = table.Column<int>(nullable: false),
                    ToUserID = table.Column<int>(nullable: false),
                    NotificationMessages = table.Column<string>(maxLength: 1000, nullable: false),
                    RedirectURL = table.Column<string>(maxLength: 500, nullable: false),
                    QueryString = table.Column<string>(maxLength: 250, nullable: false),
                    MessageFrom = table.Column<string>(maxLength: 250, nullable: false),
                    Active = table.Column<string>(nullable: false),
                    MessageType = table.Column<string>(nullable: false),
                    CreatedOn = table.Column<DateTime>(nullable: false),
                    VisitedOn = table.Column<DateTime>(nullable: true),
                    CompanyID = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_NotificationMessage", x => x.NotificationMessageID);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "NotificationMessage");
        }
    }
}
