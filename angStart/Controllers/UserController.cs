using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace angStart.Controllers
{
    public class UserController : ApiController
    {
        [HttpGet]
        public object All()
        {
            var res = new List<object>
            {
                new {id = "3253123", firstname = "Chris", lastname = "Johnson", address = "211, Geoffrey Drive"},
                new {id = "67643837", firstname = "Bill", lastname = "Derkson", address = "201, Sleepy Hollow Drive"}
            };

            return res;
        }
    }
}
