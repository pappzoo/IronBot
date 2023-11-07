using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;

namespace irobotservice.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class RobotsController : ControllerBase
    {
        List<RobotCategory> categories;
        List<Robot> robots;

        public RobotsController()
        {
            categories = new List<RobotCategory>
            {
                new RobotCategory
                {
                    Id = 1,
                    Category = "Porszívó"
                },
                new RobotCategory
                {
                    Id = 2,
                    Category = "Drón"
                }
            };

            robots = new List<Robot>
            {
                new Robot
                {
                    Id = 1,
                    CategoryId = 1,
                    Name = "Rakéta porszívó"
                },
                new Robot
                {
                    Id = 2,
                    CategoryId = 1,
                    Name = "ERIKA porszívó :)"
                },
                new Robot
                {
                    Id = 3,
                    CategoryId = 2,
                    Name = "XIAOMI drón"
                }
            };
        }

        [HttpGet]
        [Route("GetCategories")]
        public ActionResult<IEnumerable<RobotCategory>> GetCategories()
        {
            return categories;
        }

        [HttpGet]
        [Route("GetRobotsByCategoryId")]
        public ActionResult<IEnumerable<Robot>> GetRobotsByCategoryId(int categoryId)
        {
            return robots
                .Where(x => x.CategoryId == categoryId)
                .ToList();
        }

        [HttpGet]
        [Route("GetButtonText")]
        public ActionResult<string> GetButtonText()
        {
            return Content("Szerverről jött", "text/plain");
        }
    }
}