using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace WebAPI.Helpers
{
    public class ClaimIdentityInfo
    {
        public static string UserId { get; set; }
        public static string CompanyId { get; set; }
        public static string ConnToken { get; set; }
        public static string UserName { get; set; }
        public static string EmailID { get; set; }
        public static string ImagePath { get; set; }

        public static void GetIdentity(ClaimsIdentity identity)
        {
            UserId = identity.FindFirst("UserId").Value;
            CompanyId = identity.FindFirst("CompanyId").Value;
            UserName = identity.FindFirst("UserName").Value;
            EmailID = identity.FindFirst("EmailId").Value;
        }

    }
}
