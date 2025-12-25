import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const portfolioItems = [
  {
    id: 1,
    title: 'Современная квартира',
    category: 'interior',
    image: 'https://cdn.poehali.dev/projects/43dd994e-7acb-42c5-9187-b396d5169732/files/8fa1bff4-076f-4b57-beb9-b60134d0695a.jpg',
    description: 'Минималистичный дизайн с акцентом на естественное освещение'
  },
  {
    id: 2,
    title: 'Офисный центр',
    category: 'exterior',
    image: 'https://cdn.poehali.dev/projects/43dd994e-7acb-42c5-9187-b396d5169732/files/bc459417-6ff1-486d-a3fc-b7c2fedbc3f2.jpg',
    description: 'Современная архитектура со стеклянным фасадом'
  },
  {
    id: 3,
    title: 'Ресторан премиум-класса',
    category: 'commercial',
    image: 'https://cdn.poehali.dev/projects/43dd994e-7acb-42c5-9187-b396d5169732/files/3ea79cae-b4fa-43b1-b67f-b65c4117a9e5.jpg',
    description: 'Элегантный интерьер коммерческого пространства'
  },
  {
    id: 4,
    title: 'Загородный дом',
    category: 'exterior',
    image: 'https://cdn.poehali.dev/projects/43dd994e-7acb-42c5-9187-b396d5169732/files/bc459417-6ff1-486d-a3fc-b7c2fedbc3f2.jpg',
    description: 'Архитектурная визуализация частного дома'
  },
  {
    id: 5,
    title: 'Кухня-студия',
    category: 'interior',
    image: 'https://cdn.poehali.dev/projects/43dd994e-7acb-42c5-9187-b396d5169732/files/8fa1bff4-076f-4b57-beb9-b60134d0695a.jpg',
    description: 'Современное решение для кухонного пространства'
  },
  {
    id: 6,
    title: 'Торговый центр',
    category: 'commercial',
    image: 'https://cdn.poehali.dev/projects/43dd994e-7acb-42c5-9187-b396d5169732/files/3ea79cae-b4fa-43b1-b67f-b65c4117a9e5.jpg',
    description: 'Визуализация общественного пространства'
  }
];

const services = [
  {
    icon: 'Home',
    title: 'Интерьеры',
    description: 'Фотореалистичная визуализация жилых и коммерческих интерьеров'
  },
  {
    icon: 'Building2',
    title: 'Экстерьеры',
    description: 'Архитектурная визуализация зданий и сооружений'
  },
  {
    icon: 'Store',
    title: 'Коммерция',
    description: 'Визуализация для бизнеса: офисы, магазины, рестораны'
  },
  {
    icon: 'Boxes',
    title: '3D планировки',
    description: 'Детальные планы помещений с расстановкой мебели'
  }
];

const prices = [
  {
    title: 'Базовый',
    price: '15 000',
    features: ['1 ракурс', 'До 2 правок', 'HD качество', 'Срок 5 дней']
  },
  {
    title: 'Стандарт',
    price: '35 000',
    popular: true,
    features: ['3 ракурса', 'До 5 правок', '4K качество', 'Срок 7 дней']
  },
  {
    title: 'Премиум',
    price: '70 000',
    features: ['6 ракурсов', 'Неограниченные правки', '8K качество', 'Срок 10 дней']
  }
];

