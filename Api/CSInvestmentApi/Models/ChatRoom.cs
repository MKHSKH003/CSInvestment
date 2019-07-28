using System;
using System.Collections.Generic;

namespace CSInvestmentApi.Models
{
    public class ChatRoom
    {
        public ChatRoom()
        {
            StudentChatRooms = new HashSet<Entities.StudentChatRoom>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string Avatar { get; set; }
        public int CourseId { get; set; }

        public IEnumerable<Entities.StudentChatRoom> StudentChatRooms { get; set; }
    }
}
