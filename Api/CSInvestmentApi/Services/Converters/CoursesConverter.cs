using System.Collections.Generic;
using System.Linq;
using CSInvestmentApi.Entities;
using CSInvestmentApi.Models;

namespace CSInvestmentApi.Converters
{
    public class CoursesConveter
    {

        public static Courses ConvertCourseToEntityModel(Courses course)
        {
            return new Courses()
            {
                Id =course.Id,
                Name=course.Name,
                Venue=course.Venue,
                Time=course.Time,
                Description=course.Description,
                Image=course.Image,
                ChatRoomId = course.ChatRoomId
            };
        }

        public static StudentCourses ConvertStudentCourseToEntityModel(StudentCourses studentCourses)
        {
            return new StudentCourses()
            {
                Id = studentCourses.Id,
                StudentId = studentCourses.StudentId,
                CourseId = studentCourses.CourseId
            };
        }

    }
}