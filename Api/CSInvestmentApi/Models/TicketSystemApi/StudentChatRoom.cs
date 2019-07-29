using System.Collections.Generic;

namespace CSInvestmentApi.Models
{
    public partial class StudentChatRoom
    {
        public int Id { get; set; }
        public int StudentId { get; set; }
        public int ChatRoomId { get; set; }
    }
}
