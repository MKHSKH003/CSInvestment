using System.Collections.Generic;
using System.Linq;
using CSInvestmentApi.Entities;
using CSInvestmentApi.Model;

namespace CSInvestmentApi.Converters
{
    public class PushNotificationsConveter
    {
        public static PushNotifications ConvertPushNotificationsToEntityModel(PushNotifications pushNotifications)
        {
            return new PushNotifications()
            {
                Id = pushNotifications.Id,
                UserId= pushNotifications.UserId,
                DeviceToken= pushNotifications.DeviceToken
            };
        }

    }
}