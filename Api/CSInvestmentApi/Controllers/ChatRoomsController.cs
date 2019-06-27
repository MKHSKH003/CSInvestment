using Microsoft.AspNetCore.Mvc;
using CSInvestmentApi.Services;
using CSInvestmentApi.Entities;
using System.Collections.Generic;

namespace CSInvestmentApi.Controllers
{
    [Route("api/chat-rooms")]
    public class ChatRoomsController : Controller
    {
        private readonly IChatRoomsService _chatRooms;
        public ChatRoomsController(IChatRoomsService chatRooms)
        {
            _chatRooms = chatRooms;
        }

        [HttpGet("get-chat-rooms")]
        public IEnumerable<ChatRoom> Get()
        {
            return _chatRooms.Get();
        }
    }
}
