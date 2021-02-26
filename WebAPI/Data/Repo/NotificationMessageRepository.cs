using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.Interfaces;
using WebAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace WebAPI.Data.Repo
{
    public class NotificationMessageRepository : INotificationMessageRepository
    {
        private readonly DataContext dc;

        public NotificationMessageRepository(DataContext dc)
        {
            this.dc = dc;
        }

        public async Task<List<NotificationMessage>> GetAllNotificationsAsync(int userID)
        {
            return await dc.NotificationMessage.Where(n => n.ToUserID == userID && n.Active == 'Y').ToListAsync();
        }

        public async Task<List<NotificationMessage>> GetRecentNotificationAsync(int userID)
        {
            return await dc.NotificationMessage.Where(n => n.ToUserID == userID && n.Active == 'Y')
                .OrderByDescending(n => n.CreatedOn).Take(20).ToListAsync();
        }

        public void MarkAsRead(int notificationMessageID)
        {
            NotificationMessage objNM = dc.NotificationMessage.AsNoTracking().Where(n => n.NotificationMessageID == notificationMessageID).FirstOrDefault();
            objNM.Active = 'N';
            objNM.VisitedOn = DateTime.Now;
            dc.NotificationMessage.Update(objNM);
        }

        public void MarkAllAsRead(int userID)
        {
            List<NotificationMessage> lstNotifications = dc.NotificationMessage.Where(n => n.ToUserID == userID && n.Active == 'Y').ToList();
            foreach (NotificationMessage nm in lstNotifications)
            {
                nm.Active = 'N';
                nm.VisitedOn = DateTime.Now;
            }

            dc.NotificationMessage.UpdateRange(lstNotifications);
        }
    }
}
