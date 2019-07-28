using System;
using System.Collections.Generic;

namespace CSInvestmentApi.Entities
{
    public class Course
    {
        public Course()
        {
            StudentCourses = new HashSet<StudentCourse>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string Image { get; set; }
        public string Venue { get; set; }
        public string Time { get; set; }
        public string Description { get; set; }

        public ChatRoom ChatRoom { get; set; }
        public ICollection<StudentCourse> StudentCourses { get; set; }
    }
}
