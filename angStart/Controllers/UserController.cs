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
        [HttpPost]
        public object All()
        {
            var res = Enumerable.Range(1, 21)
                .Select(x => new
                {
                    id = x,
                    firstname = "Bill",
                    lastname = "Derkson",
                    address = "201, Sleepy Hollow Drive"
                })
                .ToList();

            //return res;

            return new 
            {
                itemsCount = res.Count,
                data = res
            };
        }
    }
}
