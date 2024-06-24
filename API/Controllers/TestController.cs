using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class BaseController : Controller
    {
        public int param = 1;
        public static List<string> items = new List<string> { "Dumitru", "Marian", "Marcel", "CucuveauaSpatiala",};

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(items);
        }

        [HttpPost]
        public IActionResult Post(int param, [FromBody] string item)
        {
            items.Add(item);
            return Ok(items);
        }

        [HttpPut("update_at={index}")]
        public IActionResult Put(int index, [FromBody] string item)
        {
            if (index < 0 || index >= items.Count)
            {
                return NotFound("Index out of range");
            }

            items[index] = item;
            return Ok(items);   
        }

        [HttpDelete("delete_at={index}")]
        public IActionResult Delete(int index)
        {
            if (index < 0 || index >= items.Count)
            {
                return NotFound("Index out of range");
            }

            items.RemoveAt(index);
            return Ok(items);
        }
    }
}