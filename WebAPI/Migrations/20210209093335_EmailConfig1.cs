using Microsoft.EntityFrameworkCore.Migrations;

namespace WebAPI.Migrations
{
    public partial class EmailConfig1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "EmailConfig",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    AppAdmin = table.Column<string>(maxLength: 200, nullable: true),
                    SmtpClientHost = table.Column<string>(maxLength: 200, nullable: true),
                    SMTPUserid = table.Column<string>(maxLength: 200, nullable: true),
                    SMTPPassword = table.Column<string>(nullable: true),
                    SSLEnabled = table.Column<int>(nullable: false),
                    SiteUrl = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EmailConfig", x => x.id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "EmailConfig");
        }
    }
}
