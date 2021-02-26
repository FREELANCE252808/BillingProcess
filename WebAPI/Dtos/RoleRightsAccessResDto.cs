using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Dtos
{
    public class RoleRightsAccessResDto
    {
        public bool canDelete { get; set; }
        public bool canEdit { get; set; }
        public bool canView { get; set; }
        public bool canAdd { get; set; }
    }
}
