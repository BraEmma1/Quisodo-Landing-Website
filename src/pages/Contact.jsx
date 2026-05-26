import React, { useState, useEffect } from 'react';
import ScrollReveal from '../components/ScrollReveal';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    interest: 'stay',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Parallax background effect for the atmospheric twilight river
  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      const bg = document.querySelector('.parallax-bg');
      if (bg) {
        bg.style.transform = `translateY(${scroll * 0.15}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dynamically take off the vertical scrollbar track on mount, and restore on unmount
  useEffect(() => {
    const root = window.document.documentElement;
    root.style.scrollbarWidth = 'none'; // Firefox
    root.style.msOverflowStyle = 'none'; // IE/Edge
    
    const style = document.createElement('style');
    style.id = 'hide-scrollbar-style';
    style.innerHTML = `
      ::-webkit-scrollbar {
        display: none !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      root.style.scrollbarWidth = '';
      root.style.msOverflowStyle = '';
      const styleEl = document.getElementById('hide-scrollbar-style');
      if (styleEl) {
        styleEl.remove();
      }
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        interest: 'stay',
        message: ''
      });
    }, 1500);
  };

  return (
    <div className="relative min-h-screen bg-surface text-on-surface antialiased overflow-x-hidden pb-section-gap">
      {/* Ambient Background Image (Cinematic Ada style) */}
      <div 
        className="absolute inset-0 z-[0] opacity-20 parallax-bg transition-transform duration-300 ease-out pointer-events-none" 
        style={{ 
          backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDDONdpKFOzqdXj4EQ_Msp-hTWPqI9pTritMRFgbucxLVGPrs2H4mbGePhS3BzQArJ3bn9tdyQCHRXlFG9rKhaJng2YSW6kSrsdKN5ib-ISUN_fw9M6VqgUjaGF2dIweZEPTNi_rxcFNt1XJDf363vYLTLVuUeIFN_CJJwoK4_JSoNjfJJ54fvSNh-KuImzF4wny2QUKGdz7TPDThDkbNmhSt9ZU8_0-BW8b34jrW4SykG7V10PyK8VpONeSugKw2KNG7vpyfNDo8fs')", 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          height: '100%'
        }}
      />
      <div className="absolute inset-0 z-[0] bg-gradient-to-b from-surface via-surface/80 to-surface pointer-events-none" />

      <div className="relative z-10 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto pt-16">
        {/* Hero Section */}
        <section className="mb-24 pt-16 md:pt-24 max-w-3xl">
          <ScrollReveal>
            <h1 className="font-display-xl text-display-xl-mobile md:text-display-xl text-on-surface mb-8 tracking-tight">
              Begin your journey.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
              Whether you are planning a serene escape or curating a bespoke event along the Volta River, our concierges await your inquiry.
            </p>
          </ScrollReveal>
        </section>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          {/* Inquiry Form (Left / Main) */}
          <div className="lg:col-span-7 bg-surface-container-low/50 backdrop-blur-md p-8 md:p-12 border border-outline-variant/10 rounded-xl relative overflow-hidden">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center text-center py-20 animate-fadeIn">
                <span className="material-symbols-outlined text-6xl text-tertiary mb-6">sailing</span>
                <h2 className="font-headline-md text-headline-md text-on-surface mb-4">Inquiry Received</h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md mb-8">
                  Thank you for reaching out to Quisodo. Our dedicated privacy and bookings concierge will contact you within 24 hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="font-label-caps text-label-caps border border-outline px-8 py-4 text-on-surface hover:bg-secondary hover:text-on-secondary transition-all duration-300 uppercase tracking-widest cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <>
                <h2 className="font-headline-md text-headline-md text-on-surface mb-12">Send an Inquiry</h2>
                <form onSubmit={handleSubmit} className="space-y-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* First Name */}
                    <div className="relative group pt-4">
                      <label 
                        className={`font-label-caps text-label-caps text-on-surface-variant absolute left-0 transition-all duration-300 pointer-events-none ${
                          formData.firstName ? '-top-4 text-tertiary' : 'top-4 group-focus-within:-top-4 group-focus-within:text-tertiary'
                        }`} 
                        htmlFor="firstName"
                      >
                        First Name
                      </label>
                      <input 
                        className="w-full bg-transparent border-0 border-b border-inverse-surface/30 px-0 py-2 text-on-surface font-body-md focus:ring-0 focus:border-tertiary transition-colors duration-300 focus:outline-none" 
                        id="firstName" 
                        name="firstName" 
                        required 
                        type="text"
                        value={formData.firstName}
                        onChange={handleChange}
                      />
                    </div>
                    {/* Last Name */}
                    <div className="relative group pt-4">
                      <label 
                        className={`font-label-caps text-label-caps text-on-surface-variant absolute left-0 transition-all duration-300 pointer-events-none ${
                          formData.lastName ? '-top-4 text-tertiary' : 'top-4 group-focus-within:-top-4 group-focus-within:text-tertiary'
                        }`} 
                        htmlFor="lastName"
                      >
                        Last Name
                      </label>
                      <input 
                        className="w-full bg-transparent border-0 border-b border-inverse-surface/30 px-0 py-2 text-on-surface font-body-md focus:ring-0 focus:border-tertiary transition-colors duration-300 focus:outline-none" 
                        id="lastName" 
                        name="lastName" 
                        required 
                        type="text"
                        value={formData.lastName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Email */}
                    <div className="relative group pt-4">
                      <label 
                        className={`font-label-caps text-label-caps text-on-surface-variant absolute left-0 transition-all duration-300 pointer-events-none ${
                          formData.email ? '-top-4 text-tertiary' : 'top-4 group-focus-within:-top-4 group-focus-within:text-tertiary'
                        }`} 
                        htmlFor="email"
                      >
                        Email Address
                      </label>
                      <input 
                        className="w-full bg-transparent border-0 border-b border-inverse-surface/30 px-0 py-2 text-on-surface font-body-md focus:ring-0 focus:border-tertiary transition-colors duration-300 focus:outline-none" 
                        id="email" 
                        name="email" 
                        required 
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    {/* Phone */}
                    <div className="relative group pt-4">
                      <label 
                        className={`font-label-caps text-label-caps text-on-surface-variant absolute left-0 transition-all duration-300 pointer-events-none ${
                          formData.phone ? '-top-4 text-tertiary' : 'top-4 group-focus-within:-top-4 group-focus-within:text-tertiary'
                        }`} 
                        htmlFor="phone"
                      >
                        Phone Number (Optional)
                      </label>
                      <input 
                        className="w-full bg-transparent border-0 border-b border-inverse-surface/30 px-0 py-2 text-on-surface font-body-md focus:ring-0 focus:border-tertiary transition-colors duration-300 focus:outline-none" 
                        id="phone" 
                        name="phone" 
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* Interest */}
                  <div className="relative group pt-4">
                    <label 
                      className="font-label-caps text-label-caps text-tertiary absolute -top-4 left-0" 
                      htmlFor="interest"
                    >
                      Area of Interest
                    </label>
                    <select 
                      className="w-full bg-transparent border-0 border-b border-inverse-surface/30 px-0 py-2 text-on-surface font-body-md focus:ring-0 focus:border-tertiary transition-colors duration-300 appearance-none cursor-pointer focus:outline-none" 
                      id="interest" 
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                    >
                      <option className="bg-surface text-on-surface" value="stay">Suite Reservation</option>
                      <option className="bg-surface text-on-surface" value="events">Private Events</option>
                      <option className="bg-surface text-on-surface" value="boats">River Excursions</option>
                      <option className="bg-surface text-on-surface" value="press">Press &amp; Media</option>
                      <option className="bg-surface text-on-surface" value="other">Other Inquiries</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-0 top-2 text-on-surface-variant pointer-events-none">
                      expand_more
                    </span>
                  </div>

                  {/* Message */}
                  <div className="relative group pt-4">
                    <label 
                      className={`font-label-caps text-label-caps text-on-surface-variant absolute left-0 transition-all duration-300 pointer-events-none ${
                        formData.message ? '-top-4 text-tertiary' : 'top-4 group-focus-within:-top-4 group-focus-within:text-tertiary'
                      }`} 
                      htmlFor="message"
                    >
                      Your Message
                    </label>
                    <textarea 
                      className="w-full bg-transparent border-0 border-b border-inverse-surface/30 px-0 py-2 text-on-surface font-body-md focus:ring-0 focus:border-tertiary transition-colors duration-300 resize-none focus:outline-none" 
                      id="message" 
                      name="message" 
                      required 
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>

                  <button 
                    className="inline-flex items-center gap-3 border border-outline px-8 py-4 font-label-caps text-label-caps text-on-surface hover:bg-secondary hover:text-on-secondary hover:border-secondary transition-all duration-500 w-full md:w-auto justify-center group cursor-pointer active:scale-95 disabled:opacity-50"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending Inquiry...' : 'Submit Inquiry'}
                    <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </button>
                </form>
              </>
            )}
          </div>

          {/* Contact Details & Map (Right / Sidebar) */}
          <div className="lg:col-span-5 flex flex-col gap-12 mt-12 lg:mt-0 lg:pl-8 border-t lg:border-t-0 lg:border-l border-outline-variant/10 pt-12 lg:pt-0">
            {/* Direct Contact Info */}
            <ScrollReveal delay={100}>
              <h3 className="font-label-caps text-label-caps text-on-surface-variant mb-6 tracking-widest uppercase">
                Direct Contact
              </h3>
              <div className="space-y-6">
                <a className="flex items-start gap-4 group" href="mailto:reservations@quisodo.com">
                  <span className="material-symbols-outlined text-on-surface-variant group-hover:text-tertiary transition-colors mt-1">
                    mail
                  </span>
                  <div>
                    <p className="font-body-md text-on-surface group-hover:text-tertiary transition-colors">
                      reservations@quisodo.com
                    </p>
                    <p className="font-body-md text-sm text-on-surface-variant opacity-70">
                      General &amp; Booking Inquiries
                    </p>
                  </div>
                </a>
                
                <a className="flex items-start gap-4 group" href="tel:+233241234567">
                  <span className="material-symbols-outlined text-on-surface-variant group-hover:text-tertiary transition-colors mt-1">
                    call
                  </span>
                  <div>
                    <p className="font-body-md text-on-surface group-hover:text-tertiary transition-colors">
                      +233 (0) 24 123 4567
                    </p>
                    <p className="font-body-md text-sm text-on-surface-variant opacity-70">
                      Concierge Desk
                    </p>
                  </div>
                </a>

                {/* WhatsApp CTA */}
                <a className="flex items-start gap-4 group mt-2" href="https://wa.me/233241234567" target="_blank" rel="noopener noreferrer">
                  <span className="material-symbols-outlined text-on-surface-variant group-hover:text-[#25D366] transition-colors mt-1">
                    chat
                  </span>
                  <div>
                    <p className="font-body-md text-on-surface group-hover:text-[#25D366] transition-colors border-b border-transparent group-hover:border-[#25D366]/30 inline-block pb-0.5">
                      Message via WhatsApp
                    </p>
                    <p className="font-body-md text-sm text-on-surface-variant opacity-70">
                      For immediate assistance
                    </p>
                  </div>
                </a>
              </div>
            </ScrollReveal>

            {/* Location / Map area */}
            <ScrollReveal delay={200}>
              <h3 className="font-label-caps text-label-caps text-on-surface-variant mb-6 tracking-widest uppercase">
                The Sanctuary
              </h3>
              <p className="font-body-md text-on-surface mb-6 leading-relaxed">
                Quisodo Riverside Sanctuary<br />
                Ada Foah, Volta Region<br />
                Ghana
              </p>
              
              <div 
                className="relative w-full h-64 bg-surface-container-high overflow-hidden group border border-outline-variant/10 cursor-pointer"
                onClick={() => window.open('https://maps.google.com/?q=Ada+Foah,+Ghana', '_blank')}
              >
                {/* Monochromatic styled river map */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                  style={{ 
                    backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDCs5bsQvWs0oeVZJ8MhA7UEFa74XIKXwXFSF429-LfppWu75wT--4v8aLPpN1HSXGouGI1vSU7OT5nncxKIqTEMAbDgquVWewl50JS9iWMSZNesXVV0kjhp_h4vFMtCxQ_H3hLMp2IQkm7HRIHcmjSE33fHo5xkn8RBq_xqOC9nmuo44xgXIuNJAcNdWUrizTvhSzSzfzwwDOSFMsNtJwjDJpxeJJ3BBgDLD6Cu8z_zK3wXJkn5KiLlmPptkq51xYUSuIOcm7tRMRO')",
                  }}
                />
                {/* Pin Overlay */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-12 h-12 bg-surface/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-outline-variant/30 shadow-lg shadow-black/50">
                    <span className="material-symbols-outlined text-tertiary fill text-2xl">location_on</span>
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 bg-surface/90 backdrop-blur-md px-4 py-2 border border-outline-variant/20 rounded font-label-caps text-[10px] text-on-surface uppercase tracking-wider">
                  View Coordinates
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
}
