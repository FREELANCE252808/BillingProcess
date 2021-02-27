using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Dtos
{
    public class TokenResponse
    {
        public string token { get; set; } // jwt token
        public bool isAdmin { get; set; } // jwt token
        public DateTime expiration { get; set; } // expiry time
        public string refresh_Token { get; set; } // refresh token        
        public string firstName { get; set; } // user name
        public string userID { get; set; } // user name
        public string lastName { get; set; } // user name
        public string messageType { get; set; }
        public List<UserCompanyList> userCompanyList;
    }

    public class UserCompanyList
    {      
        public string companyName { get; set; }
        public string companyCode { get; set; }
    }
}
