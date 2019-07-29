using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using CSInvestmentApi.Services;
using CSInvestmentApi.Entities;

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
        public IEnumerable<Entities.Course> Get()
        {
            return _coursesService.Get();
        }

        [HttpGet("get-student-courses")]
        public IEnumerable<StudentCourse> GetStudentCourse()
        {
            return _coursesService.GetStudentCourse();
        }

        [HttpGet("update-schedule")]
        public ActionResult UpdateSchedule([FromQuery] int id, [FromQuery] string date, [FromQuery] string venue, [FromQuery] string username)
        {
            _coursesService.UpdateSchedule(id, date, venue, username);
            return Json(new { Message = "Success" });
        }

    }
}
