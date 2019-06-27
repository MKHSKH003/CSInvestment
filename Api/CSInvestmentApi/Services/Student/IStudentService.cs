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
        IEnumerable<Student> Get();
        void UpdateStudentImage(int id, string image, string username);
        void UpdatePassword(int id, string password);
        void UpdatePaymentStatus(int id, string username);
        void Delete(int id, string username);
        void AddStudentCourse(int id, Models.ValuePair[] courses, string editedBy);
    }
}
