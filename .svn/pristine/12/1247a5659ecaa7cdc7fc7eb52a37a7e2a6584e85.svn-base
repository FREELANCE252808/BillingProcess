using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class Modules
	{
		[Key]
		public int ModuleID { get; set; }

		[Required(ErrorMessage = "ModuleName is mandatory field")]
		[StringLength(50, MinimumLength = 2)]
		public string ModuleName { get; set; }

		[Required(ErrorMessage = "ParentModuleID is mandatory field")]
     	public int ParentModuleID { get; set; }

		[Required(ErrorMessage = "ModuleType is mandatory field")]
		[StringLength(1)]
		public string ModuleType { get; set; }

		[StringLength(200)]
		public string URL { get; set; }

		[StringLength(200)]
		public string AncharClass { get; set; }

		[StringLength(200)]
		public string CountClass { get; set; }

		[StringLength(8)]
		public string SortOrder { get; set; }

		[Required(ErrorMessage = "MenuVisible is mandatory field")]
		public int MenuVisible { get; set; }

		public int OrderMenuHeader { get; set; }

		[Required]
		public DateTime CreatedOn { get; set; }

		[Required]
		public int CreatedBy { get; set; }

		[Required]
		public DateTime ModifiedOn { get; set; }

		[Required]
		public int ModifiedBy { get; set; }

		// public ICollection<RoleRights> RoleRights { get; set; }
	}
}
