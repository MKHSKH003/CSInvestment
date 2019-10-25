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
        public Post Post([FromBody] string url, [FromQuery] string caption, [FromQuery] int userId)
        {
            return _marketUpdatesService.Post(url, caption, userId);
        }

        [HttpGet("delete-market-update")]
        public void Delete([FromQuery] int id)
        {
            _marketUpdatesService.Delete(id);
        }

        [HttpGet("add-post-like")]
        public void addPostLike([FromQuery] int id, [FromQuery] int userId)
        {
            _marketUpdatesService.addPostLike(id, userId);
        }
        [HttpPost("post-comment")]
        public void addComment([FromBody] Comment comment)
        {
            _marketUpdatesService.addComment(comment);
        }
    }
}
