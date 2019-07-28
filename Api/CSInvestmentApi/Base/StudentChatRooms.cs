using System;
using System.Collections.Generic;

namespace CSInvestmentApi.Base
{
    public partial class StudentChatRooms
    {
        public int Id { get; set; }
        public int StudentId { get; set; }
        public int ChatRoomId { get; set; }
    }
}
