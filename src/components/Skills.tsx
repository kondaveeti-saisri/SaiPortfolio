import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Database, Brain, Globe } from 'lucide-react';

const skillsData = [
  {
    category: 'Programming',
    icon: Code,
    skills: ['Java', 'Python', 'R', 'C', 'C++'],
  },
  {
    category: 'Web Development',
    icon: Globe,
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
  },
  {
    category: 'Data Science',
    icon: Brain,
    skills: ['Machine Learning', 'Data Analysis', 'Visualization'],
  },
  {
    category: 'Databases',
    icon: Database,
    skills: ['MySQL', 'MongoDB'],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="py-20 relative z-10 bg-card/30">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-gold"
        >
          Skills & Expertise
        </motion.h2>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-card border border-border rounded-lg p-6 hover-glow group"
              >
                <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit group-hover:animate-glow-pulse">
                  <Icon className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-muted text-foreground rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
