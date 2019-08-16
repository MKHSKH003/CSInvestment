using Microsoft.AspNetCore.Mvc;

namespace CSInvestmentApi.Controllers
{
    [Route("welcome")]
    public class WelcomeController : Controller
    {
        [HttpGet("welcome-note")]
        public string Welcome()
        {
            return "WELCOME TO THE CS INVESTMENT API :). Version: 1.0.8";
        }
    }
}
