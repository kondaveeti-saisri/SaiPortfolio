import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award } from 'lucide-react';

const certificatesData = [

  { name: 'JavaScript Certification', issuer: 'Udemy' },
  { name: 'Power BI for Data Analysis', issuer: 'VOIS' },
  { name: 'Data Science Foundations', issuer: 'Great Learning' },
  { name: 'Data Analytics Job simulation' , issuer: 'Deloitte'},
  { name: 'Advanced software engineering' , issuer: 'Walmart Globaltech'},
  { name: 'GenAI Powered DataAnalytics' , issuer: 'TATA'},
  { name: 'DataVisualisation : EmpoweringBusiness with Effective insights' , issuer:'TATA'},
  { name: 'DataScience' , issuer: 'BCGX'}
];

const Certificates = () => {
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
          Certifications
        </motion.h2>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certificatesData.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="bg-card border border-border rounded-lg p-6 hover-glow cursor-pointer group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-4 bg-primary/10 rounded-full group-hover:animate-glow-pulse">
                  <Award className="text-primary" size={32} />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">
                  {cert.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {cert.issuer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
