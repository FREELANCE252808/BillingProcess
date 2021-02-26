using System.Threading.Tasks;
using WebAPI.Data.Repo;
using WebAPI.Interfaces;

namespace WebAPI.Data
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly DataContext dc;

        public UnitOfWork(DataContext dc)
        {
            this.dc = dc;
        }
      

        public ICityRepository CityRepository => 
            new CityRepository(dc);
        public IUserRepository UserRepository =>         
            new UserRepository(dc);
        public IAccountRepository AccountRepository =>
           new AccountRepository(dc);
        public ITokenRepository TokenRepository =>
            new TokenRepository(dc);
        public IRolesRepository RolesRepository =>
            new RolesRepository(dc);
        public IUserRoleRepository UserRoleRepository =>
          new UserRoleRepository(dc);
        public IModulesRepository ModulesRepository =>
         new ModulesRepository(dc);
        public IRoleRightsRepository RoleRightsRepository =>
          new RoleRightsRepository(dc);
        public IEmailSMSTemplateRepository EmailSMSTemplateRepository =>
         new EmailSMSTemplateRepository(dc);
        public IEmailConfigRepository EmailConfigRepository =>
        new EmailConfigRepository(dc);
        public INotificationMessageRepository NotificationMessageRepository =>
        new NotificationMessageRepository(dc);
        public ICompanyMasterRepository CompanyMasterRepository =>
        new CompanyMasterRepository(dc);

        public async Task<bool> SaveAsync()
        {
           return await dc.SaveChangesAsync() > 0;
        }
    }
}