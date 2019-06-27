using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CSInvestmentApi.Model;
using Microsoft.AspNetCore.Mvc;
using CSInvestmentApi.Services;
using CSInvestmentApi.Entities;
using CSInvestmentApi.Models;
using Microsoft.AspNetCore.Http;
using System.Runtime.Serialization.Json;
using System.Reflection.Metadata;
using System.IO;

namespace CSInvestmentApi.Controllers
{
    [Route("api/market-updates")]
    public class MarketUpdatesController : Controller
    {
        private readonly IMarketUpdatesService _marketUpdatesService;
        public MarketUpdatesController(IMarketUpdatesService marketUpdatesService)
        {
            _marketUpdatesService = marketUpdatesService;
        }

        [HttpGet("get-market-updates")]
        public IEnumerable<Post> Get()
        {
            return _marketUpdatesService.Get();
        }

        [HttpPost("post-market-update")]
        public Post Post([FromBody] string url, [FromQuery] string caption)
        {
            return _marketUpdatesService.Post(url, caption);
        }

        [HttpGet("delete-market-update")]
        public void Delete([FromQuery] int id)
        {
            _marketUpdatesService.Delete(id);
        }

    }
}
