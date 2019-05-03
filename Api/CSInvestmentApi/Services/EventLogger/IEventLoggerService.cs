using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CSInvestmentApi.Entities;

namespace CSInvestmentApi.Services
{
    public interface IEventLoggerService
    {
        void LogEvent(string username, string key);
    }
}
