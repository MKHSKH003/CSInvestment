using System.Collections.Generic;
using CSInvestmentApi.Entities;
using Microsoft.AspNetCore.Mvc;
using CSInvestmentApi.Services;
using CSInvestmentApi.Model;

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
        public IEnumerable<Students> Get()
        {
            return _studentService.Get();
        }

        [HttpGet("add-student")]
        public string addStudent([FromQuery] string name, [FromQuery] string cell, [FromQuery] string email, [FromQuery] string location, [FromQuery] string isAdmin, [FromQuery] string createdBy)
        {
            return _studentService.addStudent(name , cell,email,location, isAdmin, createdBy);
        }

        [HttpGet("update-payment-status")]
        public IEnumerable<Students> UpdateStudentPaymentStatus([FromQuery] int id, [FromQuery] string username)
        {
            return _studentService.UpdatePaymentStatus(id, username);
        }

        [HttpGet("update-password")]
        public (IEnumerable<Students>, string error) UpdatePassword([FromQuery] int id, [FromQuery] string password)
        {
            return _studentService.UpdatePassword(id, password);
        }

        [HttpPost("update-student-image")]
        public (IEnumerable<Students>, string error) UpdateStudentImage([FromBody] string image, [FromQuery] int id, [FromQuery] string username)
        {
            return _studentService.UpdateStudentImage(id, image, username);
        }

        [HttpGet("delete-student")]
        public IEnumerable<Students> DeleteStudent([FromQuery] int id, [FromQuery] string username)
        {
            return _studentService.Delete(id, username);
        }

        [HttpPost("add-courses")]
        public IEnumerable<Students> AddCousers([FromQuery] int id, [FromBody] Course[] courses, [FromQuery] string username)
        {
            return _studentService.AddCourses(id, courses, username);
        }

        
    }
}
