import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Layout, Palette, Code, Share2, Target, Search } from "lucide-react"

const services = [
  {
    icon: Layout,
    title: "Сайт-визитка для бизнеса",
    description:
      "Создаём стильные и понятные сайты для ресторанов, кафе, парикмахерских и любых организаций. Ваши клиенты сразу находят контакты, меню, услуги и цены — всё удобно и красиво.",
  },
  {
    icon: Palette,
    title: "Дизайн под вашу нишу",
    description:
      "Разрабатываем уникальный дизайн, который отражает атмосферу вашего заведения. Ресторан, барбершоп или салон красоты — сайт будет выглядеть именно так, как нужно.",
  },
  {
    icon: Code,
    title: "Онлайн-меню и каталог услуг",
    description:
      "Добавим интерактивное меню для кафе и ресторанов или удобный каталог услуг для салонов и студий. Клиент всегда знает, что вы предлагаете и сколько это стоит.",
  },
  {
    icon: Share2,
    title: "Соцсети и продвижение",
    description:
      "Помогаем настроить присутствие в ВКонтакте, Instagram и других платформах. Привлекательные посты и баннеры — клиенты подписываются и возвращаются к вам снова.",
  },
  {
    icon: Target,
    title: "Онлайн-запись и заявки",
    description:
      "Подключим форму онлайн-записи для парикмахерской или кнопку бронирования столика для ресторана. Клиенты записываются прямо с сайта — без звонков и очередей.",
  },
  {
    icon: Search,
    title: "SEO и Яндекс.Карты",
    description:
      "Оптимизируем сайт под поиск в Google и Яндексе, помогаем разместиться на картах. Ваше заведение будут находить жители района, туристы и новые клиенты.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 animate-pulse" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mx-auto block w-fit">
          Что мы делаем
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
          В чем мы <span className="text-primary">сильны</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed text-lg">
          Всё необходимое для того, чтобы ваш ресторан, кафе, салон или организация привлекали новых клиентов из интернета.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-background/50 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}