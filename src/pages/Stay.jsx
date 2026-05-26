import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import room3 from '../assets/Optimized images/room3.webp';
import room4 from '../assets/Optimized images/room4.webp';
import room1 from '../assets/Optimized images/room1.webp';
import room2 from '../assets/Optimized images/room2.webp';

// Custom Luxury Cross-fade Image Slider Component
function RoomImageSlider({ images, alt }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play interval
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [images.length]);

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-[400px] md:h-[480px] lg:h-[600px] group/slider overflow-hidden rounded-sm select-none">
      {images.map((img, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
        >
          <div
            className="w-full h-full bg-cover bg-center transition-transform duration-[6s] scale-100 hover:scale-105"
            style={{ backgroundImage: `url('${img}')` }}
            aria-label={`${alt} - view ${idx + 1}`}
          />
        </div>
      ))}

      {/* Decorative frame overlay */}
      <div className="absolute inset-0 border border-outline/10 m-4 pointer-events-none z-20" />

      {/* Subtle overlay gradients for movie-like contrast */}
      <div className="absolute inset-0 bg-black/20 z-20 group-hover/slider:bg-black/10 transition-all duration-700" />

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/40 text-on-surface hover:text-tertiary flex items-center justify-center backdrop-blur-sm opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300 hover:bg-black/60 active:scale-95 z-30 cursor-pointer"
        aria-label="Previous image"
      >
        <span className="material-symbols-outlined text-[20px]">chevron_left</span>
      </button>
      <button
        onClick={handleNext}
        className="absolute right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/40 text-on-surface hover:text-tertiary flex items-center justify-center backdrop-blur-sm opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300 hover:bg-black/60 active:scale-95 z-30 cursor-pointer"
        aria-label="Next image"
      >
        <span className="material-symbols-outlined text-[20px]">chevron_right</span>
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-30">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={(e) => {
              e.stopPropagation();
              setCurrentIndex(idx);
            }}
            className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${idx === currentIndex ? 'bg-tertiary w-6' : 'bg-on-surface/40 hover:bg-on-surface/75 w-1.5'
              }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Stay() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('all'); // 'all', 'suites', 'villas'
  const [isRatesOpen, setIsRatesOpen] = useState(false);
  const [selectedSeason, setSelectedSeason] = useState('green'); // 'green' or 'high'

  const accommodations = [
    {
      id: 'volta-suite',
      type: 'suite',
      title: 'The Volta Suite',
      subtitle: 'DOUBLE / TWIN / FAMILY ROOMS',
      tagline: 'IDEAL ESCAPES FOR UNWINDING WITH LOVED ONES AND FRIENDS',
      description: 'TWO SINGLE BEDS (OR LARGE KING SIZE) • EN SUITE BATHROOM WITH OUTSIDE SHOWER • TEA AND COFFEE FACILITIES • PATIO • HAIRDRYERS',
      price: 850,
      highPrice: 980,
      images: [
        room3,
        room1
      ]
    },
    {
      id: 'canopy-villa',
      type: 'villa',
      title: 'Canopy Villa',
      subtitle: 'EXCLUSIVE RIVERSIDE LUXURY',
      tagline: 'PRIVATE SANCTUARY AMONGST THE TREES',
      description: '120 SQM • PRIVATE PLUNGE POOL • KING SIZE BED • EN SUITE SPA BATHROOM • DEDICATED STUDY • OUTDOOR LOUNGE • MINI BAR • WIFI • SMART TECH',
      price: 1200,
      highPrice: 1450,
      images: [
        room4,
        room2
      ]
    }
  ];

  const filteredAccommodations = filter === 'all'
    ? accommodations
    : accommodations.filter(item => item.type === filter.slice(0, -1)); // Map 'suites' -> 'suite', 'villas' -> 'villa'

  return (
    <div className="relative w-full pb-24 pt-16 animate-fade-in">

      {/* Header section (Retrieved from Stitch Stay layout) */}
      <section className="text-center mb-32 px-margin-mobile max-w-container-max mx-auto">
        <ScrollReveal>
          <span className="font-label-caps text-label-caps text-tertiary mb-4 block tracking-[0.4em]">BOOK YOUR STAY</span>
          <h1 className="font-display-xl text-display-xl-mobile md:text-display-xl text-on-surface mb-8">
            Rooms
          </h1>
        </ScrollReveal>

        {/* Filter Navigation */}
        <ScrollReveal delay={150}>
          <div className="flex justify-center space-x-8 border-b border-outline-variant/20 pb-4 max-w-md mx-auto mb-8">
            {[
              { id: 'all', label: 'All' },
              { id: 'suites', label: 'Suites' },
              { id: 'villas', label: 'Villas' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`font-label-caps text-label-caps pb-2 relative transition-all duration-300 focus:outline-none cursor-pointer tracking-widest ${filter === tab.id
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-on-surface-variant hover:text-primary'
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <button
            onClick={() => setIsRatesOpen(true)}
            className="font-label-caps text-label-caps text-on-surface border border-outline-variant/30 px-10 py-4 hover:bg-surface-variant hover:border-surface-variant transition-all duration-300 active:scale-95 cursor-pointer"
          >
            VIEW RATES
          </button>
        </ScrollReveal>
      </section>

      {/* Staggered Interlocking Editorial Layout */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-12 lg:px-margin-desktop relative">
        <div className="grid grid-cols-1 md:grid-cols-2 border border-outline-variant/10 bg-surface-container-lowest">

          {/* ROOM 1: VOLTA SUITE */}
          {filteredAccommodations.some(r => r.id === 'volta-suite') && (
            <>
              {/* Volta Suite Text (Left on Desktop, Below Image on Mobile) */}
              <article className="col-span-1 flex flex-col items-center justify-center p-8 md:p-8 lg:p-16 text-center order-2 md:order-1 border-b md:border-b-0 md:border-r border-outline-variant/10">
                <ScrollReveal delay={100} className="w-full flex flex-col items-center justify-center">
                  <span className="font-label-caps text-label-caps text-tertiary mb-3 tracking-[0.2em] uppercase">
                    SUITE
                  </span>
                  <h2 className="font-display-xl text-4xl sm:text-5xl md:text-[56px] lg:text-[64px] text-on-surface mb-8 tracking-tight leading-[1.05]">
                    The Volta <span className="italic font-light text-tertiary">Suite</span>
                  </h2>
                  <div className="space-y-6 max-w-sm">
                    <p className="font-label-caps text-[11px] leading-[1.8] text-on-surface-variant tracking-[0.15em] font-semibold uppercase">
                      {accommodations[0].subtitle}<br />
                      <span className="text-on-surface font-light">{accommodations[0].tagline}</span>
                    </p>
                    <p className="font-label-caps text-[11px] leading-[2] text-tertiary/80 tracking-[0.15em] font-medium max-w-xs mx-auto">
                      {accommodations[0].description}
                    </p>
                    <div className="pt-4 font-display-xl text-body-lg text-on-surface tracking-wider">
                      From ${accommodations[0].price} / night
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-4 pt-8">
                      <button
                        onClick={() => navigate('/reserve', { state: { room: 'river-suite' } })}
                        className="font-label-caps text-label-caps text-on-surface border border-outline-variant/30 px-8 py-3.5 hover:bg-tertiary hover:border-tertiary hover:text-surface transition-all duration-300 cursor-pointer active:scale-95"
                      >
                        BOOK NOW
                      </button>
                      <button
                        onClick={() => navigate(`/rooms/${accommodations[0].id}`)}
                        className="font-label-caps text-label-caps text-on-surface border border-outline-variant/30 px-8 py-3.5 hover:bg-surface-variant transition-all duration-300 cursor-pointer active:scale-95"
                      >
                        VIEW DETAILS
                      </button>
                    </div>
                  </div>
                </ScrollReveal>
              </article>

              {/* Volta Suite Image (Right on Desktop, Top on Mobile) */}
              <div className="col-span-1 order-1 md:order-2 border-b border-outline-variant/10">
                <ScrollReveal delay={200}>
                  <RoomImageSlider
                    images={accommodations[0].images}
                    alt={accommodations[0].title}
                  />
                </ScrollReveal>
              </div>
            </>
          )}

          {/* ROOM 2: CANOPY VILLA */}
          {filteredAccommodations.some(r => r.id === 'canopy-villa') && (
            <>
              {/* Canopy Villa Image (Left on Desktop, Top on Mobile in its group) */}
              <div className="col-span-1 order-3 border-t md:border-t-0 md:border-r border-outline-variant/10">
                <ScrollReveal delay={150}>
                  <RoomImageSlider
                    images={accommodations[1].images}
                    alt={accommodations[1].title}
                  />
                </ScrollReveal>
              </div>

              {/* Canopy Villa Text (Right on Desktop, Below Image on Mobile) */}
              <article className="col-span-1 flex flex-col items-center justify-center p-8 md:p-8 lg:p-16 text-center order-4">
                <ScrollReveal delay={250} className="w-full flex flex-col items-center justify-center">
                  <span className="font-label-caps text-label-caps text-tertiary mb-3 tracking-[0.2em] uppercase">
                    VILLA
                  </span>
                  <h2 className="font-display-xl text-4xl sm:text-5xl md:text-[56px] lg:text-[64px] text-on-surface mb-8 tracking-tight leading-[1.05]">
                    Canopy <span className="italic font-light text-tertiary">Villa</span>
                  </h2>
                  <div className="space-y-6 max-w-sm">
                    <p className="font-label-caps text-[11px] leading-[1.8] text-on-surface-variant tracking-[0.15em] font-semibold uppercase">
                      {accommodations[1].subtitle}<br />
                      <span className="text-on-surface font-light">{accommodations[1].tagline}</span>
                    </p>
                    <p className="font-label-caps text-[11px] leading-[2] text-tertiary/80 tracking-[0.15em] font-medium max-w-xs mx-auto">
                      {accommodations[1].description}
                    </p>
                    <div className="pt-4 font-display-xl text-body-lg text-on-surface tracking-wider">
                      From ${accommodations[1].price} / night
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-4 pt-8">
                      <button
                        onClick={() => navigate('/reserve', { state: { room: 'canopy-villa' } })}
                        className="font-label-caps text-label-caps text-on-surface border border-outline-variant/30 px-8 py-3.5 hover:bg-tertiary hover:border-tertiary hover:text-surface transition-all duration-300 cursor-pointer active:scale-95"
                      >
                        BOOK NOW
                      </button>
                      <button
                        onClick={() => navigate(`/rooms/${accommodations[1].id}`)}
                        className="font-label-caps text-label-caps text-on-surface border border-outline-variant/30 px-8 py-3.5 hover:bg-surface-variant transition-all duration-300 cursor-pointer active:scale-95"
                      >
                        VIEW DETAILS
                      </button>
                    </div>
                  </div>
                </ScrollReveal>
              </article>
            </>
          )}

        </div>
      </section>

      {/* Rate Card Modal Overlay */}
      {isRatesOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
          {/* Main Modal Container */}
          <div className="relative w-full max-w-4xl bg-surface-container-lowest border border-outline-variant/10 rounded-xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh] md:max-h-[85vh] animate-scaleIn">
            
            {/* Close Button */}
            <button
              onClick={() => setIsRatesOpen(false)}
              className="absolute top-6 right-6 z-30 text-on-surface hover:text-primary transition-colors focus:outline-none cursor-pointer"
              aria-label="Close modal"
            >
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>

            {/* Left Panel: Pricing & Cards (Scrollable) */}
            <div className="flex-1 p-8 md:p-12 overflow-y-auto flex flex-col gap-8">
              <div>
                <span className="font-label-caps text-label-caps text-tertiary mb-2 block tracking-[0.2em] uppercase text-xs">
                  SANCTUARY RATES
                </span>
                <h3 className="font-display-xl text-3xl md:text-4xl text-on-surface mb-2 tracking-tight">
                  Seasonal Rate Card
                </h3>
                <p className="font-body-md text-on-surface-variant text-sm">
                  Rates vary by season. Select your planned escape period to view details.
                </p>
              </div>

              {/* Season Selector Switch */}
              <div className="flex bg-surface-container-high/40 p-1 rounded-lg border border-outline-variant/10 max-w-md">
                <button
                  onClick={() => setSelectedSeason('green')}
                  className={`flex-1 py-3 px-4 rounded-md font-label-caps text-[11px] tracking-wider transition-all duration-300 focus:outline-none cursor-pointer uppercase ${
                    selectedSeason === 'green'
                      ? 'bg-surface text-primary shadow-sm font-semibold'
                      : 'text-on-surface-variant hover:text-on-surface'
                  }`}
                >
                  Green Season <span className="block text-[9px] font-normal lowercase opacity-75">(May – Oct)</span>
                </button>
                <button
                  onClick={() => setSelectedSeason('high')}
                  className={`flex-1 py-3 px-4 rounded-md font-label-caps text-[11px] tracking-wider transition-all duration-300 focus:outline-none cursor-pointer uppercase ${
                    selectedSeason === 'high'
                      ? 'bg-surface text-primary shadow-sm font-semibold'
                      : 'text-on-surface-variant hover:text-on-surface'
                  }`}
                >
                  High Season <span className="block text-[9px] font-normal lowercase opacity-75">(Nov – Apr)</span>
                </button>
              </div>

              {/* Room Cards Stack */}
              <div className="flex flex-col gap-6">
                {accommodations.map((room) => {
                  const currentPrice = selectedSeason === 'green' ? room.price : room.highPrice;
                  const reserveRoomId = room.id === 'volta-suite' ? 'river-suite' : 'canopy-villa';
                  
                  return (
                    <div 
                      key={room.id}
                      className="group flex flex-col sm:flex-row gap-6 p-5 rounded-lg border border-outline-variant/15 hover:border-outline/40 bg-surface-container-low/30 hover:bg-surface-container-low/50 transition-all duration-300"
                    >
                      {/* Image Thumbnail */}
                      <div className="w-full sm:w-1/3 aspect-[4/3] rounded-md overflow-hidden bg-surface-container relative">
                        <img 
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
                          src={room.images[0]} 
                          alt={room.title}
                        />
                      </div>

                      {/* Room Pricing Details */}
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start gap-4 mb-2">
                            <h4 className="font-display-xl text-xl md:text-2xl text-on-surface group-hover:text-primary transition-colors">
                              {room.title}
                            </h4>
                            <div className="text-right">
                              <span className="block font-label-caps text-[9px] text-on-surface-variant uppercase">
                                Rate / Night
                              </span>
                              <span className="font-headline-md text-xl md:text-2xl text-tertiary">
                                ${currentPrice}
                              </span>
                            </div>
                          </div>
                          <p className="font-body-md text-xs text-on-surface-variant line-clamp-2 mb-4 leading-relaxed">
                            {room.description}
                          </p>
                        </div>

                        <div className="flex items-center justify-between border-t border-outline-variant/10 pt-4 mt-auto">
                          <span className="font-label-caps text-[10px] text-on-surface-variant tracking-wider uppercase">
                            {room.type === 'suite' ? '85 SQM • Plunge Pool' : '120 SQM • Private Villa'}
                          </span>
                          <button
                            onClick={() => {
                              setIsRatesOpen(false);
                              navigate('/reserve', { state: { room: reserveRoomId } });
                            }}
                            className="font-label-caps text-[10px] tracking-wider text-primary border-b border-primary hover:text-tertiary hover:border-tertiary pb-0.5 transition-all focus:outline-none cursor-pointer uppercase"
                          >
                            Book Room
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Panel: Inclusions & Policies */}
            <div className="md:w-1/3 bg-surface-container-low p-8 md:p-12 border-t md:border-t-0 md:border-l border-outline-variant/10 flex flex-col justify-between overflow-y-auto">
              <div className="space-y-8">
                <div>
                  <h4 className="font-label-caps text-label-caps text-on-surface mb-6 tracking-widest uppercase text-xs">
                    Sanctuary Inclusions
                  </h4>
                  <ul className="space-y-4">
                    {[
                      { icon: 'breakfast_dining', label: 'Gourmet Organic Breakfast', desc: 'Daily hand-delivered or waterside breakfast.' },
                      { icon: 'sailing', label: 'Bespoke River Excursion', desc: 'Complimentary private sunset delta cruise.' },
                      { icon: 'local_taxi', label: 'Roundtrip Airport Transfer', desc: 'Luxury private vehicle transport service.' },
                      { icon: 'local_bar', label: 'Artisanal Mini Bar', desc: 'Fully stocked with local spirits & refreshments.' },
                      { icon: 'room_service', label: '24/7 Butler Service', desc: 'Dedicated concierge for tailored requests.' },
                    ].map((item, idx) => (
                      <li key={idx} className="flex gap-3">
                        <span className="material-symbols-outlined text-tertiary text-lg mt-0.5">{item.icon}</span>
                        <div>
                          <p className="font-body-md text-xs text-on-surface font-semibold">{item.label}</p>
                          <p className="font-body-md text-[10px] text-on-surface-variant leading-normal">{item.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-outline-variant/10">
                  <h5 className="font-label-caps text-[10px] text-on-surface uppercase mb-3 tracking-wider">
                    Sanctuary Policies
                  </h5>
                  <p className="font-body-md text-[10px] text-on-surface-variant leading-relaxed">
                    All reservations are subject to our 14-day cancellation policy. Quisodo is an exclusive adult-only sanctuary (ages 18+).
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <button
                  onClick={() => {
                    setIsRatesOpen(false);
                    navigate('/contact');
                  }}
                  className="w-full py-3.5 border border-outline text-on-surface font-label-caps text-[10px] uppercase tracking-[0.2em] hover:bg-secondary hover:text-on-secondary hover:border-secondary transition-colors duration-500 cursor-pointer text-center flex justify-center items-center focus:outline-none"
                >
                  Bespoke Inquiries
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
