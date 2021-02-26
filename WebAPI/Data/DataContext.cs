using Microsoft.EntityFrameworkCore;
using WebAPI.Dtos;
using WebAPI.Models;

namespace WebAPI.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options): base(options){

        }
       
        public DbSet<City> Cities { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Token> Token { get; set; }
        public DbSet<Role> Roles { get; set; }
        public DbSet<UserRole> UserRole { get; set; }
        public DbSet<Modules> Modules { get; set; }
        public DbSet<RoleRights> RoleRights { get; set; }
        public DbSet<MenuList> MenuList { get; set; }
        public DbSet<EmailConfig> EmailConfig { get; set; }
        public DbSet<EmailSMSTemplate> EmailSMSTemplate { get; set; }
        public DbSet<DeleteCheck> DeleteCheck { get; set; }
        public DbSet<NotificationMessage> NotificationMessage { get; set; }
        public DbSet<CompanyMaster> CompanyMaster { get; set; }
    }
}