using System;
using System.Collections.Generic;

namespace CSInvestmentApi.Models
{
    public partial class Groups
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Image { get; set; }
        public int counter { get; set; }
        public string[] Members { get; set; }
    }
}
