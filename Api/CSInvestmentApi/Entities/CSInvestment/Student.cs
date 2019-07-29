using System.Collections.Generic;

namespace CSInvestmentApi.Entities
{
    public class Student
    {
        public Student()
        {
            Posts = new HashSet<Post>();
            Messages = new HashSet<Message>();
            StudentCourses = new HashSet<StudentCourse>();
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

        public DeviceToken DeviceToken { get; set; }

        public ICollection<StudentCourse> StudentCourses { get; set; }
        public ICollection<StudentChatRoom> StudentChatRooms { get; set; }
        public ICollection<Post> Posts { get; set; }
        public ICollection<Message> Messages { get; set; }
    }
}
