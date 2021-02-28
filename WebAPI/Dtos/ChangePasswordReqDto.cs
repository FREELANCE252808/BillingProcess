using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Dtos
{
    public class ChangePasswordReqDto
    {
        public string newPassword { get; set; }
        public string comfirmPassword { get; set; }
        public int userId { get; set; }

    }
}
