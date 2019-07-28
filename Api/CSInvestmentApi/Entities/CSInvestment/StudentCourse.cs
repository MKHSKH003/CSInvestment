using System;
using System.Collections.Generic;

namespace CSInvestmentApi.Entities
{
    public class StudentCourse
    {
        public int StudentId { get; set; }
        public int CourseId { get; set; }
        public int Id { get; set; }

        public Course Course { get; set; }
    }
}
