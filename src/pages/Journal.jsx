import { useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';

export default function Journal() {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [categoryFilter, setCategoryFilter] = useState('All');

  const articles = [
    {
      id: 'volta-current',
      category: 'Nature',
      title: 'The Volta Current: Navigating the Estuary',
      subtitle: 'A journey through the shifting tides where the grand Volta River meets the Atlantic, discovering hidden sandbars and timeless rhythms.',
      description: 'A journey through the shifting tides where the grand Volta River meets the Atlantic, discovering hidden sandbars and timeless rhythms.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC2t5A3R9SrJTcwVO13aAxidoFs-tFmQ2qK0zH7f5Hmt-60MKq15oi22pzE6KGV6geeD6jLRjCF6G1e78XS-1kKcN1T-_s0ZfSBx43UdKe106yf9277twy4x8GJiZFfGzETY4rylbvrRqrFbauu1pCJVbPH4DJ1uLFwqkVctF8XuL3jRxMpKrRw1z31uWVMAnbw6h2_y6cfve6JZ8ra-WXKLSEMRQJ_WOuF8arHb5ClQYl73Ar6CoFStB5ZJVKsro10RKl-v58HHTiY',
      author: 'Eleanor Vance',
      readTime: '8 Min Read',
      date: 'October 2024',
      featured: true,
      content: (
        <>
          <p className="font-body-lg text-body-lg text-on-surface leading-relaxed relative pl-4 border-l-2 border-primary">
            The estuary does not announce itself with a sudden crash of waves. Instead, the transition is a gradual softening—a quiet negotiation between the freshwater weight of the Volta and the tidal insistence of the Atlantic. Here, the water changes color by the hour, shifting from deep riverine olive to an opaque, milky turquoise as the salt tide pushes inland.
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            To navigate these waters requires more than just a map; it requires an attunement to the subtle textures of the current. Our vessel, a refurbished mahogany skiff, glided almost silently past dense mangrove thickets. The air here feels heavier, laden with the scent of wet earth and salt—a perfume that defines the edge of the continent.
          </p>
          
          <figure className="w-full my-12">
            <div className="aspect-[21/9] w-full bg-surface-container-high relative overflow-hidden">
              <img 
                alt="Abstract aerial view of an estuary swirled in deep navy and sandbars" 
                className="object-cover w-full h-full transform transition-transform duration-[2s] hover:scale-105" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1klwdBnJHpSyiziwv6as4Yw5TFuMQS_MA5fXdCJp92a4KaDvaNomu2NkQykljvbkqnW7jfbd420o0SfrYrfuyrhFaePDsi3ERJxOsFJyTMTbCcexPvSpIueZ91j3zDHagMc021fm9KaZOGDT_Q5Oi9qHUZaxitgFFtebLYe0miXDgMBSVkCjx2N948q6VGQLftnCHfe1s5wU0qfe939URsN79XJwUc_M17l6PoJky2xke3aJdchyauSaUaP_6RWjAcRXqZBqDxywh" 
              />
            </div>
            <figcaption className="font-label-caps text-label-caps text-on-surface-variant text-center mt-4">
              The shifting sandbars of the lower Volta.
            </figcaption>
          </figure>

          <h2 className="font-display-xl text-headline-md text-on-surface mt-12 mb-6">
            The Architecture of Silence
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            We anchored near a small, unnamed sandbank just as the sun began its descent. In the distance, local fishermen cast their nets in synchronized, sweeping arcs—a choreography practiced for generations. There is an architecture to the silence here. It is built from the rhythmic slap of water against the hull, the distant call of an egret, and the rustle of dry palm fronds on the opposing shore.
          </p>

          <blockquote className="border-l-2 border-tertiary pl-6 my-12 py-2">
            <p className="font-display-xl text-headline-md text-tertiary italic leading-tight">
              "The river does not surrender to the sea; they engage in a continuous, quiet dialogue."
            </p>
          </blockquote>

          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            As evening settled, the landscape transformed. The deep blacks and pristine whites of the twilight starkly outlined the mangrove roots, creating a scene of 'Riverfront Noir.' The sanctuary we seek is often found in these margins—the spaces between what is known (the river) and what is vast (the ocean).
          </p>
        </>
      ),
    },
    {
      id: 'ada-weavers',
      category: 'Culture',
      title: 'The Weavers of Ada Foah',
      description: 'Discovering the ancient rhythms and intricate patterns of local artisans, where every thread tells a story of the river and the sea.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCLuMfVu45WbJsJDTXdXkBkShhdVESbxVzIn0DRI8owT3S3VzyMpMo73By_nXDfVrPTmqhwhyRPJvttyvVOxHl8O-YTGXftNXUIjioI9cOCVN8hTUMZxMr81BQGs1mFo88HCt7gUdcc5mwjvKT9ZDndMrNxWSAd_wahOTeNLB3r3s3V_kYdVkwRp9jXeXW4Y75z-5kcOM_xsj3xpm4SHhyDHN02F4PGMv63bcUF0iJqPxP8XQMwcWM2F95-96EzCPUZAUOVfKZtFBTH',
      author: 'Kofi Mensah',
      readTime: '6 Min Read',
      date: 'September 2024',
      content: (
        <>
          <p className="font-body-lg text-body-lg text-on-surface leading-relaxed relative pl-4 border-l-2 border-primary">
            Every textile is a manuscript. Across the sandy paths of Ada Foah, weavers guide their shuttles through looms with an effortless velocity, converting coarse threads into complex geometry.
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            The patterns are inspired by the river—horizontal stripes represent the sandbars, while zigzag details tell the tale of tidal current confluences. Visiting the weavers is a quiet meditation, listening to the wood click-clacking in spacious outdoor compounds.
          </p>
        </>
      ),
    },
    {
      id: 'estuary-flavors',
      category: 'Gastronomy',
      title: 'Flavors of the Estuary',
      description: 'How our culinary team forages and sources from the nutrient-rich waters where the Volta meets the Atlantic.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2nVBxEID3iuMsIrun8Ft3OuPesRZ1AHTncjKnBTPFMiKaU5x12YTa4xQWrcM2YtuPWIpsBf0mar05a_b-YH303qBmoYQppaVPvX7uDyiQect32HXKnasdb0qPaRBI7rcLJucfdDmGWxe1dphNRy0lc5cJqOblF4KIaLvLp5BgQlAirCnhsk-Td1m73baie6IkQ8DSXkUqu3asTNXN0Gez6gb9biO1bFEtNU9VGLvJpIjr4rkZ2cVrF8GjgFXeBOwBN1WbO4XR34zn',
      author: 'Chef Ama Serwah',
      readTime: '5 Min Read',
      date: 'August 2024',
      content: (
        <>
          <p className="font-body-lg text-body-lg text-on-surface leading-relaxed relative pl-4 border-l-2 border-primary">
            True luxury is local. Our menus are drafted by the estuary currents, reflecting whatever the river delivers to our kitchen door at sunrise.
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            From wild oysters harvested from hidden mangrove roots to freshly caught river fish infused with local botanicals, the flavors represent a sophisticated dialogue between land, river, and ocean.
          </p>
        </>
      ),
    },
    {
      id: 'morning-chorus',
      category: 'Nature',
      title: 'The Morning Chorus',
      description: 'A guide to the avian life that awakens the sanctuary.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJJhN1Vezlu1HFaW2tp9uhuggFmhGSY01ETrAmf2cpwXoH6UQH0haaKBEMQR-snUZS82UygTCW_hkyPLJqHx4BVpzdYY5qWmO0RFujyz6TdN0RDOt0-7xg3xv2ArS1u7K6c4dWS6Yk0ZenqZo6x6eyeo8VFf_cqpV2VC9lDDjljPo2dJm4p2e6LUm6Ilp8prqUE2vlOo2t3O12X6TlUSUFFQOCEOdswAd1CPvPfw114EFMQuS1YG-C80KjXPCmeHIced2JDV1Q_G8D',
      author: 'Eleanor Vance',
      readTime: '4 Min Read',
      date: 'July 2024',
      content: (
        <>
          <p className="font-body-lg text-body-lg text-on-surface leading-relaxed relative pl-4 border-l-2 border-primary">
            Before the sun breaks, the air belongs to the birds. Egrets, kingfishers, and herons convene in the misty treetops to perform their delicate acoustic choreographies.
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Quiet, slow observations from the terrace deck reveal a dramatic natural theater, celebrating patient silence and absolute stillness.
          </p>
        </>
      ),
    },
    {
      id: 'navigating-channels',
      category: 'Guide',
      title: 'Navigating the Channels',
      description: 'Essential routes for the discerning modern explorer.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJMJXphm0zSbjVMMvq44Ax9hh6nkMnhM9gWFu5Zlo10lvh86xVsMlAIhbo7Wuf65AyuhJRmURCTXqEwELuplR6G77RH4sR_KOceHCSp6bfAaH48qvtTMIZ1AfknNJDpN2N0BGFsjeN3Qecb5zEY9Yb8OIkIaHm1hozoklwccW6xp3nXfP0hl0yanLjPQmvxJAsr0H4IHyctU2P7x54blS0r17qsR5b9KHQJ0zGVONwocj2aFIOwLj_aHXLtc2ZvxJD20IAQxPHqlO9',
      author: 'Captain Jerry Cudjoe',
      readTime: '7 Min Read',
      date: 'June 2024',
      content: (
        <>
          <p className="font-body-lg text-body-lg text-on-surface leading-relaxed relative pl-4 border-l-2 border-primary">
            The lower Volta is an active, living landscape. Shifting sandbars rearrange channels monthly, making experience and concentration essential to a clean voyage.
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            We map out the most majestic routes through the mangrove forests and sandbars to ensure your boat excursions are smooth and unforgettable.
          </p>
        </>
      ),
    },
  ];

  const filteredArticles = categoryFilter === 'All'
    ? articles
    : articles.filter(art => art.category === categoryFilter);

  // Render detail view if an article is selected
  if (selectedArticle) {
    const article = articles.find(art => art.id === selectedArticle);
    return (
      <div className="relative w-full overflow-x-hidden">
        {/* Article Hero */}
        <section
          className="relative w-full h-[70vh] min-h-[500px] flex flex-col justify-end pb-24 px-margin-mobile md:px-margin-desktop -mt-24 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(20, 19, 15, 0.2), rgba(20, 19, 15, 0.9)), url('${article.image}')`,
          }}
        >
          <div className="max-w-container-max mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-gutter z-10 relative">
            <div className="md:col-span-10 md:col-start-2 lg:col-span-8 lg:col-start-3 text-center">
              <button
                onClick={() => setSelectedArticle(null)}
                className="font-label-caps text-label-caps text-primary hover:text-tertiary mb-6 inline-flex items-center gap-2 cursor-pointer focus:outline-none uppercase tracking-widest"
              >
                <span className="material-symbols-outlined text-[16px]">arrow_back</span> Back to Journal
              </button>
              <span className="font-label-caps text-label-caps text-tertiary block mb-6 uppercase tracking-[0.2em]">
                {article.category} · {article.date}
              </span>
              <h1 className="font-display-xl text-display-xl-mobile md:text-display-xl text-on-surface mb-8 leading-none">
                {article.title}
              </h1>
            </div>
          </div>
        </section>

        {/* Content Body */}
        <main className="w-full px-margin-mobile md:px-margin-desktop py-section-gap max-w-container-max mx-auto">
          <article className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            {/* Sidebar Metadata */}
            <aside className="hidden md:block md:col-span-3 sticky top-32 self-start">
              <div className="border-t border-outline-variant/30 pt-6">
                <p className="font-label-caps text-label-caps text-on-surface-variant mb-2">Written By</p>
                <p className="font-body-md text-body-md text-on-surface font-semibold">{article.author}</p>
              </div>
              <div className="border-t border-outline-variant/30 pt-6 mt-6">
                <p className="font-label-caps text-label-caps text-on-surface-variant mb-2">Reading Time</p>
                <p className="font-body-md text-body-md text-on-surface">{article.readTime}</p>
              </div>
              <div className="border-t border-outline-variant/30 pt-6 mt-6 flex gap-4">
                <button className="text-on-surface-variant hover:text-tertiary transition-colors cursor-pointer">
                  <span className="material-symbols-outlined">share</span>
                </button>
                <button className="text-on-surface-variant hover:text-tertiary transition-colors cursor-pointer">
                  <span className="material-symbols-outlined">bookmark</span>
                </button>
              </div>
            </aside>

            {/* Main Prose */}
            <div className="md:col-span-9 lg:col-span-7 space-y-12 text-on-surface">
              {/* Mobile Metadata */}
              <div className="md:hidden flex justify-between items-center border-y border-outline-variant/30 py-4 mb-8">
                <div>
                  <p className="font-label-caps text-label-caps text-on-surface-variant mb-1">{article.author}</p>
                  <p className="font-label-caps text-label-caps text-on-surface-variant">{article.readTime}</p>
                </div>
                <button className="text-on-surface-variant hover:text-tertiary transition-colors cursor-pointer">
                  <span className="material-symbols-outlined">share</span>
                </button>
              </div>

              <div className="space-y-8">
                {article.content}
              </div>

              <div className="flex justify-center mt-16 pt-8 border-t border-outline-variant/30">
                <button className="font-label-caps text-label-caps text-on-surface flex items-center gap-2 hover:text-tertiary transition-colors cursor-pointer border border-outline px-6 py-3">
                  <span className="material-symbols-outlined">favorite</span>
                  Enjoyed this piece?
                </button>
              </div>
            </div>
          </article>
        </main>
      </div>
    );
  }

  // Find featured article
  const featuredArticle = articles.find(art => art.featured) || articles[0];

  return (
    <div className="relative w-full overflow-x-hidden">
      {/* Hero Section */}
      <section
        className="relative h-[80vh] min-h-[550px] flex items-end pb-24 px-margin-mobile md:px-margin-desktop bg-cover bg-center -mt-24"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(20, 19, 15, 0.9) 0%, rgba(20, 19, 15, 0.2) 50%, rgba(20, 19, 15, 0.5) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuAOTnRURaiJCjnczA22VOKrDTGcJgdhwWizXJ3xjXAfi-8bIVFt89iZtbxU8ePYzliTU1Z5UmtsaBJ8IMChMJ8-3PeMlvRIxNIOjLPCIVOZe9f28KpRQ-VlhwfoCpWpum-hHzKnAQ-a6vUhGaDgNhh-QcFDgIAoTqW4L1OrmGr2EdJ7Ly99VPAdAuoGMxnf2LDFn0U06Hmg3xoCjVtPbAwvdVALg78XqlLtfUDBf6h9xLC6BX-9dv2J2iN0gxLqr5r3oWLXqoRq1rtQ')`,
        }}
      >
        <div className="max-w-container-max mx-auto w-full">
          <div className="max-w-3xl">
            <ScrollReveal delay={100}>
              <span className="font-label-caps text-label-caps text-tertiary mb-6 block uppercase tracking-widest">
                Editorial Chronicles
              </span>
              <h1 className="font-display-xl text-display-xl-mobile md:text-display-xl text-on-surface mb-8 leading-none">
                Chronicles of <br /> the Current
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
                Stories, reflections, and dispatches from the edge of the Volta. An exploration of Ada culture, river life, and the quiet luxury of absolute stillness.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Featured Editorial (Asymmetrical Layout) */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          <div className="md:col-span-7 relative z-10">
            <ScrollReveal className="w-full overflow-hidden">
              <img
                alt="Featured Weaving Article"
                className="w-full h-auto object-cover grayscale-[10%] contrast-[1.1] hover:scale-105 transition-transform duration-[1.5s] ease-out"
                src={featuredArticle.image}
              />
            </ScrollReveal>
          </div>
          <div className="md:col-span-4 md:col-start-9 relative z-20 md:-ml-24 mt-8 md:mt-0 bg-surface-container-lowest/90 backdrop-blur-md p-8 md:p-12 border border-outline-variant/10">
            <ScrollReveal delay={200}>
              <span className="font-label-caps text-label-caps text-tertiary mb-4 block uppercase tracking-wider">
                {featuredArticle.category}
              </span>
              <h2 className="font-display-xl text-headline-lg-mobile md:text-headline-md text-on-surface mb-6 leading-tight">
                {featuredArticle.title}
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-8">
                {featuredArticle.subtitle}
              </p>
              <button
                onClick={() => setSelectedArticle(featuredArticle.id)}
                className="inline-flex items-center font-label-caps text-label-caps text-primary hover:text-tertiary transition-colors duration-300 border-b border-primary hover:border-tertiary pb-1 group cursor-pointer focus:outline-none"
              >
                Read Story
                <span className="material-symbols-outlined ml-2 text-[16px] group-hover:translate-x-1 transition-transform" data-icon="arrow_forward">
                  arrow_forward
                </span>
              </button>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Article Grid Section */}
      <section className="pb-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="flex justify-between items-end mb-16 border-b border-outline-variant/20 pb-8">
          <h3 className="font-display-xl text-headline-md text-on-surface">
            Recent Dispatches
          </h3>
          <div className="hidden md:flex space-x-6">
            {['All', 'Culture', 'Nature', 'Gastronomy', 'Guide'].map(cat => (
              <button
                key={cat}
                onClick={() => setCategoryFilter(cat)}
                className={`font-label-caps text-label-caps pb-1 cursor-pointer focus:outline-none transition-all duration-300 border-b ${
                  categoryFilter === cat ? 'text-primary border-primary' : 'text-on-surface-variant border-transparent hover:text-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {/* Article grid render */}
          {filteredArticles.filter(art => !art.featured).map((art, idx) => (
            <ScrollReveal
              key={art.id}
              delay={idx * 100}
              className={`group cursor-pointer relative ${
                idx % 3 === 0 ? 'md:col-span-8' : 'md:col-span-4'
              }`}
              onClick={() => setSelectedArticle(art.id)}
            >
              <div className="relative overflow-hidden aspect-video mb-6">
                <img
                  alt={art.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  src={art.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-60" />
              </div>
              <span className="font-label-caps text-label-caps text-tertiary mb-3 block uppercase tracking-wider">
                {art.category} · {art.readTime}
              </span>
              <h4 className="font-display-xl text-headline-md text-on-surface mb-3 group-hover:text-primary transition-colors">
                {art.title}
              </h4>
              <p className="font-body-md text-body-md text-on-surface-variant">
                {art.description}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
}
