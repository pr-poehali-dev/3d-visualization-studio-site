import { useState } from 'react';
import Icon from '@/components/ui/icon';

const projects = [
  {
    id: 1,
    title: 'Альпийская резиденция',
    category: 'Архитектура',
    year: '2024',
    image: 'https://cdn.poehali.dev/projects/43dd994e-7acb-42c5-9187-b396d5169732/files/98f7cd72-0e5d-4c40-96de-6ac848f1c3e0.jpg'
  },
  {
    id: 2,
    title: 'Минималистичный интерьер',
    category: 'Дизайн интерьера',
    year: '2024',
    image: 'https://cdn.poehali.dev/projects/43dd994e-7acb-42c5-9187-b396d5169732/files/d2c8c74a-71aa-4db0-9e82-7dd08924e12d.jpg'
  },
  {
    id: 3,
    title: 'Городской комплекс',
    category: 'Архитектура',
    year: '2023',
    image: 'https://cdn.poehali.dev/projects/43dd994e-7acb-42c5-9187-b396d5169732/files/87201655-08fd-4005-86b0-9f9217c99ac4.jpg'
  },
  {
    id: 4,
    title: 'Бетонный дом',
    category: 'Архитектура',
    year: '2023',
    image: 'https://cdn.poehali.dev/projects/43dd994e-7acb-42c5-9187-b396d5169732/files/98f7cd72-0e5d-4c40-96de-6ac848f1c3e0.jpg'
  },
  {
    id: 5,
    title: 'Свет и пространство',
    category: 'Дизайн интерьера',
    year: '2023',
    image: 'https://cdn.poehali.dev/projects/43dd994e-7acb-42c5-9187-b396d5169732/files/d2c8c74a-71aa-4db0-9e82-7dd08924e12d.jpg'
  },
  {
    id: 6,
    title: 'Стеклянный павильон',
    category: 'Архитектура',
    year: '2022',
    image: 'https://cdn.poehali.dev/projects/43dd994e-7acb-42c5-9187-b396d5169732/files/87201655-08fd-4005-86b0-9f9217c99ac4.jpg'
  }
];

