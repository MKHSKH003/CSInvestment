using System.Collections.Generic;
using CSInvestmentApi.Entities;
using Microsoft.AspNetCore.Mvc;
using CSInvestmentApi.Services;

namespace CSInvestmentApi.Controllers
{
    [Route("api/students")]
    public class StudentController : Controller
    {
        private readonly IStudentService _studentService;
        private readonly IEventLoggerService _eventLoggerService;
        public StudentController(IStudentService studentService, IEventLoggerService eventLoggerService)
        {
            _studentService = studentService;
            _eventLoggerService = eventLoggerService;
        }

        [HttpGet("get-students")]
        public IEnumerable<Student> Get()
        {
            return _studentService.Get();
        }

        [HttpGet("add-student")]
        public ActionResult addStudent([FromQuery] string name, [FromQuery] string cell, [FromQuery] string email, [FromQuery] string location, [FromQuery] string isAdmin, [FromQuery] string createdBy)
        {
            return Json(new { Message =_studentService.addStudent(name, cell, email, location, isAdmin, createdBy) });
        }

        [HttpGet("update-payment-status")]
        public ActionResult UpdateStudentPaymentStatus([FromQuery] int id, [FromQuery] string username)
        {
            _studentService.UpdatePaymentStatus(id, username);
            return Json(new { Message = "Success" });
        }

        [HttpGet("update-password")]
        public ActionResult UpdatePassword([FromQuery] int id, [FromQuery] string password)
        {
            _studentService.UpdatePassword(id, password);
            return Json(new { Message = "Success" });
        }

        [HttpPost("update-student-image")]
        public ActionResult UpdateStudentImage([FromBody] string image, [FromQuery] int id, [FromQuery] string username)
        {
            _studentService.UpdateStudentImage(id, image, username);
            return Json(new { Message = "Success" });
        }

        [HttpGet("delete-student")]
        public ActionResult DeleteStudent([FromQuery] int id, [FromQuery] string username)
        {
            _studentService.Delete(id, username);
            return Json(new { Message = "Success" });
        }

        [HttpPost("add-courses")]
        public ActionResult AddCousers([FromQuery] int id, [FromBody] Models.ValuePair[] courses, [FromQuery] string username)
        {
            _studentService.AddStudentCourse(id, courses, username);
            return Json(new { Message = "Success" });
        }

        
    }
}
