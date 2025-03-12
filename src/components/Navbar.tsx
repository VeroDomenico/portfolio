import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItems = ['home', 'about', 'projects', 'contact'];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-surface-light/95 dark:bg-background-dark/95 shadow-lg backdrop-blur-sm border-b border-accent-light/10 dark:border-accent-dark/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-accent-light dark:text-accent-dark font-mono font-bold text-xl">DM</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <ScrollLink
                key={item}
                to={item}
                smooth={true}
                duration={500}
                offset={-64}
                className="group relative font-mono text-secondary-light dark:text-secondary-dark hover:text-accent-light dark:hover:text-accent-dark cursor-pointer capitalize transition-colors duration-200"
              >
                <span className="text-accent-light dark:text-accent-dark opacity-0 group-hover:opacity-100 absolute -left-4 transition-opacity duration-200">
                  0{index + 1}.
                </span>
                {item}
              </ScrollLink>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={toggleMobileMenu}
              className="text-secondary-light dark:text-secondary-dark hover:text-accent-light dark:hover:text-accent-dark focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-surface-light/95 dark:bg-background-dark/95 backdrop-blur-sm border-t border-accent-light/10 dark:border-accent-dark/10">
          {navItems.map((item, index) => (
            <ScrollLink
              key={item}
              to={item}
              smooth={true}
              duration={500}
              offset={-64}
              onClick={closeMobileMenu}
              className="text-secondary-light dark:text-secondary-dark hover:text-accent-light dark:hover:text-accent-dark block px-3 py-2 rounded-md text-base font-mono capitalize cursor-pointer"
            >
              <span className="text-accent-light dark:text-accent-dark mr-2">0{index + 1}.</span>
              {item}
            </ScrollLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
