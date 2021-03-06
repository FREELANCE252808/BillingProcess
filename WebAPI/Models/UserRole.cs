﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class UserRole
    {
        [Key]
        public int UserRoleID { get; set; }

        [Required(ErrorMessage = "UserID is mandatory field")]
        public int UserID { get; set; }

        [Required(ErrorMessage = "RoleID is mandatory field")]
        public int RoleID { get; set; }

        [Required(ErrorMessage = "CompanyID is mandatory field")]
        public int CompanyID { get; set; }

        [Required]
        public DateTime CreatedOn { get; set; }

        [Required]
        public int CreatedBy { get; set; }

        public virtual User Users { get; set; }
    }
}
