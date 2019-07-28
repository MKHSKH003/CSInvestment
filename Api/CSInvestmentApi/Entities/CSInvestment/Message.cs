using System;
using System.Collections.Generic;

namespace CSInvestmentApi.Entities
{
    public class Message
    {
        public int Id { get; set; }
        public int ChatRoomId { get; set; }
        public string UserMessage { get; set; }
        public string Date { get; set; }
        public int StudentId { get; set; }

        public Student Student { get; set; }
    }
}
