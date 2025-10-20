import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projectsData = [
  {
    title: 'Smart Helmet Project',
    description: 'Innovative safety solution developed during 24-hour hackathon at PSCMR College',
    tech: ['IoT', 'Hardware', 'Safety Tech'],
    status: 'Hackathon Project',
  },
  {
    title: 'Virtual Pandemic Simulation',
    description: 'Finalist project at Rupagana Event - Interactive simulation for pandemic management',
    tech: ['Simulation', 'Data Modeling', 'Web App'],
    status: 'Competition Finalist',
  },
  {
    title: 'Data Analysis Dashboard',
    description: 'Power BI powered analytics platform for data visualization and insights',
    tech: ['Power BI', 'Data Analysis', 'Visualization'],
    status: 'Certified Project',
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-gold"
        >
          Featured Projects
        </motion.h2>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="bg-card border border-border rounded-lg p-6 hover-glow group"
            >
              <div className="mb-4">
                <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
                  {project.status}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-gold-light transition-colors">
                {project.title}
              </h3>
              
              <p className="text-foreground mb-4">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-muted text-muted-foreground rounded text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 pt-4 border-t border-border">
                <button className="flex items-center gap-2 text-primary hover:text-gold-light transition-colors">
                  <Github size={18} />
                  <span className="text-sm">Code</span>
                </button>
                <button className="flex items-center gap-2 text-primary hover:text-gold-light transition-colors">
                  <ExternalLink size={18} />
                  <span className="text-sm">Demo</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
