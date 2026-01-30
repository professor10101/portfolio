import { ExternalLink, Github } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const projects = [
  {
    id: 1,
    title: 'Hospital Management System',
    client: 'A team project',
    description: 'A full-featured hospital records management structure with the ability to add, modify, delete and more in a clean dashboard.',
    image: '/placeholder.svg',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 2,
    title: 'Healthcare Portal',
    client: 'Medical Clinic',
    description: 'Patient management system with appointment scheduling, medical records, and secure messaging features.',
    image: '/placeholder.svg',
    tags: ['Next.js', 'TypeScript', 'MongoDB', 'AWS'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 3,
    title: 'Face recognition attendance system',
    client: 'Tech Management Co.',
    description: 'Its basically like a biometric, but it marks attendance, reads all faces in the camera feed using opencv and process their face and mark their presence in a csv file using dlib for the processing',
    image: '/placeholder.svg',
    tags: ['React', 'Firebase', 'Tailwind', 'Maps API'],
    liveUrl: '#',
    githubUrl: 'https://github.com/professor10101/face-stamp-live.git',
  },
  {
    id: 4,
    title: 'Restaurant Management',
    client: 'Restaurant Chain',
    description: 'POS system with table reservations, order management, and inventory tracking across multiple locations.',
    image: '/placeholder.svg',
    tags: ['Vue.js', 'Python', 'MySQL', 'Docker'],
    liveUrl: '#',
    githubUrl: '#',
  },
  
];

export function Projects() {
  const { ref: sectionRef, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute top-1/4 -right-48 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-48 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className={cn(
          'text-center mb-16 opacity-0',
          isVisible && 'animate-fade-in-up'
        )}>
          <p className="text-primary font-mono text-sm uppercase tracking-wider mb-2">My Work</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A selection of websites and database solutions I've built for clients
          </p>
        </div>

        {/* Projects Carousel */}
        <div className={cn(
          'opacity-0',
          isVisible && 'animate-fade-in-up',
          'px-4 md:px-12'
        )} style={{ animationDelay: '0.2s' }}>
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {projects.map((project) => (
                <CarouselItem key={project.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="glass-card rounded-2xl overflow-hidden group h-full flex flex-col hover:glow-effect transition-all duration-500 hover:-translate-y-2">
                    {/* Project Image */}
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full aspect-video object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                        <Button size="icon" variant="secondary" asChild>
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-5 h-5" />
                          </a>
                        </Button>
                        <Button size="icon" variant="secondary" asChild>
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="w-5 h-5" />
                          </a>
                        </Button>
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="text-sm text-primary font-mono mb-1">{project.client}</div>
                      <h3 className="text-xl font-display font-semibold mb-2">{project.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4 flex-1">{project.description}</p>
                      
                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="bg-muted/50 hover:bg-primary/20 transition-colors"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-4" />
            <CarouselNext className="hidden md:flex -right-4" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
