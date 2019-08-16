using System;
using System.Collections.Generic;

namespace CSInvestmentApi.scafold
{
    public partial class PostLike
    {
        public int Id { get; set; }
        public int PostId { get; set; }
        public int StudentId { get; set; }
    }
}
