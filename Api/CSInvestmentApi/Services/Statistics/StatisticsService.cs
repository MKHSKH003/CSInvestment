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

        public void LogEvent(string username, string key)
        {
            //var record =_ticketSystemDbContext.Online.SingleOrDefault(user => (user.Username).ToLower() == (username).ToLower());

            //if (key == "logged-in" && record == null)
            //{
            //    _ticketSystemDbContext.Online.Add(new Online()
            //    {
            //        Username = username,
            //    });
            //    _ticketSystemDbContext.SaveChanges();
            //}

            //else if (key == "logged-off")
            //{
            //    var student = _ticketSystemDbContext.Online.Find(record.Id);
            //    _ticketSystemDbContext.Online.Remove(student);
            //    _ticketSystemDbContext.SaveChanges();
            //}

        }
       
    }
}
