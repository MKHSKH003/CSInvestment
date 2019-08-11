using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Text;
using Microsoft.EntityFrameworkCore;
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

        public IEnumerable<Student> Get()
        {
            return _ticketSystemDbContext.Student
                .Include(s => s.StudentCourses)
                    .ThenInclude(sc => sc.Course);
        }


        public void UpdateStudentImage(int id, string image, string username)
        {
            var student = _ticketSystemDbContext.Student.Find(id);
            student.Image = image;
            _ticketSystemDbContext.Student.Update(student);
            _ticketSystemDbContext.SaveChanges();
        }

        public void UpdatePassword(int id, string password)
        {
            var user =_ticketSystemDbContext.Student.Find(id);
            user.Password = password;
            _ticketSystemDbContext.Student.Update(user);
            _ticketSystemDbContext.SaveChanges();
        }

        public void UpdatePaymentStatus(int id, string username)
        {
            var student = _ticketSystemDbContext.Student.Find(id);
            student.PaymentStatus = "Paid";
            _ticketSystemDbContext.Student.Update(student);
            _ticketSystemDbContext.SaveChanges();
        }

        public void Delete(int id, string username)
        {
            RemoveUserAppResources(id);

            _ticketSystemDbContext.SaveChanges();
        }

        public void RemoveUserAppResources(int id)
        {
            _ticketSystemDbContext.Student.Remove(_ticketSystemDbContext.Student.Find(id));
            _ticketSystemDbContext.StudentCourse.RemoveRange(_ticketSystemDbContext.StudentCourse.Where(sc => sc.StudentId == id));
            _ticketSystemDbContext.StudentChatRoom.RemoveRange(_ticketSystemDbContext.StudentChatRoom.Where(scr => scr.StudentId == id));

            _ticketSystemDbContext.SaveChanges();
        }

        public string addStudent(string name, string cell, string email, string location, string isAdmin, string createdBy)
        {
            string results = CheckEntries(name, cell, email, location, isAdmin);
            Student checkIfExists = _ticketSystemDbContext.Student.SingleOrDefault(student => student.Name.Trim().ToLower() == name.Trim().ToLower());
            if (checkIfExists != null)
            {
                results = "another name, username already exists!";
            }
            else if(results.Equals("true"))
            {
                SendConfirmationEmail( name, email);

                _ticketSystemDbContext.Student.Add(new Student()
                {
                    Name = name.Trim(),
                    Cell = cell == null? cell : "",
                    Email = email,
                    Location = location,
                    PaymentStatus =  isAdmin == "Yes" ? "" : "Unpaid",
                    Image = "",
                    Password = "csinvestment@2019",
                    IsAdmin = isAdmin == "Yes" ? 1 : 0
                });
                _ticketSystemDbContext.SaveChanges();
            }
            return results;
        }

        public void AddStudentCourse(int id, Models.ValuePair[] courses, string editedBy)
        {
            List<StudentCourse> studentCourse = _ticketSystemDbContext.StudentCourse.ToList();
            List<StudentChatRoom> studentChatRoom = _ticketSystemDbContext.StudentChatRoom.ToList();
            foreach (Models.ValuePair pair in courses)
            {
                var checkStudentCourse = studentCourse.SingleOrDefault(sc => sc.StudentId == id && sc.CourseId == pair.value);
                if  (checkStudentCourse == null)
                {
                    _ticketSystemDbContext.StudentCourse.Add(new StudentCourse()
                    {
                        CourseId = pair.value,
                        StudentId = id
                    });
                }

                var checkStudentChatRoom = studentChatRoom.SingleOrDefault(scr => scr.StudentId == id && scr.ChatRoomId == pair.value + 1);
                if (checkStudentChatRoom == null)
                {
                    _ticketSystemDbContext.StudentChatRoom.Add(new StudentChatRoom()
                    {
                        ChatRoomId = pair.value + 1,
                        StudentId = id
                    });
                }
            }
            _ticketSystemDbContext.SaveChanges();
        }

        public void RemoveStudentCourse(int StudentCourseId)
        {
            var _studentCourse = _ticketSystemDbContext.StudentCourse.Find(StudentCourseId);
            _ticketSystemDbContext.StudentCourse.Remove(_studentCourse);

            _ticketSystemDbContext.SaveChanges();
        }

        public void RemoveStudentChatRoom(int StudentChatRoomId)
        {
            var _studentChatRoom = _ticketSystemDbContext.StudentChatRoom.Find(StudentChatRoomId);
            _ticketSystemDbContext.StudentChatRoom.Remove(_studentChatRoom);

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
