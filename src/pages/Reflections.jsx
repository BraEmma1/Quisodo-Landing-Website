import ScrollReveal from '../components/ScrollReveal';

export default function Reflections() {
  const testimonials = [
    {
      id: 1,
      quote: 'The river cruise at midnight was a revelation. Only the sound of the water against the hull and the vast, starry canvas above. It felt like stepping into another world entirely.',
      author: 'M. Dubois',
      location: 'Paris, France',
    },
    {
      id: 2,
      quote: 'A masterclass in restraint. There is no loud luxury here, only profound comfort and an atmosphere that demands quiet contemplation. The culinary experience was exceptional.',
      author: 'J. & S. Alarie',
      location: 'Geneva, Switzerland',
      offset: true,
    },
    {
      id: 3,
      quote: 'I came seeking a retreat to finish a manuscript. The dark, moody aesthetic and the ever-present sound of the river provided the perfect, uninterrupted canvas.',
      author: 'A. Thompson',
      location: 'London, UK',
    },
  ];

  return (
    <div className="relative w-full overflow-x-hidden">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center pt-24 -mt-24">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuA_PE3YwC8YLgx_QVt4-fHmZKMbo8Kkw9orFy_bEK5MDr8RUK8OFFvAmWP_tZd8Nca1njs59gwjSg1bYY0fMaOq1795oncG0079rFRznUmyWS0jUTVnFqjoFVnZFInfTiQ7wiFnoWZIUOTb6HN0xdxgISqPvJK-DRGKTXtFqlB25-VHqml8rdH5ddJp203VbugIvEDVd7DaL5_3YPng-L795h59owk9IB9m1cC7DPOUsWdjLi-I8sm09jNppbtXpDJ6isFBkP-0f8LD')`,
          }}
        >
          <div className="absolute inset-0 bg-background/60" />
        </div>

        <div className="relative z-10 text-center px-margin-mobile max-w-4xl mx-auto flex flex-col items-center">
          <ScrollReveal delay={100}>
            <span className="font-label-caps text-label-caps text-tertiary mb-6 tracking-[0.3em] uppercase block">
              Guest Reflections
            </span>
            <h1 className="font-display-xl text-display-xl-mobile md:text-display-xl text-on-surface mb-8 text-shadow-elegant">
              Echoes of the River
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto opacity-80">
              Quiet moments, profound stillness. Read the experiences of those who have found sanctuary along the Volta.
            </p>
          </ScrollReveal>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center opacity-60 hover:opacity-100 transition-opacity duration-500 cursor-pointer">
          <span className="font-label-caps text-label-caps text-on-surface mb-4">Descend</span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-on-surface to-transparent animate-[pulse_2s_infinite]"></div>
        </div>
      </header>

      <main className="relative z-20 bg-background">
        {/* Featured Testimonial (Bento/Asymmetric) */}
        <section className="px-margin-mobile md:px-margin-desktop py-section-gap max-w-container-max mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
            {/* Image Side */}
            <div className="md:col-span-7 relative group">
              <ScrollReveal className="relative h-[600px] w-full overflow-hidden rounded-sm">
                <img
                  alt="Guest Portrait"
                  className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105 filter grayscale-[30%] contrast-[1.1] brightness-[0.85]"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAj74TK0cTXucxMJPXskFriX4N83rhxmaz9CxviHivMUF2LmXeZb0BpGUpWNGZvT4bcOoWIA_m1JP9zodU2VmwLgHyXd_mjxZ_G4Yvv6cCAUF3ahfNd9yI9hhDZNpchE-g6nuYe1bphBrOCtB7ZMr_0VTvI3Y3XqRq0zwIWq-ERLahq145ZWOo3DWlD8OtbG3LJ8e57jsr8oH7u2fqy2rmOUoTtqzMHzQ4aBX18ggJh5hIpRqPl8QRzNL8p8DYbKNYhCXHQHrJTtooI"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
              </ScrollReveal>
              {/* Decorative Line */}
              <div className="absolute -right-12 bottom-24 w-64 h-[1px] bg-outline/30 hidden lg:block"></div>
            </div>

            {/* Quote Side */}
            <div className="md:col-span-5 md:pl-12 lg:pl-24 flex flex-col justify-center mt-12 md:mt-0 relative z-10">
              <ScrollReveal delay={200}>
                <span className="material-symbols-outlined text-4xl text-tertiary mb-8 opacity-50">
                  format_quote
                </span>
                <h2 className="font-display-xl text-headline-lg-mobile md:text-headline-lg text-on-surface mb-8 leading-tight">
                  "Time doesn't merely slow down here; it completely unravels."
                </h2>
                <div className="h-[1px] w-12 bg-tertiary mb-8"></div>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                  The architecture forces you to look outward, and in doing so, you are gently nudged to look inward. It is a masterclass in restrained luxury.
                </p>
                <p className="font-label-caps text-label-caps text-on-surface tracking-widest uppercase">
                  — E. Kensington, Architect
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Testimonial Grid (Glassmorphism Cards) */}
        <section className="px-margin-mobile md:px-margin-desktop py-section-gap bg-surface-container-lowest relative overflow-hidden">
          {/* Atmospheric background blur */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-container/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

          <div className="max-w-container-max mx-auto relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-24">
              <ScrollReveal>
                <span className="font-label-caps text-label-caps text-tertiary mb-4 tracking-[0.3em] uppercase block">
                  Shared Silence
                </span>
                <h3 className="font-display-xl text-headline-md text-on-surface">
                  Echoes from our guests
                </h3>
              </ScrollReveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-gutter">
              {testimonials.map((test, idx) => (
                <ScrollReveal
                  key={test.id}
                  delay={idx * 100}
                  className={`bg-glass-bg border border-glass-border backdrop-blur-[24px] p-10 flex flex-col h-full hover:-translate-y-2 transition-transform duration-500 ease-out ${
                    test.offset ? 'md:translate-y-8' : ''
                  }`}
                >
                  <div className="flex items-center space-x-1 mb-8">
                    {[1, 2, 3, 4, 5].map(star => (
                      <span key={star} className="material-symbols-outlined text-tertiary text-sm">
                        star
                      </span>
                    ))}
                  </div>
                  <p className="font-body-lg text-body-lg text-on-surface-variant flex-grow mb-12 italic">
                    "{test.quote}"
                  </p>
                  <div>
                    <p className="font-label-caps text-label-caps text-on-surface uppercase tracking-widest mb-1">
                      {test.author}
                    </p>
                    <p className="font-label-caps text-label-caps text-outline-variant uppercase text-[10px]">
                      {test.location}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
