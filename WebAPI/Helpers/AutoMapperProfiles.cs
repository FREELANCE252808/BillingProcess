using AutoMapper;
using WebAPI.Dtos;
using WebAPI.Models;

namespace WebAPI.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<City, CityDto>().ReverseMap();
            CreateMap<City, CityUpdateDto>().ReverseMap();
            CreateMap<Role,RoleAddEditDto>().ReverseMap();
            CreateMap<EmailConfig, EmailConfigDto>().ReverseMap();
            CreateMap<User, UserResDto>().ReverseMap();
            CreateMap<User, UserReqDto>().ReverseMap();
            CreateMap<EmailSMSTemplate, EmailSMSTemplateReqDto>().ReverseMap();
            CreateMap<CompanyMaster, CompanyMasterReqDto>().ReverseMap();
        }
    }
}