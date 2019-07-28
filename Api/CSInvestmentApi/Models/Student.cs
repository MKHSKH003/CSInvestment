using System;
using System.Collections.Generic;

namespace CSInvestmentApi.Models
{
    public class Student
    {
        public Student()
        {
            StudentChatRooms = new HashSet<StudentChatRoom>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string Cell { get; set; }
        public string Email { get; set; }
        public string Location { get; set; }
        public string PaymentStatus { get; set; }
        public string Image { get; set; }
        public int IsAdmin { get; set; }
        public string Password { get; set; }

        public IEnumerable<StudentChatRoom> StudentChatRooms { get; set; }
    }
}
