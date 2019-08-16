 using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using CSInvestmentApi.Entities;

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
            return _ticketSystemDbContext.Post
                .Include(p => p.Student)
                .Include(p => p.PostLikes)
                .OrderBy(post => post.Datetime);
        }

        public Post Post(string url, string caption, int userId)
        {
            Post post = new Post()
            {
                Avatar = url,
                Caption = caption,
                Datetime = DateTime.Now.ToString("dd-MMM-yy") + " " + DateTime.Now.ToShortTimeString(),
                StudentId = userId
            };

            _ticketSystemDbContext.Post.Add(post);
            _ticketSystemDbContext.SaveChanges();

            return post;
        }

        public void addPostLike(int id, int userId)
        {
            PostLike postLike= new PostLike()
            {
                PostId = id,
                StudentId = userId
            };

            _ticketSystemDbContext.PostLikes.Add(postLike);
            _ticketSystemDbContext.SaveChanges();
        }

        public void Delete(int id)
        {
            _ticketSystemDbContext.Post.Remove(_ticketSystemDbContext.Post.Find(id));
            _ticketSystemDbContext.SaveChanges();
        }
    }
}
