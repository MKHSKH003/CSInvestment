using System;
using System.Collections.Generic;

namespace CSInvestmentApi.targeton_CSInvestment_Dev
{
    public partial class PushNotifications
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public string DeviceToken { get; set; }
    }
}
