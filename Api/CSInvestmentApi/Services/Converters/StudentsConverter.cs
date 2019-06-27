using System.Collections.Generic;
using System.Linq;
using CSInvestmentApi.Entities;
using CSInvestmentApi.Model;

namespace CSInvestmentApi.Converters
{
    public class StudentsConveter
    {

        public static Models.Student ConvertToModel(Student student)
        {
            return new Models.Student()
            {
                Id =student.Id,
                Name= student.Name,
                Cell= student.Cell,
                Email= student.Email,
                Location= student.Location,
                PaymentStatus= student.PaymentStatus,
                Image= student.Image,
                IsAdmin = student.IsAdmin
            };
        }

    }
}