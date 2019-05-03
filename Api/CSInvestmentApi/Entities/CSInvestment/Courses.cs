using System;
using System.Collections.Generic;

namespace CSInvestmentApi.Entities
{
    public class Courses
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Image { get; set; }
        public string Venue { get; set; }
        public string Time { get; set; }
        public string Description { get; set; }
        public int ChatRoomId { get; set; }
    }
}
