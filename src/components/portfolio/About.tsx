import { User, Code, Database, Briefcase } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

const highlights = [
  { icon: Code, label: 'Web Development', value: '1+ Years' },
  { icon: Database, label: 'Database Design', value: '10+ Projects' },
  { icon: Briefcase, label: 'Happy Clients', value: '10+' },
];

export function About() {
  const { ref: sectionRef, isVisible } = useScrollAnimation<HTMLElement>();
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className={cn(
          'text-center mb-16 opacity-0',
          isVisible && 'animate-fade-in-up'
        )}>
          <p className="text-primary font-mono text-sm uppercase tracking-wider mb-2">Get To Know Me</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            About <span className="gradient-text">Me</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div
            ref={imageRef}
            className={cn(
              'relative opacity-0',
              imageVisible && 'animate-fade-in-left'
            )}
          >
            <div className="relative">
              {/* Decorative border */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary via-accent to-secondary rounded-2xl opacity-20 blur-sm" />
              
              {/* Image placeholder */}
              <div className="relative glass-card p-8 rounded-2xl">
                <div className="aspect-square bg-gradient-to-br from-muted to-muted/50 rounded-xl flex items-center justify-center">
                  <User className="w-32 h-32 text-muted-foreground/50" />
                  <span className="absolute bottom-4 text-sm text-muted-foreground">Add your photo here</span>
                </div>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-6 -right-6 glass-card p-4 rounded-xl glow-effect">
              <div className="text-3xl font-bold gradient-text">5+</div>
              <div className="text-sm text-muted-foreground">Years Exp.</div>
            </div>
          </div>

          {/* Content Side */}
          <div
            ref={contentRef}
            className={cn(
              'opacity-0',
              contentVisible && 'animate-fade-in-right'
            )}
          >
            <h3 className="text-2xl md:text-3xl font-display font-semibold mb-6">
              Crafting Digital Experiences That Make an Impact
            </h3>

            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed mb-8">
              <p>
                I'm a passionate developer and a Mathematics and computing student,
                 specializing in creating beautiful, functional websites 
                and robust database management systems. With a few years of experience working with 
                clients across various industries, I bring ideas to life through clean code 
                and thoughtful design.
              </p>
              <p>
                My expertise spans from front-end development with modern frameworks like React, 
                to backend database architecture using PostgreSQL, MySQL, and MongoDB.I am familiar
                with python. I believe in building solutions that are not just functional, 
                but truly exceptional.
                
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-3 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={item.label}
                  className="glass-card p-4 rounded-xl text-center group hover:glow-effect transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <item.icon className="w-8 h-8 mx-auto mb-2 text-primary group-hover:scale-110 transition-transform" />
                  <div className="text-xl font-bold">{item.value}</div>
                  <div className="text-xs text-muted-foreground">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
