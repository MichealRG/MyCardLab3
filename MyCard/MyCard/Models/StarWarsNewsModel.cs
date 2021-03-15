using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyCard.Models
{
    public class StarWarsNewsModel
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime  PubDate { get; set; }
        public string Link { get; set; }
        public List<string>Categories { get; set; }
    }
}
