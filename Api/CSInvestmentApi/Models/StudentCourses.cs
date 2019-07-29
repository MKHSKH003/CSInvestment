using System.Collections.Generic;

namespace CSInvestmentApi.Models
{
    public partial class StudentCourses
    {
        public IEnumerable<Entities.StudentCourse> studentCourses { get; set; }
        public IEnumerable<Entities.Course> courses { get; set; }
        public IEnumerable<Entities.StudentChatRoom> studentChatRooms { get; set; }
    }
}
