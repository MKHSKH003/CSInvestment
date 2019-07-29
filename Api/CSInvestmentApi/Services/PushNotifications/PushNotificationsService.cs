using System.Collections.Generic;
using System.Linq;
using CSInvestmentApi.Entities;

namespace CSInvestmentApi.Services
{
    public class PushNotificationsService : IPushNotificationsService
    {
        private readonly Context _ticketSystemDbContext;
        public PushNotificationsService(Context ticketSystemDbContext)
        {
            _ticketSystemDbContext = ticketSystemDbContext;
        }

        public IEnumerable<DeviceToken> Get()
        {
            return _ticketSystemDbContext.DeviceToken;
        }

        public void StoreUserDevice(int userId, string deviceToken)
        {
            DeviceToken userDeviceToken = _ticketSystemDbContext.DeviceToken.SingleOrDefault(record => record.StudentId == userId);
            if (userDeviceToken == null && deviceToken!= "undefined" )
            {
                userDeviceToken = new DeviceToken()
                {
                    StudentId = userId,
                    UserDeviceToken = deviceToken
                };
                _ticketSystemDbContext.DeviceToken.Add(userDeviceToken);

            }
            else if (userDeviceToken != null)
            {
                if (userDeviceToken.UserDeviceToken != deviceToken)
                {
                    userDeviceToken.UserDeviceToken = deviceToken;
                    _ticketSystemDbContext.DeviceToken.Update(userDeviceToken);
                }
            }
            _ticketSystemDbContext.SaveChanges();
        }
    }
}
