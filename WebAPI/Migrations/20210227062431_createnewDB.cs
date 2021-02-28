using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace WebAPI.Migrations
{
    public partial class createnewDB : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Cities",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(nullable: true),
                    Country = table.Column<string>(nullable: false),
                    LastUpdatedOn = table.Column<DateTime>(nullable: false),
                    LastUpdatedBy = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Cities", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "CompanyMaster",
                columns: table => new
                {
                    CompanyID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CompanyName = table.Column<string>(maxLength: 200, nullable: false),
                    ContactNumber = table.Column<string>(maxLength: 15, nullable: true),
                    LogoPath = table.Column<string>(maxLength: 300, nullable: true),
                    CompanyAddress = table.Column<string>(maxLength: 500, nullable: true),
                    CreatedOn = table.Column<DateTime>(nullable: false),
                    CreatedBy = table.Column<int>(nullable: false),
                    ModifiedOn = table.Column<DateTime>(nullable: false),
                    ModifiedBy = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CompanyMaster", x => x.CompanyID);
                });

            migrationBuilder.CreateTable(
                name: "DeleteCheck",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CanDelete = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DeleteCheck", x => x.ID);
                });

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

            migrationBuilder.CreateTable(
                name: "Roles",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    RoleName = table.Column<string>(maxLength: 50, nullable: false),
                    isDefault = table.Column<string>(maxLength: 1, nullable: true),
                    CompanyID = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Roles", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Token",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ClientId = table.Column<string>(nullable: false),
                    Value = table.Column<string>(nullable: false),
                    CreatedDate = table.Column<DateTime>(nullable: false),
                    LastModifiedDate = table.Column<DateTime>(nullable: false),
                    ExpiryTime = table.Column<DateTime>(nullable: false),
                    UserId = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Token", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "User",
                columns: table => new
                {
                    userId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    firstName = table.Column<string>(maxLength: 200, nullable: false),
                    lastName = table.Column<string>(maxLength: 200, nullable: true),
                    password = table.Column<string>(maxLength: 1000, nullable: true),
                    userName = table.Column<string>(maxLength: 200, nullable: true),
                    isAdmin = table.Column<bool>(nullable: false),
                    isActive = table.Column<bool>(nullable: false),
                    Status = table.Column<string>(maxLength: 1, nullable: true),
                    CreatedOn = table.Column<DateTime>(nullable: false),
                    CreatedBy = table.Column<int>(nullable: false),
                    ModifiedOn = table.Column<DateTime>(nullable: false),
                    ModifiedBy = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_User", x => x.userId);
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

            migrationBuilder.CreateTable(
                name: "UserCompany",
                columns: table => new
                {
                    userCompanyId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    userID = table.Column<int>(nullable: false),
                    CompanyID = table.Column<int>(nullable: false),
                    CompanyName = table.Column<string>(maxLength: 200, nullable: true),
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

            migrationBuilder.CreateTable(
                name: "UserRole",
                columns: table => new
                {
                    UserRoleID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserID = table.Column<int>(nullable: false),
                    RoleID = table.Column<int>(nullable: false),
                    CompanyID = table.Column<int>(nullable: false),
                    CreatedOn = table.Column<DateTime>(nullable: false),
                    CreatedBy = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserRole", x => x.UserRoleID);
                    table.ForeignKey(
                        name: "FK_UserRole_User_UserID",
                        column: x => x.UserID,
                        principalTable: "User",
                        principalColumn: "userId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_RoleRights_RoleID",
                table: "RoleRights",
                column: "RoleID");

            migrationBuilder.CreateIndex(
                name: "IX_UserCompany_userID",
                table: "UserCompany",
                column: "userID");

            migrationBuilder.CreateIndex(
                name: "IX_UserRole_UserID",
                table: "UserRole",
                column: "UserID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Cities");

            migrationBuilder.DropTable(
                name: "CompanyMaster");

            migrationBuilder.DropTable(
                name: "DeleteCheck");

            migrationBuilder.DropTable(
                name: "EmailConfig");

            migrationBuilder.DropTable(
                name: "EmailSMSTemplate");

            migrationBuilder.DropTable(
                name: "MenuList");

            migrationBuilder.DropTable(
                name: "Modules");

            migrationBuilder.DropTable(
                name: "NotificationMessage");

            migrationBuilder.DropTable(
                name: "RoleRights");

            migrationBuilder.DropTable(
                name: "Token");

            migrationBuilder.DropTable(
                name: "UserCompany");

            migrationBuilder.DropTable(
                name: "UserRole");

            migrationBuilder.DropTable(
                name: "Roles");

            migrationBuilder.DropTable(
                name: "User");
        }
    }
}
