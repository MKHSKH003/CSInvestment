using System;
using System.Collections.Generic;

namespace CSInvestmentApi.Entities
{
    public partial class StudentChatRoom
    {
        public int Id { get; set; }
        public int StudentId { get; set; }
        public int ChatRoomId { get; set; }

        public Student Student { get; set; }
        public ChatRoom ChatRoom { get; set; }
    }
}
