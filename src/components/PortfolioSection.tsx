import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Ресторан «Очаг»",
    category: "Сайт для ресторана",
    image: "/restaurant-website-design.png",
    description:
      "Современный сайт для ресторана с онлайн-меню, галереей блюд и формой бронирования столиков. Количество онлайн-броней выросло вдвое за первый месяц.",
    url: "#portfolio",
    tags: ["Онлайн-меню", "Бронирование", "Галерея", "Адаптивный дизайн"],
  },
  {
    title: "Кофейня «Зерно»",
    category: "Сайт для кафе",
    image: "/creative-portfolio-website.png",
    description:
      "Уютный сайт для кофейни с интерактивным меню напитков, акциями и подпиской на новости. Помог привлечь новую аудиторию через поисковые системы.",
    url: "#portfolio",
    tags: ["Меню напитков", "Акции", "SEO", "Карты"],
  },
  {
    title: "Барбершоп «Бритва»",
    category: "Сайт для парикмахерской",
    image: "/professional-corporate-website.png",
    description:
      "Стильный сайт для барбершопа с онлайн-записью, прайсом на услуги и портфолио мастеров. Клиенты записываются круглосуточно без звонков.",
    url: "#portfolio",
    tags: ["Онлайн-запись", "Прайс", "Мастера", "Адаптивный дизайн"],
  },
  {
    title: "Салон красоты «Глянец»",
    category: "Сайт для салона",
    image: "/social-media-graphics.png",
    description:
      "Элегантный сайт для салона красоты с каталогом услуг, ценами и онлайн-записью. Интеграция с Instagram помогла нарастить аудиторию в соцсетях.",
    url: "#portfolio",
    tags: ["Каталог услуг", "Онлайн-запись", "Instagram", "SEO"],
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">Наше портфолио</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Примеры сайтов, которые мы сделали для ресторанов, кафе, парикмахерских и салонов красоты. Каждый проект — под задачи конкретного бизнеса.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <Button
                    size="sm"
                    variant="secondary"
                    className="gap-2"
                    onClick={() => window.open(project.url, "_blank")}
                  >
                    Открыть проект <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-sm text-primary font-semibold mb-2">{project.category}</p>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}