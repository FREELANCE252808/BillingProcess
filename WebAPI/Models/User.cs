using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebAPI.Models
{
    [Table("User")]
    public class User
    {

        [Key]
        public int userId { get; set; }
        
        [Required(ErrorMessage = "FirstName is mandatory field")]
        [StringLength(200, MinimumLength = 2)]
        public string firstName { get; set; }

        [StringLength(200, MinimumLength = 2)]
        public string lastName { get; set; }

        [StringLength(1000, MinimumLength = 2)]
        public string password { get; set; }


        [StringLength(200, MinimumLength = 2)]
        public string userName { get; set; }


     
        public bool isAdmin { get; set; }
        public bool isActive { get; set; }


        [Required]
        public DateTime CreatedOn { get; set; }

        [Required]
        public int CreatedBy { get; set; }

        [Required]
        public DateTime ModifiedOn { get; set; }

        [Required]
        public int ModifiedBy { get; set; }

        public virtual ICollection<UserCompany> Usercompany { get; set; }
    }
}