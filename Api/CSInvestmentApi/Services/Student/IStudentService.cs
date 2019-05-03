using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CSInvestmentApi.Entities;
using CSInvestmentApi.Model;

namespace CSInvestmentApi.Services
{
    public interface IStudentService
    {
        string addStudent(string name, string cell, string email, string location, string isAdmin, string createdBy);
        IEnumerable<Students> Get();
        (IEnumerable<Students>, string error) UpdateStudentImage(int id, string image, string username);
        (IEnumerable<Students>, string error) UpdatePassword(int id, string password);
        IEnumerable<Students> UpdatePaymentStatus(int id, string username);
        IEnumerable<Students> Delete(int id, string username);
        IEnumerable<Students> AddCourses(int id, Course[] courses, string editedBy);
    }
}
