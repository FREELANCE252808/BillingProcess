using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class UserCompany
    {
        [Key]
        public int userCompanyId { get; set; }

        [Required(ErrorMessage = "UserID is mandatory field")]
        public int userID { get; set; }


        [StringLength(200, MinimumLength = 2)]
        public string CompanyName { get; set; }

        [StringLength(200, MinimumLength = 2)]
        public string CompanyCode { get; set; }

        [Required]
        public DateTime CreatedOn { get; set; }

        [Required]
        public int CreatedBy { get; set; }

        public virtual User Users { get; set; }
    }
}
