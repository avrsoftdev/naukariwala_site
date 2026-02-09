import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X, Briefcase, User, Building2, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoUrl from '../../images/logo_nw.png';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Jobs', href: '#jobs', icon: Briefcase },
    { name: 'About', href: '#about', icon: User },
    { name: 'Contact', href: '#contact', icon: Building2 },
    { name: 'Privacy Policy', href: '/privacy', icon: Shield },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'glass glass-strong shadow-glass' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center space-x-2"
          >
            <img
              src={logoUrl}
              alt="NaukariWala Logo"
              className="w-10 h-10 object-contain"
            />
            <h1 className="text-2xl font-bold gradient-text">NaukariWala</h1>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors duration-300 hover-lift"
              >
                {item.name === 'Privacy Policy' ? (
                  <Link to={item.href} className="flex items-center space-x-2">
                    <item.icon className="w-4 h-4" />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                ) : (
                  <a href={item.href} className="flex items-center space-x-2">
                    <item.icon className="w-4 h-4" />
                    <span className="font-medium">{item.name}</span>
                  </a>
                )}
              </motion.div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="hidden md:flex items-center space-x-4"
          >
            <Button variant="ghost" className="hover-glow">
              Login
            </Button>
            <Button className="gradient-primary hover-glow shadow-primary">
              Sign Up
            </Button>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isMenuOpen ? 'auto' : 0,
            opacity: isMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-4">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors duration-300 py-2"
              >
                {item.name === 'Privacy Policy' ? (
                  <Link
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center space-x-2"
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center space-x-2"
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </a>
                )}
              </div>
            ))}
            <div className="flex flex-col space-y-2 pt-4">
              <Button variant="ghost" className="justify-start">
                Login
              </Button>
              <Button className="gradient-primary justify-start">
                Sign Up
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Navigation;
