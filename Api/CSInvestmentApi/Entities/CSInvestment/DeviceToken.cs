using System;
using System.Collections.Generic;

namespace CSInvestmentApi.Entities
{
    public partial class DeviceToken
    {
        public int Id { get; set; }
        public int StudentId { get; set; }
        public string UserDeviceToken { get; set; }
    }
}
