using CSInvestmentApi.Entities;
using System;
using System.Collections.Generic;

namespace CSInvestmentApi.Models
{
    public partial class SystemData
    {
        public IEnumerable<Student> students { get; set; }
        //public IEnumerable<Message> messages { get; set; }
        //public IEnumerable<Groups> groups { get; set; }
        //public IEnumerable<Course> courses { get; set; }
        //public IEnumerable<Post> marketUpdates { get; set; }
        //public IEnumerable<DeviceToken> pushNotifications { get; set; }
    }
}
