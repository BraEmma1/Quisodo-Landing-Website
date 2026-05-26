import { useState, useEffect } from 'react';
import ScrollReveal from '../components/ScrollReveal';

export default function Gallery() {
  const [filter, setFilter] = useState('all');
  const [lightbox, setLightbox] = useState({ isOpen: false, src: '', title: '', category: '' });

  const galleryItems = [
    {
      id: 1,
      category: 'stay',
      title: 'The Riverside Suite',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDY4fvk9Yw8qpUiwhOsE4sDkimD26hbKh6VvU3K_Fzv_vnGjYYpoA-6G07l12l-wLlY-LYxYLyxuSkX0wwGDhnxsHg-U2GKUe98-_rdrvVAzgqUj-2us5UTxgcvwNdYxob96Wt49t1PLIeQHVb07sWjUD0OV1D_mI03AhBQitL9u-AWHTBcIzhbeELIOWYprj0itrcRe-YyuuSBDB4ZKO7q2OSl1sCVAfDD-SzLFkGcvUzq7cnMkU2JV8WjjFH6BosL0VUZW1OaLhnU',
    },
    {
      id: 2,
      category: 'river',
      title: 'Evening Mist on the Volta',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCmpFq_9UsHo2yvStnOOUjvRHtoja8_WUDZTCDHWNzLKlTQe89Y1UjMPeUbhHCfVI01FS5FVIpFzjzhpNm0XasMG8pE3Id-oTnZiXOiAUN1oK5WakEUxtxB8SmYxqJ1VZcSKaMa63q9tp43A_1eKEPx55A37MixNxvmrBpKvIdNMwCj94ku2TrA_JZ6FM3g9Tl8Sl_pgzh-WiNCVqaijRmE1q6GCreK1kHRUz3DGXnPc5AUpY0Sr63lK3DrOC2ofr0mpI66EcbPeBgZ',
    },
    {
      id: 3,
      category: 'moments',
      title: 'Morning Ritual',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZY9YE5yItGbC4lpO0TjGbyAB2VcF4x1OLu0L6jt7kZJBOu4qhgZx4iO5nWwOZgF4uXE9ITTCF7ypTC58FjKYETZX3NzXmUamaCUOgKee7frrgGJ43yK-QSJ8vooQzir0fDw1mcwEnFZULt1PymCMr4GxdVxwtIk2cjWetblVK69ex6SGHskHHS6svZeTQcref0DAiBeUtauonQpDXo2ISH-Rpq6nfdNSOW3g4QZKDodEoQTnuJWePNku-e6qlyMLv7Zg-p3lNxOmO',
    },
    {
      id: 4,
      category: 'culture',
      title: 'The Weaver\'s Craft',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBao22GeeOM7-YGFGeReB7ZwF7AuyieAMycGZHPFVbNaENiNy3nJ_GdZDzwHsu6Y_KjFJy4hmbFkGaure3MM8hBQin8EwtuUk9b-089q-nLXqgXrHlgDwzSKWTjCzMlKAJmT9ZM82CGxcv_p2NwU8adEKrNWtpYnPrgJkjVwaMrrkn1meDC2XfjZrTGDvuUOI2D_I8AGHbTGnjImNm5RwsCnfxphavM_0b729k6yUea0y4tgJ45v1NuD1kV_3UflajcxcVqTkeMRqrY',
    },
    {
      id: 5,
      category: 'stay',
      title: 'The Deck at Dusk',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAC5GQHbWyhpLMeURi3M0oQxXc6t3V9awOJx6hNOy2O_O62ltAwiSmWrbYd8IRrA5QCzpc3MGYgX73mbTUCqCpbIfrI4c83MdSPBZSGFzik3T92S99TjOqyHYrf4fD0iy2pnXTRjPStGsr-X4b5BY3A3j8k3kikDudFtXLjsK3WzckmkN1kiLNE6xaHah-G8JPsKlzT5uB0HEbvYlNKS39rkwbrWh88TTseIfk2ouf3xOD26U56mI68wm9zpadcHN1rgCBQSlDBo80A',
    },
    {
      id: 6,
      category: 'river',
      title: 'Silent Passage',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAkf1730HQ9fu1Ifei5H4m0pDBVnGK-3PuA_IQAMNsThurBL75Vp_oJbtgPoyEEiS_LMRy5YOp7cmhb-sCxMl2r7P5JEr_HSuiRLCVeFncOd-Ay_2htvRDDVF0TkZmXwBXtpioSEmNmFAnm7BXCNuLAnnVKkV-cBN_6UpEOT7Ty23FlawEZ5tPXAMzo0NZ2jM_kp5RojCR94l4QHFd8EDWPuzKHLxNUwiPn3aXou6yvn7nBiO1i9U8sXUJapojf73jWz555dqtsXvm5',
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
              A curated collection of moments, capturing the quiet luxury and cinematic atmosphere of the Volta River. Immerse yourself in the textures, light, and stories of Quisodo.
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
                className={`font-label-caps text-label-caps tracking-[0.2em] transition-all duration-300 pb-2 cursor-pointer focus:outline-none relative ${
                  filter === tab.id
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
            <h2 className="font-display-xl text-headline-lg-mobile md:text-headline-md text-on-surface">
              {lightbox.title}
            </h2>
          </div>
        </div>
      )}
    </div>
  );
}
