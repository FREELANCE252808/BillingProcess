using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class RoleRights
    {
		[Key]
		public int RoleRightsID { get; set; }

		[Required(ErrorMessage = "CompanyID is mandatory field")]
		public int CompanyID { get; set; }

		[ForeignKey("FK_RoleRights_Roles")]
		[Required(ErrorMessage = "RoleID is mandatory field")]
		public int RoleID { get; set; }

		[ForeignKey("FK_RoleRights_Modules")]
		[Required(ErrorMessage = "ModuleID is mandatory field")]
		public int ModuleID { get; set; }

		[Required]
		public bool View { get; set; }

		[Required]
		public bool Add { get; set; }

		[Required]
		public bool Edit { get; set; }

		[Required]
		public bool Delete { get; set; }

		[Required]
		public DateTime CreatedOn { get; set; }

		[Required]
		public int CreatedBy { get; set; }
	}
}
