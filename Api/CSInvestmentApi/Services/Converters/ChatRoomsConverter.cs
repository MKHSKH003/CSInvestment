using System.Collections.Generic;
using System.Linq;
using CSInvestmentApi.Entities;
using CSInvestmentApi.Models;

namespace CSInvestmentApi.Converters
{
    public class ChatRoomsConveter
    {
        public static ChatRooms ConvertChatRoomToEntityModel(ChatRooms chatroom)
        {
            return new ChatRooms()
            {
                Id = chatroom.Id,
                Name = chatroom.Name,
                Avatar = chatroom.Avatar,
            };
        }

        public static Groups ConvertGroupToEntityModel(ChatRooms chatroom, IEnumerable<Students> students)
        {
            return new Groups()
            {
                Id = chatroom.Id,
                Name = chatroom.Name,
                Image = chatroom.Avatar,
                counter = GetCounter(chatroom, students),
                Members = GetMembers(chatroom, students),
            };
        }

        public static string[] GetMembers(ChatRooms chatroom, IEnumerable<Students> students)
        {
            if(chatroom.Name == "Admin")
            {
                return students.Where(student => student.IsAdmin == 1)
                                           .Select(student => student.Image).ToArray();
            }

            else
             {
                return students.Where(student => student.Courses.Contains(chatroom.Name))
                                           .Select(student => student.Image).ToArray();
            }
        }

        public static int GetCounter(ChatRooms chatroom, IEnumerable<Students> students)
        {
            if (chatroom.Name == "Admin")
            {
                return students.Where(student => student.IsAdmin == 1)
                                           .Select(student => student.Image).Count();
            }

            else
            {
                return students.Where(student => student.Courses.Contains(chatroom.Name))
                                           .Select(student => student.Image).Count();
            }
        }


    }
}