using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CSInvestmentApi.Entities;

namespace CSInvestmentApi.Services
{
    public interface ICoursesService
    {
        IEnumerable<Course>  Get();
        void UpdateSchedule(int id, string date, string venue, string username);
        IEnumerable<StudentCourse> GetStudentCourse();
    }
}
