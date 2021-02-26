using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using WebAPI.Interfaces;
using WebAPI.Models;

namespace WebAPI.Data.Repo
{
    public class ModulesRepository : IModulesRepository
    {
        private readonly DataContext dc;

        public ModulesRepository(DataContext dc)
        {
            this.dc = dc;
        }      

        public async Task<IEnumerable<Modules>> GetModulesAsync()
        {
            return await dc.Modules.ToListAsync();
        }

        public async Task<int> GetModuleIDByURLAsync(string url)
        {
            return await dc.Modules.Where(m => m.URL == url).Select(m => m.ModuleID).FirstOrDefaultAsync();
        }
    }
}