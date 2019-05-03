using Microsoft.AspNetCore.Mvc;
using CSInvestmentApi.Services;
using CSInvestmentApi.Entities;
using System.Collections.Generic;

namespace CSInvestmentApi.Controllers
{
    [Route("api/push-notifications")]
    public class PushNotificationsController : Controller
    {
        private readonly IPushNotificationsService _pushNotificationsService;
        public PushNotificationsController(IPushNotificationsService pushNotificationsService)
        {
            _pushNotificationsService = pushNotificationsService;
        }

        [HttpGet("store-user-device")]
        public IEnumerable<PushNotifications> StoreUserDevice(int userId, string username, string deviceToken)
        {
            return _pushNotificationsService.StoreUserDevice(userId, username, deviceToken);
        }
    }
}
