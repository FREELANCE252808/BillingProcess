using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Net.Mail;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using InventoryManagementSystem.Data.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using WebAPI.Dtos;
using WebAPI.Helpers;
using WebAPI.Interfaces;
using WebAPI.Models;

namespace WebAPI.Controllers
{

    public class TokenController : BaseController
    {
        private readonly AppSettings _appSettings;
        //private readonly Token _token;
        //private readonly ApplicationDBContext _db;
        private readonly IUnitOfWork uow;
        private readonly IMapper mapper;
        private readonly ILogger<TokenController> logger;

        public TokenController(IUnitOfWork uow, IMapper mapper, IOptions<AppSettings> appSettings, ILogger<TokenController> logger)
        {
            _appSettings = appSettings.Value;
            //  _token = token;
            this.uow = uow;
            this.mapper = mapper;
            this.logger = logger;   
        }

        // GET api/values
        [HttpGet]
        [Route("test")]
        public ActionResult<IEnumerable<string>> Get()
        {
            return new string[] { "value1", "value2" };
        }


        // api/account/login
        //[HttpPost("login")]

        [HttpPost]
        [Route("Login")]
        public async Task<IActionResult> Login([FromBody] TokenRequest model) // granttype = "refresh_token"
        {
            // We will return Generic 500 HTTP Server Status Error
            // If we receive an invalid payload
            if (model == null)
            {
                return new StatusCodeResult(500);
            }

            switch (model.grantType)
            {
                case "password":
                    return await GenerateNewToken(model);
                case "refresh_token":
                    return await RefreshToken(model);
                default:
                    // not supported - return a HTTP 401 (Unauthorized)
                    return new UnauthorizedResult();
            }
        }

        // Method to Create New JWT and Refresh Token
        private async Task<IActionResult> GenerateNewToken(TokenRequest model)
        {
            // check if there's an user with the given username
            var user = await uow.AccountRepository.Authenticate(model.userName, model.password);
            // Validate credentials
            if (user != null)
            {
                var newRtoken = CreateRefreshToken(_appSettings.ClientId, user.userId.ToString());
                // first we delete any existing old refreshtokens            
                var oldrTokens = uow.TokenRepository.GetTokenAsync().Result.Where(rt => rt.UserId == user.userId.ToString());
                if (oldrTokens != null)
                {
                    foreach (var oldrt in oldrTokens)
                    {
                        uow.TokenRepository.DeleteTokenByTokenID(oldrt.Id);
                        await uow.SaveAsync();
                    }
                }
                // Add new refresh token to Database
                uow.TokenRepository.AddToken(newRtoken);
                await uow.SaveAsync();
                // Create & Return the access token which contains JWT and Refresh Token
                var accessToken = await CreateAccessToken(user, newRtoken.Value);
                return Ok(new { authToken = accessToken });

            }
            else
            {
                var accessToken = await NotCreateAccessToken();
                return Ok(new { authToken = accessToken });

            }
        }


        // Create access Tokenm
        private async Task<TokenResponse> CreateAccessToken(User user, string refreshToken)
        {
            double tokenExpiryTime = Convert.ToDouble(_appSettings.ExpireTime);
            var key = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(_appSettings.Secret));
            var tokenHandler = new JwtSecurityTokenHandler();
            List<UserCompany> lstuserCompany = await uow.UserCompanyRepository.GetUserCompanyByUserId(user.userId);
            List<UserCompanyList> userCompanyList = new List<UserCompanyList>();
            foreach (var item in lstuserCompany)
            {
                UserCompanyList lst = new UserCompanyList();              
                lst.companyCode = item.CompanyCode;
                lst.companyName = item.CompanyName;
                userCompanyList.Add(lst);
            }

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(
                    new Claim[]
                    {
                        new Claim(JwtRegisteredClaimNames.Sub, user.firstName+" "+user.lastName),
                        new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                        new Claim(ClaimTypes.NameIdentifier, user.userId.ToString()),
                        new Claim("LoggedOn", DateTime.Now.ToString()),
                        new Claim("userId", user.userId.ToString()),
                        new Claim("firstName",Convert.ToString(user.firstName)),
                        new Claim("lastName",Convert.ToString(user.lastName))
                     }
                    ),

                SigningCredentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256Signature),
                Issuer = _appSettings.Site,
                Audience = _appSettings.Audience,
                Expires = DateTime.UtcNow.AddMinutes(tokenExpiryTime)
            };

            // Generate token
            var newtoken = tokenHandler.CreateToken(tokenDescriptor);
            var encodedToken = tokenHandler.WriteToken(newtoken);

            return new TokenResponse()
            {
                token = encodedToken,
                expiration = newtoken.ValidTo,
                refresh_Token = refreshToken,
                firstName = user.firstName,
                lastName = user.lastName,
                userID = user.userId.ToString(),
                isAdmin = user.isAdmin,
                userCompanyList = userCompanyList
            };
        }

        private async Task<TokenResponse> NotCreateAccessToken()
        {


            return new TokenResponse()
            {
                messageType = "I",
                token = "",
            };
        }

        private Token CreateRefreshToken(string clientId, string userId)
        {
            return new Token()
            {
                ClientId = clientId,
                UserId = userId,
                Value = Guid.NewGuid().ToString("N"),
                CreatedDate = DateTime.UtcNow,
                ExpiryTime = DateTime.UtcNow.AddMinutes(90)
            };
        }

        // Method to Refresh JWT and Refresh Token
        private async Task<IActionResult> RefreshToken(TokenRequest model)
        {
            try
            {

                if (model.userName != null && model.password != null)
                {
                    // check if the received refreshToken exists for the given clientId
                    var rt = uow.TokenRepository.GetTokenAsync().Result.FirstOrDefault(t => t.ClientId == _appSettings.ClientId && t.Value == model.refreshtoken.ToString());
                    if (rt == null)
                    {
                        // refresh token not found or invalid (or invalid clientId)
                        return new UnauthorizedResult();
                    }

                    // check if refresh token is expired
                    if (rt.ExpiryTime < DateTime.UtcNow)
                    {
                        return new UnauthorizedResult();
                    }

                    // check if there's an user with the refresh token's userId
                    var user = await uow.AccountRepository.FindUser(Convert.ToInt32(rt.UserId));
                    if (user == null)
                    {
                        // UserId not found or invalid
                        return new UnauthorizedResult();
                    }

                    // generate a new refresh token
                    var rtNew = CreateRefreshToken(rt.ClientId, rt.UserId);

                    // invalidate the old refresh token (by deleting it)
                    uow.TokenRepository.RomeveToken(rt);

                    // add the new refresh token
                    uow.TokenRepository.AddToken(rtNew);


                    var response = await CreateAccessToken(user, rtNew.Value);
                    return Ok(new { authToken = response });
                }
                else
                {
                    return Ok(new TokenResponse()
                    {
                        token = "",
                        userID = ""
                    });
                }


            }
            catch (Exception ex)
            {
                logger.Log(LogLevel.Error, ex.Message);
                return new UnauthorizedResult();
            }
        }


       

       

    }
}