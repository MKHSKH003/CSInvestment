using System;

namespace CSInvestmentApi.Entities
{
    public class Comment
    {
        public int Id { get; set; }
        public string UserComment { get; set; }
        public int PostId { get; set; }
        public int StudentId { get; set; }

        public Student Student { get; set; }
    }
}
