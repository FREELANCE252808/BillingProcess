using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.Models;

namespace WebAPI.Interfaces
{
    public interface ICompanyMasterRepository
    {
        public Task<IQueryable<CompanyMaster>> GetCompanyByID(int companyID);

        public void AddCompany(CompanyMaster company);

        public void UpdateCompany(CompanyMaster company);

        public bool IsCompanyNameExists(string companyName, int companyID = 0);
    }
}
