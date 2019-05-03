 using System;
using System.Collections.Generic;
using System.Linq;
using CSInvestmentApi.Entities;
using CSInvestmentApi.Converters;
using CSInvestmentApi.Models;
using System.Net;

namespace CSInvestmentApi.Services
{
    public class CoursesService : ICoursesService
    {
        private readonly Context _ticketSystemDbContext;
        private readonly IEventLoggerService _eventLoggerService;

        public CoursesService(Context ticketSystemDbContext, IEventLoggerService eventLoggerService)
        {
            _ticketSystemDbContext = ticketSystemDbContext;
            _eventLoggerService = eventLoggerService;
        }

        public IEnumerable<Courses>  Get()
        {
            IEnumerable<Courses> courses=_ticketSystemDbContext.Courses.Select(course => CoursesConveter.ConvertCourseToEntityModel(course));

            return courses;
        }

        public IEnumerable<StudentCourses> GetStudentCourses()
        {
            IEnumerable<StudentCourses> studentCourses = _ticketSystemDbContext.StudentCourses.Select(studentCourse => CoursesConveter.ConvertStudentCourseToEntityModel(studentCourse));

            return studentCourses;
        }

        public IEnumerable<Courses> UpdateSchedule(int id, string date, string venue, string username)
          {
            var course = _ticketSystemDbContext.Courses.Find(id);
            if(date.Equals("none")) { course.Venue = venue;}
            else if (venue.Equals("none")) { course.Time = date; }
            else { course.Time = date; course.Venue = venue; };
            _ticketSystemDbContext.Courses.Update(course);
            _ticketSystemDbContext.SaveChanges();
            return Get();
        }

    }
}
