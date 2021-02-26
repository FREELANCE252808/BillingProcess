using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class EmailConfig
    {
        [Key]
        public int id { get; set; }

        [StringLength(200)]
        public string AppAdmin { get; set; }

        [StringLength(200)]
        public string SmtpClientHost { get; set; }
        [StringLength(200)]
        public string SMTPUserid { get; set; }
        public string SMTPPassword { get; set; }
        public int SSLEnabled { get; set; }
        public string SiteUrl { get; set; }

    }
}
