using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CSInvestmentApi.Model;
using Microsoft.AspNetCore.Mvc;
using CSInvestmentApi.Services;
using CSInvestmentApi.Entities;
using CSInvestmentApi.Models;

namespace CSInvestmentApi.Controllers
{
    [Route("api/courses")]
    public class CoursesController : Controller
    {
        private readonly ICoursesService _coursesService;
        public CoursesController(ICoursesService coursesService)
        {
            _coursesService = coursesService;
        }

        [HttpGet("get-courses")]
        public IEnumerable<Courses> Get()
        {
            return _coursesService.Get();
        }

        [HttpGet("get-student-courses")]
        public IEnumerable<StudentCourses> GetStudentCourses()
        {
            return _coursesService.GetStudentCourses();
        }

        [HttpGet("update-schedule")]
        public IEnumerable<Courses> UpdateSchedule([FromQuery] int id, [FromQuery] string date, [FromQuery] string venue, [FromQuery] string username)
        {
            return _coursesService.UpdateSchedule(id, date, venue, username);
        }

    }
}
