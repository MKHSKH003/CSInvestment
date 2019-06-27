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

        [HttpGet("device-tokens")]
        public IEnumerable<DeviceToken> Get()
        {
            return _pushNotificationsService.Get();
        }

        [HttpGet("store-user-device")]
        public ActionResult StoreUserDevice(int userId, string deviceToken)
        {
            _pushNotificationsService.StoreUserDevice(userId, deviceToken);
            return Json(new { Message = "Success" });
        }
    }
}
