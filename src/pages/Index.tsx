import { useState } from 'react';
import Icon from '@/components/ui/icon';

const projects = [
  {
    id: 1,
    title: 'Alpine Residence',
    category: 'Architecture',
    year: '2024',
    image: 'https://cdn.poehali.dev/projects/43dd994e-7acb-42c5-9187-b396d5169732/files/98f7cd72-0e5d-4c40-96de-6ac848f1c3e0.jpg'
  },
  {
    id: 2,
    title: 'Minimal Interior',
    category: 'Interior Design',
    year: '2024',
    image: 'https://cdn.poehali.dev/projects/43dd994e-7acb-42c5-9187-b396d5169732/files/d2c8c74a-71aa-4db0-9e82-7dd08924e12d.jpg'
  },
  {
    id: 3,
    title: 'Urban Complex',
    category: 'Architecture',
    year: '2023',
    image: 'https://cdn.poehali.dev/projects/43dd994e-7acb-42c5-9187-b396d5169732/files/87201655-08fd-4005-86b0-9f9217c99ac4.jpg'
  },
  {
    id: 4,
    title: 'Concrete House',
    category: 'Architecture',
    year: '2023',
    image: 'https://cdn.poehali.dev/projects/43dd994e-7acb-42c5-9187-b396d5169732/files/98f7cd72-0e5d-4c40-96de-6ac848f1c3e0.jpg'
  },
  {
    id: 5,
    title: 'Light & Space',
    category: 'Interior Design',
    year: '2023',
    image: 'https://cdn.poehali.dev/projects/43dd994e-7acb-42c5-9187-b396d5169732/files/d2c8c74a-71aa-4db0-9e82-7dd08924e12d.jpg'
  },
  {
    id: 6,
    title: 'Glass Pavilion',
    category: 'Architecture',
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
              Projects
            </a>
            <a href="#about" className="hover:text-muted-foreground transition-colors">
              About
            </a>
            <a href="#services" className="hover:text-muted-foreground transition-colors">
              Services
            </a>
            <a href="#contact" className="hover:text-muted-foreground transition-colors">
              Contact
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
              <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
              <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
              <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
              <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </header>

      <section className="pt-48 pb-32 px-6 lg:px-12">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-8 leading-[1.1]">
            Architectural<br />
            Visualization<br />
            Studio
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground font-light max-w-xl leading-relaxed">
            Creating photorealistic 3D renders for architects, developers, and designers worldwide.
          </p>
        </div>
      </section>

      <section id="projects" className="py-20 px-6 lg:px-12">
        <div className="container mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-light mb-4">Selected Projects</h2>
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
              <h2 className="text-4xl md:text-5xl font-light mb-8">About Studio</h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-6">
                We are a team of visualization specialists with over 8 years of experience in creating photorealistic 3D renders for architectural projects.
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                Our work helps architects and developers present their projects with maximum clarity and emotional impact.
              </p>
            </div>

            <div className="space-y-12">
              <div>
                <div className="text-5xl font-light mb-2">500+</div>
                <p className="text-muted-foreground text-sm tracking-wide">Completed Projects</p>
              </div>
              <div>
                <div className="text-5xl font-light mb-2">200+</div>
                <p className="text-muted-foreground text-sm tracking-wide">Happy Clients</p>
              </div>
              <div>
                <div className="text-5xl font-light mb-2">15</div>
                <p className="text-muted-foreground text-sm tracking-wide">Countries</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-32 px-6 lg:px-12">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-light mb-20">Services</h2>

          <div className="space-y-8">
            {[
              {
                number: '01',
                title: 'Exterior Visualization',
                description: 'Photorealistic renders of building facades and architectural complexes'
              },
              {
                number: '02',
                title: 'Interior Visualization',
                description: 'Detailed 3D renders of residential and commercial interiors'
              },
              {
                number: '03',
                title: 'Animation & Video',
                description: 'Dynamic walkthroughs and fly-through animations'
              },
              {
                number: '04',
                title: 'Virtual Reality',
                description: 'Immersive VR experiences for architectural presentations'
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
          <h2 className="text-4xl md:text-6xl font-light mb-12">Let's Work Together</h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <p className="text-lg font-light mb-8 opacity-80">
                Ready to bring your architectural vision to life? Get in touch with us today.
              </p>
            </div>

            <div className="space-y-6 font-light">
              <div>
                <p className="text-sm opacity-60 mb-1 tracking-wide">Email</p>
                <a href="mailto:hello@studio.com" className="text-xl hover:opacity-60 transition-opacity">
                  hello@studio.com
                </a>
              </div>
              <div>
                <p className="text-sm opacity-60 mb-1 tracking-wide">Phone</p>
                <a href="tel:+12345678900" className="text-xl hover:opacity-60 transition-opacity">
                  +1 (234) 567-89-00
                </a>
              </div>
              <div>
                <p className="text-sm opacity-60 mb-1 tracking-wide">Address</p>
                <p className="text-xl opacity-80">
                  New York, NY
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
          <p>© 2024 Studio. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
