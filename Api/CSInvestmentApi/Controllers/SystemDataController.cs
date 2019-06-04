using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CSInvestmentApi.Entities;
using Microsoft.AspNetCore.Mvc;
using CSInvestmentApi.Services;
using CSInvestmentApi.Model;
using System.Reflection;
using CSInvestmentApi.Models;

namespace CSInvestmentApi.Controllers
{
    [Route("api/system-data")]
    public class SystemDataController : Controller
    {
        private readonly ISystemDataService _systemDataService;
        private readonly IEventLoggerService _eventLoggerService;
        public SystemDataController(ISystemDataService systemDataService, IEventLoggerService eventLoggerService)
        {
            _systemDataService = systemDataService;
            _eventLoggerService = eventLoggerService;
        }

        [HttpGet("get-system-data")]
        public SystemData Get()
        {
            return _systemDataService.Get();
        }

    }
}
