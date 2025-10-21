import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

const blogPosts = [
  {
    title: 'Hackathon Experience ',
    excerpt: ' Participated in my first-ever 24 hours National Level Hacthon held at PSCMR college.',
    
  },
  {
    title: 'Algo Arena',
    excerpt: 'Algo Arena coding event organized by VVIT college.It was a challenging yet rewarding experience.',
    
  },
  {
    title: 'Amaravathi Quantum Valley Hacthon',
    excerpt: 'AQVH was more than just coding- it was about creativity and problem-solving.',
    
  },
  
];

const Blog = () => {
  useSmoothScroll();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-gold">
              Blog & Insights
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Sharing my experiences, learnings, and thoughts on data science, development, and innovation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {blogPosts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-card border border-border rounded-lg p-6 hover-glow group cursor-pointer"
              >
                <div className="mb-4">
                  <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
                    {post.category}
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-primary mb-3 group-hover:text-gold-light transition-colors">
                  {post.title}
                </h2>

                <p className="text-foreground mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                

                <div className="flex items-center gap-2 text-primary group-hover:text-gold-light transition-colors">
                  <span className="font-semibold">Read More</span>
                  <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
