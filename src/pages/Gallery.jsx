import { useState, useEffect } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import familyPicture from '../assets/Optimized images/family-picture.jpg';
import familyOnBoat from '../assets/Optimized images/family-on-boat.jpg';
import quisodoBoat from '../assets/Optimized images/quisodo-boat.jpg';
import quisodoFacilityView from '../assets/Optimized images/quisodo-landing-facility-view.jpg';
import quisodoLandingFamilyOnBoat from '../assets/Optimized images/quisodo-landing-family-on-boat.jpg';
import ada from '../assets/Optimized images/ada.jpg';
import facilityView from '../assets/Optimized images/facility-view.jpg';

export default function Gallery() {
  const [filter, setFilter] = useState('all');
  const [lightbox, setLightbox] = useState({ isOpen: false, src: '', title: '', category: '' });

  const galleryItems = [
    {
      id: 1,
      category: 'moments',
      title: 'Family Gathering',
      image: familyPicture,
    },
    {
      id: 2,
      category: 'river',
      title: 'Family on the River',
      image: familyOnBoat,
    },
    {
      id: 3,
      category: 'river',
      title: 'The Quisodo Boat',
      image: quisodoBoat,
    },
    {
      id: 4,
      category: 'stay',
      title: 'Facility View',
      image: quisodoFacilityView,
    },
    {
      id: 5,
      category: 'moments',
      title: 'Arrival by Boat',
      image: quisodoLandingFamilyOnBoat,
    },

    {
      id: 7,
      category: 'stay',
      title: 'Facility Overview',
      image: facilityView,
    },
  ];

  const filteredItems = filter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === filter);

  // Esc key closes lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeLightbox();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const openLightbox = (item) => {
    setLightbox({ isOpen: true, src: item.image, title: item.title, category: item.category });
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightbox(prev => ({ ...prev, isOpen: false }));
    document.body.style.overflow = '';
  };

  return (
    <div className="relative w-full overflow-x-hidden">
      {/* Header Section */}
      <header className="pt-24 pb-16 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center md:text-left flex flex-col md:flex-row items-end justify-between border-b border-outline-variant/10">
        <div className="max-w-2xl">
          <ScrollReveal delay={100}>
            <h1 className="font-display-xl text-display-xl-mobile md:text-display-xl text-on-surface mb-6 leading-none">
              Visuals of the Sanctuary
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              A curated collection of moments, capturing the quiet luxury and cinematic atmosphere of the Volta River. Immerse yourself in the textures, light, and stories of Quisodo Landing.
            </p>
          </ScrollReveal>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-margin-mobile md:px-margin-desktop py-section-gap max-w-container-max mx-auto">
        {/* Filter Controls */}
        <ScrollReveal delay={150}>
          <div className="flex flex-wrap justify-center md:justify-start gap-8 mb-16">
            {[
              { id: 'all', label: 'ALL' },
              { id: 'stay', label: 'STAY' },
              { id: 'river', label: 'RIVER' },
              { id: 'culture', label: 'CULTURE' },
              { id: 'moments', label: 'MOMENTS' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`font-label-caps text-label-caps tracking-[0.2em] transition-all duration-300 pb-2 cursor-pointer focus:outline-none relative ${filter === tab.id
                    ? 'text-primary after:scale-x-100'
                    : 'text-on-surface-variant hover:text-primary after:scale-x-0'
                  } after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-primary after:origin-center hover:after:scale-x-100 after:transition-transform after:duration-500`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8">
          {filteredItems.map((item, idx) => (
            <ScrollReveal
              key={item.id}
              delay={idx * 80}
              className="break-inside-avoid mb-8 group relative overflow-hidden cursor-pointer bg-surface-container-low border border-outline-variant/10"
              onClick={() => openLightbox(item)}
            >
              <img
                className="w-full h-auto object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                src={item.image}
                alt={item.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <span className="font-label-caps text-label-caps text-tertiary mb-2 uppercase tracking-widest">
                  {item.category}
                </span>
                <h3 className="font-display-xl text-headline-md text-on-surface">
                  {item.title}
                </h3>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </main>

      {/* Fullscreen Lightbox Modal */}
      {lightbox.isOpen && (
        <div className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-md flex flex-col items-center justify-center transition-all duration-500 animate-fadeIn">
          {/* Close button */}
          <button
            className="absolute top-8 right-8 md:top-12 md:right-12 text-on-surface-variant hover:text-primary transition-colors cursor-pointer z-10"
            onClick={closeLightbox}
          >
            <span className="material-symbols-outlined text-[32px]">close</span>
          </button>

          {/* Image container */}
          <div className="relative w-full max-w-6xl max-h-[75vh] flex items-center justify-center px-4 animate-scaleUp">
            <img
              alt={lightbox.title}
              className="max-w-full max-h-[75vh] object-contain shadow-2xl"
              src={lightbox.src}
            />
          </div>

          {/* Description footer */}
          <div className="mt-8 text-center px-4 animate-slideUp">
            <span className="font-label-caps text-label-caps text-tertiary mb-3 block uppercase tracking-widest">
              {lightbox.category}
            </span>
            <h2 className="font-display-xl text-3xl sm:text-4xl md:text-5xl text-on-surface leading-[1.05] tracking-tight">
              {lightbox.title}
            </h2>
          </div>
        </div>
      )}
    </div>
  );
}
