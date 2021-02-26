using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.Interfaces;
using WebAPI.Models;

namespace WebAPI.Data.Repo
{
    public class CompanyMasterRepository : ICompanyMasterRepository
    {
        private DataContext dc;

        public CompanyMasterRepository(DataContext dc)
        {
            this.dc = dc;
        }

        public async Task<IQueryable<CompanyMaster>> GetCompanyByID(int companyID)
        {            
            return await Task.Run(() => dc.CompanyMaster.AsNoTracking().Where(c => c.CompanyID == companyID) );
         }

        public void AddCompany(CompanyMaster company)
        {
            dc.CompanyMaster.Add(company);
        }

        public void UpdateCompany(CompanyMaster company)
        {
            dc.CompanyMaster.Update(company);
        }

        public bool IsCompanyNameExists(string companyName, int companyID = 0)
        {
            if (companyID == 0)
                return dc.CompanyMaster.Any(c => c.CompanyName == companyName);
            else
                return dc.CompanyMaster.Any(c => c.CompanyName == companyName && c.CompanyID != companyID);
        }
    }
}
