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

        public IEnumerable<MarketUpdates> Get()
        {
            return _ticketSystemDbContext.MarketUpdates.Select(marketUpdate => MarketUpdatesConveter.ConvertMarketUpdateToEntityModel(marketUpdate));
        }

        public IEnumerable<MarketUpdates> Post(string url, string caption)
        {
            _ticketSystemDbContext.MarketUpdates.Add(new MarketUpdates()
            {
                Avatar = url,
                Caption = caption,
                Datetime = DateTime.Now.ToString("dd-MMM-yy") + " " + DateTime.Now.ToShortTimeString()
            });
            _ticketSystemDbContext.SaveChanges();

            return Get();
        }

        public IEnumerable<MarketUpdates> Delete(int id)
        {
            var marketUpdate = _ticketSystemDbContext.MarketUpdates.Find(id);
            _ticketSystemDbContext.MarketUpdates.Remove(marketUpdate);
            _ticketSystemDbContext.SaveChanges();

            return Get();
        }
    }
}
