using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Routing;
using Microsoft.VisualBasic;
using System.Globalization;
using System.IO;
using System.Net;
using System.Text;

namespace LifeSpot
{
    public static class EndpointMapper
    {

        //для подключения CSS-файлов
        public static void MapCss(this IEndpointRouteBuilder routeBuilder) //так делается метод расширения (через 'this')
        {
            var cssFilesArr = new[] { "AboutPage.css", "MainPage.css", "TestingPage.css" };
            foreach (var cssFile in cssFilesArr)
            {
                routeBuilder.MapGet($"wwwroot/CSS/{cssFile}", async context =>
                {
                    var cssPath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "CSS", $"{cssFile}");
                    var css = await File.ReadAllTextAsync(cssPath); //считывание построчно из CSS-файла
                    await context.Response.WriteAsync(css);
                });
            }
        }

        //для подключения JS-файлов 
        public static void MapJS(this IEndpointRouteBuilder routeBuilder)
        {
            var jsFilesArr = new[] { "MainPage.js", "AboutPage.js", "TestingPage.js" };
            foreach (var jsFile in jsFilesArr)
            {
                routeBuilder.MapGet($"wwwroot/JS/{jsFile}", async context =>
                {
                    var jsPath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "JS", $"{jsFile}");
                    var js = await File.ReadAllTextAsync(jsPath); //считывание построчно из CSS-файла
                    await context.Response.WriteAsync(js);
                });
            }
        }
        
        //для подключения изображений
        public static void MapIMG(this IEndpointRouteBuilder routeBuilder)
        {
            var imgFilesArr = new[] { "alone_human_in_neoncity_Kandinsky_2.1.jpg", "neoncity lamborghini_Kandinsky_2.1.jpg", "neoncity_Kandinsky_2.1.jpg", "neoncity_lamborghini_Kandinsky_2.1(1).jpg", "retrowave_city_Kandinsky_2.1.jpg" };
            foreach (var imgFile in imgFilesArr)
            {
                routeBuilder.MapGet($"wwwroot/Img/{imgFile}", async images =>
                {
                    var imgPath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "Img", $"{imgFile}");
                    var img = await File.ReadAllBytesAsync(imgPath);
                    string contentType = "image/jpg"; //MIME-тип. пока не знаю как применять
                    await images.Response.Body.WriteAsync(img); 
                });
            }
        }
        
        //для подключения HTML
        public static void MapHTML(this IEndpointRouteBuilder routeBuilder)
        {
            //Загружаем отдельные элементы для вставки в шаблон: боковое меню и футер. Для этого создать новые файлы (в моем случае MainPageFooter и  MainPageSidebar)
            string footerHTML = File.ReadAllText(Path.Combine(Directory.GetCurrentDirectory(), "Views", "Shared", "Footer.html"));
            string sidebarHTML = File.ReadAllText(Path.Combine(Directory.GetCurrentDirectory(), "Views", "Shared", "Sidebar.html"));

            string sidebarTestingPage = File.ReadAllText(Path.Combine(Directory.GetCurrentDirectory(), "Views", "Shared", "SidebarTestingPage.html"));
            string sidebarAboutPage = File.ReadAllText(Path.Combine(Directory.GetCurrentDirectory(), "Views", "Shared", "SidebarAboutPage.html"));

            string sliderAboutPage = File.ReadAllText(Path.Combine(Directory.GetCurrentDirectory(), "Views", "Shared", "SliderAboutPage.html"));
            


            routeBuilder.MapGet("/", async context => //MapGet() - это Конечная точка — это то, что можно:
                                                      //-выбрать путем сопоставления URL-адреса и метода HTTP
                                                      //-выполнить путем запуска делегата.
            {
                var viewPath = Path.Combine(Directory.GetCurrentDirectory(), "Views", "MainPage.html");
                var html = new StringBuilder(await File.ReadAllTextAsync(viewPath))
                        .Replace("<!--SIDEBAR-->", sidebarHTML)
                        .Replace("<!--FOOTER-->", footerHTML);

                // Загружаем шаблон страницы, вставляя в него элементы
                await context.Response.WriteAsync(html.ToString());
            });

            //подключается страница TestingPage
            routeBuilder.MapGet("/Views/TestingPage.html", async context =>
            {
                var TestingPagePath = Path.Combine(Directory.GetCurrentDirectory(), "Views", "TestingPage.html");
                var TestingPageHtml = new StringBuilder(await File.ReadAllTextAsync(TestingPagePath))
                                    .Replace("<!--SIDEBAR-->", sidebarTestingPage)
                                    .Replace("<!--FOOTER-->", footerHTML);

                // Загружаем шаблон страницы, вставляя в него элементы
                await context.Response.WriteAsync(TestingPageHtml.ToString());
            });

            //подключается страница AboutPage
            routeBuilder.MapGet("/Views/AboutPage.html", async context =>
            {
                var AboutPagePath = Path.Combine(Directory.GetCurrentDirectory(), "Views", "AboutPage.html");
                var AboutPageHtml = new StringBuilder(await File.ReadAllTextAsync(AboutPagePath))
                                .Replace("<!--SIDEBAR-->", sidebarAboutPage)
                                .Replace("<!--FOOTER-->", footerHTML)
                                .Replace("<!--Slider-->", sliderAboutPage);

                // Загружаем шаблон страницы, вставляя в него элементы
                await context.Response.WriteAsync(AboutPageHtml.ToString());
            });
        }
    }
}
