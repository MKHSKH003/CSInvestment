 using System;
using System.Collections.Generic;
using System.Linq;
using CSInvestmentApi.Entities;
using CSInvestmentApi.Converters;
using System.Net;
using System.IO;

namespace CSInvestmentApi.Services
{
    public class MarketUpdatesService : IMarketUpdatesService
    {
        private readonly Context _ticketSystemDbContext;
        public MarketUpdatesService(Context ticketSystemDbContext)
        {
            _ticketSystemDbContext = ticketSystemDbContext;
        }

        public IEnumerable<Post> Get()
        {
            return _ticketSystemDbContext.Post;
        }

        public Post Post(string url, string caption)
        {
            Post post = new Post()
            {
                Avatar = url,
                Caption = caption,
                Datetime = DateTime.Now.ToString("dd-MMM-yy") + " " + DateTime.Now.ToShortTimeString()
            };

            _ticketSystemDbContext.Post.Add(post);
            _ticketSystemDbContext.SaveChanges();

            return post;
        }

        public void Delete(int id)
        {
            _ticketSystemDbContext.Post.Remove(_ticketSystemDbContext.Post.Find(id));
            _ticketSystemDbContext.SaveChanges();
        }
    }
}
