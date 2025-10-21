import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/#home' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/#contact' },
  ];

  const handleNavClick = (path: string) => {
    // If link is a section link (e.g. "/#contact")
    if (path.includes('#')) {
      const [base, hash] = path.split('#');

      if (location.pathname !== base) {
        // Navigate to base page first, then scroll after small delay
        navigate(base);
        setTimeout(() => {
          const section = document.getElementById(hash);
          if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
          }
        }, 300);
      } else {
        // Already on the same page → just scroll
        const section = document.getElementById(hash);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      // Regular navigation (e.g. /blog)
      navigate(path);
    }

    setMobileOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? 'bg-background/80 backdrop-blur-lg border-b border-border'
          : 'bg-transparent'
        }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="text-2xl font-bold text-primary hover:text-gold-light transition-colors"
          >
            SS
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => handleNavClick(link.path)}
                className={`text-foreground hover:text-primary transition-colors relative group ${location.pathname === link.path ? 'text-primary' : ''
                  }`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-foreground hover:text-primary transition-colors"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 pb-4 flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => handleNavClick(link.path)}
                className={`text-foreground hover:text-primary transition-colors ${location.pathname === link.path ? 'text-primary' : ''
                  }`}
              >
                {link.name}
              </button>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation;
