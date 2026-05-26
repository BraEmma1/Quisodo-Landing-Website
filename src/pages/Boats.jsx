import { useRef } from 'react';
import ScrollReveal from '../components/ScrollReveal';

export default function Boats() {
  const containerRef = useRef(null);

  const scroll = (direction) => {
    if (containerRef.current) {
      const scrollAmount = 600 + 32; // Card width + gap
      containerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const fleet = [
    {
      name: 'The Obsidian',
      category: 'Charter',
      capacity: 'Up to 8 Guests',
      description: 'Private luxury touring. Elegance in motion.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAUQ5ME1sABS0a3K3LBCcTTU67W7LyRAxiTGPq1o7txQXVcYx60gxcN-D0u5gf8H5AeLjhZUx10BF0LK2owWmdP3yFKX6DETXlpUnMfpV4I9-BiE1-MEI5KKBQcJc2ZxeiK7Qo2Adub8O6C_TN7xukmSuW7QLZs_mG1xxzgIyT8lLw96ealCHXxxDk_tZy3-2vLs6rez7uvpk8d2U7goKh4ed_FiLCTtCU0ypWAjyjlSq9BFwis6_KLL9geWHURNI0szBva8EsxPnHx',
    },
    {
      name: 'Veloce RS',
      category: 'Rental',
      capacity: 'Self-Captained',
      description: 'High-performance exploration for the independent spirit.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBG0D-c06F7rUhOVxycl84P36m1gNM-tf8GUvoj6a0VzKPa9RUSgA75VB3bv_6XoOplxQm9WrRLVQbH6TPeFJK8LbUfp9z7U_PRfnlbgzRfDM8xdmAtNiWIzX0k52CEv9Eyoemwg7YN6_8j5PjBgdbOb7wgCzo9lOFp3136_H4i3IQS-3gJnW6jjrhOWMDhGv_3Tkg-WbA8D2WN8NPZmfnUiRmpvS_6SqogylvFgmsJ-DtC25WfEv_YQ0mTiALJG-nEKk5YpT1cwWp-',
    },
    {
      name: 'Artisan Canoe',
      category: 'Equipment',
      capacity: 'Solo / Duo',
      description: 'Silent passage through the river\'s hidden tributaries.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB0TBLXxOb8EdMu6_kRP0M5G_Y3o3pf_TtCdB23jImnhDtqtTnwJYqWZbay72iygRVsDQ0K6GVPTiQsjuLHgQl1IWi9veGpoo1f3Sa8FNO1MMOE5U0CJJdmtTnjEgWDRTQODuCsHbxsFczr6u6qOTv7ktRp108n-iU6e1epu1Ay23ypYwhvpmvjQYm9nj7mLPMNn25ZHXGgm4HQgaQxZsHqY7HrBximJ9JNtXUZuCat1w78hOGfM0fu0JXQKRASY5Hb5h3l8ZPCWksF',
    },
  ];

  return (
    <div className="relative w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center px-margin-mobile md:px-margin-desktop overflow-hidden -mt-24">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img
            alt="hero-boat"
            className="w-full h-full object-cover scale-105"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRzMXdFfl4ZcFTFICKYohqffJBn64PhqKtrBR5qmX-ONpkxmukxECTnEa-kKzkXet6vN5Q5Rn4OWtrU8FSP7Krdb9gCc-UlaFOk4CTcaSsuTdhCT23kGvC2SDozPQd9652lQPLMHtvTLPlYERZ4-q-hHUUPVqkF7fk8N8Q5HvIAMvTwcWQom1bVHY1wUmyOxrjsqXx9OGZGEMIMdkyGZATRIjP61Ha-WIGbYtKpkexE5CXoOe8zRImadNnw2tcMvSU8gKHpLhw1lzk"
          />
          <div className="absolute inset-0 hero-scrim-bottom" />
        </div>

        <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto mt-20">
          <ScrollReveal delay={100}>
            <span className="font-label-caps text-label-caps text-tertiary tracking-[0.3em] mb-6 block uppercase">
              Freedom &amp; Exploration
            </span>
            <h1 className="font-display-xl text-display-xl-mobile md:text-display-xl text-white mb-8">
              The River <span className="italic text-[#bac9cd]">Awaits</span>
            </h1>
            <p className="font-body-lg text-body-lg text-white/70 max-w-2xl mx-auto mb-12">
              Command the current. From intimate leisure cruises to high-performance rentals, our fleet is designed for the discerning explorer seeking the ultimate waterfront narrative.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={() => containerRef.current?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-tertiary text-on-tertiary border border-tertiary font-label-caps text-label-caps hover:bg-tertiary/80 hover:border-tertiary transition-colors duration-500 cursor-pointer active:scale-95"
              >
                Explore the Fleet
              </button>
              <a
                href="https://storage.googleapis.com/aida-featured-images/river-luxury-boat.mp4"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-white/30 text-white font-label-caps text-label-caps flex items-center justify-center gap-2 hover:border-tertiary transition-colors duration-500 cursor-pointer active:scale-95"
              >
                <span className="material-symbols-outlined" data-icon="play_circle">
                  play_circle
                </span>
                View the Film
              </a>
            </div>
          </ScrollReveal>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-70">
          <span className="w-[1px] h-12 bg-white/30 block relative overflow-hidden">
            <span className="absolute top-0 left-0 w-full h-1/2 bg-tertiary animate-[pulse_2s_infinite]"></span>
          </span>
        </div>
      </section>

      {/* Horizontal Scroll Section: The Fleet */}
      <section className="w-full py-section-gap overflow-hidden bg-background">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-16 flex flex-col md:flex-row justify-between items-end gap-8">
          <ScrollReveal>
            <h2 className="font-display-xl text-headline-lg-mobile md:text-headline-lg text-on-surface mb-4">
              Our Fleet
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md">
              Curated vessels for every tempo of the river. Navigate in unmatched style.
            </p>
          </ScrollReveal>
          <ScrollReveal className="flex gap-4">
            <button
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border border-outline/20 flex items-center justify-center text-on-surface-variant hover:border-tertiary hover:text-tertiary transition-all duration-300 cursor-pointer active:scale-95 focus:outline-none"
              aria-label="Scroll left"
            >
              <span className="material-symbols-outlined" data-icon="arrow_back">
                arrow_back
              </span>
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full border border-outline/20 flex items-center justify-center text-on-surface-variant hover:border-tertiary hover:text-tertiary transition-all duration-300 cursor-pointer active:scale-95 focus:outline-none"
              aria-label="Scroll right"
            >
              <span className="material-symbols-outlined" data-icon="arrow_forward">
                arrow_forward
              </span>
            </button>
          </ScrollReveal>
        </div>

        {/* Horizontal Container */}
        <div
          ref={containerRef}
          className="flex gap-gutter px-margin-mobile md:px-margin-desktop overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-12 w-full scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {fleet.map((boat, idx) => (
            <ScrollReveal
              key={boat.name}
              delay={idx * 100}
              className="snap-center shrink-0 w-[85vw] md:w-[600px] group cursor-pointer relative"
            >
              <div className="aspect-[4/5] overflow-hidden bg-surface-container-low relative">
                <img
                  alt={boat.name}
                  className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105 ease-out"
                  src={boat.image}
                />
                <div className="absolute inset-0 photo-fade-bottom opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 p-8 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 w-full flex justify-between items-end">
                  <div>
                    <span className="font-label-caps text-label-caps text-tertiary mb-2 block">
                      {boat.category}
                    </span>
                    <span className="font-body-md text-body-md text-white/90">
                      {boat.capacity}
                    </span>
                  </div>
                  <button className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center hover:bg-tertiary hover:text-on-tertiary transition-colors duration-300">
                    <span className="material-symbols-outlined" data-icon="arrow_forward">
                      arrow_forward
                    </span>
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <h3 className="font-display-xl text-headline-md text-on-surface mb-2 group-hover:text-tertiary transition-colors duration-300">
                  {boat.name}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {boat.description}
                </p>
              </div>
            </ScrollReveal>
          ))}

          {/* End Bleeding Edge Card */}
          <ScrollReveal
            delay={fleet.length * 100}
            className="snap-center shrink-0 w-[85vw] md:w-[600px] group cursor-pointer relative pr-margin-desktop"
          >
            <div className="aspect-[4/5] overflow-hidden bg-surface-container-low relative flex items-center justify-center border border-outline/10 h-full">
              <div className="text-center p-8 flex flex-col items-center">
                <span className="material-symbols-outlined text-4xl text-on-surface-variant mb-4" data-icon="sailing">
                  sailing
                </span>
                <h3 className="font-display-xl text-headline-md text-on-surface mb-4">
                  Sanctuary Fleet
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-xs mx-auto">
                  Every vessel is maintained to pristine standards. Private concierges accompany all curated excursions.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
