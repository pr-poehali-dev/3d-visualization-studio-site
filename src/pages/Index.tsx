import { useState } from 'react';
import Icon from '@/components/ui/icon';

const projects = [
  {
    id: 1,
    title: 'Краснолесье',
    category: 'Архитектура',
    year: '2024',
    images: [
      'https://cdn.poehali.dev/files/c_03_post copy.jpg',
      'https://cdn.poehali.dev/files/с_008_post copy.jpg',
      'https://cdn.poehali.dev/files/c_05_post_AI copy.jpg',
      'https://cdn.poehali.dev/files/c_005_Post_AI copy.jpg',
      'https://cdn.poehali.dev/files/01_22_AI copy.jpg'
    ],
    description: 'Жилой комплекс в средиземноморском стиле с каменными домами, белыми фасадами и терракотовыми крышами. Уютные дворы с фонтанами, башня-колокольня как центральная композиция, озеленённые террасы и панорамные виды на горы и лес.'
  },
  {
    id: 2,
    title: 'Альпийская резиденция',
    category: 'Архитектура',
    year: '2024',
    images: ['https://cdn.poehali.dev/files/c_003 copy.jpg'],
    description: 'Современный загородный дом в альпийском стиле площадью 450 м². Проект сочетает классическую архитектуру с современными материалами и технологиями. Большие панорамные окна открывают вид на горы, а использование натурального дерева и камня создаёт ощущение единения с природой.'
  },
  {
    id: 3,
    title: 'Минималистичный интерьер',
    category: 'Дизайн интерьера',
    year: '2024',
    images: ['https://cdn.poehali.dev/files/c_002 copy.jpg'],
    description: 'Интерьер квартиры 120 м² в стиле японского минимализма. Чистые линии, нейтральная цветовая палитра и продуманное освещение создают пространство для спокойствия и концентрации. Каждая деталь имеет своё функциональное назначение.'
  },
  {
    id: 4,
    title: 'Городской комплекс',
    category: 'Архитектура',
    year: '2023',
    images: ['https://cdn.poehali.dev/files/c_001 copy.jpg'],
    description: 'Многофункциональный жилой комплекс в центре города. 15 этажей современной архитектуры с коммерческими помещениями на первом этаже, офисами на втором и жилыми квартирами выше. Общая площадь — 25 000 м².'
  },
  {
    id: 5,
    title: 'Бетонный дом',
    category: 'Архитектура',
    year: '2023',
    images: ['https://cdn.poehali.dev/files/c_005 copy.jpg'],
    description: 'Экспериментальный проект частного дома из монолитного бетона. Брутальная архитектура подчёркивает фактуру материала. Внутренняя планировка максимально открыта — свободное пространство 300 м² практически без перегородок.'
  },
  {
    id: 6,
    title: 'Свет и пространство',
    category: 'Дизайн интерьера',
    year: '2023',
    images: ['https://cdn.poehali.dev/files/c_006 copy.jpg'],
    description: 'Просторная квартира-студия 85 м² с высокими потолками. Светлые тона, скрытая подсветка и зеркальные поверхности визуально увеличивают пространство. Мебель на заказ идеально вписывается в концепцию лёгкости и воздушности.'
  },
  {
    id: 7,
    title: 'Стеклянный павильон',
    category: 'Архитектура',
    year: '2022',
    images: ['https://cdn.poehali.dev/files/c_001 copy.jpg'],
    description: 'Выставочный павильон площадью 600 м² с полностью остеклённым фасадом. Минималистичная металлическая конструкция создаёт ощущение невесомости. Проект получил премию за инновационное использование светопрозрачных конструкций.'
  }
];

export default function Index() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
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

          <div className="space-y-0">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="border-b border-border last:border-b-0"
              >
                <div
                  className="group relative bg-background overflow-hidden"
                  onMouseEnter={() => setSelectedProject(project.id)}
                  onMouseLeave={() => setSelectedProject(null)}
                >
                  <div className="grid lg:grid-cols-2 gap-0">
                    <div 
                      className="aspect-[4/3] overflow-hidden cursor-pointer relative group/image"
                      onClick={(e) => {
                        e.stopPropagation();
                        setFullscreenImage(project.images[0]);
                        setCurrentImageIndex(0);
                      }}
                    >
                      <img
                        src={project.images[0]}
                        alt={project.title}
                        className="w-full h-full object-cover transition-all duration-700 group-hover/image:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-3">
                          <Icon name="Expand" size={24} className="text-foreground" />
                        </div>
                      </div>
                      {project.images.length > 1 && (
                        <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                          {project.images.length} фото
                        </div>
                      )}
                    </div>

                    <div 
                      className="flex flex-col justify-center p-8 lg:p-12 cursor-pointer"
                      onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                    >
                      <p className="text-xs tracking-widest mb-3 text-muted-foreground">{project.category} / {project.year}</p>
                      <h3 className="text-3xl md:text-4xl font-light tracking-tight mb-4">{project.title}</h3>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
                        <span>Посмотреть детали</span>
                        <Icon 
                          name={expandedProject === project.id ? "ChevronUp" : "ChevronDown"} 
                          size={20}
                          className="transition-transform duration-300"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {expandedProject === project.id && (
                  <div className="bg-muted animate-fade-in">
                    <div className="container mx-auto px-8 lg:px-12 py-12 max-w-4xl">
                      <p className="text-lg font-light leading-relaxed text-muted-foreground">
                        {project.description}
                      </p>
                    </div>
                  </div>
                )}
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

      {fullscreenImage && (() => {
        const currentProject = projects.find(p => p.images.includes(fullscreenImage));
        if (!currentProject) return null;
        
        const currentIndex = currentProject.images.indexOf(fullscreenImage);
        const hasMultiple = currentProject.images.length > 1;
        
        const nextImage = () => {
          const newIndex = (currentIndex + 1) % currentProject.images.length;
          setFullscreenImage(currentProject.images[newIndex]);
        };
        
        const prevImage = () => {
          const newIndex = (currentIndex - 1 + currentProject.images.length) % currentProject.images.length;
          setFullscreenImage(currentProject.images[newIndex]);
        };
        
        return (
          <div 
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setFullscreenImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-white hover:text-muted-foreground transition-colors z-10"
              onClick={() => setFullscreenImage(null)}
            >
              <Icon name="X" size={32} />
            </button>
            
            {hasMultiple && (
              <>
                <button
                  className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-muted-foreground transition-colors z-10 bg-black/50 rounded-full p-4"
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                >
                  <Icon name="ChevronLeft" size={32} />
                </button>
                
                <button
                  className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-muted-foreground transition-colors z-10 bg-black/50 rounded-full p-4"
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                >
                  <Icon name="ChevronRight" size={32} />
                </button>
                
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white bg-black/60 px-4 py-2 rounded-full text-sm z-10">
                  {currentIndex + 1} / {currentProject.images.length}
                </div>
              </>
            )}
            
            <img
              src={fullscreenImage}
              alt="Полноэкранное изображение"
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        );
      })()}

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