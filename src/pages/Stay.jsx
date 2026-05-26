import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';

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
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
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
            className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
              idx === currentIndex ? 'bg-tertiary w-6' : 'bg-on-surface/40 hover:bg-on-surface/75 w-1.5'
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

  const accommodations = [
    {
      id: 'volta-suite',
      type: 'suite',
      title: 'The Volta Suite',
      subtitle: 'DOUBLE / TWIN / FAMILY ROOMS',
      tagline: 'IDEAL ESCAPES FOR UNWINDING WITH LOVED ONES AND FRIENDS',
      description: 'TWO SINGLE BEDS (OR LARGE KING SIZE) • EN SUITE BATHROOM WITH OUTSIDE SHOWER • TEA AND COFFEE FACILITIES • PATIO • HAIRDRYERS',
      price: 850,
      images: [
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBQGAm2c_10jkFb4AOyuF3OIVNoliAZEi8WvZ9xVopbe_nnfZl0PvY_NFpYuRq6tsJNAiwqmPIzoo0aKDAJy4-jJioMz1mHq11Q4o5PMdoMxyGBPss6Z0uc4LZbVsTQ9FWzO_Ag7r77rR-YF7xRUUhuMp7Ck7x1NgcrUv_ZhnzbXOZJlApUKqfCDL90BhbnAPRo5DtGbXzXvC8tOzfeHOu_pvpu2klWJQcxdWu5p1cV-wm75nshz4jx3qaEOSrbSnytq4YSyNNcEHf4',
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAL_xikaMM9CV8nMPkDk7JtMDVlljdcOGG329U7E2AGOYv1LMkD8-diNJ4KAEsAv_aQJgVfPnQh3qUgB_M_O0eu_y0uZTQ6L4fpErtUs-QJh7HAHvMM_tnhj3gAM9D_vDSXrxym_D2sIZBmlMoWDUev0K0_O-ED9o6W4hje7-btiTg9NknaikdmHt3FQrgwdNFAG4QVdCab2jnXlSUT1eD5-OHS1d71jIsrLE5E22lrdOuEVCYqUx2F1sFpv7927GpuT9xmZnXHry7Y'
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
      images: [
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAL_xikaMM9CV8nMPkDk7JtMDVlljdcOGG329U7E2AGOYv1LMkD8-diNJ4KAEsAv_aQJgVfPnQh3qUgB_M_O0eu_y0uZTQ6L4fpErtUs-QJh7HAHvMM_tnhj3gAM9D_vDSXrxym_D2sIZBmlMoWDUev0K0_O-ED9o6W4hje7-btiTg9NknaikdmHt3FQrgwdNFAG4QVdCab2jnXlSUT1eD5-OHS1d71jIsrLE5E22lrdOuEVCYqUx2F1sFpv7927GpuT9xmZnXHry7Y',
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBQGAm2c_10jkFb4AOyuF3OIVNoliAZEi8WvZ9xVopbe_nnfZl0PvY_NFpYuRq6tsJNAiwqmPIzoo0aKDAJy4-jJioMz1mHq11Q4o5PMdoMxyGBPss6Z0uc4LZbVsTQ9FWzO_Ag7r77rR-YF7xRUUhuMp7Ck7x1NgcrUv_ZhnzbXOZJlApUKqfCDL90BhbnAPRo5DtGbXzXvC8tOzfeHOu_pvpu2klWJQcxdWu5p1cV-wm75nshz4jx3qaEOSrbSnytq4YSyNNcEHf4'
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
                className={`font-label-caps text-label-caps pb-2 relative transition-all duration-300 focus:outline-none cursor-pointer tracking-widest ${
                  filter === tab.id
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
            onClick={() => navigate('/reserve')}
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
                  <h2 className="font-display-xl text-headline-lg-mobile md:text-headline-md lg:text-headline-lg text-on-surface mb-8 uppercase tracking-[0.1em] leading-tight">
                    The Volta Suite
                  </h2>
                  <div className="space-y-6 max-w-sm">
                    <p className="font-label-caps text-[11px] leading-[1.8] text-on-surface-variant tracking-[0.15em] font-semibold uppercase">
                      {accommodations[0].subtitle}<br/>
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
                        onClick={() => navigate('/reserve')}
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
                  <h2 className="font-display-xl text-headline-lg-mobile md:text-headline-md lg:text-headline-lg text-on-surface mb-8 uppercase tracking-[0.1em] leading-tight">
                    Canopy Villa
                  </h2>
                  <div className="space-y-6 max-w-sm">
                    <p className="font-label-caps text-[11px] leading-[1.8] text-on-surface-variant tracking-[0.15em] font-semibold uppercase">
                      {accommodations[1].subtitle}<br/>
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
                        onClick={() => navigate('/reserve')}
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

    </div>
  );
}
