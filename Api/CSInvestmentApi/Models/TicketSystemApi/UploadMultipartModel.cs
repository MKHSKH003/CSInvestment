using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;

namespace CSInvestmentApi.Models
{
    public partial class UploadMultipartModel
    {
        public IFormFile File { get; set; }
        public int SomeValue { get; set; }
    }
}