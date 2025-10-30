import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award } from 'lucide-react';

const certificatesData = [

  { name: 'JavaScript Certification', issuer: 'Udemy' , driveLink: "https://drive.google.com/file/d/11yRQozXTEMJwkwX0jSVX21ZixlovQb05/preview" },
  { name: 'Power BI for Data Analysis', issuer: 'VOIS', driveLink: "https://drive.google.com/uc?export=view&id=1b_mpUK9Ec4bIAcly43vnpk87zoudFlhM"},
  { name: 'Data Science Foundations', issuer: 'Great Learning', driveLink: "https://drive.google.com/file/d/1Yh4GYpbZ2eHWtgDgZykMpjVRH9_JeBv7/preview" },
  { name: 'Data Analytics Job simulation' , issuer: 'Deloitte' , driveLink: "https://drive.google.com/file/d/10X_er4yEm2qzCsIjOjx7S1lcdSPnsa6w/view"},
  { name: 'Advanced software engineering' , issuer: 'Walmart Globaltech' , driveLink: "https://drive.google.com/file/d/16-kI8N9bLkwxXUz9zuF919cl-lZ1kT_3/view"},
  { name: 'Top Performer in Academics' , issuer: 'KHIT' , driveLink: "https://drive.usercontent.google.com/download?id=1TgMNrVzv87vlBdEixowoq-Hy6m7FPGPt&export=view&authuser=0"}
  
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
              onClick={() => {
                if (cert.driveLink) {
                  window.open(cert.driveLink,'_blank','noopener,noreferr');
                }
              }}
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
