using System.IO;
using System.Text;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace LifeSpot
{
    public class Startup
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseRouting();

            // Загружаем отдельные элементы для вставки в шаблон: боковое меню и футер. Для этого создать новые файлы (в мойм случае MainPageFooter и MainPageSidebar)
            string footerHTML = File.ReadAllText(Path.Combine(Directory.GetCurrentDirectory(), "Views", "Shared", "Footer.html"));
            string sidebarHTML = File.ReadAllText(Path.Combine(Directory.GetCurrentDirectory(), "Views", "Shared", "Sidebar.html"));

            app.UseEndpoints(endpoints =>
                {
                //подключается стартовая страница
                    endpoints.MapGet("/", async context => //MapGet() - это Конечная точка — это то, что можно:
                                                           //-выбрать путем сопоставления URL-адреса и метода HTTP
                                                           //-выполнить путем запуска делегата.
                    {
                        var viewPath = Path.Combine(Directory.GetCurrentDirectory(), "Views", "MainPage.html");
                        var html = new StringBuilder(await File.ReadAllTextAsync(viewPath)).Replace("<!--SIDEBAR-->", sidebarHTML).Replace("<!--FOOTER-->", footerHTML);
                        
                        // Загружаем шаблон страницы, вставляя в него элементы
                        await context.Response.WriteAsync(html.ToString());
                    });

                    //подключается страница TestingPage
                    endpoints.MapGet("/Views/TestingPage.html", async context => 
                    {
                        var TestingPagePath = Path.Combine(Directory.GetCurrentDirectory(), "Views", "TestingPage.html");
                        var TestingPageHtml = new StringBuilder(await File.ReadAllTextAsync(TestingPagePath)).Replace("<!--SIDEBAR-->", sidebarHTML).Replace("<!--FOOTER-->", footerHTML);

                        // Загружаем шаблон страницы, вставляя в него элементы
                        await context.Response.WriteAsync(TestingPageHtml.ToString());
                    });

                    //для подключения стилей
                    endpoints.MapGet("/wwwroot/CSS/MainPage.css", async context =>
                    {
                    // по аналогии со страницей Index настроим на нашем сервере путь до страницы со стилями, чтобы браузер знал, откуда их загружать
                        var cssPath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "CSS", "MainPage.css");
                        var css = await File.ReadAllTextAsync(cssPath);
                        await context.Response.WriteAsync(css);
                    });
                //для подключения JS-файла
                    endpoints.MapGet("/wwwroot/JS/MainPage.js", async context =>
                    {
                    // по аналогии со страницей Index настроим на нашем сервере путь до страницы со стилями, чтобы браузер знал, откуда их загружать
                        var jsPath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "JS", "MainPage.js");
                        var js = await File.ReadAllTextAsync(jsPath);
                        await context.Response.WriteAsync(js);
                    });
                });
        }
    }
}