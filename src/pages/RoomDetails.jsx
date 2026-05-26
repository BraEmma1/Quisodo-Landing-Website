import { useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';

const rooms = {
  'volta-suite': {
    type: 'Suite',
    title: 'The Volta Suite',
    subtitle: 'Riverfront Elegance.',
    description: 'Immerse yourself in the quiet luxury of the Volta Suite. Suspended above the flowing waters, this expansive space features raw, natural textures contrasting with precise, modern minimalism. Every detail is curated to foster deep relaxation and profound connection with the surrounding river ecosystem.',
    price: 850,
    heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD7sTTUWC0W4ZmSHJ9L0bhHO0dz2H-u19yZ5XiDrvTjtjizf0-7d9L5eziLxLJ47_s-C88FFLYjJGjlzbjAEhzhqAuq61HxPyL71a9YLx9Mx62Gb5crrTI74lDx_yqTeKxRvd9wQgPSOKPjghAR-dEkzeRTEPkDUWQp4-phuTjAPMmai9jYkrqaCG0dan1NxFabPuWD-zGXhqWaEhXw_GIKtFjbPbmhlrCI6TXRo2njpTkQiafaA-u9UFS4DuVjzZ0de5d-fhctooWc',
    amenities: [
      { icon: 'square_foot', label: 'Expansive Space', desc: '1,200 sq ft of indoor-outdoor living area with seamless transitions.' },
      { icon: 'bathtub', label: 'Freestanding Tub', desc: 'A sculptural stone basin positioned for unobstructed river views.' },
      { icon: 'balcony', label: 'Private Terrace', desc: 'Cantilevered deck over the water, perfect for morning contemplation.' },
      { icon: 'room_service', label: 'Bespoke Service', desc: 'Dedicated concierge and in-suite dining available 24/7.' },
    ],
    gallery: [
      { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC5i3tk006Xf9k1yG7MwjGezQPPCWUC7efkJ65g9GCopXuETze29uNUuu_0WJtFD2tWoC2mc2xKitDYiblWApvn8r4jNJXu-m_Kwmym-vxp05Yaa_qBynXR7ACdCOQbbDwaW7GT0uynUmRvWkBJ1gqOaHlnklUPKC_FPeWkV3Dr1rIxprLOVHi_AH8C_UtYPIA2eCfVGvf04_oJYrMeu-iL9IYPFmVAhHxRKPcunt9rmsSzXSumWUdq5dYhaEGTVUh872jf-IFlJgNx', alt: 'Suite Bathroom' },
      { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAqgLW8OcF6y77zTwfijvXD99st0xvXEmiCivZFEx_iRpLRwF2RNiZD4YaKPx7BW_zSxVjzY-8_OOF1nSmKy7GlDB-MDig9-kd0SJ8KY2sksW-Nx0kfGhQP8g8kVrzYaeBsGGl306Hp9bf5sK8EoNn1_Slaywj-clAU4_W_l733HhwrFqhSsl-driUo3qGHu29ZscyMUAv-nTH6C5dZHPV2YCVaGelgUIQ5C7hA8JD_41zTPPCXY9FcV25fzc05wpJ_btsjKfSe2RVU', alt: 'Suite Living Area' },
      { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2Ke0WCqhc5HN5wELU3CHRe6D4sFitxHPHdc074eIGMXNCwFNQPfAgSLYGR0AG6FHONFoL-FGJjsawoPqSHh9e3fYsoAlpkKwTlPgl0NGzoN7WE-d3rkGUccqWPKJK1eDlwZp0vPO-Pp_LeInsiH2DCrf49rW5fHnSJp_HDQW3cl_nGgV-kz1S_r564MhUrOtXp_4tHB01bgoaYLz0-n1xenM-P2pdk55bgJ4H8loZf6lXn4mkw48bRPzIKRTgOHjJMijDINcQ7tsr', alt: 'Suite Terrace' },
    ],
    size: '85 SQM',
    guests: '2 GUESTS',
  },
  'canopy-villa': {
    type: 'Villa',
    title: 'Canopy Villa',
    subtitle: 'Above the Canopy.',
    description: 'Elevated among the ancient riverbank trees, this villa offers unparalleled privacy. Complete with a private plunge pool and a dedicated study corner wrapped in glass, every moment is framed by the living forest.',
    price: 1200,
    heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAL_xikaMM9CV8nMPkDk7JtMDVlljdcOGG329U7E2AGOYv1LMkD8-diNJ4KAEsAv_aQJgVfPnQh3qUgB_M_O0eu_y0uZTQ6L4fpErtUs-QJh7HAHvMM_tnhj3gAM9D_vDSXrxym_D2sIZBmlMoWDUev0K0_O-ED9o6W4hje7-btiTg9NknaikdmHt3FQrgwdNFAG4QVdCab2jnXlSUT1eD5-OHS1d71jIsrLE5E22lrdOuEVCYqUx2F1sFpv7927GpuT9xmZnXHry7Y',
    amenities: [
      { icon: 'pool', label: 'Private Plunge Pool', desc: 'Infinity-edge pool perched over the river with twilight views.' },
      { icon: 'forest', label: 'Forest Canopy Views', desc: 'Panoramic floor-to-ceiling windows framing the ancient treetops.' },
      { icon: 'local_bar', label: 'Private Bar', desc: 'Curated minibar stocked with local spirits and artisan selections.' },
      { icon: 'wifi', label: 'Seamless Connectivity', desc: 'Discreet high-speed Wi-Fi and smart home controls throughout.' },
    ],
    gallery: [
      { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC5i3tk006Xf9k1yG7MwjGezQPPCWUC7efkJ65g9GCopXuETze29uNUuu_0WJtFD2tWoC2mc2xKitDYiblWApvn8r4jNJXu-m_Kwmym-vxp05Yaa_qBynXR7ACdCOQbbDwaW7GT0uynUmRvWkBJ1gqOaHlnklUPKC_FPeWkV3Dr1rIxprLOVHi_AH8C_UtYPIA2eCfVGvf04_oJYrMeu-iL9IYPFmVAhHxRKPcunt9rmsSzXSumWUdq5dYhaEGTVUh872jf-IFlJgNx', alt: 'Villa Bathroom' },
      { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAqgLW8OcF6y77zTwfijvXD99st0xvXEmiCivZFEx_iRpLRwF2RNiZD4YaKPx7BW_zSxVjzY-8_OOF1nSmKy7GlDB-MDig9-kd0SJ8KY2sksW-Nx0kfGhQP8g8kVrzYaeBsGGl306Hp9bf5sK8EoNn1_Slaywj-clAU4_W_l733HhwrFqhSsl-driUo3qGHu29ZscyMUAv-nTH6C5dZHPV2YCVaGelgUIQ5C7hA8JD_41zTPPCXY9FcV25fzc05wpJ_btsjKfSe2RVU', alt: 'Villa Living Area' },
      { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2Ke0WCqhc5HN5wELU3CHRe6D4sFitxHPHdc074eIGMXNCwFNQPfAgSLYGR0AG6FHONFoL-FGJjsawoPqSHh9e3fYsoAlpkKwTlPgl0NGzoN7WE-d3rkGUccqWPKJK1eDlwZp0vPO-Pp_LeInsiH2DCrf49rW5fHnSJp_HDQW3cl_nGgV-kz1S_r564MhUrOtXp_4tHB01bgoaYLz0-n1xenM-P2pdk55bgJ4H8loZf6lXn4mkw48bRPzIKRTgOHjJMijDINcQ7tsr', alt: 'Villa Terrace' },
    ],
    size: '120 SQM',
    guests: '2 GUESTS',
  },
};

export default function RoomDetails() {
  const { roomId } = useParams();
  const navigate = useNavigate();
  const room = rooms[roomId] || rooms['volta-suite'];
  const [activeSlide, setActiveSlide] = useState(0);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const galleryRef = useRef(null);

  const scrollToSlide = (idx) => {
    setActiveSlide(idx);
    if (galleryRef.current) {
      const slide = galleryRef.current.children[idx];
      if (slide) slide.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  };

  return (
    <div className="relative w-full overflow-x-hidden">
      {/* Hero Section with Booking Panel */}
      <header className="relative h-[80vh] min-h-[600px] w-full flex items-end pb-16 md:pb-32 px-margin-mobile md:px-margin-desktop -mt-24">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            alt={room.title}
            className="w-full h-full object-cover object-center"
            src={room.heroImage}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        </div>

        {/* Content Row */}
        <div className="relative z-10 w-full max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-end gap-8">
          {/* Title Block */}
          <div className="max-w-2xl">
            <ScrollReveal delay={100}>
              <p className="font-label-caps text-label-caps text-primary mb-4 uppercase tracking-widest">{room.type}</p>
              <h1 className="font-display-xl text-display-xl-mobile md:text-display-xl text-on-surface text-shadow-elegant mb-6 leading-none">
                {room.subtitle}
              </h1>
            </ScrollReveal>
          </div>

          {/* Glass Booking Panel */}
          <ScrollReveal delay={200} className="w-full md:w-[400px]">
            <div className="p-6 md:p-8 flex flex-col gap-6 bg-glass-bg border border-glass-border backdrop-blur-[24px]">
              {/* Price */}
              <div className="flex justify-between items-baseline border-b border-outline-variant/30 pb-4">
                <span className="font-body-md text-body-md text-on-surface-variant">From</span>
                <span className="font-display-xl text-headline-md text-on-surface">
                  ${room.price} <span className="font-body-md text-body-md text-on-surface-variant">/night</span>
                </span>
              </div>

              {/* Date Inputs */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1 border-b border-outline-variant/50 pb-2">
                  <label className="font-label-caps text-label-caps text-on-surface-variant">Check In</label>
                  <input
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="bg-transparent border-none text-on-surface font-body-md text-body-md p-0 focus:ring-0 cursor-pointer focus:outline-none w-full"
                  />
                </div>
                <div className="flex flex-col gap-1 border-b border-outline-variant/50 pb-2">
                  <label className="font-label-caps text-label-caps text-on-surface-variant">Check Out</label>
                  <input
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="bg-transparent border-none text-on-surface font-body-md text-body-md p-0 focus:ring-0 cursor-pointer focus:outline-none w-full"
                  />
                </div>
              </div>

              <button
                onClick={() => navigate('/reserve')}
                className="w-full bg-transparent border border-tertiary text-tertiary hover:bg-tertiary hover:text-on-tertiary transition-colors duration-300 py-4 font-label-caps text-label-caps text-center cursor-pointer active:scale-95 focus:outline-none"
              >
                Book {room.type}
              </button>
            </div>
          </ScrollReveal>
        </div>
      </header>

      {/* Description & Amenities */}
      <main className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-gap flex flex-col gap-section-gap">
        <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {/* Description Block */}
          <div className="md:col-span-5 flex flex-col gap-8">
            <ScrollReveal>
              <h2 className="font-display-xl text-3xl sm:text-4xl md:text-5xl text-on-surface leading-[1.05] tracking-tight mb-6">
                A private haven where the river meets refined design.
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md">
                {room.description}
              </p>

              <div className="flex gap-6 mt-8 pt-6 border-t border-outline-variant/10">
                <div className="flex items-center gap-2 text-on-surface-variant">
                  <span className="material-symbols-outlined text-[18px]">square_foot</span>
                  <span className="font-label-caps text-label-caps">{room.size}</span>
                </div>
                <div className="flex items-center gap-2 text-on-surface-variant">
                  <span className="material-symbols-outlined text-[18px]">group</span>
                  <span className="font-label-caps text-label-caps">{room.guests}</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Amenities Grid */}
          <div className="md:col-start-7 md:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12 mt-12 md:mt-0">
            {room.amenities.map((amenity, idx) => (
              <ScrollReveal key={amenity.label} delay={idx * 80} className="flex flex-col gap-3">
                <span className="material-symbols-outlined text-primary text-3xl">{amenity.icon}</span>
                <h3 className="font-label-caps text-label-caps text-on-surface">{amenity.label}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">{amenity.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Image Gallery Slider */}
        <section className="w-full relative">
          <ScrollReveal>
            <div
              ref={galleryRef}
              className="flex overflow-x-auto gap-4 md:gap-8 pb-8 snap-x snap-mandatory"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {room.gallery.map((img, idx) => (
                <div
                  key={idx}
                  className="snap-center shrink-0 w-[85vw] md:w-[60vw] h-[400px] md:h-[600px] relative overflow-hidden"
                  onClick={() => setActiveSlide(idx)}
                >
                  <img
                    alt={img.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
                    src={img.src}
                  />
                </div>
              ))}
            </div>

            {/* Thin Line Indicators */}
            <div className="flex justify-center gap-4 mt-4">
              {room.gallery.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToSlide(idx)}
                  className={`h-[1px] transition-all duration-500 cursor-pointer focus:outline-none ${
                    activeSlide === idx ? 'w-16 bg-primary' : 'w-10 bg-outline-variant/50'
                  }`}
                />
              ))}
            </div>
          </ScrollReveal>
        </section>

        {/* CTA Block */}
        <section className="flex flex-col md:flex-row items-center justify-between gap-8 border-t border-outline-variant/10 pt-16">
          <ScrollReveal>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
              Ready to begin your sanctuary experience? Reach our concierge team to personalize your stay.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={150} className="flex gap-6">
            <button
              onClick={() => navigate('/contact')}
              className="font-label-caps text-label-caps text-on-surface border border-outline px-8 py-4 hover:bg-secondary hover:text-on-secondary hover:border-secondary transition-all duration-300 cursor-pointer focus:outline-none active:scale-95"
            >
              Contact Concierge
            </button>
            <button
              onClick={() => navigate('/reserve')}
              className="font-label-caps text-label-caps text-on-tertiary bg-tertiary border border-tertiary px-8 py-4 hover:bg-tertiary/80 transition-all duration-300 cursor-pointer focus:outline-none active:scale-95"
            >
              Reserve Now
            </button>
          </ScrollReveal>
        </section>
      </main>
    </div>
  );
}
