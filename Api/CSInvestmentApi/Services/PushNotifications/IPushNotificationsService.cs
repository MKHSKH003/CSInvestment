using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CSInvestmentApi.Entities;

namespace CSInvestmentApi.Services
{
    public interface IPushNotificationsService
    {
        void StoreUserDevice(int userId, string deviceToken);
        IEnumerable<DeviceToken> Get();
    }
}
