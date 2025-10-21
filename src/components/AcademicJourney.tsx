import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap } from 'lucide-react';

const academicData = [
  {
    degree: 'B.Tech in CSE (AI & Data Science)',
    institution: 'Kallam Haranadha Reddy Institute of Technology',
    grade: 'Grade: A',
    year: '2023 - 2027',
  },
  {
    degree: 'Intermediate (MPC)',
    institution: 'Junior College for Girls',
    grade: 'Grade: A',
    year: '2021 - 2023',
  },
  {
    degree: 'High School',
    institution: 'Z.P. High School',
    grade: 'GPA: 9.8',
    year: '2017 - 2021',
  },
];

const AcademicJourney = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="academic" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-gold"
        >
          Academic Journey
        </motion.h2>

        <div ref={ref} className="max-w-4xl mx-auto space-y-8">
          {academicData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative bg-card border border-border rounded-lg p-6 hover-glow"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="text-primary" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-primary mb-2">
                    {item.degree}
                  </h3>
                  <p className="text-foreground mb-1">{item.institution}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span>{item.grade}</span>
                    <span>•</span>
                    <span>{item.year}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademicJourney;
