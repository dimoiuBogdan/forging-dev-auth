using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class BaseController : Controller
    {
        public int param = 1;

        [HttpGet]
        public IActionResult Get(int param)
        {
            return new StatusCodeResult(param);
        }

        [HttpPost]
        public IActionResult Post(int param)
        {
            return new StatusCodeResult(param);
        }

        [HttpPut]
        public IActionResult Put(int param)
        {
            return new StatusCodeResult(param);
        }

        [HttpDelete]
        public IActionResult Delete(int param)
        {
            return new StatusCodeResult(param);
        }
    }
}