export default function Index() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredPortfolio = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold gradient-text">3D Studio</h1>
          <div className="hidden md:flex gap-8">
            <button onClick={() => scrollToSection('services')} className="hover:text-primary transition-colors">Услуги</button>
            <button onClick={() => scrollToSection('portfolio')} className="hover:text-primary transition-colors">Портфолио</button>
            <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">О нас</button>
            <button onClick={() => scrollToSection('prices')} className="hover:text-primary transition-colors">Цены</button>
            <button onClick={() => scrollToSection('contacts')} className="hover:text-primary transition-colors">Контакты</button>
          </div>
          <Button onClick={() => scrollToSection('contacts')} className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
            Связаться
          </Button>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <h2 className="text-6xl md:text-7xl font-bold mb-6 gradient-text">
              Превращаем идеи<br />в реальность
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Создаём фотореалистичные 3D визуализации для архитектуры, интерьеров и коммерческих проектов
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('portfolio')}
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-8"
              >
                <Icon name="Eye" className="mr-2" size={20} />
                Смотреть работы
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => scrollToSection('contacts')}
                className="text-lg px-8 border-primary/50 hover:bg-primary/10"
              >
                <Icon name="MessageCircle" className="mr-2" size={20} />
                Обсудить проект
              </Button>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: '500+', label: 'Проектов' },
              { number: '8', label: 'Лет опыта' },
              { number: '200+', label: 'Клиентов' },
              { number: '99%', label: 'Довольных' }
            ].map((stat, i) => (
              <div key={i} className="animate-scale-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="text-4xl font-bold gradient-text mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4 gradient-text">Наши услуги</h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            Полный спектр услуг 3D визуализации
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <Card 
                key={i} 
                className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                  <Icon name={service.icon as any} size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4 gradient-text">Портфолио</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Наши лучшие работы
          </p>

          <div className="flex gap-3 justify-center mb-12 flex-wrap">
            {[
              { id: 'all', label: 'Все проекты' },
              { id: 'interior', label: 'Интерьеры' },
              { id: 'exterior', label: 'Экстерьеры' },
              { id: 'commercial', label: 'Коммерция' }
            ].map(filter => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? 'default' : 'outline'}
                onClick={() => setActiveFilter(filter.id)}
                className={activeFilter === filter.id ? 'bg-gradient-to-r from-primary to-secondary' : 'border-primary/30'}
              >
                {filter.label}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPortfolio.map((item, i) => (
              <Card 
                key={item.id} 
                className="group overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 animate-scale-in cursor-pointer"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <Badge className="mb-2 bg-primary/80">
                        {item.category === 'interior' ? 'Интерьер' : item.category === 'exterior' ? 'Экстерьер' : 'Коммерция'}
                      </Badge>
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-200 text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-5xl font-bold mb-6 gradient-text">О студии</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Мы — команда профессионалов с 8-летним опытом в создании фотореалистичных 3D визуализаций. 
            Работаем с архитекторами, дизайнерами и застройщиками по всей России.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Наша цель — помочь вам презентовать проект так, чтобы клиенты влюбились в него ещё до начала строительства. 
            Используем новейшие технологии и постоянно совершенствуем навыки.
          </p>
          <div className="flex gap-6 justify-center mt-12 flex-wrap">
            <div className="flex items-center gap-2">
              <Icon name="Award" size={24} className="text-primary" />
              <span>Сертифицированная студия</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Clock" size={24} className="text-secondary" />
              <span>Всегда в срок</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Shield" size={24} className="text-accent" />
              <span>Гарантия качества</span>
            </div>
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4 gradient-text">Тарифы</h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            Прозрачное ценообразование для любого бюджета
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {prices.map((plan, i) => (
              <Card 
                key={i}
                className={`p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 animate-fade-in ${
                  plan.popular ? 'border-primary shadow-lg shadow-primary/20' : ''
                }`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {plan.popular && (
                  <Badge className="mb-4 bg-gradient-to-r from-primary to-secondary">
                    Популярный
                  </Badge>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
                <div className="text-4xl font-bold gradient-text mb-6">
                  {plan.price} ₽
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <Icon name="Check" size={20} className="text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={plan.popular ? 'w-full bg-gradient-to-r from-primary to-secondary' : 'w-full'}
                  variant={plan.popular ? 'default' : 'outline'}
                  onClick={() => scrollToSection('contacts')}
                >
                  Выбрать
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-5xl font-bold mb-6 gradient-text">Свяжитесь с нами</h2>
          <p className="text-lg text-muted-foreground mb-12">
            Готовы обсудить ваш проект? Мы всегда на связи
          </p>
          
          <div className="grid gap-6 mb-12">
            <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Icon name="Mail" size={24} className="text-primary" />
                </div>
                <div className="text-left">
                  <div className="font-semibold mb-1">Email</div>
                  <a href="mailto:hello@3dstudio.ru" className="text-muted-foreground hover:text-primary transition-colors">
                    hello@3dstudio.ru
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Icon name="Phone" size={24} className="text-secondary" />
                </div>
                <div className="text-left">
                  <div className="font-semibold mb-1">Телефон</div>
                  <a href="tel:+79991234567" className="text-muted-foreground hover:text-secondary transition-colors">
                    +7 (999) 123-45-67
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border hover:border-primary/50 transition-all">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <Icon name="MessageSquare" size={24} className="text-accent" />
                </div>
                <div className="text-left">
                  <div className="font-semibold mb-1">Telegram</div>
                  <a href="https://t.me/3dstudio" className="text-muted-foreground hover:text-accent transition-colors">
                    @3dstudio
                  </a>
                </div>
              </div>
            </Card>
          </div>

          <div className="flex gap-4 justify-center">
            <a href="#" className="w-12 h-12 rounded-full bg-primary/20 hover:bg-primary/30 flex items-center justify-center transition-colors">
              <Icon name="Instagram" size={20} className="text-primary" />
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-secondary/20 hover:bg-secondary/30 flex items-center justify-center transition-colors">
              <Icon name="Facebook" size={20} className="text-secondary" />
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-accent/20 hover:bg-accent/30 flex items-center justify-center transition-colors">
              <Icon name="Linkedin" size={20} className="text-accent" />
            </a>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2024 3D Studio. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}
