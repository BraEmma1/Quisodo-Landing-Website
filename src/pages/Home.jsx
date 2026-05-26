import { useNavigate } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import familyOnBoat from '../assets/Optimized images/family-on-boat.jpg';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="relative w-full">
      {/* Hero Section */}
      <header
        className="relative w-full h-[92vh] md:h-screen flex items-center justify-center overflow-hidden -mt-24"
      >
        {/* Background YouTube Video */}
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none filter brightness-[0.55] select-none">
          <iframe
            className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2"
            src="https://www.youtube.com/embed/WMO-Lt4VMdw?autoplay=1&mute=1&loop=1&playlist=WMO-Lt4VMdw&controls=0&showinfo=0&rel=0&playsinline=1&enablejsapi=1&vq=hd1080"
            title="Quisodo Riverside Sanctuary Background Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Cinematic dark overlays — always dark regardless of theme for photo contrast */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background: 'linear-gradient(to top, rgba(14,13,9,0.80) 0%, rgba(14,13,9,0.25) 50%, rgba(14,13,9,0.10) 100%)'
          }}
        />

        <div className="relative z-20 text-center px-margin-mobile flex flex-col items-center max-w-5xl translate-y-12 md:translate-y-16">
          <ScrollReveal delay={100} className="flex flex-col items-center">
            <p className="font-label-caps text-[12px] md:text-[14px] text-tertiary mb-6 tracking-[0.45em] uppercase">
              Welcome to Quisodo
            </p>
            <h1 className="font-display-xl text-3xl sm:text-5xl md:text-[60px] lg:text-[74px] xl:text-[82px] text-white leading-[1.08] text-shadow-elegant max-w-5xl tracking-wide">
              Where River Life<br />
              <span className="italic font-light text-tertiary">Becomes Luxury</span>
            </h1>
          </ScrollReveal>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20">
          <ScrollReveal delay={300}>
            <button
              onClick={() => {
                const element = document.getElementById('sanctuary-story');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="flex items-center justify-center w-12 h-12 rounded-full border border-white/20 hover:border-tertiary text-white hover:text-tertiary hover:bg-tertiary/10 transition-all duration-500 cursor-pointer focus:outline-none active:scale-90 animate-bounce"
              aria-label="Scroll to story"
            >
              <span className="material-symbols-outlined text-[20px]">
                arrow_downward
              </span>
            </button>
          </ScrollReveal>
        </div>
      </header>

      {/* Main Content Area */}
      <main>
        {/* Storytelling Section */}
        <section id="sanctuary-story" className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
            <div className="md:col-span-5 md:col-start-2">
              <ScrollReveal>
                <h2 className="font-display-xl text-headline-lg-mobile md:text-headline-lg text-on-surface leading-[1.1] mb-8">
                  A Sanctuary<br />on the Volta
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-lg">
                  Hidden where the currents slow and the air thickens with the scent of water lilies, Quisodo offers an unparalleled escape. It is a place where the rhythmic pulse of the river dictates the pace of the day, and luxury is found in the profound quiet.
                </p>
                <button
                  onClick={() => navigate('/story')}
                  className="font-label-caps text-label-caps text-primary border-b border-primary/30 pb-1 hover:border-primary transition-colors duration-300 cursor-pointer focus:outline-none"
                >
                  Read Our Story
                </button>
              </ScrollReveal>
            </div>

            <div className="md:col-span-5 md:col-start-8 mt-12 md:mt-0 relative">
              <ScrollReveal delay={200}>
                <div className="aspect-[3/4] overflow-hidden rounded-sm relative group">
                  <img
                    alt="River textures"
                    className="w-full h-full object-cover grayscale-[20%] contrast-125 group-hover:scale-105 transition-transform duration-700 ease-out"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZAPTMoKUELf03utlfHjau1jY782ZPawkC63QHNhzNhWiEgomof0NfXsp-9jfHJT1MMe2seSYfsifMbt0FNh949jDM__NcOtu6JLsx_vCigbsGrWaT2uOW0i5hZq8O2Rs01_CyRUuhglFps3gTt3X8GZn6j3eL8V2tuCOBZVzKHa-bk6ltKI-hODSD7GrtDlyj4l6eme-KOvjrnLmQilSY-Fus-j84Z4O0xJ7DwVSIZeyjRdbVHfe_8vPilYamPJtEn5-6LgwGNMzH"
                  />
                  <div className="absolute inset-0 border border-outline/20 m-4 pointer-events-none transition-all duration-500 group-hover:m-6" />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Accommodations Preview */}
        <section className="py-section-gap bg-surface-container-lowest relative overflow-hidden">
          <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16">
              <ScrollReveal>
                <p className="font-label-caps text-label-caps text-tertiary mb-4">Stay</p>
                <h2 className="font-display-xl text-headline-lg-mobile md:text-headline-lg text-on-surface leading-none">
                  Riverfront Havens
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={150}>
                <button
                  onClick={() => navigate('/stay')}
                  className="hidden md:inline-block font-label-caps text-label-caps text-on-surface-variant hover:text-on-surface transition-colors duration-300 border-b border-outline/30 pb-1 cursor-pointer focus:outline-none"
                >
                  View All Suites
                </button>
              </ScrollReveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
              {/* Suite Card 1 */}
              <ScrollReveal className="group cursor-pointer" onClick={() => navigate('/rooms/volta-suite')}>
                <div className="aspect-[16/9] overflow-hidden rounded-sm mb-6 relative">
                  <img
                    alt="The Volta Suite"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuPAPV_S6xSGj8B9y1_pi_ezDw9HWnOzCkpTrPJe5uB320H1Pj_-1Epr3Zwr81_wE16cXvf-zUy3yfLoMolBiyilFq39NcxN1KldqFbfVyOhnVoJa2Akhis5VXv39eQoPLa6n2RCu8Axqne664iKxVnSm0r6lqJVKaHZFtHkDXorH3B-sSgsLVWbx6eZP5swbnRWb19nHu32sd9Jk1Vqawe8WBBxhJPpVunnPpdyx2BPwDzH2P0FF7hmxw0gixX68PULtsfmwx50Qi"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-display-xl text-headline-md text-on-surface mb-2">The Volta Suite</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant max-w-sm">
                      Panoramic river views with a private cantilevered deck and plunge pool.
                    </p>
                  </div>
                  <span
                    className="material-symbols-outlined text-tertiary font-light group-hover:translate-x-2 transition-transform duration-300"
                    data-icon="arrow_forward"
                  >
                    arrow_forward
                  </span>
                </div>
              </ScrollReveal>

              {/* Suite Card 2 */}
              <ScrollReveal
                className="group cursor-pointer mt-12 md:mt-24"
                onClick={() => navigate('/rooms/canopy-villa')}
                delay={200}
              >
                <div className="aspect-[16/9] overflow-hidden rounded-sm mb-6 relative">
                  <img
                    alt="Canopy Villa"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQD8grn3A0dZupUzq2eQ3GflvdOUQXSTBnnI93JSeARyFy_XQ15VNqP460pki6jOShc59xlt0tuouk51_2T_CN70Hyo1Y_RN9zL-NkTtBycAmhNbOZE1SHC_E2CNR9sNHERDCdzsoC7doiAJsJP3AJWcu2MP3JLtBfHb-ZZmtM3I0w2Oc2GwqjI4_-jMfF9aK8l0isuZrva3bgplsF3ZBWZHG0KHmiiKuIDFCxy77cKCNnXWhWvY7vVA1JKui9Hk96flLdj-BUNfHh"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-display-xl text-headline-md text-on-surface mb-2">Canopy Villa</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant max-w-sm">
                      Nestled in the foliage, featuring an open-air stone bath and expansive living space.
                    </p>
                  </div>
                  <span
                    className="material-symbols-outlined text-tertiary font-light group-hover:translate-x-2 transition-transform duration-300"
                    data-icon="arrow_forward"
                  >
                    arrow_forward
                  </span>
                </div>
              </ScrollReveal>
            </div>

            <div className="text-center mt-16 md:hidden">
              <button
                onClick={() => navigate('/stay')}
                className="font-label-caps text-label-caps text-on-surface border border-outline px-8 py-4 w-full"
              >
                View All Suites
              </button>
            </div>
          </div>
        </section>

        {/* Fishing Experiences Section */}
        <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
            <div className="md:col-span-7 order-2 md:order-1 relative">
              <ScrollReveal>
                <div className="aspect-[4/5] md:aspect-video overflow-hidden rounded-sm group relative">
                  <img
                    alt="Silhouette of a fisherman at dawn on the Volta River"
                    className="w-full h-full object-cover grayscale-[10%] contrast-110 group-hover:scale-102 transition-transform duration-1000 ease-out"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9pT0Gv7I-8q5g4zF-R9-0tS-t9S0gS-G-t9S0gS-G-t9S0gS-G-t9S0gS-G-t9S0gS-G-t9S0gS-G-t9S0gS-G-t9S0gS-G-t9S0gS-G"
                  />
                  <div className="absolute inset-0 bg-surface/10" />
                </div>
              </ScrollReveal>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 border border-outline/10 -z-10 hidden md:block" />
            </div>

            <div className="md:col-span-4 md:col-start-9 order-1 md:order-2 mb-12 md:mb-0">
              <ScrollReveal delay={150}>
                <p className="font-label-caps text-label-caps text-tertiary mb-6 tracking-[0.3em]">
                  FISHING EXPERIENCES
                </p>
                <h2 className="font-display-xl text-headline-lg-mobile md:text-headline-lg text-on-surface leading-[1.1] mb-8">
                  The Art of<br />the Cast
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant mb-10">
                  Embrace the rhythmic pulse of the Volta. From sunrise expeditions to learning local techniques passed down through generations, our guided fishing journeys are a masterclass in patience and connection.
                </p>
                <button
                  onClick={() => navigate('/experiences')}
                  className="inline-block font-label-caps text-label-caps text-on-surface border border-outline px-8 py-4 hover:bg-tertiary hover:text-on-tertiary hover:border-tertiary transition-all duration-300 cursor-pointer focus:outline-none active:scale-95"
                >
                  Discover Fishing
                </button>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Boat Cruising Section */}
        <section className="py-section-gap bg-surface-container-low overflow-hidden">
          <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch bg-surface-container-lowest">
              <div className="p-8 md:p-20 flex flex-col justify-center">
                <ScrollReveal>
                  <p className="font-label-caps text-label-caps text-tertiary mb-6 tracking-[0.3em]">
                    BOAT CRUISING
                  </p>
                  <h2 className="font-display-xl text-headline-lg-mobile md:text-headline-lg text-on-surface leading-[1.1] mb-8">
                    Freedom on<br />the Water
                  </h2>
                  <p className="font-body-lg text-body-lg text-on-surface-variant mb-12 max-w-md">
                    Navigate the currents in unmatched style. Whether a sunset champagne cruise on a private yacht or a slow exploration of the mangrove channels in a classic mahogany skiff, the river is yours to command.
                  </p>
                  <div>
                    <button
                      onClick={() => navigate('/boats')}
                      className="inline-block font-label-caps text-label-caps text-on-surface border border-outline px-8 py-4 hover:bg-secondary hover:text-on-secondary hover:border-secondary transition-all duration-300 cursor-pointer focus:outline-none active:scale-95"
                    >
                      Explore the Fleet
                    </button>
                  </div>
                </ScrollReveal>
              </div>

              <div className="h-[400px] md:h-auto min-h-[400px] relative overflow-hidden group">
                <ScrollReveal className="w-full h-full">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover z-0 filter brightness-90 group-hover:scale-102 transition-transform duration-1000"
                  >
                    <source src="https://storage.googleapis.com/aida-featured-images/river-luxury-boat.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute inset-0 bg-overlay-bg z-10 transition-colors duration-500 group-hover:bg-overlay-bg-hover" />
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
