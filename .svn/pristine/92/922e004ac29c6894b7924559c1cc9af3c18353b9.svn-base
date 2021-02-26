using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class NotificationMessage
    {
        [Key]
        public int NotificationMessageID { get; set; }

        [Required]
        public int FromUserID { get; set; }

        [Required]
        public int ToUserID { get; set; }

        [Required]
        [StringLength(1000)]
        public string NotificationMessages { get; set; }

        [Required]
        [StringLength(500)]
        public string RedirectURL { get; set; }

        [Required]
        [StringLength(250)]
        public string QueryString { get; set; }

        [Required]
        [StringLength(250)]
        public string MessageFrom { get; set; }

        [Required]
        public char Active { get; set; }

        [Required]
        public char MessageType { get; set; }

        [Required]
        public DateTime CreatedOn { get; set; }

        public DateTime? VisitedOn { get; set; }

        [Required]
        public int CompanyID { get; set; }

    }
}
