import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollY = useRef(0);
  const navigate = useNavigate();
  const location = useLocation();

  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) return savedTheme;
      return 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Scroll handler for hiding/revealing navbar and applying scrolled styling
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Scrolled background styling threshold
      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navItems = [
    { label: 'Stay', path: '/stay' },
    { label: 'Experiences', path: '/experiences' },
    { label: 'Fishing', path: '/fishing' },
    { label: 'Boats', path: '/boats' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Journal', path: '/journal' },
    { label: 'Contact', path: '/contact' },
  ];



  // Determine if transparent navbar is sitting over a dark hero banner (regardless of current theme mode)
  const hasDarkHero = ['/', '/fishing', '/experiences', '/boats', '/arrival', '/story'].includes(location.pathname) || location.pathname.startsWith('/room/');
  const isTransparentDark = !isScrolled && hasDarkHero;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-500 ease-in-out px-margin-mobile lg:px-margin-desktop ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        } ${
          isScrolled && !isOpen
            ? 'glassmorphism border-b border-outline-variant/10 shadow-lg py-4' 
            : 'bg-transparent py-8'
        }`}
      >
        <div className="flex justify-between items-center max-w-[1440px] mx-auto w-full">
          {/* Brand Wordmark */}
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className={`font-display-xl text-headline-md tracking-[0.25em] transition-all duration-500 scale-95 hover:scale-100 ease-in-out select-none ${
              isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
            } ${
              isTransparentDark && !isOpen
                ? 'text-white hover:text-tertiary' 
                : 'text-on-surface hover:text-primary'
            }`}
          >
            QUISODO
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex gap-6 xl:gap-gutter items-center">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.path}
                className={({ isActive }) => {
                  let linkColor = '';
                  if (isActive) {
                    linkColor = isTransparentDark 
                      ? 'text-white after:scale-x-100' 
                      : 'text-primary after:scale-x-100';
                  } else {
                    linkColor = isTransparentDark 
                      ? 'text-white/70 hover:text-white' 
                      : 'text-on-surface-variant hover:text-on-surface';
                  }
                  return `font-label-caps text-label-caps transition-all duration-500 relative py-2 ${linkColor} after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-tertiary after:scale-x-0 after:origin-center hover:after:scale-x-100 after:transition-transform after:duration-500`;
                }}
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Reserve Button & Hamburger */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`p-2 transition-all duration-500 focus:outline-none cursor-pointer flex items-center justify-center mr-1 ${
                isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
              } ${
                isTransparentDark 
                  ? 'text-white/90 hover:text-white' 
                  : 'text-on-surface hover:text-primary'
              }`}
              aria-label="Toggle Theme"
            >
              <span className="material-symbols-outlined text-[22px]">
                {theme === 'dark' ? 'light_mode' : 'dark_mode'}
              </span>
            </button>

            <button
              onClick={() => {
                setIsOpen(false);
                navigate('/reserve');
              }}
              className={`hidden lg:inline-block font-label-caps text-label-caps border transition-all duration-500 ease-in-out active:scale-95 px-6 py-3 ${
                isTransparentDark 
                  ? 'text-white border-white/30 hover:bg-white hover:text-black hover:border-white' 
                  : 'text-on-surface border-outline hover:bg-secondary hover:text-on-secondary hover:border-secondary'
              }`}
            >
              Reserve
            </button>

            {/* Hamburger Trigger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`flex flex-col gap-1.5 lg:hidden justify-center items-center w-8 h-8 relative z-50 cursor-pointer focus:outline-none ${
                isOpen 
                  ? 'text-on-surface' 
                  : (isTransparentDark ? 'text-white hover:text-tertiary' : 'text-on-surface hover:text-primary')
              }`}
              aria-label="Toggle Mobile Menu"
            >
              <span
                className={`w-6 h-[1.5px] bg-current transition-all duration-300 ${
                  isOpen ? 'rotate-45 translate-y-[7.5px]' : ''
                }`}
              />
              <span
                className={`w-6 h-[1.5px] bg-current transition-all duration-300 ${
                  isOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`w-6 h-[1.5px] bg-current transition-all duration-300 ${
                  isOpen ? '-rotate-45 -translate-y-[7.5px]' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Slide-out Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-surface/95 backdrop-blur-2xl lg:hidden transition-all duration-500 overflow-y-auto ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col justify-start items-center min-h-full w-full gap-6 px-margin-mobile pt-32 pb-16">
          {navItems.map((item, idx) => (
            <Link
              key={item.label}
              to={item.path}
              onClick={() => setIsOpen(false)}
              style={{ transitionDelay: isOpen ? `${idx * 75}ms` : '0ms' }}
              className={`font-display-xl text-xl min-[360px]:text-2xl sm:text-3xl tracking-wider sm:tracking-widest text-on-surface hover:text-primary transition-all duration-500 transform ${
                isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
            >
              {item.label}
            </Link>
          ))}
          
          {/* Reserve CTA Button at the bottom of the list */}
          <button
            onClick={() => {
              setIsOpen(false);
              navigate('/reserve');
            }}
            style={{ transitionDelay: isOpen ? `${navItems.length * 75}ms` : '0ms' }}
            className={`w-full max-w-xs mt-6 border border-tertiary bg-tertiary text-on-tertiary py-4 font-label-caps text-label-caps tracking-[0.2em] uppercase hover:bg-tertiary/80 transition-all duration-500 transform cursor-pointer active:scale-95 flex items-center justify-center gap-2 ${
              isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <span>Reserve</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>
      </div>
    </>
  );
}
