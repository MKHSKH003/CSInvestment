using System;
using System.Collections.Generic;

namespace CSInvestmentApi.Models
{
    public class Comment
    {
        public int Id { get; set; }
        public string UserComment { get; set; }
        public int PostId { get; set; }
        public int StudentId { get; set; }
    }
}
