 using System;
using System.Collections.Generic;
using System.Linq;
using CSInvestmentApi.Entities;
using System.Threading.Tasks;

namespace CSInvestmentApi.Services
{
    public class LoginService : ILoginService
    {
        private readonly Entities.Context _ticketSystemDbContext;
        private readonly IStatisticsService _statisticsService;

        public LoginService(Entities.Context ticketSystemDbContext, IStatisticsService statisticsService)
        {
            _ticketSystemDbContext = ticketSystemDbContext;
            _statisticsService = statisticsService;
        }

        public Students Authentication(string username, string password)
        {
            var entry = _ticketSystemDbContext.Students.SingleOrDefault(user => user.Name == username && user.Password == password);

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
