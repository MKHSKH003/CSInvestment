using System;
using System.Collections.Generic;

namespace CSInvestmentApi.Entities
{
    public class ChatRoom
    {
        public ChatRoom()
        {
            Messages = new HashSet<Message>();
            StudentChatRooms = new HashSet<StudentChatRoom>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string Avatar { get; set; }
        public int CourseId { get; set; }

        public ICollection<StudentChatRoom> StudentChatRooms { get; set; }
        public ICollection<Message> Messages { get; set; }
    }
}
