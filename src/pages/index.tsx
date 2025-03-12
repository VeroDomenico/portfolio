import { Inter } from 'next/font/google';
import Typewriter from '../components/Typewrite';
import AboutMe from '@/components/AboutMe';
import ProjectsSkills from '@/components/projectsSkills';
import ContactMeFooter from '@/components/ContactMeFooter';
import Navbar from '@/components/Navbar';
import ThemeToggle from '@/components/ThemeToggle';
import { Element } from 'react-scroll';
import { useEffect, useState } from 'react';
import { useTheme } from '@/context/ThemeContext';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`flex flex-col min-h-screen bg-background-light dark:bg-background-dark transition-colors duration-300`}>
      <Navbar isScrolled={isScrolled} />
      <ThemeToggle />

      {/* Hero Section */}
      <Element name="home" className="min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="space-y-6 animate-fade-in">
            <p className="text-accent-light dark:text-accent-dark font-mono text-lg">Hi, my name is</p>
            <h1 className="text-4xl sm:text-6xl font-bold text-text-light dark:text-text-dark mb-2 animate-slide-down">
              Dominic Meconi
            </h1>
            <h2 className="text-3xl sm:text-5xl font-bold text-secondary-light dark:text-secondary-dark mb-6 animate-slide-down" style={{ animationDelay: '100ms' }}>
              I build things for the web.
            </h2>
            <div className="text-xl text-secondary-light dark:text-secondary-dark max-w-2xl animate-slide-up" style={{ animationDelay: '200ms' }}>
              <Typewriter 
                messages={['Software Engineer', 'Full Stack Developer', 'Tech Innovator', 'Entrepreneur', 'Game Developer']} 
                className="font-light"
              />
            </div>
            <div className="mt-12 flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '300ms' }}>
              <a
                href="#about"
                className="px-8 py-4 border-2 border-accent-light dark:border-accent-dark text-accent-light dark:text-accent-dark hover:bg-accent-light/10 dark:hover:bg-accent-dark/10 rounded-lg font-mono transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-8 py-4 bg-transparent border-2 border-secondary-light dark:border-secondary-dark text-secondary-light dark:text-secondary-dark hover:text-hover-light dark:hover:text-hover-dark hover:border-hover-light dark:hover:border-hover-dark rounded-lg font-mono transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </Element>

      {/* About Section */}
      <Element name="about" className="py-32 bg-surface-light dark:bg-surface-dark transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 animate-slide-up">
          <h2 className="text-2xl font-bold text-text-light dark:text-text-dark mb-8 font-mono flex items-center">
            <span className="text-accent-light dark:text-accent-dark mr-2">01.</span>
            <span className="relative">
              About Me
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-accent-light/20 dark:bg-accent-dark/20"></span>
            </span>
          </h2>
          <AboutMe />
        </div>
      </Element>

      {/* Projects Section */}
      <Element name="projects" className="py-32 bg-background-light dark:bg-background-dark transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 animate-slide-up">
          <h2 className="text-2xl font-bold text-text-light dark:text-text-dark mb-8 font-mono flex items-center">
            <span className="relative">
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-accent-light/20 dark:bg-accent-dark/20"></span>
            </span>
          </h2>
          <ProjectsSkills />
        </div>
      </Element>

      {/* Contact Section */}
      <Element name="contact" className="py-32 bg-surface-light dark:bg-surface-dark transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 animate-slide-up">
          <h2 className="text-2xl font-bold text-text-light dark:text-text-dark mb-8 font-mono flex items-center">
            <span className="text-accent-light dark:text-accent-dark mr-2">03.</span>
            <span className="relative">
              Get in Touch
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-accent-light/20 dark:bg-accent-dark/20"></span>
            </span>
          </h2>
          <ContactMeFooter />
        </div>
      </Element>
    </div>
  );
}