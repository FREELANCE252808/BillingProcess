﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Dtos
{
    public class EmailSMSTemplateReqDto
    {
        public int EmailSMSTemplateID { get; set; }

        public string EmailDesc { get; set; }

        public string EmailSubject { get; set; }

        public string EmailMessageBody { get; set; }

        public string SMSMessage { get; set; }

        public string Status { get; set; }
    }
}
