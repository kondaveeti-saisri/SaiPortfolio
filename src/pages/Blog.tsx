import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

const blogPosts = [
  {
    title: 'My Journey into Data Science',
    date: 'March 15, 2024',
    readTime: '5 min read',
    excerpt: 'How I discovered my passion for data science and the path I took to pursue it...',
    category: 'Career',
  },
  {
    title: 'Lessons from My First Hackathon',
    date: 'February 20, 2024',
    readTime: '7 min read',
    excerpt: 'Key takeaways from the 24-hour hackathon experience at PSCMR College...',
    category: 'Experience',
  },
  {
    title: 'Building Projects That Matter',
    date: 'January 10, 2024',
    readTime: '6 min read',
    excerpt: 'Why I focus on creating projects that solve real-world problems...',
    category: 'Projects',
  },
  {
    title: 'The Power of Continuous Learning',
    date: 'December 5, 2023',
    readTime: '4 min read',
    excerpt: 'My approach to staying updated in the fast-paced tech world...',
    category: 'Learning',
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

                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar size={16} />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={16} />
                    {post.readTime}
                  </span>
                </div>

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
