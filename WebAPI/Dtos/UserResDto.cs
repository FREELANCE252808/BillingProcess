using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.Models;

namespace WebAPI.Dtos
{
    public class UserResDto
    {


        public string message { get; set; }

        public string messageType { get; set; }    

        public List<UserReqDto> UserReqDto { get; set; }
    }
}
