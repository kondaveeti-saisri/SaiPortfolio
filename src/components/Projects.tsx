import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projectsData = [
  {
    title: 'TrafficTelligence',
    description: 'TrafficTelligence: Advanced Traffic Volume Estimation with Machine Learning developed during 24-hour hackathon at PSCMR College',
    tech: ['IoT', 'Hardware', 'Safety Tech'],
    status: '24-Hours Hackathon Project',
    github: 'https://github.com/kondaveeti-saisri/traffic-telligence',
    demo: null
  },
  {
    title: 'Silent-Organizer',
    description: 'FileOrganizer is an automated tool that monitors your Downloads folder and It runs silently in the background and logs every file movement.',
    tech: ['Simulation','software development','python'],
    status: '36-hours Hacthon Project',
    github: 'https://github.com/kondaveeti-saisri/Silent-Organizer',
    demo: null
  },
  {
    title: 'Q-TrustNet',
    description: 'Q-TrustNet: we build a Q-Trust Net,It identified the Anomalies by using Federative Learning.',
    tech: ['Quantum computing', 'Federated Learning', 'Anomaly Dection'],
    status: 'Selected to Semi-finals in AQV Hackathon',
    github: 'https://github.com/kondaveeti-saisri/q-trustnet-deployment',
    demo:null 
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
          Projects
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

              {/* 
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
              */}

              <div className="flex gap-4 pt-4 border-t border-border">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:text-gold-light transition-colors"
                  >
                    <Github size={18} />
                    <span className="text-sm">Code</span>
                  </a>
                )}

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:text-gold-light transition-colors"
                  >
                    <ExternalLink size={18} />
                    <span className="text-sm">Demo</span>
                  </a>
                )}
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
