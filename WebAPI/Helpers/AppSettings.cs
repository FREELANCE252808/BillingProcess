using AutoMapper;
using WebAPI.Dtos;
using WebAPI.Models;

namespace WebAPI.Helpers
{
    public class AppSettings
    {
        //Required for JWT Signature
        public string Site { get; set; }
        public string Audience { get; set; }
        public string ExpireTime { get; set; }
        public string Secret { get; set; }

        // Token Refresh Properties added 
        public string RefreshToken { get; set; }
        public string GrantType { get; set; }
        public string ClientId { get; set; }
    }
}