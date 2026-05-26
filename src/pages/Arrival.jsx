import { useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';

export default function Arrival() {
  const [formData, setFormData] = useState({ name: '', email: '', flight: '', service: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setSubmitted(true);
    }
  };

  return (
    <div className="relative w-full overflow-x-hidden">
      {/* Hero Section */}
      <section
        className="relative min-h-[85vh] flex items-center justify-center px-margin-mobile md:px-margin-desktop bg-cover bg-center -mt-24"
        style={{
          backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuD02uwMWVnTAJRzOkLjAk6dfYtf5-jlxi4NPZYtf6m97Rle9cz6NFRWeFAxqGenzcQP3yl1ifx2zZ7_iRzKXqhs4wZbofH1SBKzYMZBdSdU9uSor__EHDPoj_QxVtNWpBL9YoJ3UqemkJb601Alq93nwK1TnnRqbSHef_akIHxrr-eY37N63wkoGJ-A5uqvgrEOMKNdXJEYidGbxHleHTD_Hg8KA0D-PkAj57XvhnKihul0AGF6YYZ6KdclfbAc3i8FI2XirW-N0Lbf')`,
        }}
      >
        <div className="absolute inset-0 hero-scrim-top pointer-events-none" />
        
        <div className="relative z-10 w-full max-w-container-max mx-auto text-center md:text-left flex flex-col md:flex-row items-end justify-between gap-12 pt-24 pb-12">
          <div className="max-w-2xl text-left">
            <ScrollReveal delay={100}>
              <p className="font-label-caps text-label-caps text-tertiary mb-6 opacity-90 tracking-widest uppercase">
                Arrival &amp; Departure
              </p>
              <h1 className="font-display-xl text-display-xl-mobile md:text-display-xl text-white mb-6 leading-tight">
                Seamless <br />
                <span className="text-white/80 italic">Transitions</span>
              </h1>
              <p className="font-body-lg text-body-lg text-white/70 max-w-xl font-light">
                From the moment you touch down to your final departure, experience the quiet luxury of effortless movement. Our curated transport fleet ensures your journey to the sanctuary is as serene as the destination itself.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={200} className="w-full md:w-[400px]">
            <div className="glass-panel p-8 bg-glass-bg border border-glass-border backdrop-blur-[24px]">
              <h3 className="font-display-xl text-headline-md text-on-surface mb-2">
                Book Your Transfer
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                Arrange your private arrival experience directly with our concierge team.
              </p>
              <button
                onClick={() => {
                  const el = document.getElementById('transport-form');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-4 border border-outline/30 text-on-surface font-label-caps text-label-caps hover:bg-secondary hover:text-on-secondary hover:border-secondary transition-all duration-500 w-full text-center flex justify-center items-center gap-2 cursor-pointer active:scale-95 focus:outline-none"
              >
                Request Transport
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Bento Grid */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="mb-24 md:w-1/2">
          <ScrollReveal>
            <h2 className="font-display-xl text-headline-lg-mobile md:text-headline-lg text-on-surface mb-6">
              Curated Fleet
            </h2>
            <div className="w-24 h-px bg-tertiary/50 mb-8"></div>
            <p className="font-body-lg text-body-lg text-on-surface-variant font-light">
              Choose the mode of arrival that best suits your rhythm. Whether by road or river, our transport options are designed to extend the sanctuary experience beyond our borders.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {/* Airport Pickups - Large Feature */}
          <div className="md:col-span-8 relative group overflow-hidden bg-surface-container-low h-[400px]">
            <ScrollReveal className="w-full h-full">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.5s] group-hover:scale-105 ease-out"
                style={{
                  backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBify3_h3wJDI6zDXG7au6OU1VpjWizUqC_dcN7cMq7WcNbTvrtw2oKMFYEoF56Kezw6_EYCpLhJEYePhfO4DmSSRwUPVRYq-F2jYMfWa-wYB6mxSVS3uKa_eF9qUW4FC13p0Aik2aawTlsyC5M5wRajW0lj0c6ZmMLmD1ULr7ykfYwvxN6gGpSHnYVLqEU_CGDDwCv6wWlDZcKTItqlXG0aR0I6E0vNpmyMJ01QBY56CtCzBxjegUgqwYCSlOiWt0UqOcBsLAOvkLP')`,
                }}
              />
              <div className="absolute inset-0 photo-fade-bottom" />
              <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full flex flex-col md:flex-row justify-between items-end gap-6">
                <div className="max-w-md text-left">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="material-symbols-outlined text-tertiary">flight_land</span>
                    <span className="font-label-caps text-label-caps text-tertiary">Kotoka International</span>
                  </div>
                  <h3 className="font-display-xl text-headline-md text-white mb-2">Airport Protocol</h3>
                  <p className="font-body-md text-body-md text-white/70">
                    Personalized meet-and-greet service at baggage claim, fast-track assistance, and immediate transition to our premium vehicles.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Accra to Ada - Vertical Portrait */}
          <div className="md:col-span-4 relative group overflow-hidden bg-surface-container-low h-[400px]">
            <ScrollReveal className="w-full h-full">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.5s] group-hover:scale-105 ease-out"
                style={{
                  backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCdsYElXn4g52Fdeh2T-QPFBgDhlFpMMKgEddH0bTROxUwQU1uJAbt5yHWvhZpr8s-rwIhRXYElVFYMvNfuPiA0QJ6CeOrjIJFeBDrQOrg-gTzEcXgDuUTHLKsltreiHadd1VeLhsXnTv4jRDVdneGYHlyWot0hrN_kL4mMUhHVFnlp1jx_emneegMVO6yFbcwNX3Q3gS-lYnHcolO0-ebkEeiILjYUV2QvRxI3_hn9heXOqrO0QuZef0TV-EBYxY1s5rWxm03Ty4K7')`,
                }}
              />
              <div className="absolute inset-0 photo-fade-bottom" />
              <div className="absolute bottom-0 left-0 p-8 w-full text-left">
                <div className="flex items-center gap-3 mb-4">
                  <span className="material-symbols-outlined text-tertiary">directions_car</span>
                  <span className="font-label-caps text-label-caps text-tertiary">City to Sanctuary</span>
                </div>
                <h3 className="font-display-xl text-headline-md text-white mb-2">Accra Transfers</h3>
                <p className="font-body-md text-body-md text-white/70">
                  A smooth 90-minute journey in our climate-controlled SUVs, featuring complimentary refreshments and Wi-Fi.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* River Arrival - Full Width */}
          <div className="md:col-span-12 relative group overflow-hidden bg-surface-container-low mt-gutter h-[500px]">
            <ScrollReveal className="w-full h-full">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.5s] group-hover:scale-105 ease-out"
                style={{
                  backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuB48sAiAEnwWWGkGxkcYU4LSufiiPBoF_G5Vl4WLGihmlJFbnLR4Xha2eaYYCw51zvYnHLsql7ZKj2vBu3egyF4xTyYomWkz5v8LKxtTrqgHVIhnAt8pvVWL3kgzSeFJ3J2mmIe8-hJs-EssaRhKo_p-cwDOZqH1oQVNtmNWTT-XekDjhvH-JC9dGoa3HdvT0BdFL7Ps1x4voj0ibUnIYblLrV2SONB_eC3Hfe9euifRLXFn5VHtMsfl905vp8mPZt_1hfOJXoBwPXR')`,
                }}
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(14,13,9,0.85) 0%, rgba(14,13,9,0.50) 35%, transparent 60%)' }} />
              <div className="absolute top-0 left-0 p-8 md:p-16 h-full flex flex-col justify-center max-w-xl text-left">
                <div className="flex items-center gap-3 mb-6">
                  <span className="material-symbols-outlined text-tertiary">sailing</span>
                  <span className="font-label-caps text-label-caps text-tertiary">The Ultimate Entrance</span>
                </div>
                <h3 className="font-display-xl text-headline-lg-mobile md:text-headline-lg text-white mb-6">
                  River Arrival
                </h3>
                <p className="font-body-lg text-body-lg text-white/70 font-light mb-8">
                  For those seeking true immersion, bypass the roads entirely. Board our private launch at the estuary and arrive at the sanctuary via the winding waterways of the Volta, setting the tone for your stay.
                </p>
                <a
                  href="/boats"
                  className="group/btn flex items-center gap-4 w-fit focus:outline-none"
                >
                  <span className="font-label-caps text-label-caps text-white group-hover/btn:text-tertiary transition-colors">
                    View Fleet Details
                  </span>
                  <div className="w-12 h-px bg-white/30 group-hover/btn:w-16 group-hover/btn:bg-tertiary transition-all duration-300"></div>
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Booking Inquiry Form */}
      <section
        id="transport-form"
        className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container-lowest border-t border-outline-variant/10"
      >
        <div className="max-w-4xl mx-auto text-left">
          <ScrollReveal className="text-center mb-16">
            <h2 className="font-display-xl text-headline-lg-mobile md:text-headline-lg text-on-surface mb-4">
              Arrange Transport
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant font-light">
              Provide your details, and our concierge will orchestrate your movement.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            {submitted ? (
              <div className="text-center py-12 glass-panel p-8 border-glass-border">
                <span className="material-symbols-outlined text-tertiary text-5xl mb-4">
                  done_all
                </span>
                <h3 className="font-display-xl text-headline-md text-on-surface mb-4">
                  Request Received
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-md mx-auto">
                  Our private concierge will contact you within 2 hours to confirm your tailored transport arrangements.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-gutter gap-y-12">
                  <div className="relative group">
                    <input
                      required
                      type="text"
                      id="name"
                      placeholder=" "
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full bg-transparent border-0 border-b border-outline-variant/50 px-0 py-3 text-on-surface font-body-md focus:ring-0 focus:border-tertiary transition-colors peer focus:outline-none"
                    />
                    <label
                      htmlFor="name"
                      className="absolute left-0 top-3 text-on-surface-variant font-label-caps text-label-caps transition-all peer-focus:-top-4 peer-focus:text-tertiary peer-focus:text-[10px] peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-[10px]"
                    >
                      Guest Name
                    </label>
                  </div>
                  <div className="relative group">
                    <input
                      required
                      type="email"
                      id="email"
                      placeholder=" "
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full bg-transparent border-0 border-b border-outline-variant/50 px-0 py-3 text-on-surface font-body-md focus:ring-0 focus:border-tertiary transition-colors peer focus:outline-none"
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-0 top-3 text-on-surface-variant font-label-caps text-label-caps transition-all peer-focus:-top-4 peer-focus:text-tertiary peer-focus:text-[10px] peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-[10px]"
                    >
                      Email Address
                    </label>
                  </div>
                  <div className="relative group">
                    <input
                      type="text"
                      id="flight"
                      placeholder=" "
                      value={formData.flight}
                      onChange={(e) => setFormData(prev => ({ ...prev, flight: e.target.value }))}
                      className="w-full bg-transparent border-0 border-b border-outline-variant/50 px-0 py-3 text-on-surface font-body-md focus:ring-0 focus:border-tertiary transition-colors peer focus:outline-none"
                    />
                    <label
                      htmlFor="flight"
                      className="absolute left-0 top-3 text-on-surface-variant font-label-caps text-label-caps transition-all peer-focus:-top-4 peer-focus:text-tertiary peer-focus:text-[10px] peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-[10px]"
                    >
                      Flight Details (Optional)
                    </label>
                  </div>
                  <div className="relative group">
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) => setFormData(prev => ({ ...prev, service: e.target.value }))}
                      className="w-full bg-transparent border-0 border-b border-outline-variant/50 px-0 py-3 text-on-surface font-body-md focus:ring-0 focus:border-tertiary transition-colors appearance-none peer focus:outline-none"
                    >
                      <option className="bg-surface text-on-surface" value="">Select Service</option>
                      <option className="bg-surface text-on-surface" value="airport">Airport Transfer</option>
                      <option className="bg-surface text-on-surface" value="accra">Accra City Pickup</option>
                      <option className="bg-surface text-on-surface" value="boat">River Arrival</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-0 top-3 pointer-events-none text-on-surface-variant">
                      expand_more
                    </span>
                  </div>
                </div>
                <div className="pt-8 text-center">
                  <button
                    type="submit"
                    className="px-12 py-4 border border-outline/30 text-on-surface font-label-caps text-label-caps hover:bg-secondary hover:text-on-secondary hover:border-secondary transition-all duration-500 inline-flex items-center gap-3 cursor-pointer active:scale-95 focus:outline-none"
                  >
                    Submit Request
                    <span className="material-symbols-outlined text-sm">send</span>
                  </button>
                </div>
              </form>
            )}
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
