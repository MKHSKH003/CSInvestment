using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CSInvestmentApi.Entities;
using CSInvestmentApi.Models;

namespace CSInvestmentApi.Services
{
    public interface ICoursesService
    {
        IEnumerable<Courses>  Get();
        IEnumerable<StudentCourses> GetStudentCourses();
        IEnumerable<Courses> UpdateSchedule(int id, string date, string venue, string username);
    }
}
