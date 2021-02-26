using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class EmailSMSTemplate
    {
        [Key]
        public int EmailSMSTemplateID { get; set; }

        [Required(ErrorMessage = "Email Description is mandatory field")]
        [StringLength(100)]
        public string EmailDesc { get; set; }

        [Required(ErrorMessage = "Email Subject is mandatory field")]
        [StringLength(100)]
        public string EmailSubject { get; set; }

        [Required(ErrorMessage = "Email Message Body is mandatory field")]
        [StringLength(8000)]
        public string EmailMessageBody { get; set; }

        [StringLength(150)]
        public string SMSMessage { get; set; }

        [StringLength(1)]
        public string Status { get; set; }

        [Required(ErrorMessage = "CompanyID is mandatory field")]
        public int CompanyID { get; set; }

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
