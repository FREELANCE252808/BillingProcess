using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.Models;

namespace WebAPI.Dtos
{
    public class UserReqDto
    {

        public int userId { get; set; }
        public string firstName { get; set; }
        public string lastName { get; set; }
        public bool isAdmin { get; set; }
        public bool isActive { get; set; }
        public string userName { get; set; }
        public string password { get; set; }
        public List<UserCompanyList> userCompanyList { get; set; }
      

    }
}
