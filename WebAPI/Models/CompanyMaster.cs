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

        [StringLength(15)]
        public string ContactNumber { get; set; }

        [StringLength(300)]
        public string LogoPath { get; set; }

        [StringLength(500)]
        public string CompanyAddress { get; set; }

        [Required]
        public DateTime CreatedOn { get; set; }

        [Required]
        public int CreatedBy { get; set; }

        [Required]
        public DateTime ModifiedOn { get; set; }

        [Required]
        public int ModifiedBy { get; set; }
    }
}
