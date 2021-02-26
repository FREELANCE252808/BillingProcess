using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.Models;

namespace WebAPI.Interfaces
{
    public interface INotificationMessageRepository
    {
        public Task<List<NotificationMessage>> GetAllNotificationsAsync(int companyID);

        public Task<List<NotificationMessage>> GetRecentNotificationAsync(int companyID);

        public void MarkAsRead(int notificationMessageID);

        public void MarkAllAsRead(int userID);
    }
}
