using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace WebAPI.Migrations
{
    public partial class EmailSMSTemplate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "EmailSMSTemplate",
                columns: table => new
                {
                    EmailSMSTemplateID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    EmailDesc = table.Column<string>(maxLength: 100, nullable: false),
                    EmailSubject = table.Column<string>(maxLength: 100, nullable: false),
                    EmailMessageBody = table.Column<string>(maxLength: 8000, nullable: false),
                    SMSMessage = table.Column<string>(maxLength: 150, nullable: true),
                    Status = table.Column<string>(maxLength: 1, nullable: true),
                    CompanyID = table.Column<int>(nullable: false),
                    CreatedOn = table.Column<DateTime>(nullable: false),
                    CreatedBy = table.Column<int>(nullable: false),
                    ModifiedOn = table.Column<DateTime>(nullable: false),
                    ModifiedBy = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EmailSMSTemplate", x => x.EmailSMSTemplateID);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "EmailSMSTemplate");
        }
    }
}
