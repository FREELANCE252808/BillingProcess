using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class Role
    {
        [Key]
        public int id { get; set; }

        [Required(ErrorMessage = "RoleName is mandatory field")]
        [StringLength(50, MinimumLength = 2)]
        public string RoleName { get; set; }

        [StringLength(1)]
        public string isDefault { get; set; }

        [Required(ErrorMessage = "CompanyID is mandatory field")]
        public int CompanyID { get; set; }

        public ICollection<RoleRights> RoleRights { get; set; }
    }
}
