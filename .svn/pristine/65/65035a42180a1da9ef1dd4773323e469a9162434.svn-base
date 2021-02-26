using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using WebAPI.Dtos;
using WebAPI.Helpers;
using WebAPI.Interfaces;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NotificationMessageController : ControllerBase
    {
        private readonly IUnitOfWork uow;
        private readonly ILogger<NotificationMessageController> logger;

        public NotificationMessageController(IUnitOfWork uow, ILogger<NotificationMessageController> logger)
        {
            this.uow = uow;
            this.logger = logger;
        }

        [HttpGet]
        [Route("GetAllNotifications")]
        public async Task<IActionResult> GetAllNotifications()
        {
            ResponseResultDto result = new ResponseResultDto();
            List<NotificationMessage> lstNotification = new List<NotificationMessage>();

            try
            {
                var identity = User.Identity as ClaimsIdentity;
                if (identity != null)
                {
                    IEnumerable<Claim> claims = identity.Claims;
                    var UserId = claims.Where(p => p.Type == "userId").FirstOrDefault()?.Value;
                    int userID = Convert.ToInt32(UserId);

                    lstNotification = await uow.NotificationMessageRepository.GetAllNotificationsAsync(userID);

                    result.data = lstNotification;
                    result.MessageType = "S";
                }
                else
                {
                    result.MessageType = "E";
                    result.Message = MessageConstant.Something_went_wrong;
                }
            }
            catch (Exception ex)
            {
                logger.Log(LogLevel.Error, ex.Message);
            }

            return Ok(new { ResponseResultDto = result });
        }

        [HttpGet]
        [Route("GetRecentNotifications")]
        public async Task<IActionResult> GetRecentNotifications()
        {
            ResponseResultDto result = new ResponseResultDto();
            List<NotificationMessage> lstNotification = new List<NotificationMessage>();

            try
            {
                var identity = User.Identity as ClaimsIdentity;
                if (identity != null)
                {
                    IEnumerable<Claim> claims = identity.Claims;
                    var UserId = claims.Where(p => p.Type == "userId").FirstOrDefault()?.Value;
                    int userID = Convert.ToInt32(UserId);

                    lstNotification = await uow.NotificationMessageRepository.GetRecentNotificationAsync(userID);

                    result.data = lstNotification;
                    result.MessageType = "S";
                }
                else
                {
                    result.MessageType = "E";
                    result.Message = MessageConstant.Something_went_wrong;
                }
            }
            catch (Exception ex)
            {
                logger.Log(LogLevel.Error, ex.Message);
            }

            return Ok(new { ResponseResultDto = result });
        }

        [HttpPost]
        [Route("MarkAsRead")]
        public async Task<IActionResult> MarkAsRead(int notificationMessageID)
        {
            ResponseResultDto res = new ResponseResultDto();

            try
            {
                uow.NotificationMessageRepository.MarkAsRead(notificationMessageID);
                await uow.SaveAsync();

                res.MessageType = "S";
                res.Message = MessageConstant.RecordUpdated;
            }
            catch (Exception ex)
            {
                res.MessageType = "E";
                res.Message = MessageConstant.FailedToUpdateRecord;

                logger.Log(LogLevel.Error, ex.Message);
            }

            return Ok(new { ResponseResultDto = res });
        }

        [HttpPost]
        [Route("MarkAllAsRead")]
        public async Task<IActionResult> MarkAllAsRead()
        {
            ResponseResultDto res = new ResponseResultDto();

            try
            {
                var identity = User.Identity as ClaimsIdentity;
                if (identity != null)
                {
                    IEnumerable<Claim> claims = identity.Claims;
                    var UserId = claims.Where(p => p.Type == "userId").FirstOrDefault()?.Value;
                    int userID = Convert.ToInt32(UserId);

                    uow.NotificationMessageRepository.MarkAllAsRead(userID);
                    await uow.SaveAsync();

                    res.MessageType = "S";
                    res.Message = MessageConstant.RecordUpdated;
                }
                else
                {
                    res.MessageType = "E";
                    res.Message = MessageConstant.Something_went_wrong;
                }
            }
            catch (Exception ex)
            {
                res.MessageType = "E";
                res.Message = MessageConstant.FailedToUpdateRecord;

                logger.Log(LogLevel.Error, ex.Message);
            }

            return Ok(new { ResponseResultDto = res });
        }
    }
}
