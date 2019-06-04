using CSInvestmentApi.Entities;
using System;
using System.Collections.Generic;

namespace CSInvestmentApi.Models
{
    public partial class SystemData
    {
        public IEnumerable<Students> students { get; set; }
        public IEnumerable<Groups> groups { get; set; }
        public IEnumerable<Courses> courses { get; set; }
        public IEnumerable<StudentCourses> studentCourses { get; set; }
        public IEnumerable<MarketUpdates> marketUpdates { get; set; }
        public IEnumerable<ChatRoomMessages> messages { get; set; }
        public IEnumerable<PushNotifications> pushNotifications { get; set; }
    }
}
