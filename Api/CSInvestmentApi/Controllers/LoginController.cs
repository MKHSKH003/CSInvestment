using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CSInvestmentApi.Model;
using Microsoft.AspNetCore.Mvc;
using CSInvestmentApi.Services;
using Microsoft.AspNetCore.Cors;
using CSInvestmentApi.Entities;

namespace CSInvestmentApi.Controllers
{
    [Route("api/authentication")]
    public class LoginController : Controller
    {
        private readonly ILoginService _loginService;
        public LoginController(ILoginService loginService)
        {
            _loginService = loginService;
        }

        [HttpGet("authenticate-user")]
        public Student Authentication([FromQuery] string username, [FromQuery] string password)
        {
            return _loginService.Authentication(username , password);
        }

        [HttpGet("logout")]
        public void Logout([FromQuery] string username)
        {
           _loginService.logout(username);
        }
    }
}
