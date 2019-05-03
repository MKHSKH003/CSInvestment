using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CSInvestmentApi.Model;
using Microsoft.AspNetCore.Mvc;
using CSInvestmentApi.Services;
using CSInvestmentApi.Entities;
using CSInvestmentApi.Models;

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

        [HttpGet("get-groups")]
        public IEnumerable<Groups> Get()
        {
            return _chatRooms.Get();
        }
    }
}
