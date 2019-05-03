using System.Collections.Generic;
using System.Linq;
using CSInvestmentApi.Entities;

namespace CSInvestmentApi.Converters
{
    public class MessagesConveter
    {
        public static ChatRoomMessages ConvertMessageToEntityModel(ChatRoomMessages message)
        {
            return new ChatRoomMessages()
            {
                Id =message.Id,
                ChatRoomId=message.ChatRoomId,
                Message=message.Message,
                Date=message.Date,
                Username=message.Username
            };
        }

    }
}