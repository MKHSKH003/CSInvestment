 using System;
using System.Collections.Generic;
using System.Linq;
using CSInvestmentApi.Entities;
using CSInvestmentApi.Converters;

namespace CSInvestmentApi.Services
{
    public class StatisticsService : IStatisticsService
    {
        private readonly Context _ticketSystemDbContext;
        public StatisticsService(Context ticketSystemDbContext)
        {
            _ticketSystemDbContext = ticketSystemDbContext;
        }
    }
}
