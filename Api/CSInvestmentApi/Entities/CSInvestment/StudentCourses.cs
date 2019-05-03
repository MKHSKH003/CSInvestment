using System;
using System.Collections.Generic;

namespace CSInvestmentApi.Entities
{
    public class StudentCourses
    {
        public int Id { get; set; }
        public int StudentId { get; set; }
        public int CourseId { get; set; }
    }
}
