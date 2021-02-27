using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Dtos
{
    public class TokenRequest
    {

        public string grantType { get; set; } // password or refresh_token
        public string ClientId { get; set; }
        public string userName { get; set; }
        public string password { get; set; }
        public string refreshtoken { get; set; }
    }


}
