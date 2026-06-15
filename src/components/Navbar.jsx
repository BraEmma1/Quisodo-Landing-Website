import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import quisodoLogo from '../assets/Optimized images/quisodo logo.png';

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
        className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-500 ease-in-out px-margin-mobile lg:px-margin-desktop ${isVisible ? 'translate-y-0' : '-translate-y-full'
          } ${isScrolled && !isOpen
            ? 'glassmorphism border-b border-outline-variant/10 shadow-lg py-4'
            : 'bg-transparent py-8'
          }`}
      >
        <div className="grid grid-cols-3 lg:grid-cols-[1fr_auto_1fr] items-center max-w-[1440px] mx-auto w-full">
          {/* Hamburger (Order 3 on mobile (Right), hidden on desktop) */}
          <div className="flex order-3 lg:hidden justify-end">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`flex flex-col gap-1.5 justify-center items-center w-8 h-8 relative z-50 cursor-pointer focus:outline-none ${isOpen
                ? 'text-on-surface'
                : (isTransparentDark ? 'text-white hover:text-tertiary' : 'text-on-surface hover:text-primary')
                }`}
              aria-label="Toggle Menu"
            >
              <span
                className={`w-6 h-[1.5px] bg-current transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[7.5px]' : ''
                  }`}
              />
              <span
                className={`w-6 h-[1.5px] bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : ''
                  }`}
              />
              <span
                className={`w-6 h-[1.5px] bg-current transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-[7.5px]' : ''
                  }`}
              />
            </button>
          </div>

          {/* Brand Logo (Centered on mobile, Left on desktop) */}
          <div className="flex order-2 lg:order-1 justify-center lg:justify-start">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className={`transition-all duration-500 scale-95 hover:scale-100 ease-in-out select-none relative z-50 ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
                }`}
            >
              <img
                src={quisodoLogo}
                alt="Quisodo Landing"
                className={`h-16 w-auto object-contain transition-all duration-500 ${isTransparentDark && !isOpen
                  ? 'brightness-0 invert opacity-90 hover:opacity-100'
                  : 'brightness-0 invert opacity-80 hover:opacity-100 dark:brightness-0 dark:invert'
                  }`}
              />
            </Link>
          </div>

          {/* Expanded Desktop Menu (Middle on desktop, Hidden on mobile) */}
          <div className="hidden lg:flex lg:order-2 justify-center items-center gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.path}
                className={({ isActive }) =>
                  `font-label-caps text-label-caps tracking-[0.2em] uppercase border-b border-transparent pb-1 transition-all duration-300 cursor-pointer ${isActive
                    ? (isTransparentDark ? 'text-white border-white' : 'text-primary border-primary')
                    : (isTransparentDark ? 'text-white/70 hover:text-white hover:border-white/40' : 'text-on-surface-variant hover:text-primary hover:border-primary/40')
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Theme Toggle & Reserve (Order 1 on mobile (Left), Order 3 on desktop (Right)) */}
          <div className="flex order-1 lg:order-3 justify-start lg:justify-end items-center gap-4">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`p-2 transition-all duration-500 focus:outline-none cursor-pointer flex items-center justify-center relative z-50 ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
                } ${isTransparentDark && !isOpen
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
              className={`hidden lg:inline-block font-label-caps text-label-caps border transition-all duration-500 ease-in-out active:scale-95 px-6 py-3 relative z-50 ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
                } ${isTransparentDark
                  ? 'text-white border-white/30 hover:bg-white hover:text-black hover:border-white'
                  : 'text-on-surface border-outline hover:bg-secondary hover:text-on-secondary hover:border-secondary'
                }`}
            >
              Reserve
            </button>
          </div>
        </div>
      </nav>

      {/* Slide-out Menu Drawer (Now open on all viewports, including desktop) */}
      <div
        className={`fixed inset-0 z-40 bg-surface/95 backdrop-blur-2xl transition-all duration-500 overflow-y-auto ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
      >
        <div className="flex flex-col justify-center items-center min-h-full w-full gap-4 md:gap-6 px-margin-mobile pt-32 pb-16">
          {navItems.map((item, idx) => (
            <Link
              key={item.label}
              to={item.path}
              onClick={() => setIsOpen(false)}
              style={{ transitionDelay: isOpen ? `${idx * 60}ms` : '0ms' }}
              className={`font-display-xl text-2xl min-[360px]:text-3xl sm:text-4xl md:text-5xl lg:text-[54px] tracking-widest text-on-surface hover:text-primary transition-all duration-500 transform ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
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
            style={{ transitionDelay: isOpen ? `${navItems.length * 60}ms` : '0ms' }}
            className={`w-full max-w-xs mt-8 border border-tertiary bg-tertiary text-on-tertiary py-3.5 font-label-caps text-label-caps tracking-[0.2em] uppercase hover:bg-tertiary/80 transition-all duration-500 transform cursor-pointer active:scale-95 flex items-center justify-center gap-2 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
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
