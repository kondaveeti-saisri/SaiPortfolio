import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Trophy, Award, Target } from 'lucide-react';

const achievementsData = [
  {
    title: 'Games of Code - Winner',
    organization: 'VVIT',
    description: 'Won the coding competition demonstrating excellence in problem-solving',
    icon: Trophy,
  },
  {
    title: 'Algo Arena - Top Performer',
    organization: 'VVIT',
    description: 'Strong performance in algorithmic thinking competition',
    icon: Target,
  },
  {
    title: 'Webathon Finalist',
    organization: 'Siddharth College',
    description: 'Finalist among 290+ teams showcasing web development innovation',
    icon: Award,
  },
  {
    title: 'National Hackathon',
    organization: 'PSCMR College',
    description: '24-hour hackathon experience with Smart Helmet project',
    icon: Trophy,
  },
  {
    title: 'Rupagana Event Finalist',
    organization: 'Virtual Pandemic Simulation',
    description: 'Reached finals with innovative simulation prototype',
    icon: Award,
  },
];

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-20 relative z-10 bg-card/30">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-gold"
        >
          Achievements & Experiences
        </motion.h2>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {achievementsData.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="bg-card border border-border rounded-lg p-6 hover-glow group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:animate-glow-pulse">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-primary mb-1">
                      {achievement.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {achievement.organization}
                    </p>
                    <p className="text-foreground">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
