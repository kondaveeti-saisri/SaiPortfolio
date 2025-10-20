import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Github, Linkedin, Code2 } from 'lucide-react';

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'saisrikondaveeti@gmail.com',
    href: 'mailto:saisrikondaveeti@gmail.com',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'kondaveeti-saisri',
    href: 'https://github.com/kondaveeti-saisri',
  },
  {
    icon: Code2,
    label: 'LeetCode',
    value: 'saisrikondaveeti',
    href: 'https://leetcode.com/u/saisrikondaveeti',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Coming Soon',
    href: '#',
  },
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="contact" className="py-20 relative z-10 bg-gradient-to-b from-background to-card/50">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl md:text-5xl font-bold text-center mb-8 gradient-gold"
        >
          Let's Connect
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto"
        >
          Feel free to reach out for collaborations, opportunities, or just a friendly chat about data science and development!
        </motion.p>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {contactLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-card border border-border rounded-lg p-6 hover-glow group text-center"
              >
                <div className="flex flex-col items-center">
                  <div className="mb-4 p-4 bg-primary/10 rounded-full group-hover:animate-glow-pulse">
                    <Icon className="text-primary" size={28} />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2">
                    {link.label}
                  </h3>
                  <p className="text-sm text-foreground break-all">
                    {link.value}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-12 text-muted-foreground"
        >
          <p>© 2025 K. Sai Sri Kondaveeti. All rights reserved.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
