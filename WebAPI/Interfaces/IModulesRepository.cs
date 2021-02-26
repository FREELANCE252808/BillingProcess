using System.Threading.Tasks;
using WebAPI.Models;

namespace WebAPI.Interfaces
{
    public interface IModulesRepository
    {
        Task<int> GetModuleIDByURLAsync(string url);
    }
}