import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import FilmGrain from './FilmGrain';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // Instant scroll prevents awkward anim flashes between routes
    });
  }, [pathname]);

  return null;
}

export default function Layout({ children }) {
  const { pathname } = useLocation();

  // Define standard paths that get normal navigation
  const standardPaths = [
    '/',
    '/stay',
    '/experiences',
    '/boats',
    '/gallery',
    '/journal',
    '/reflections',
    '/story',
    '/arrival',
    '/assistance',
    '/contact',
    '/fishing'
  ];

  const isRoomDetails = pathname.startsWith('/rooms/');
  const isStandard = standardPaths.includes(pathname) || isRoomDetails;

  // Transactional flow & Error page suppression logic
  const hideNavbar = pathname === '/reserve' || pathname === '/terms' || !isStandard;
  const hideFooter = pathname === '/reserve' || !isStandard;

  return (
    <div className="relative min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden selection:bg-primary-container selection:text-primary">
      <ScrollToTop />
      <FilmGrain />
      
      {!hideNavbar && <Navbar />}
      
      {/* Main content expands to fill viewport and pushes footer down */}
      <main className={`flex-grow ${!hideNavbar ? 'pt-24' : ''}`}>
        {children}
      </main>

      {!hideFooter && <Footer />}
    </div>
  );
}
