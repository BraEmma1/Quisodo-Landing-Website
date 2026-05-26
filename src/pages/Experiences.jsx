import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';

export default function Experiences() {
  const navigate = useNavigate();

  // Reveal on scroll effect matching the Stitch script
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
    <div className="relative w-full bg-surface text-on-surface antialiased overflow-x-hidden selection:bg-tertiary selection:text-on-tertiary">
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
      <header className="relative w-full h-[819px] md:h-screen flex flex-col justify-end px-margin-mobile md:px-margin-desktop pb-section-gap overflow-hidden -mt-24">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 bg-[#0e0d09]">
          <img
            alt="River at dusk view from deck"
            className="w-full h-full object-cover opacity-60"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0WYuYoDx3031SfgFFtnPdnPP9yjKtNkrIdqcmOq4ul9eT4JpqQsIkiCCUVExCPxrEErsiI-opK7kFopsl3_FV4Bb926lyfpbUlfKQ5WF16C1UlL_SYBll3yjGyYedIcOXIffks1OUdoFMWmfYay6IXgpGqFK0ZSIaTCvp3TsLo2JCLbMXw3nb5lVFnHmen6f-g1wieUSbuW2hmaOUnK6WwLxZCPK4yPnSBujc1q1nO2htoo-NwRsJYmhmQMwryK4YoYj1fuWUUjup"
          />
          <div className="absolute inset-0 hero-scrim-bottom" />
        </div>

        <div className="relative z-10 max-w-container-max mx-auto w-full">
          <ScrollReveal>
            <p className="font-label-caps text-label-caps text-tertiary uppercase mb-6 tracking-widest">
              The Sanctuary
            </p>
            <h1 className="font-display-xl text-display-xl-mobile md:text-display-xl text-white max-w-4xl leading-tight">
              Curated encounters with the current.
            </h1>
            <p className="font-body-lg text-body-lg text-white/75 max-w-2xl mt-8">
              Step beyond the ordinary. Our carefully orchestrated experiences are designed to immerse you in the raw beauty and quiet rhythms of the river delta.
            </p>
          </ScrollReveal>
        </div>
      </header>

      {/* Editorial Grid Section */}
      <section className="w-full px-margin-mobile md:px-margin-desktop py-section-gap max-w-container-max mx-auto">
        <div className="grid grid-cols-12 gap-y-16 md:gap-gutter">

          {/* Sunset Cruises (Large, spanning) */}
          <div className="col-span-12 md:col-span-8 group cursor-pointer reveal-on-scroll">
            <div className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden mb-6 bg-surface-container">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <img
                alt="Luxury boat on Volta River at sunset"
                className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-105 opacity-80 group-hover:opacity-100"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCoHYzL6RgWjGU1Qh796SqsxMuLUdtjhh1tZc33Npufm0YqMmkN_xpZpeZcu0Hy4jK44Yo3-YbP_BrLby4otv8lbWUSpOhrtf6v24s64K-N3ZjSbdVwu39A5NjbeSOtI4S3aOd8zFqybMHH2ubqVGjrTSKbnx1Fljef6fY0qF6_EziEMKiKCIDbR4NelTknb-xH5KvCPmJz2HpzEX9eDFNW5y2X_X_Y8-VQGRpxjPuqC-CK0XIeMZD7oCp_BLC1NfSb9uZoe2dDZ4ZW"
              />
            </div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
              <div>
                <h2 className="font-headline-md text-headline-md text-on-surface mb-2">Twilight Navigation</h2>
                <p className="font-label-caps text-label-caps text-tertiary uppercase text-[10px] tracking-widest">Sunset Cruises</p>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant md:max-w-sm leading-relaxed">
                Drift silently as the sky turns to bruised violet and gold. A private vessel, vintage champagne, and the unbroken horizon.
              </p>
            </div>
          </div>

          {/* Local Culture (Offset right) */}
          <div className="col-span-12 md:col-span-4 md:col-start-9 md:-mt-32 group cursor-pointer reveal-on-scroll">
            <div className="relative w-full aspect-[3/4] overflow-hidden mb-6 bg-surface-container">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <img
                alt="Local artisan weaving hands"
                className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-105 opacity-80 group-hover:opacity-100 filter grayscale group-hover:grayscale-0"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiLsYl8mxjmV93gfRrxOQG9bs4UHRrXWahUJJrMmFbM4yU7ajNFiHhMoQc1LQNsaqQnnvrRLoEfecxqffQJdBvrzQ39Y9JaWlrsilnqoytmg3TQ1CyRtj0mkioNjWiwgvXtLFAaw1WoBQZs5GMTTgZGcweH1FGVZI-aIBf8T82tT7_wBVwPBgFN0aVU_izEii5nbV9nDe9sLm0YUW5zaK6t2UhsziNIbX4ukSbeRIlUafFvLkktUZYvVo7UmcqsqOo25SVBStDPzQc"
              />
            </div>
            <h2 className="font-headline-md text-headline-md text-on-surface mb-2">Artisan Dialogues</h2>
            <p className="font-label-caps text-label-caps text-tertiary uppercase text-[10px] tracking-widest">Local Culture</p>
          </div>

          {/* Nature Exploration (Left aligned, wide) */}
          <div className="col-span-12 md:col-span-6 md:mt-24 group cursor-pointer reveal-on-scroll">
            <div className="relative w-full aspect-square md:aspect-[4/3] overflow-hidden mb-6 bg-surface-container">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <img
                alt="Misty mangrove forest delta"
                className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-105 opacity-80 group-hover:opacity-100"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVyx0b9ZsuvfrBXvTMzneApOfJAE90h-9ye_XlzTgwT-KGYbL3RdUocrV4GNM7bpUvUXpbanHyY3-zCtK2M_8xOzmt8Z_c0c_o8_oZpTJuJL-LUKdoSRpw0d91B5Yadpw-PCtKJUeTQp4EwWq3CAbBY8_2t6D13Jy77-iCEOBr45gZCc1XRFrncP8q_Yk_m6O_Bg4LNYSqcty36tojt8Dbz-Uc5z3pjoaDSNsYvgxNXjaHeOfdnzkE2nFgDwz_bZdPMn6EIMSluBMU"
              />
            </div>
            <h2 className="font-headline-md text-headline-md text-on-surface mb-2">Delta Expeditions</h2>
            <p className="font-label-caps text-label-caps text-tertiary uppercase mb-4 text-[10px] tracking-widest">Nature Exploration</p>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md leading-relaxed">
              Guided excursions into the deeper sanctuaries of the river. Witness untouched ecology through the lens of profound silence.
            </p>
          </div>

          {/* Couples Packages (Right aligned, portrait) */}
          <div className="col-span-12 md:col-span-5 md:col-start-8 md:mt-48 group cursor-pointer reveal-on-scroll">
            <div className="relative w-full aspect-[4/5] overflow-hidden mb-6 bg-surface-container border border-outline-variant/20 p-4">
              <div className="absolute inset-0 bg-surface/20 group-hover:bg-transparent transition-colors duration-500 z-10 m-4" />
              <img
                alt="Romantic dinner on a pier at night"
                className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-105 opacity-70 group-hover:opacity-100"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXQZ9YYB7sDJCIAgQ2CULsy-0bRZwWxXlRLgRtvnlrvpvynE-_yhNLmk4NM_CwWJFLmhSQXgY8oei2b2VE3sVPv8qA6LU0v1aAs_4Jy4m_ciPaX6Elr10A-TfZIVqsQgX-51bSJhKyzeVYEqkqMLWHRPGwS8Osre73GDh0isIKChWjdVvIVfSiG2Cx1Ww5r2mzyAvj74Zh_qoWJSGviKoLehZDjNdoFTWYkkWSpQwMK1WuwZzlTryJzIIaum-Z2gZ26_dLp-DNO0Ar"
              />
            </div>
            <div className="text-center md:text-left md:pl-4">
              <h2 className="font-headline-md text-headline-md text-on-surface mb-2">Isolation Elegance</h2>
              <p className="font-label-caps text-label-caps text-tertiary uppercase mb-6 text-[10px] tracking-widest">Couples Packages</p>
              <button
                onClick={() => navigate('/contact')}
                className="font-label-caps text-label-caps uppercase text-on-surface border-b border-on-surface pb-1 hover:text-primary hover:border-primary transition-all duration-300 select-none text-[11px]"
              >
                Inquire Details
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section (Glassmorphism card) */}
      <section className="w-full px-margin-mobile md:px-margin-desktop pb-section-gap max-w-container-max mx-auto">
        <div className="relative w-full overflow-hidden p-12 md:p-24 flex flex-col items-center text-center rounded-xl border border-outline-variant/10">
          <div className="absolute inset-0 bg-surface-container-high/40 backdrop-blur-3xl" />
          <div className="relative z-10 max-w-2xl">
            <span className="material-symbols-outlined text-tertiary mb-6 text-4xl">
              explore
            </span>
            <h2 className="font-display-xl text-4xl sm:text-5xl md:text-[56px] lg:text-[64px] text-on-surface mb-8 leading-[1.05] tracking-tight">
              Tailor Your <span className="italic font-light text-tertiary">Narrative</span>
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-12 leading-relaxed">
              Our concierge is available to construct a bespoke itinerary that aligns perfectly with your distinct definition of escape.
            </p>
            <button
              onClick={() => navigate('/contact')}
              className="font-label-caps text-label-caps uppercase border border-outline px-8 py-4 text-on-surface hover:bg-secondary hover:text-on-secondary hover:border-secondary transition-all duration-500 tracking-widest cursor-pointer select-none text-[11px]"
            >
              Inquire
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
