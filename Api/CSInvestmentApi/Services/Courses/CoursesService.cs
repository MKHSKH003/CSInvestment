using System.Collections.Generic;
using CSInvestmentApi.Entities;
using Microsoft.EntityFrameworkCore;
using System.Linq;

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

        public IEnumerable<Course> Get()
        {
            return _ticketSystemDbContext.Course
                .Include(c => c.ChatRoom)
                    .ThenInclude(cr => cr.Messages)
                .Include(c => c.StudentCourses);
        }

        public IEnumerable<StudentCourse> GetStudentCourse()
        {
            return _ticketSystemDbContext.StudentCourse;
        }

        public void UpdateSchedule(int id, string date, string venue, string username)
        {
            var course = _ticketSystemDbContext.Course.Find(id);
            if(date.Equals("none")) { course.Venue = venue;}
            else if (venue.Equals("none")) { course.Time = date; }
            else { course.Time = date; course.Venue = venue; };
            _ticketSystemDbContext.Course.Update(course);
            _ticketSystemDbContext.SaveChanges();
        }

    }
}
