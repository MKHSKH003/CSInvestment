using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CSInvestmentApi.Model;
using Microsoft.AspNetCore.Mvc;
using CSInvestmentApi.Services;
using Microsoft.AspNetCore.Cors;

namespace CSInvestmentApi.Controllers
{
    [Route("welcome")]
    public class WelcomeController : Controller
    {
        [HttpGet("welcome-note")]
        public string Welcome()
        {
            return "WELCOME TO THE CS INVESTMENT API :)";
        }
        
    }
}
