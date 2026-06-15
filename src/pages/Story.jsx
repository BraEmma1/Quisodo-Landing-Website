import ScrollReveal from '../components/ScrollReveal';

export default function Story() {
  return (
    <div className="relative w-full overflow-x-hidden">
      {/* Hero Section */}
      <section
        className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-cover bg-center -mt-24"
        style={{
          backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBq3l-apahR9lo0p8uPNcuhEvMkThjgB0sJE3bzAz4pcc76-Tnz1mNHhkMAZahOK7Vx06zWll_YWZlXdZP33eBHLdvPEinFxKVeU_j2oc2J1UeDK3oq-OXasKLyFjLfAWYCa_cKyEy2JEelf154s_63AH_wxi-bel65HK94XQcU2ZAIdW1cyD6HkpgYrXk2VqvTxlnH6DhDV7UDMDIjFRrWHOz8XkKzvMR6fwEITVHQUaaEESTzXEQAhV2zir09jCybeDPhy4m9oeKS')`,
        }}
      >
        <div className="absolute inset-0 hero-scrim-bottom" />
        <div className="relative z-10 text-center px-margin-mobile max-w-4xl mx-auto mt-20">
          <ScrollReveal delay={100}>
            <span className="font-label-caps text-label-caps text-[#bac9cd] block mb-6 tracking-widest uppercase">
              The Vision
            </span>
            <h1 className="font-display-xl text-display-xl-mobile md:text-display-xl text-white mb-8 text-shadow-elegant">
              Where the River <span className="italic text-tertiary">Meets the Soul</span>
            </h1>
            <p className="font-body-lg text-body-lg text-white/70 max-w-2xl mx-auto">
              Quisodo Landing is not merely a destination; it is a narrative woven into the currents of the Volta. A sanctuary designed for quiet contemplation and profound connection with the elemental landscape of Ada.
            </p>
          </ScrollReveal>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-pulse opacity-60">
          <span className="font-label-caps text-label-caps text-white/70 mb-2">Scroll to Discover</span>
          <div className="w-[1px] h-12 bg-white/30"></div>
        </div>
      </section>

      <main className="w-full">
        {/* Chapter 1: Split Layout */}
        <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-gutter md:gap-24">
            <div className="w-full md:w-5/12 order-2 md:order-1 relative">
              <ScrollReveal delay={100} className="relative z-10">
                <div className="absolute -inset-4 border border-outline-variant/30 transform translate-x-4 translate-y-4 -z-10 hidden md:block"></div>
                <img
                  alt="Local fisherman"
                  className="w-full h-auto aspect-[3/4] object-cover rounded shadow-2xl filter grayscale-[20%] contrast-[1.1] brightness-[0.9]"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuApVBLMKwrvdlOtQ3I-q0uiO97hWCnLtZ9HPWP1Lo7EQHNFxByWxGQmqPNZONdIsjOxff9HXGDKU7bD5f0rLTrfJZG7Iai3pPlYrqrrr3EB36HOiR6ezF5zXkqfwGKjTqkBlHBMXiLAngZ_IsDBkUDL5qT7HcuPU70A5BCNpw264oFywb5fGrTzibvM7scbcN17cc45_5Fead9kJz4LNj9_USqt4rzB6SEs6ZCO3x_j3k3SMeh_WTMOB4pnsK5KcBToN-JRz0r25vJW"
                />
                <p className="mt-4 font-label-caps text-label-caps text-on-surface-variant text-right">
                  01 // The Heritage
                </p>
              </ScrollReveal>
            </div>
            <div className="w-full md:w-7/12 order-1 md:order-2 space-y-8">
              <ScrollReveal delay={200}>
                <h2 className="font-display-xl text-4xl sm:text-5xl md:text-[56px] lg:text-[64px] text-on-surface mb-6 leading-[1.05] tracking-tight">
                  The Culture of <span className="italic font-light text-tertiary">Ada</span>
                </h2>
                <div className="w-12 h-[1px] bg-primary mb-6"></div>
                <div className="space-y-6">
                  <p className="font-body-lg text-body-lg text-on-surface">
                    For generations, the people of Ada have lived in rhythmic harmony with the estuary. Their lives are dictated not by the clock, but by the tides, the winds, and the migration of the fish. Quisodo Landing was born from a deep reverence for this ancient cadence.
                  </p>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    We sought to create a space that doesn't impose itself on the landscape, but rather emerges from it. Every architectural line, every textured surface, and every curated experience is an homage to the resilience and grace of riverine life.
                  </p>
                </div>
                <a
                  href="/experiences"
                  className="mt-8 inline-flex items-center space-x-3 text-tertiary hover:text-primary transition-colors group cursor-pointer focus:outline-none"
                >
                  <span className="font-label-caps text-label-caps">Read the Full History</span>
                  <span className="material-symbols-outlined transform group-hover:translate-x-1 transition-transform">
                    arrow_right_alt
                  </span>
                </a>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Chapter 2: The Architecture & Philosophy */}
        <section className="py-section-gap bg-surface-container-low px-margin-mobile md:px-margin-desktop">
          <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
            <div className="md:col-span-6 space-y-8">
              <ScrollReveal>
                <span className="font-label-caps text-label-caps text-primary tracking-widest block uppercase">
                  02 // Design philosophy
                </span>
                <h2 className="font-display-xl text-4xl sm:text-5xl md:text-[56px] lg:text-[64px] text-on-surface leading-[1.05] tracking-tight">
                  Quiet <span className="italic font-light text-tertiary">Luxury</span> &amp; Architectural Restraint
                </h2>
                <div className="w-12 h-[1px] bg-primary my-6"></div>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  We reject the standard tropes of generic resorts. The shapes are strictly sharp and architectural. All roundness is removed to celebrate clean structure, creating a frame that celebrates the organic lines of the flowing river.
                </p>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Our materials are tactile and honest—polished stone, raw mahogany, and brass accents that will gracefully weather under the sea breeze, recording the passage of time.
                </p>
              </ScrollReveal>
            </div>
            <div className="md:col-span-6 mt-12 md:mt-0 relative group overflow-hidden rounded-sm">
              <ScrollReveal delay={150}>
                <img
                  alt="Architecture minimal"
                  className="w-full h-auto aspect-video object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                  src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80"
                />
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
