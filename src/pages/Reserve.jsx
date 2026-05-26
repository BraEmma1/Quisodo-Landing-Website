import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';

export default function Reserve() {
  const navigate = useNavigate();
  const location = useLocation();

  // State values matching transactional screen
  const [checkIn, setCheckIn] = useState('2024-10-15');
  const [checkOut, setCheckOut] = useState('2024-10-20');
  const [adults, setAdults] = useState(2);
  const [childrenCount, setChildrenCount] = useState(0);
  const [showGuestMenu, setShowGuestMenu] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(location.state?.room || 'river-suite'); // 'river-suite' or 'canopy-villa'
  const [isReserved, setIsReserved] = useState(false);
  const [isReserving, setIsReserving] = useState(false);

  // Room details mapping
  const rooms = {
    'river-suite': {
      title: 'The River Suite',
      price: 850,
      size: '85 SQM',
      bed: 'KING BED',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC12tk30eZQ1XiU0-40tisLlR36K-UYvVSbWi6SwxBDeeghKqUH_hUD2RNHlvUX8ltuQek6W-IrEGLI1FdOEsgvb31blncMmWzxZHmW8Jh5srBxHfGHSJkuXPfm0d2FcKH2QfJEb8gtjM4OWlV0GLR_J3wDiGkIkKb7zjGZKl5bM6p8CN_TCQW667z4uwVPDoHT0enslY3ADmmQpcdw7O06daqnEhivnOBaKSnZlgbN-r3XCRCoVFyAgfiq8E2DY3tZPlzfLj5t-kJ2',
      description: 'Expansive views of the Volta, private plunge pool, and bespoke furnishings in deep navy and natural stone.'
    },
    'canopy-villa': {
      title: 'Canopy Villa',
      price: 1200,
      size: '120 SQM',
      bed: 'KING BED',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAEZ0KAWqxAmnb0GVb7cAexyJbCD0vIc7mkO4rOOc3343iCOxeOTbOlgrcjBUC-kdkd4KKnCHIN3KZ-qhXPwYgN_bT5rhTLFmxD7dpS8GGWXXSe9GcsLG8c4LXYdcqFSQ-9gASOVy3YxhGhrw4MIvQ8h0rXgVsi40sqXGzRg88_qTlOoj3ixMCUJM80R-W4l99r1uzbdOEQDlM6iet5aDoW3VOutd8dy3kLPlkGVl2Y2nzRRUKsdnKaqQIbQB6iz9m_UY-VkSu9PeSn',
      description: 'Elevated among the ancient trees, offering complete privacy and an immersive connection with nature.'
    }
  };

  // Compute number of nights
  const [nights, setNights] = useState(5);
  useEffect(() => {
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const difference = end.getTime() - start.getTime();
    const computedNights = Math.round(difference / (1000 * 60 * 60 * 24));
    setNights(computedNights > 0 ? computedNights : 1);
  }, [checkIn, checkOut]);

  // Booking calculations
  const activeRoom = rooms[selectedRoom];
  const subtotal = activeRoom.price * nights;
  const taxes = Math.round(subtotal * 0.10); // 10% taxes & fees
  const total = subtotal + taxes;

  const handleCompleteBooking = () => {
    setIsReserving(true);
    setTimeout(() => {
      setIsReserving(false);
      setIsReserved(true);
    }, 1500);
  };

  // Format date helper: "Oct 15, 2024"
  const formatDateString = (dateStr) => {
    try {
      const dateObj = new Date(dateStr);
      return dateObj.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        timeZone: 'UTC' // Keep date exact as inputted without local TZ offset shift
      });
    } catch (e) {
      return dateStr;
    }
  };

  return (
    <div className="min-h-screen bg-background text-on-surface font-body-md text-body-md antialiased pb-section-gap">
      {/* Minimal Header for Transactional Flow */}
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop py-8 max-w-container-max mx-auto bg-surface/90 backdrop-blur-2xl border-b border-outline-variant/10">
        <span 
          onClick={() => navigate('/')} 
          className="font-headline-md text-headline-md tracking-[0.2em] text-on-surface hover:text-primary transition-colors cursor-pointer select-none"
        >
          QUISODO
        </span>
        <button 
          onClick={() => navigate(-1)} 
          className="text-on-surface-variant font-label-caps text-label-caps hover:text-primary transition-colors uppercase cursor-pointer"
        >
          Cancel
        </button>
      </header>

      {/* Main Reservation Canvas */}
      <main className="pt-[140px] px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full flex flex-col lg:flex-row gap-gutter relative">
        {isReserved ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center py-24 bg-surface-container-low/30 backdrop-blur-md border border-outline-variant/10 rounded-xl max-w-4xl mx-auto w-full animate-fadeIn px-6">
            <span className="material-symbols-outlined text-7xl text-tertiary mb-6">sailing</span>
            <h1 className="font-headline-lg text-4xl md:text-headline-lg text-on-surface mb-4">Sanctuary Reserved</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mb-12">
              Your escape to the Volta River is secured. A concierge representative will review your request and send confirmation along with custom excursion itineraries to your email shortly.
            </p>
            <div className="border-t border-b border-outline-variant/20 py-6 mb-12 w-full max-w-md text-left space-y-4">
              <div className="flex justify-between font-label-caps text-label-caps text-on-surface-variant">
                <span>Room</span>
                <span className="text-on-surface">{activeRoom.title}</span>
              </div>
              <div className="flex justify-between font-label-caps text-label-caps text-on-surface-variant">
                <span>Stay</span>
                <span className="text-on-surface">{formatDateString(checkIn)} — {formatDateString(checkOut)} ({nights} Nights)</span>
              </div>
              <div className="flex justify-between font-label-caps text-label-caps text-on-surface-variant">
                <span>Guests</span>
                <span className="text-on-surface">{adults} Adults, {childrenCount} Children</span>
              </div>
              <div className="flex justify-between font-label-caps text-label-caps text-on-surface-variant pt-2 border-t border-outline-variant/10 text-tertiary">
                <span>Total Amount Charged</span>
                <span className="font-headline-md text-xl font-bold">${total.toLocaleString()}</span>
              </div>
            </div>
            <button
              onClick={() => navigate('/')}
              className="font-label-caps text-label-caps border border-outline px-8 py-4 text-on-surface hover:bg-secondary hover:text-on-secondary transition-all duration-300 uppercase tracking-widest cursor-pointer"
            >
              Return to Shore
            </button>
          </div>
        ) : (
          <>
            {/* Booking Form Area */}
            <div className="flex-1 flex flex-col gap-16 lg:pr-8">
              {/* Hero Header */}
              <section className="mt-8">
                <ScrollReveal>
                  <h1 className="font-display-xl text-display-xl-mobile md:text-display-xl mb-6">
                    Reserve Your Riverside Escape
                  </h1>
                  <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
                    Curate your sanctuary experience. Select your dates, preferred accommodations, and exclusive experiences for an unforgettable stay.
                  </p>
                </ScrollReveal>
              </section>

              {/* Step 1: Dates & Guests */}
              <section className="bg-surface-container-low/50 backdrop-blur-md p-8 md:p-12 border border-outline-variant/10 rounded-xl flex flex-col gap-10">
                <div className="flex items-center gap-4 border-b border-outline-variant/20 pb-4">
                  <span className="font-label-caps text-label-caps text-tertiary">01</span>
                  <h2 className="font-display-xl text-xl sm:text-2xl text-on-surface tracking-wide">Dates &amp; Guests</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  {/* Check-in */}
                  <div className="flex flex-col gap-2">
                    <label className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest text-[10px]">
                      Check-in
                    </label>
                    <input 
                      className="bg-transparent border-0 border-b border-inverse-surface/30 px-0 py-4 text-body-lg font-body-lg text-on-surface focus:ring-0 focus:border-tertiary focus:outline-none transition-colors" 
                      type="date" 
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                    />
                  </div>
                  
                  {/* Check-out */}
                  <div className="flex flex-col gap-2">
                    <label className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest text-[10px]">
                      Check-out
                    </label>
                    <input 
                      className="bg-transparent border-0 border-b border-inverse-surface/30 px-0 py-4 text-body-lg font-body-lg text-on-surface focus:ring-0 focus:border-tertiary focus:outline-none transition-colors" 
                      type="date" 
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                    />
                  </div>

                  {/* Guests Selector */}
                  <div className="flex flex-col gap-2 md:col-span-2 relative">
                    <label className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest text-[10px]">
                      Guests
                    </label>
                    <div 
                      onClick={() => setShowGuestMenu(!showGuestMenu)} 
                      className="flex items-center justify-between border-b border-inverse-surface/30 py-4 cursor-pointer hover:border-tertiary transition-colors"
                    >
                      <span className="font-body-lg text-body-lg text-on-surface">
                        {adults} Adults, {childrenCount} Children
                      </span>
                      <span className="material-symbols-outlined text-outline transition-transform duration-300">
                        {showGuestMenu ? 'expand_less' : 'expand_more'}
                      </span>
                    </div>

                    {/* Expandable Guest Menu */}
                    {showGuestMenu && (
                      <div className="absolute top-[80px] left-0 w-full bg-surface-container border border-outline-variant/20 p-6 rounded-lg shadow-xl z-20 flex flex-col gap-6 animate-fadeIn">
                        {/* Adults Row */}
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="font-label-caps text-label-caps text-on-surface uppercase">Adults</p>
                            <p className="font-body-md text-xs text-on-surface-variant">Ages 18 or older</p>
                          </div>
                          <div className="flex items-center gap-4">
                            <button 
                              type="button"
                              onClick={() => setAdults(Math.max(1, adults - 1))}
                              className="w-8 h-8 rounded-full border border-outline flex items-center justify-center hover:bg-surface-container-high transition-colors"
                            >
                              -
                            </button>
                            <span className="font-body-lg text-lg w-4 text-center">{adults}</span>
                            <button 
                              type="button"
                              onClick={() => setAdults(Math.min(4, adults + 1))}
                              className="w-8 h-8 rounded-full border border-outline flex items-center justify-center hover:bg-surface-container-high transition-colors"
                            >
                              +
                            </button>
                          </div>
                        </div>

                        {/* Children Row */}
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="font-label-caps text-label-caps text-on-surface uppercase">Children</p>
                            <p className="font-body-md text-xs text-on-surface-variant">Ages 0 to 17</p>
                          </div>
                          <div className="flex items-center gap-4">
                            <button 
                              type="button"
                              onClick={() => setChildrenCount(Math.max(0, childrenCount - 1))}
                              className="w-8 h-8 rounded-full border border-outline flex items-center justify-center hover:bg-surface-container-high transition-colors"
                            >
                              -
                            </button>
                            <span className="font-body-lg text-lg w-4 text-center">{childrenCount}</span>
                            <button 
                              type="button"
                              onClick={() => setChildrenCount(Math.min(3, childrenCount + 1))}
                              className="w-8 h-8 rounded-full border border-outline flex items-center justify-center hover:bg-surface-container-high transition-colors"
                            >
                              +
                            </button>
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={() => setShowGuestMenu(false)}
                          className="font-label-caps text-label-caps text-tertiary border border-outline-variant px-4 py-2 hover:bg-surface-container-high self-end text-[10px] uppercase transition-colors"
                        >
                          Apply
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </section>

              {/* Step 2: Accommodations */}
              <section className="flex flex-col gap-10">
                <div className="flex items-center gap-4 border-b border-outline-variant/20 pb-4">
                  <span className="font-label-caps text-label-caps text-tertiary">02</span>
                  <h2 className="font-display-xl text-xl sm:text-2xl text-on-surface tracking-wide">Accommodations</h2>
                </div>
                
                <div className="grid grid-cols-1 gap-8">
                  {/* Room Card 1 */}
                  <div 
                    onClick={() => setSelectedRoom('river-suite')} 
                    className={`group relative flex flex-col md:flex-row gap-6 bg-surface-container-low/50 backdrop-blur-md p-4 rounded-xl transition-all duration-500 border cursor-pointer ${
                      selectedRoom === 'river-suite' ? 'border-tertiary shadow-lg' : 'border-outline-variant/15 hover:border-outline/40'
                    }`}
                  >
                    <div className="w-full md:w-1/3 aspect-[4/3] md:aspect-square overflow-hidden rounded-lg relative">
                      <div className={`absolute inset-0 transition-colors duration-500 z-10 ${selectedRoom === 'river-suite' ? 'bg-transparent' : 'bg-black/20 group-hover:bg-transparent'}`}></div>
                      <img 
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
                        alt="The River Suite bedroom view" 
                        src={rooms['river-suite'].image}
                      />
                    </div>
                    
                    <div className="flex-1 py-2 pr-4 flex flex-col justify-between">
                      <div>
                        <h3 className="font-headline-lg-mobile text-2xl md:text-headline-lg-mobile mb-2">
                          {rooms['river-suite'].title}
                        </h3>
                        <p className="font-body-md text-body-md text-on-surface-variant mb-4">
                          {rooms['river-suite'].description}
                        </p>
                        <ul className="flex flex-wrap gap-x-6 gap-y-2 mb-6">
                          <li className="flex items-center gap-2 font-label-caps text-label-caps text-on-surface-variant">
                            <span className="material-symbols-outlined text-[16px]">square_foot</span> 
                            {rooms['river-suite'].size}
                          </li>
                          <li className="flex items-center gap-2 font-label-caps text-label-caps text-on-surface-variant">
                            <span className="material-symbols-outlined text-[16px]">king_bed</span> 
                            {rooms['river-suite'].bed}
                          </li>
                        </ul>
                      </div>
                      
                      <div className="flex items-end justify-between mt-auto border-t border-outline-variant/20 pt-4">
                        <div>
                          <span className="block font-label-caps text-label-caps text-on-surface-variant mb-1 uppercase text-[10px]">
                            From
                          </span>
                          <span className="font-headline-md text-xl md:text-headline-md">
                            ${rooms['river-suite'].price}<span className="font-body-md text-body-md text-on-surface-variant">/night</span>
                          </span>
                        </div>
                        <button 
                          type="button"
                          className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
                            selectedRoom === 'river-suite' 
                              ? 'bg-tertiary border-tertiary text-on-tertiary' 
                              : 'border-outline hover:bg-surface-container-high'
                          }`}
                        >
                          <span className="material-symbols-outlined text-[18px]">
                            {selectedRoom === 'river-suite' ? 'check' : 'add'}
                          </span>
                        </button>
                      </div>
                    </div>

                    {/* Selection Indicator */}
                    {selectedRoom === 'river-suite' && (
                      <div className="absolute top-6 right-6 w-6 h-6 rounded-full border-2 border-tertiary flex items-center justify-center bg-tertiary text-on-tertiary animate-scaleIn">
                        <span className="material-symbols-outlined text-[16px]">check</span>
                      </div>
                    )}
                  </div>

                  {/* Room Card 2 */}
                  <div 
                    onClick={() => setSelectedRoom('canopy-villa')} 
                    className={`group relative flex flex-col md:flex-row gap-6 bg-surface-container-low/50 backdrop-blur-md p-4 rounded-xl transition-all duration-500 border cursor-pointer ${
                      selectedRoom === 'canopy-villa' ? 'border-tertiary shadow-lg' : 'border-outline-variant/15 hover:border-outline/40'
                    }`}
                  >
                    <div className="w-full md:w-1/3 aspect-[4/3] md:aspect-square overflow-hidden rounded-lg relative">
                      <div className={`absolute inset-0 transition-colors duration-500 z-10 ${selectedRoom === 'canopy-villa' ? 'bg-transparent' : 'bg-black/40 group-hover:bg-transparent'}`}></div>
                      <img 
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
                        alt="Canopy Villa elevated sanctuary view" 
                        src={rooms['canopy-villa'].image}
                      />
                    </div>
                    
                    <div className="flex-1 py-2 pr-4 flex flex-col justify-between">
                      <div>
                        <h3 className="font-headline-lg-mobile text-2xl md:text-headline-lg-mobile mb-2">
                          {rooms['canopy-villa'].title}
                        </h3>
                        <p className="font-body-md text-body-md text-on-surface-variant mb-4">
                          {rooms['canopy-villa'].description}
                        </p>
                        <ul className="flex flex-wrap gap-x-6 gap-y-2 mb-6">
                          <li className="flex items-center gap-2 font-label-caps text-label-caps text-on-surface-variant">
                            <span className="material-symbols-outlined text-[16px]">square_foot</span> 
                            {rooms['canopy-villa'].size}
                          </li>
                          <li className="flex items-center gap-2 font-label-caps text-label-caps text-on-surface-variant">
                            <span className="material-symbols-outlined text-[16px]">king_bed</span> 
                            {rooms['canopy-villa'].bed}
                          </li>
                        </ul>
                      </div>
                      
                      <div className="flex items-end justify-between mt-auto border-t border-outline-variant/20 pt-4">
                        <div>
                          <span className="block font-label-caps text-label-caps text-on-surface-variant mb-1 uppercase text-[10px]">
                            From
                          </span>
                          <span className="font-headline-md text-xl md:text-headline-md">
                            ${rooms['canopy-villa'].price}<span className="font-body-md text-body-md text-on-surface-variant">/night</span>
                          </span>
                        </div>
                        <button 
                          type="button"
                          className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
                            selectedRoom === 'canopy-villa' 
                              ? 'bg-tertiary border-tertiary text-on-tertiary' 
                              : 'border-outline hover:bg-surface-container-high'
                          }`}
                        >
                          <span className="material-symbols-outlined text-[18px]">
                            {selectedRoom === 'canopy-villa' ? 'check' : 'add'}
                          </span>
                        </button>
                      </div>
                    </div>

                    {/* Selection Indicator */}
                    {selectedRoom === 'canopy-villa' && (
                      <div className="absolute top-6 right-6 w-6 h-6 rounded-full border-2 border-tertiary flex items-center justify-center bg-tertiary text-on-tertiary animate-scaleIn">
                        <span className="material-symbols-outlined text-[16px]">check</span>
                      </div>
                    )}
                  </div>
                </div>
              </section>
            </div>

            {/* Summary Sidebar (Sticky) */}
            <aside className="w-full lg:w-[400px] mt-16 lg:mt-0 relative">
              <div className="sticky top-[140px] bg-surface-container-low/50 backdrop-blur-md p-8 rounded-xl border border-outline-variant/15 flex flex-col gap-8">
                <div>
                  <h3 className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest mb-6 text-[10px]">
                    Reservation Summary
                  </h3>
                  
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h4 className="font-headline-md text-headline-md mb-1">
                        {activeRoom.title}
                      </h4>
                      <p className="font-body-md text-body-md text-on-surface-variant">
                        {adults} Adults {childrenCount > 0 ? `, ${childrenCount} Children` : ''}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 border-y border-outline-variant/20 py-6 mb-6">
                    <div className="flex-1">
                      <span className="block font-label-caps text-label-caps text-on-surface-variant mb-1 uppercase text-[10px]">
                        Check In
                      </span>
                      <span className="font-body-lg text-body-lg text-on-surface">
                        {formatDateString(checkIn)}
                      </span>
                    </div>
                    <div className="w-px bg-outline-variant/20"></div>
                    <div className="flex-1 pl-4">
                      <span className="block font-label-caps text-label-caps text-on-surface-variant mb-1 uppercase text-[10px]">
                        Check Out
                      </span>
                      <span className="font-body-lg text-body-lg text-on-surface">
                        {formatDateString(checkOut)}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4 font-body-md text-body-md">
                    <div className="flex justify-between">
                      <span className="text-on-surface-variant">
                        ${activeRoom.price} x {nights} night{nights > 1 ? 's' : ''}
                      </span>
                      <span className="text-on-surface">
                        ${subtotal.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-on-surface-variant">
                        Taxes &amp; Fees (10%)
                      </span>
                      <span className="text-on-surface">
                        ${taxes.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="border-t border-outline-variant/20 pt-6">
                  <div className="flex justify-between items-end mb-8">
                    <span className="font-label-caps text-label-caps text-on-surface-variant uppercase text-[10px]">
                      Total
                    </span>
                    <span className="font-headline-lg-mobile text-2xl md:text-headline-lg-mobile text-tertiary">
                      ${total.toLocaleString()}
                    </span>
                  </div>
                  
                  <button 
                    onClick={handleCompleteBooking}
                    disabled={isReserving}
                    className="w-full py-4 border border-outline text-on-surface font-label-caps text-label-caps uppercase tracking-[0.2em] hover:bg-secondary hover:text-on-secondary hover:border-secondary transition-colors duration-500 cursor-pointer disabled:opacity-50 select-none text-[11px]"
                  >
                    {isReserving ? 'Processing...' : 'Complete Reservation'}
                  </button>
                  <p className="text-center font-body-md text-[11px] text-on-surface-variant mt-4">
                    You won't be charged yet.
                  </p>
                </div>
              </div>
            </aside>
          </>
        )}
      </main>
    </div>
  );
}
