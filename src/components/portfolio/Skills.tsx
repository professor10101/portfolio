import { 
  Code2, 
  Database, 
  Globe, 
  Server, 
  Palette, 
  Smartphone,
  Cloud,
  Shield
} from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

const skills = [
  {
    category: 'Frontend',
    icon: Code2,
    items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    category: 'Backend',
    icon: Server,
    items: ['Node.js', 'Python', 'Express', 'REST APIs', 'GraphQL'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    category: 'Databases',
    icon: Database,
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Firebase'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    category: 'Cloud & DevOps',
    icon: Cloud,
    items: ['AWS', 'Docker', 'Git', 'CI/CD', 'Vercel'],
    color: 'from-orange-500 to-red-500',
  },
];

const services = [
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies.',
  },
  {
    icon: Database,
    title: 'Database Design',
    description: 'Efficient database architecture and optimization for your data needs.',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces that users love to interact with.',
  },
  {
    icon: Smartphone,
    title: 'Responsive Design',
    description: 'Seamless experiences across all devices and screen sizes.',
  },
  {
    icon: Shield,
    title: 'Security',
    description: 'Secure implementations protecting your data and users.',
  },
  {
    icon: Server,
    title: 'API Development',
    description: 'Robust APIs powering your applications and integrations.',
  },
];

export function Skills() {
  const { ref: sectionRef, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-24 relative overflow-hidden bg-muted/30"
    >
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className={cn(
          'text-center mb-16 opacity-0',
          isVisible && 'animate-fade-in-up'
        )}>
          <p className="text-primary font-mono text-sm uppercase tracking-wider mb-2">What I Do</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Skills & <span className="gradient-text">Services</span>
          </h2>
        </div>

        {/* Skills Grid */}
        <div className={cn(
          'grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 opacity-0',
          isVisible && 'animate-fade-in-up'
        )} style={{ animationDelay: '0.2s' }}>
          {skills.map((skill, index) => (
            <div
              key={skill.category}
              className="glass-card p-6 rounded-2xl group hover:glow-effect transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={cn(
                'w-14 h-14 rounded-xl bg-gradient-to-br flex items-center justify-center mb-4',
                skill.color
              )}>
                <skill.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-4">{skill.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm text-muted-foreground bg-muted/50 px-3 py-1 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Services Grid */}
        <div className={cn(
          'opacity-0',
          isVisible && 'animate-fade-in-up'
        )} style={{ animationDelay: '0.4s' }}>
          <h3 className="text-2xl font-display font-semibold text-center mb-10">
            Services I Offer
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="glass-card p-6 rounded-2xl group hover:glow-effect transition-all duration-300 hover:-translate-y-1 flex gap-4"
                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">{service.title}</h4>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
