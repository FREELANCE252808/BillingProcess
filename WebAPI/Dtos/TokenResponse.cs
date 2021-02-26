using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Dtos
{
    public class TokenResponse
    {
        public string Token { get; set; } // jwt token
        public string userRoles { get; set; } // jwt token
        public DateTime Expiration { get; set; } // expiry time
        public string Refresh_Token { get; set; } // refresh token        
        public string UserName { get; set; } // user name
        public string ImagePath { get; set; } // user name
        public string UserID { get; set; } // user name
        public string companyId { get; set; } // user name
        public string MessageType { get; set; } // user name
    }
}
