using System;
using System.Collections.Generic;

namespace CSInvestmentApi.Entities
{
    public class Users
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Password { get; set; }
        public int IsAdmin { get; set; }
    }
}
