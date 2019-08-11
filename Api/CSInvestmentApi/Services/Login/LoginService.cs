using System.Linq;
using CSInvestmentApi.Entities;

namespace CSInvestmentApi.Services
{
    public class LoginService : ILoginService
    {
        private readonly Context _ticketSystemDbContext;
        private readonly IStatisticsService _statisticsService;

        public LoginService(Context ticketSystemDbContext, IStatisticsService statisticsService)
        {
            _ticketSystemDbContext = ticketSystemDbContext;
            _statisticsService = statisticsService;
        }

        public Student Authentication(string username, string password)
        {
            return _ticketSystemDbContext.Student.SingleOrDefault(user => user.Name == username && user.Password == password);
        }

        public void logout(string username)
        {
        }

    }
}
