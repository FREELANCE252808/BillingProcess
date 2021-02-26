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
        public int UserID { get; set; }

        [Required(ErrorMessage = "CompanyID is mandatory field")]
        public int CompanyID { get; set; }

        [Required(ErrorMessage = "FirstName is mandatory field")]
        [StringLength(200, MinimumLength = 2)]
        public string FirstName { get; set; }

        [StringLength(200, MinimumLength = 2)]
        public string LastName { get; set; }

        [StringLength(1000, MinimumLength = 2)]
        public string Password { get; set; }

        [StringLength(200, MinimumLength = 2)]
        public string EmailId { get; set; }

        [StringLength(400, MinimumLength = 2)]
        public string ImagePath { get; set; }

        [StringLength(1)]
        public string Status { get; set; }

        [Required]
        public DateTime CreatedOn { get; set; }

        [Required]
        public int CreatedBy { get; set; }

        [Required]
        public DateTime ModifiedOn { get; set; }

        [Required]
        public int ModifiedBy { get; set; }

        public virtual ICollection<UserRole> UserRoles { get; set; }
    }
}