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
            var entry = _ticketSystemDbContext.Student.SingleOrDefault(user => user.Name == username && user.Password == password);

            if (entry !=null)
            {
                _statisticsService.LogEvent(username, "logged-in");
            }
            return entry;
        }

        public void logout(string username)
        {
            _statisticsService.LogEvent(username, "logged-off");
        }

    }
}
