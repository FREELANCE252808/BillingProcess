using System.Threading.Tasks;

namespace WebAPI.Interfaces
{
    public interface IUnitOfWork
    {
         ICityRepository CityRepository {get; }
         IUserRepository UserRepository {get; }
        IAccountRepository AccountRepository { get; }
        ITokenRepository TokenRepository { get; }
        IRolesRepository RolesRepository { get; }
        IUserRoleRepository UserRoleRepository { get; }
        IModulesRepository ModulesRepository { get; }
        IRoleRightsRepository RoleRightsRepository { get; }
        IEmailConfigRepository EmailConfigRepository { get; }
        IEmailSMSTemplateRepository EmailSMSTemplateRepository { get; }
        INotificationMessageRepository NotificationMessageRepository { get; }
        ICompanyMasterRepository CompanyMasterRepository { get; }

        Task<bool> SaveAsync();
    }
}