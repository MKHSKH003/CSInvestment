using System.Collections.Generic;

namespace CSInvestmentApi.Entities
{
    public partial class Post
    {
        public Post()
        {
            PostLikes = new HashSet<PostLike>();
            Comments = new HashSet<Comment>();
        }

        public int Id { get; set; }
        public string Avatar { get; set; }
        public string Caption { get; set; }
        public string Datetime { get; set; }
        public int StudentId { get; set; }

        public Student Student { get; set; }
        public ICollection<PostLike> PostLikes { get; set; }
        public ICollection<Comment> Comments { get; set; }
    }
}
