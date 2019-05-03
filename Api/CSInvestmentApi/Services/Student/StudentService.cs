using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Text;
using System.Threading.Tasks;
using CSInvestmentApi.Converters;
using CSInvestmentApi.Entities;
using CSInvestmentApi.Model;
using Microsoft.Extensions.Options;

namespace CSInvestmentApi.Services
{
    public class StudentService : IStudentService
    {
        private readonly EnvironmentConfig _environmentConfig;
        private readonly Context _ticketSystemDbContext;
        private readonly IEventLoggerService _eventLoggerService;

        public StudentService(Context ticketSystemDbContext, IEventLoggerService eventLoggerService, IOptions<EnvironmentConfig> environmentConfig)
        {
            _ticketSystemDbContext = ticketSystemDbContext;
            _eventLoggerService = eventLoggerService;
            _environmentConfig = environmentConfig.Value;
        }

        public IEnumerable<Students> Get()
        {
            return _ticketSystemDbContext.Students.Select(student => StudentsConveter.ConvertStudentToEntityModel(student));
        }


        public (IEnumerable<Students>, string error) UpdateStudentImage(int id, string image, string username)
        {
            if (checkUrl(image))
            {
                var student = _ticketSystemDbContext.Students.Find(id);
                student.Image = image;
                _ticketSystemDbContext.Students.Update(student);
                _ticketSystemDbContext.SaveChanges();

                return (Get(), "Success");
            }
            else
            {
                return (Get(), "Invalid image URL");
            }
        }

        public (IEnumerable<Students>, string error) UpdatePassword(int id, string password)
        {
            if (password.Length>0)
            {
                var user =_ticketSystemDbContext.Students.Find(id);
                user.Password = password;
                _ticketSystemDbContext.Students.Update(user);
                _ticketSystemDbContext.SaveChanges();

                return (Get(), "Success");
            }
            else
            {
                return (Get(), "Invalid password");
            }
        }

        public IEnumerable<Students> UpdatePaymentStatus(int id, string username)
        {
            _eventLoggerService.LogEvent(username, "update-payment-status");
            var student = _ticketSystemDbContext.Students.Find(id);
            student.PaymentStatus = "Paid";
            _ticketSystemDbContext.Students.Update(student);
            _ticketSystemDbContext.SaveChanges();

            return Get();
        }

        public IEnumerable<Students> Delete(int id, string username)
        {
            _eventLoggerService.LogEvent(username, "delete-student");
            var student = _ticketSystemDbContext.Students.Find(id);
            _ticketSystemDbContext.Students.Remove(student);
            _ticketSystemDbContext.SaveChanges();

            return Get();
        }

        public string addStudent(string name, string cell, string email, string location, string isAdmin, string createdBy)
        {
            string results = CheckEntries(name, cell, email, location, isAdmin);
            Students checkIfExists = _ticketSystemDbContext.Students.SingleOrDefault(student => student.Name.Trim().ToLower() == name.Trim().ToLower());
            if (checkIfExists != null)
            {
                results = "another name, username already exists!";
            }
            else if(results.Equals("true"))
            {
                SendConfirmationEmail( name, email);
                _eventLoggerService.LogEvent(createdBy, "new-student");

                _ticketSystemDbContext.Students.Add(new Students()
                {
                    Name = name.Trim(),
                    Cell = cell == null? cell : "",
                    Email = email,
                    Location = location,
                    PaymentStatus =  isAdmin == "Yes" ? "" : "Unpaid",
                    Courses="",
                    Image = "",
                    Password = "csinvestment@2019",
                    IsAdmin = isAdmin == "Yes" ? 1 : 0
                });
                _ticketSystemDbContext.SaveChanges();
            }
            return results;
        }

        public IEnumerable<Students> AddCourses(int id, Course[] courses, string editedBy)
        {
            DeleteStudentCourseRecords(id);
            string _courses = "";
            _eventLoggerService.LogEvent(editedBy, "update-student-courses");
            foreach (Course course in courses)
            {
                if (_courses != "") { _courses += ","; }
                int courseId = _ticketSystemDbContext.Courses.SingleOrDefault(_course => _course.Name ==course.value).Id;
                _courses += _ticketSystemDbContext.Courses.SingleOrDefault(_course => _course.Name == course.label).Name;
                _ticketSystemDbContext.StudentCourses.Add(new StudentCourses()
                {
                    CourseId=courseId,
                    StudentId=id
                });
            }

            var student = _ticketSystemDbContext.Students.Find(id);
            student.Courses = _courses;

            _ticketSystemDbContext.SaveChanges(); 
            return Get();
        }

        public void DeleteStudentCourseRecords(int id)
        {
            IEnumerable<StudentCourses> studentCourses = _ticketSystemDbContext.StudentCourses.Select(studentCourse => CoursesConveter.ConvertStudentCourseToEntityModel(studentCourse));
            foreach(StudentCourses studentCourse in studentCourses)
            {
                if(studentCourse.StudentId == id)
                {
                    var _studentCourse = _ticketSystemDbContext.StudentCourses.Find(studentCourse.Id);
                    _ticketSystemDbContext.StudentCourses.Remove(_studentCourse);
                }
            }
            var student = _ticketSystemDbContext.Students.Find(id);
            student.Courses = "";
            _ticketSystemDbContext.Students.Update(student);
            _ticketSystemDbContext.SaveChanges();
        }

        public bool IsValidEmail(string email)
        {
            try
            {
                var addr = new System.Net.Mail.MailAddress(email);
                return addr.Address == email;
            }
            catch
            {
                return false;
            }
        }

        public bool checkUrl(string URL)
        {
            try
            {
                WebClient wc = new WebClient();
                string HTMLSource = wc.DownloadString(URL);
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }

        public string CheckEntries(string name, string cell, string email, string location, string admin)
        {
            string resultEntry = "true";
            if(name.Equals("null")){ resultEntry = "Your name";}
            if (email.Equals("null") || !IsValidEmail(email)) { resultEntry = "Email, invalid";}
            if (location.Equals("null")) { resultEntry = "Location";}
            if (admin.Equals("null")) { resultEntry = "if user is admin";}
            return resultEntry;
        }

        public void SendConfirmationEmail(string name, string email)
        {
            var client = new SmtpClient(_environmentConfig.Host, _environmentConfig.Port)
            {
                Credentials = new NetworkCredential(_environmentConfig.EmailAccount, _environmentConfig.EmailPassword),
                EnableSsl = true
            };
            var message = new StringBuilder();
            message.Append("Hi " + name + "\n\n");
            message.Append("This is a confirmation email that you have been successfully registered with CS Investment, welcome." + "\n\n");

            message.Append("USERNAME: " + name + "\n");
            message.Append("PASSWORD: " + _environmentConfig.TempEmailPassword + " (change your password ASAP.)" + "\n\n");

            message.Append("Kind Regards" + "\n" + "Client Support");

            client.Send("info@csinvestment.co.za", email, "REGISTRATION CONFIRMATION", message.ToString());
        }

    }
}
