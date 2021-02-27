using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class CompanyMaster
    {
        [Key]
        public int CompanyID { get; set; }

        [Required]
        [StringLength(200)]
        public string CompanyName { get; set; }


        [StringLength(300)]
        public string companyCode { get; set; }

      

        [Required]
        public DateTime CreatedOn { get; set; }

        [Required]
        public int CreatedBy { get; set; }
        public int userId { get; set; }

        [Required]
        public DateTime ModifiedOn { get; set; }

        [Required]
        public int ModifiedBy { get; set; }
    }
}