export default function Index() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <nav className="container mx-auto px-6 lg:px-12 py-6 flex items-center justify-between">
          <a href="#" className="text-xl font-light tracking-wider">
            STUDIO
          </a>

          <div className="hidden lg:flex items-center gap-12 font-light text-sm tracking-wide">
            <a href="#projects" className="hover:text-muted-foreground transition-colors">
              Проекты
            </a>
            <a href="#about" className="hover:text-muted-foreground transition-colors">
              О студии
            </a>
            <a href="#services" className="hover:text-muted-foreground transition-colors">
              Услуги
            </a>
            <a href="#contact" className="hover:text-muted-foreground transition-colors">
              Контакты
            </a>
          </div>

          <button 
            className="lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </nav>

        {menuOpen && (
          <div className="lg:hidden bg-background border-t border-border animate-fade-in">
            <div className="container mx-auto px-6 py-8 flex flex-col gap-6 font-light">
              <a href="#projects" onClick={() => setMenuOpen(false)}>Проекты</a>
              <a href="#about" onClick={() => setMenuOpen(false)}>О студии</a>
              <a href="#services" onClick={() => setMenuOpen(false)}>Услуги</a>
              <a href="#contact" onClick={() => setMenuOpen(false)}>Контакты</a>
            </div>
          </div>
        )}
      </header>

      <section className="pt-48 pb-32 px-6 lg:px-12">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-8 leading-[1.1]">
            Студия<br />
            архитектурной<br />
            визуализации
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground font-light max-w-xl leading-relaxed">
            Создаём фотореалистичные 3D визуализации для архитекторов, застройщиков и дизайнеров по всему миру.
          </p>
        </div>
      </section>

      <section id="projects" className="py-20 px-6 lg:px-12">
        <div className="container mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-light mb-4">Избранные проекты</h2>
            <p className="text-muted-foreground font-light">2022 — 2024</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-border">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group relative bg-background cursor-pointer overflow-hidden aspect-[4/3]"
                onMouseEnter={() => setSelectedProject(project.id)}
                onMouseLeave={() => setSelectedProject(null)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                />

                <div className={`absolute inset-0 bg-black/60 transition-opacity duration-500 ${
                  selectedProject === project.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <p className="text-xs tracking-widest mb-2 opacity-80">{project.category} / {project.year}</p>
                    <h3 className="text-2xl md:text-3xl font-light tracking-tight">{project.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-32 px-6 lg:px-12 bg-muted">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-light mb-8">О студии</h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-6">
                Мы — команда специалистов по визуализации с более чем 8-летним опытом создания фотореалистичных 3D визуализаций для архитектурных проектов.
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                Наша работа помогает архитекторам и застройщикам презентовать проекты с максимальной ясностью и эмоциональным воздействием.
              </p>
            </div>

            <div className="space-y-12">
              <div>
                <div className="text-5xl font-light mb-2">500+</div>
                <p className="text-muted-foreground text-sm tracking-wide">Реализованных проектов</p>
              </div>
              <div>
                <div className="text-5xl font-light mb-2">200+</div>
                <p className="text-muted-foreground text-sm tracking-wide">Довольных клиентов</p>
              </div>
              <div>
                <div className="text-5xl font-light mb-2">15</div>
                <p className="text-muted-foreground text-sm tracking-wide">Стран</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-32 px-6 lg:px-12">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-light mb-20">Услуги</h2>

          <div className="space-y-8">
            {[
              {
                number: '01',
                title: 'Визуализация экстерьеров',
                description: 'Фотореалистичные визуализации фасадов зданий и архитектурных комплексов'
              },
              {
                number: '02',
                title: 'Визуализация интерьеров',
                description: 'Детализированные 3D визуализации жилых и коммерческих интерьеров'
              },
              {
                number: '03',
                title: 'Анимация и видео',
                description: 'Динамичные видеопрезентации и пролёты камеры'
              },
              {
                number: '04',
                title: 'Виртуальная реальность',
                description: 'Иммерсивные VR-презентации для архитектурных проектов'
              }
            ].map((service, i) => (
              <div
                key={i}
                className="group border-t border-border pt-8 pb-8 flex gap-8 items-start hover:bg-muted transition-all duration-300 px-6 -mx-6"
              >
                <span className="text-muted-foreground text-sm font-light tracking-widest pt-1">
                  {service.number}
                </span>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-light mb-3 group-hover:translate-x-2 transition-transform duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground font-light max-w-2xl">
                    {service.description}
                  </p>
                </div>
                <Icon 
                  name="ArrowUpRight" 
                  size={24} 
                  className="text-muted-foreground group-hover:text-foreground transition-colors opacity-0 group-hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-32 px-6 lg:px-12 bg-foreground text-background">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-light mb-12">Давайте работать вместе</h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <p className="text-lg font-light mb-8 opacity-80">
                Готовы воплотить архитектурную мечту в жизнь? Свяжитесь с нами сегодня.
              </p>
            </div>

            <div className="space-y-6 font-light">
              <div>
                <p className="text-sm opacity-60 mb-1 tracking-wide">Почта</p>
                <a href="mailto:hello@studio.com" className="text-xl hover:opacity-60 transition-opacity">
                  hello@studio.com
                </a>
              </div>
              <div>
                <p className="text-sm opacity-60 mb-1 tracking-wide">Телефон</p>
                <a href="tel:+79991234567" className="text-xl hover:opacity-60 transition-opacity">
                  +7 (999) 123-45-67
                </a>
              </div>
              <div>
                <p className="text-sm opacity-60 mb-1 tracking-wide">Адрес</p>
                <p className="text-xl opacity-80">
                  Москва, Россия
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-8 pt-8 border-t border-background/20">
            <a href="#" className="text-sm tracking-wide hover:opacity-60 transition-opacity">Instagram</a>
            <a href="#" className="text-sm tracking-wide hover:opacity-60 transition-opacity">Behance</a>
            <a href="#" className="text-sm tracking-wide hover:opacity-60 transition-opacity">LinkedIn</a>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 lg:px-12 border-t border-border">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground font-light">
          <p>© 2024 Студия. Все права защищены.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-foreground transition-colors">Конфиденциальность</a>
            <a href="#" className="hover:text-foreground transition-colors">Условия</a>
          </div>
        </div>
      </footer>
    </div>
  );
}