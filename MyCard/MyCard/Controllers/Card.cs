using CodeHollow.FeedReader;
using Microsoft.AspNetCore.Mvc;
using MyCard.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.ServiceModel.Syndication;
using System.Threading.Tasks;
using System.Xml;

namespace MyCard.Controllers
{
    public class Card : Controller
    {
        List<StarWarsNewsModel> news = new List<StarWarsNewsModel>();
        public async Task <IActionResult> Index()
        {
            string url2 = "https://www.starwars.com/feed";
            var feed = await FeedReader.ReadAsync(url2);
            foreach (var item in feed.Items)
            {
                news.Add(new StarWarsNewsModel
                {
                    Title = item.Title,
                    Description = item.Description,
                    PubDate = item.PublishingDate.Value,
                    Link = item.Link,
                    Categories = item.Categories.Select(x => x).ToList()
                });
            }
            var rnd = new Random();
            List<StarWarsNewsModel> rnd4News = new List<StarWarsNewsModel>();
            for (int i = 0; i <4; i++)
            {
                var temp = rnd.Next(news.Count());
                rnd4News.Add(news[temp]);
            }
            return View(rnd4News);
        }
    }
}
