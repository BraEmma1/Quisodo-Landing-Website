import { useState, useRef, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import room1 from '../assets/Optimized images/room1.webp';
import room2 from '../assets/Optimized images/room2.webp';
import room3 from '../assets/Optimized images/room3.webp';
import room4 from '../assets/Optimized images/room4.webp';

const rooms = {
  'volta-suite': {
    type: 'Suite',
    title: 'The Volta Suite',
    subtitle: 'Riverfront Elegance.',
    description: 'Immerse yourself in the quiet luxury of the Volta Suite. Suspended above the flowing waters, this expansive space features raw, natural textures contrasting with precise, modern minimalism. Every detail is curated to foster deep relaxation and profound connection with the surrounding river ecosystem.',
    price: 850,
    heroImage: room1,
    amenities: [
      { icon: 'square_foot', label: 'Expansive Space', desc: '1,200 sq ft of indoor-outdoor living area with seamless transitions.' },
      { icon: 'bathtub', label: 'Freestanding Tub', desc: 'A sculptural stone basin positioned for unobstructed river views.' },
      { icon: 'balcony', label: 'Private Terrace', desc: 'Cantilevered deck over the water, perfect for morning contemplation.' },
      { icon: 'room_service', label: 'Bespoke Service', desc: 'Dedicated concierge and in-suite dining available 24/7.' },
    ],
    gallery: [
      { src: room3, alt: 'Suite Detail' },
      { src: room1, alt: 'Suite Living Area' },
    ],
    size: '85 SQM',
    guests: '2 GUESTS',
  },
  'canopy-villa': {
    type: 'Villa',
    title: 'Canopy Villa',
    subtitle: 'Above the Canopy.',
    description: 'Elevated among the ancient riverbank trees, this villa offers unparalleled privacy. Complete with a private plunge pool and a dedicated study corner wrapped in glass, every moment is framed by the living forest.',
    price: 1200,
    heroImage: room2,
    amenities: [
      { icon: 'pool', label: 'Private Plunge Pool', desc: 'Infinity-edge pool perched over the river with twilight views.' },
      { icon: 'forest', label: 'Forest Canopy Views', desc: 'Panoramic floor-to-ceiling windows framing the ancient treetops.' },
      { icon: 'local_bar', label: 'Private Bar', desc: 'Curated minibar stocked with local spirits and artisan selections.' },
      { icon: 'wifi', label: 'Seamless Connectivity', desc: 'Discreet high-speed Wi-Fi and smart home controls throughout.' },
    ],
    gallery: [
      { src: room4, alt: 'Villa Detail' },
      { src: room2, alt: 'Villa Living Area' },
    ],
    size: '120 SQM',
    guests: '2 GUESTS',
  },
};

export default function RoomDetails() {
  const { roomId } = useParams();
  const navigate = useNavigate();
  const room = rooms[roomId] || rooms['volta-suite'];
  const [activeSlide, setActiveSlide] = useState(0);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');

  // Auto-play interval
  useEffect(() => {
    const timer = setInterval(() => {
      const nextIdx = (activeSlide + 1) % room.gallery.length;
      scrollToSlide(nextIdx);
    }, 4000);
    return () => clearInterval(timer);
  }, [activeSlide, room.gallery.length]);

  const scrollToSlide = (idx) => {
    setActiveSlide(idx);
  };

  return (
    <div className="relative w-full overflow-x-hidden">
      {/* Hero Section with Booking Panel */}
      <header className="relative h-[80vh] min-h-[600px] w-full flex items-end pb-16 md:pb-32 px-margin-mobile md:px-margin-desktop -mt-24">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            alt={room.title}
            className="w-full h-full object-cover object-center"
            src={room.heroImage}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        </div>

        {/* Content Row */}
        <div className="relative z-10 w-full max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-end gap-8">
          {/* Title Block */}
          <div className="max-w-2xl">
            <ScrollReveal delay={100}>
              <p className="font-label-caps text-label-caps text-primary mb-4 uppercase tracking-widest">{room.type}</p>
              <h1 className="font-display-xl text-display-xl-mobile md:text-display-xl text-on-surface text-shadow-elegant mb-6 leading-none">
                {room.subtitle}
              </h1>
            </ScrollReveal>
          </div>

          {/* Glass Booking Panel */}
          <ScrollReveal delay={200} className="w-full md:w-[400px]">
            <div className="p-6 md:p-8 flex flex-col gap-6 bg-glass-bg border border-glass-border backdrop-blur-[24px]">
              {/* Price */}
              <div className="flex justify-between items-baseline border-b border-outline-variant/30 pb-4">
                <span className="font-body-md text-body-md text-on-surface-variant">From</span>
                <span className="font-display-xl text-headline-md text-on-surface">
                  ${room.price} <span className="font-body-md text-body-md text-on-surface-variant">/night</span>
                </span>
              </div>

              {/* Date Inputs */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1 border-b border-outline-variant/50 pb-2">
                  <label className="font-label-caps text-label-caps text-on-surface-variant">Check In</label>
                  <input
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="bg-transparent border-none text-on-surface font-body-md text-body-md p-0 focus:ring-0 cursor-pointer focus:outline-none w-full"
                  />
                </div>
                <div className="flex flex-col gap-1 border-b border-outline-variant/50 pb-2">
                  <label className="font-label-caps text-label-caps text-on-surface-variant">Check Out</label>
                  <input
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="bg-transparent border-none text-on-surface font-body-md text-body-md p-0 focus:ring-0 cursor-pointer focus:outline-none w-full"
                  />
                </div>
              </div>

              <button
                onClick={() => navigate('/reserve')}
                className="w-full bg-transparent border border-tertiary text-tertiary hover:bg-tertiary hover:text-on-tertiary transition-colors duration-300 py-4 font-label-caps text-label-caps text-center cursor-pointer active:scale-95 focus:outline-none"
              >
                Book {room.type}
              </button>
            </div>
          </ScrollReveal>
        </div>
      </header>

      {/* Description & Amenities */}
      <main className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-gap flex flex-col gap-section-gap">
        <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {/* Description Block */}
          <div className="md:col-span-5 flex flex-col gap-8">
            <ScrollReveal>
              <h2 className="font-display-xl text-3xl sm:text-4xl md:text-5xl text-on-surface leading-[1.05] tracking-tight mb-6">
                A private haven where the river meets refined design.
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md">
                {room.description}
              </p>

              <div className="flex gap-6 mt-8 pt-6 border-t border-outline-variant/10">
                <div className="flex items-center gap-2 text-on-surface-variant">
                  <span className="material-symbols-outlined text-[18px]">square_foot</span>
                  <span className="font-label-caps text-label-caps">{room.size}</span>
                </div>
                <div className="flex items-center gap-2 text-on-surface-variant">
                  <span className="material-symbols-outlined text-[18px]">group</span>
                  <span className="font-label-caps text-label-caps">{room.guests}</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Amenities Grid */}
          <div className="md:col-start-7 md:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12 mt-12 md:mt-0">
            {room.amenities.map((amenity, idx) => (
              <ScrollReveal key={amenity.label} delay={idx * 80} className="flex flex-col gap-3">
                <span className="material-symbols-outlined text-primary text-3xl">{amenity.icon}</span>
                <h3 className="font-label-caps text-label-caps text-on-surface">{amenity.label}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">{amenity.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Image Gallery Slider */}
        <section className="w-full relative">
          <ScrollReveal>
            <div className="flex gap-4 md:gap-8 pb-8 w-full overflow-hidden">

              {/* Full View Pane */}
              <div className="shrink-0 w-[85vw] md:w-[60vw] h-[400px] md:h-[600px] relative overflow-hidden bg-surface-container rounded-sm group">
                <div
                  className="flex w-full h-full transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
                  style={{ transform: `translateX(-${activeSlide * 100}%)` }}
                >
                  {room.gallery.map((img, idx) => (
                    <div key={`full-${idx}`} className="w-full h-full shrink-0 relative">
                      <img alt={img.alt} className="w-full h-full object-cover" src={img.src} />
                    </div>
                  ))}
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    scrollToSlide((activeSlide - 1 + room.gallery.length) % room.gallery.length);
                  }}
                  className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/40 text-on-surface hover:text-tertiary flex items-center justify-center backdrop-blur-sm transition-all duration-300 hover:bg-black/60 active:scale-95 z-30 cursor-pointer opacity-0 group-hover:opacity-100"
                  aria-label="Previous image"
                >
                  <span className="material-symbols-outlined text-[20px] md:text-[24px]">chevron_left</span>
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    scrollToSlide((activeSlide + 1) % room.gallery.length);
                  }}
                  className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/40 text-on-surface hover:text-tertiary flex items-center justify-center backdrop-blur-sm transition-all duration-300 hover:bg-black/60 active:scale-95 z-30 cursor-pointer opacity-0 group-hover:opacity-100"
                  aria-label="Next image"
                >
                  <span className="material-symbols-outlined text-[20px] md:text-[24px]">chevron_right</span>
                </button>
              </div>

              {/* Partial View Pane (Next Image) */}
              <div
                className="flex-1 h-[400px] md:h-[600px] relative overflow-hidden bg-surface-container rounded-sm cursor-pointer group"
                onClick={() => scrollToSlide((activeSlide + 1) % room.gallery.length)}
                aria-label="View next image"
              >
                {room.gallery.map((img, idx) => {
                  const nextIdx = (activeSlide + 1) % room.gallery.length;
                  return (
                    <div
                      key={`partial-${idx}`}
                      className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${nextIdx === idx ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                        }`}
                    >
                      <img
                        alt={`Next: ${img.alt}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                        src={img.src}
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Thin Line Indicators */}
            <div className="flex justify-center gap-4 mt-4">
              {room.gallery.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToSlide(idx)}
                  className={`h-[1px] transition-all duration-500 cursor-pointer focus:outline-none ${activeSlide === idx ? 'w-16 bg-primary' : 'w-10 bg-outline-variant/50'
                    }`}
                />
              ))}
            </div>
          </ScrollReveal>
        </section>

        {/* CTA Block */}
        <section className="flex flex-col md:flex-row items-center justify-between gap-8 border-t border-outline-variant/10 pt-16">
          <ScrollReveal>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
              Ready to begin your sanctuary experience? Reach our concierge team to personalize your stay.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={150} className="flex gap-6">
            <button
              onClick={() => navigate('/contact')}
              className="font-label-caps text-label-caps text-on-surface border border-outline px-8 py-4 hover:bg-secondary hover:text-on-secondary hover:border-secondary transition-all duration-300 cursor-pointer focus:outline-none active:scale-95"
            >
              Contact Concierge
            </button>
            <button
              onClick={() => navigate('/reserve')}
              className="font-label-caps text-label-caps text-on-tertiary bg-tertiary border border-tertiary px-8 py-4 hover:bg-tertiary/80 transition-all duration-300 cursor-pointer focus:outline-none active:scale-95"
            >
              Reserve Now
            </button>
          </ScrollReveal>
        </section>
      </main>
    </div>
  );
}
