using System;
using System.Collections.Generic;

namespace CSInvestmentApi.Entities
{
    public class ChatRoomMessages
    {
        public int Id { get; set; }
        public int ChatRoomId { get; set; }
        public string Message { get; set; }
        public string Username { get; set; }
        public string Date { get; set; }
    }
}
