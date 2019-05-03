using System.Collections.Generic;
using System.Linq;
using CSInvestmentApi.Entities;
using CSInvestmentApi.Model;

namespace CSInvestmentApi.Converters
{
    public class MarketUpdatesConveter
    {

        public static MarketUpdates ConvertMarketUpdateToEntityModel(MarketUpdates marketUpdate)
        {
            return new MarketUpdates()
            {
                Id = marketUpdate.Id,
                Avatar= marketUpdate.Avatar,
                Caption= marketUpdate.Caption,
                Datetime= marketUpdate.Datetime
            };
        }

    }
}