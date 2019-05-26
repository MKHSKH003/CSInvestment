 using System;
using System.Collections.Generic;
using System.Linq;
using CSInvestmentApi.Entities;
using CSInvestmentApi.Converters;
using System.Net;
using System.IO;

namespace CSInvestmentApi.Services
{
    public class PushNotificationsService : IPushNotificationsService
    {
        private readonly Context _ticketSystemDbContext;
        public PushNotificationsService(Context ticketSystemDbContext)
        {
            _ticketSystemDbContext = ticketSystemDbContext;
        }

        public IEnumerable<PushNotifications> Get()
        {
            return _ticketSystemDbContext.PushNotifications.Select(pushNotifications => PushNotificationsConveter.ConvertPushNotificationsToEntityModel(pushNotifications));
        }

        public IEnumerable<PushNotifications> StoreUserDevice(int userId, string username, string deviceToken)
        {
            PushNotifications checkIfExists = _ticketSystemDbContext.PushNotifications.SingleOrDefault(record => record.Username.Trim().ToLower() == username.Trim().ToLower());
            if (checkIfExists == null)
            {
                _ticketSystemDbContext.PushNotifications.Add(new PushNotifications()
                {
                    UserId = userId,
                    Username = username,
                    DeviceToken = deviceToken
                });
            }
            else if (checkIfExists.DeviceToken != deviceToken)
            {
                checkIfExists.DeviceToken = deviceToken;
                _ticketSystemDbContext.PushNotifications.Update(checkIfExists);
            }
            _ticketSystemDbContext.SaveChanges();
            return Get();
        }
    }
}
