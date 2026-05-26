import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';

export default function Stay() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('all'); // 'all', 'suites', 'villas'

  const accommodations = [
    {
      id: 'volta-suite',
      type: 'suite',
      title: 'The Volta Suite',
      description: "A seamless blend of indoor and outdoor living. Features a private terrace suspended over the river's edge, an open-plan lounge, and an immersive stone soaking tub.",
      size: '85 SQM',
      guests: '2 GUESTS',
      amenities: ['Private Terrace', 'Stone Tub'],
      price: 850,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQGAm2c_10jkFb4AOyuF3OIVNoliAZEi8WvZ9xVopbe_nnfZl0PvY_NFpYuRq6tsJNAiwqmPIzoo0aKDAJy4-jJioMz1mHq11Q4o5PMdoMxyGBPss6Z0uc4LZbVsTQ9FWzO_Ag7r77rR-YF7xRUUhuMp7Ck7x1NgcrUv_ZhnzbXOZJlApUKqfCDL90BhbnAPRo5DtGbXzXvC8tOzfeHOu_pvpu2klWJQcxdWu5p1cV-wm75nshz4jx3qaEOSrbSnytq4YSyNNcEHf4',
      asymmetricRight: false,
    },
    {
      id: 'canopy-villa',
      type: 'villa',
      title: 'Canopy Villa',
      description: 'Elevated among the ancient riverbank trees, this villa offers unparalleled privacy. Complete with a private plunge pool and a dedicated study corner wrapped in glass.',
      size: '120 SQM',
      guests: '2 GUESTS',
      amenities: ['PLUNGE POOL', 'Glass Study'],
      price: 1200,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAL_xikaMM9CV8nMPkDk7JtMDVlljdcOGG329U7E2AGOYv1LMkD8-diNJ4KAEsAv_aQJgVfPnQh3qUgB_M_O0eu_y0uZTQ6L4fpErtUs-QJh7HAHvMM_tnhj3gAM9D_vDSXrxym_D2sIZBmlMoWDUev0K0_O-ED9o6W4hje7-btiTg9NknaikdmHt3FQrgwdNFAG4QVdCab2jnXlSUT1eD5-OHS1d71jIsrLE5E22lrdOuEVCYqUx2F1sFpv7927GpuT9xmZnXHry7Y',
      asymmetricRight: true,
    },
  ];

  const filteredAccommodations = filter === 'all' 
    ? accommodations 
    : accommodations.filter(item => item.type === filter.slice(0, -1)); // map 'suites' -> 'suite'

  return (
    <div className="relative w-full pb-24">
      {/* Page Header */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mt-16 mb-24">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <ScrollReveal>
              <p className="font-label-caps text-label-caps text-tertiary mb-4 tracking-[0.3em]">ACCOMMODATIONS</p>
              <h1 className="font-display-xl text-display-xl-mobile md:text-display-xl text-on-surface leading-none mb-6">
                Sanctuary Awaits
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Discover our collection of riverside suites and private villas. Designed with restraint, crafted for immersion. Each space is a quiet vantage point over the Volta River.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={150}>
            <div className="flex space-x-6 border-b border-outline-variant/20 pb-4 w-full md:w-auto">
              {[
                { id: 'all', label: 'All Accommodations' },
                { id: 'suites', label: 'Suites' },
                { id: 'villas', label: 'Villas' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setFilter(tab.id)}
                  className={`font-label-caps text-label-caps pb-2 relative transition-all duration-300 focus:outline-none cursor-pointer ${
                    filter === tab.id
                      ? 'text-primary border-b-2 border-primary'
                      : 'text-on-surface-variant hover:text-primary'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Accommodations Grid */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto space-y-32">
        {filteredAccommodations.map((room, idx) => (
          <article
            key={room.id}
            onClick={() => navigate(`/rooms/${room.id}`)}
            className={`flex flex-col ${
              room.asymmetricRight ? 'md:flex-row-reverse' : 'md:flex-row'
            } gap-gutter group cursor-pointer`}
          >
            {/* Image Section */}
            <div className="w-full md:w-7/12 relative h-[400px] md:h-[600px] overflow-hidden rounded-sm">
              <ScrollReveal delay={100} className="w-full h-full">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-[1.5s] group-hover:scale-105 ease-out"
                  style={{ backgroundImage: `url('${room.image}')` }}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                <div className="absolute inset-0 border border-outline/25 m-4 pointer-events-none transition-all duration-500 group-hover:m-6" />
              </ScrollReveal>
            </div>

            {/* Description Section */}
            <div className={`w-full md:w-5/12 flex flex-col justify-center ${
              room.asymmetricRight ? 'md:pr-16 lg:pr-24' : 'md:pl-16 lg:pl-24'
            } mt-8 md:mt-0`}>
              <ScrollReveal delay={200} className="flex flex-col h-full justify-center">
                <span className="font-label-caps text-label-caps text-tertiary mb-4 tracking-[0.2em] uppercase">
                  {room.type}
                </span>
                <h2 className="font-display-xl text-headline-lg-mobile md:text-headline-md lg:text-headline-lg text-on-surface leading-tight mb-6">
                  {room.title}
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant mb-8 max-w-md">
                  {room.description}
                </p>

                {/* Specs */}
                <div className="flex items-center space-x-6 mb-12 border-t border-outline-variant/10 pt-6">
                  <div className="flex items-center space-x-2 text-on-surface-variant">
                    <span className="material-symbols-outlined text-[20px]" data-icon="square_foot">
                      square_foot
                    </span>
                    <span className="font-label-caps text-label-caps">{room.size}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-on-surface-variant">
                    <span className="material-symbols-outlined text-[20px]" data-icon="group">
                      group
                    </span>
                    <span className="font-label-caps text-label-caps">{room.guests}</span>
                  </div>
                  {room.type === 'villa' && (
                    <div className="flex items-center space-x-2 text-on-surface-variant">
                      <span className="material-symbols-outlined text-[20px]" data-icon="pool">
                        pool
                      </span>
                      <span className="font-label-caps text-label-caps">PLUNGE POOL</span>
                    </div>
                  )}
                </div>

                {/* Dynamic Footer with CTA */}
                <div className="flex items-center justify-between mt-auto border-b border-outline-variant/10 pb-4">
                  <span className="font-display-xl text-body-lg text-on-surface">
                    From ${room.price} / night
                  </span>
                  <button className="flex items-center gap-2 font-label-caps text-label-caps text-primary group-hover:text-tertiary transition-colors cursor-pointer focus:outline-none">
                    Explore Details
                    <span className="material-symbols-outlined text-primary group-hover:translate-x-2 transition-transform duration-300" data-icon="arrow_forward">
                      arrow_forward
                    </span>
                  </button>
                </div>
              </ScrollReveal>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
