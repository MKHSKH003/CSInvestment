using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CSInvestmentApi.Model
{
    public class EnvironmentConfig
    {
        public string EmailAccount { get; set; }
        public string EmailPassword { get; set; }
        public string TempEmailPassword { get; set; }
        public string Host { get; set; }
        public int Port { get; set; }
        public string Database { get; set; }
        public string DbConnection { get; set; }
    }
}

