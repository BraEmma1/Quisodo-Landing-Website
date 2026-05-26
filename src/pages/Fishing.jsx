import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';

export default function Fishing() {
  const navigate = useNavigate();

  // Simple reveal on scroll effect
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal-on-scroll');

    const revealOnScroll = () => {
      const windowHeight = window.innerHeight;
      const elementVisible = 100;

      reveals.forEach((reveal) => {
        const elementTop = reveal.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
          reveal.classList.add('is-visible');
        }
      });
    };

    window.addEventListener('scroll', revealOnScroll, { passive: true });
    revealOnScroll(); // Trigger initially
    return () => window.removeEventListener('scroll', revealOnScroll);
  }, []);

  return (
    <div className="relative w-full bg-background text-on-surface font-body-md antialiased overflow-x-hidden pb-section-gap selection:bg-tertiary selection:text-on-tertiary">
      <style>{`
        .reveal-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 1s ease-out, transform 1s ease-out;
        }
        .reveal-on-scroll.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      {/* Hero Section */}
      <header className="relative w-full h-screen min-h-[600px] flex items-end pb-margin-desktop px-margin-mobile md:px-margin-desktop overflow-hidden -mt-24">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0 bg-[#0e0d09]">
          <img
            alt="Fisherman in canoe at misty sunrise"
            className="w-full h-full object-cover opacity-60"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlpSpRNEIkWPZVW2e-2rmMCf_jyxX1gABQInOJ1YMhIv5SFVgtBsCsq4XGZ_4Rm3YsEs3jqND5xV4FAA3YNiulZTFq6m-ECYmognzP_2KI2yXPWc8DfAgply1k9KYbq4s9hf2T4Sra9QN0ZqFX9jGhr3fuo3EnHIv6YL7s3b3pi6sM4QJJ2M5nm9_C3TuyA0S_Nx2RqCxLF03mrl2V5S2y4rWncY0UDmm2Kq84kWrVwDty3Gf8KvA75wtupwqGlmkE-Mb7UXp1idax"
          />
          {/* Gradient Overlay for text legibility and mood — always dark */}
          <div className="absolute inset-0 hero-scrim-bottom" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-container-max mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-gutter mb-8 md:mb-12">
          <div className="col-span-1 md:col-span-8 lg:col-span-6">
            <ScrollReveal>
              <span className="font-label-caps text-label-caps text-tertiary block mb-4 uppercase tracking-widest text-[10px]">
                The River's Rhythm
              </span>
              <h1 className="font-display-xl text-display-xl-mobile md:text-display-xl text-white mb-6 leading-tight">
                Angling in the Estuary
              </h1>
              <p className="font-body-lg text-body-lg text-white/70 max-w-md mb-8 leading-relaxed">
                Embrace the silence of dawn. Guided excursions honoring local traditions, designed for both the seasoned angler and the quiet observer.
              </p>
              <button
                onClick={() => navigate('/contact')}
                className="border border-white/30 px-8 py-4 font-label-caps text-label-caps text-white hover:bg-tertiary hover:text-on-tertiary hover:border-tertiary transition-all duration-300 inline-flex items-center gap-3 cursor-pointer select-none text-[11px] tracking-widest uppercase"
              >
                <span>Book an Expedition</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </ScrollReveal>
          </div>
        </div>
      </header>

      {/* The Experience (Bento Grid) */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-12 gap-y-16 md:gap-gutter mb-20">
          <div className="col-span-12 md:col-span-4 flex flex-col justify-end">
            <ScrollReveal>
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-6">
                Curated Casts
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Our experiences are deeply rooted in the ecology of the Volta. We provide world-class, understated equipment and access to secluded, untouched waters where the tarpon run.
              </p>
            </ScrollReveal>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-[300px] gap-gutter">
          {/* Large Feature */}
          <div className="col-span-1 md:col-span-8 row-span-2 relative group overflow-hidden border border-outline-variant/10 rounded-xl">
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
            <img
              alt="Hands tying fly fishing knot"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnt63fH-eRbYVSYCh73VHws11Mwyzf08hXKjDtWoT3IkekEKlKxJVH9Ol_xg6u5Z9n6x-kveGsvanjypBwMyRb3vLM1jHEz2PiRl8pJc9GQIlggeE3oChprZrVOInU7sCIAIm321oMduNl1OaOIIObP4jh3fdtovs6vpZMXD7YL6yyBmpdPNAR4B3pyDnskHa5Bp6-keoXiM2BUkzWLjkS6MnbT-rvNEjFB9gDitGsLYVOLVJfo0TqGx1xl1kDvM-J0S5tnJCoIjTh"
            />
            <div className="absolute inset-0 photo-fade-bottom z-10" />
            <div className="absolute bottom-0 left-0 p-8 z-20">
              <span className="font-label-caps text-label-caps text-tertiary mb-2 block text-[10px] tracking-widest uppercase">
                Tradition
              </span>
              <h3 className="font-headline-md text-2xl md:text-headline-md text-white">
                Local Techniques
              </h3>
            </div>
          </div>

          {/* Small Card 1 */}
          <div className="col-span-1 md:col-span-4 row-span-1 relative group overflow-hidden border border-outline-variant/10 bg-surface-container-low p-8 rounded-xl flex flex-col justify-center gap-4">
            <span className="material-symbols-outlined text-tertiary text-4xl">
              sailing
            </span>
            <h3 className="font-headline-md text-xl md:text-headline-md text-on-surface">
              The Fleet
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Hand-crafted wooden vessels, retrofitted for silent electric navigation.
            </p>
          </div>

          {/* Small Card 2 */}
          <div className="col-span-1 md:col-span-4 row-span-1 relative group overflow-hidden border border-outline-variant/10 rounded-xl">
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
            <img
              alt="Fly fishing rod on boat edge"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAf7lB3IcI7Mye0EX3-AJhZ3WJrYzChP2rYCCyJ6OZC-lKTK9EbE8RGh02Ornz_gzVVzLAUaxwAflk29ju76Hf_-o0LDPIoVcwK6np0DxVIe4tGoHQ6_d8rDL_fZh5DeX7LO7lfDcyy00FLPwzfseirCe58PlwH2cly7VbTDCYhwnmlww5HQaX8Kph1ifVdWJjf3AeKRWlVUQvViDa1vJE4m4z4KsEFy7_g7I-TOrIS1kn1Z17ywVL5S7VxFKeDR21IieePSXPnSaF9"
            />
            <div className="absolute inset-0 photo-fade-bottom opacity-80 z-10" />
            <div className="absolute bottom-0 left-0 p-6 z-20">
              <span className="font-label-caps text-label-caps text-tertiary block mb-1 text-[10px] tracking-widest uppercase">
                Equipment
              </span>
              <h3 className="font-headline-md text-lg text-white font-semibold">
                Premium Gear
              </h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
