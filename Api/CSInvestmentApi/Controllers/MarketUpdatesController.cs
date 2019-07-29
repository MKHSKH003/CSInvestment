using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using CSInvestmentApi.Services;
using CSInvestmentApi.Entities;

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
