using System;
using System.Collections.Generic;

namespace CSInvestmentApi.Entities
{
    public partial class PushNotifications
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public string Username { get; set; }
        public string DeviceToken { get; set; }
    }
}
