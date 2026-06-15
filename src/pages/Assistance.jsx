import React, { useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';

export default function Assistance() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqSections = [
    {
      title: 'Reservations & Arrival',
      items: [
        {
          question: 'What are the check-in and check-out times?',
          answer: 'Check-in begins at 3:00 PM, allowing us to ensure your sanctuary is flawlessly prepared. Check-out is by 11:00 AM. Late check-out may be arranged subject to availability and a supplementary fee. We invite early arrivals to leave their luggage with our concierge and enjoy the riverside lounge.'
        },
        {
          question: 'How do I arrange transportation from the airport?',
          answer: 'We offer private, chauffeur-driven transfers from the nearest international airport. Alternatively, for a truly spectacular arrival, helicopter transfers directly to our riverside helipad can be arranged. Please contact our reservations team at least 72 hours prior to arrival to secure your preferred method of transit.'
        }
      ]
    },
    {
      title: 'Experiences & Amenities',
      items: [
        {
          question: 'Are private boat charters available?',
          answer: 'Yes, our fleet of luxury vessels is available for private charter. Whether you desire a serene sunset cruise with champagne, a guided historical tour along the Volta, or a secluded picnic on a private sandbank, our captains and crew will curate a bespoke river experience.'
        },
        {
          question: 'What fishing opportunities do you offer?',
          answer: 'The river teems with life, offering exceptional sport fishing. We provide guided excursions with expert local anglers, catering to both novices and seasoned fishermen. Top-tier equipment is provided, and our culinary team can prepare your day\'s catch to your exact specifications for evening dining.'
        }
      ]
    },
    {
      title: 'Policies',
      items: [
        {
          question: 'What is the cancellation policy?',
          answer: 'To ensure the exclusivity of our sanctuary, cancellations must be made at least 14 days prior to your scheduled arrival to receive a full refund. Cancellations made within 14 days will forfeit the deposit. Certain peak seasons or exclusive buyout reservations may have stricter, non-refundable terms.'
        },
        {
          question: 'Are children and pets permitted?',
          answer: 'To maintain an atmosphere of profound tranquility and quiet luxury, Quisodo Landing is an adult-only retreat (guests must be 18 or older). Furthermore, to protect the delicate local ecosystem and ensure the comfort of all guests, pets are respectfully declined.'
        }
      ]
    }
  ];

  // We assign flat indexes to items across sections for easy toggle tracking
  let absoluteItemIndex = 0;

  return (
    <div className="min-h-screen bg-background text-on-background w-full pb-section-gap">
      <main className="pt-32 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
        {/* Header */}
        <header className="mb-24 md:w-2/3">
          <ScrollReveal>
            <p className="font-label-caps text-label-caps text-tertiary uppercase mb-4 tracking-widest">Support &amp; Details</p>
            <h1 className="font-display-xl text-display-xl-mobile md:text-display-xl text-on-surface mb-6">
              Frequently Asked Questions
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
              Details regarding your upcoming sanctuary experience. If your inquiry is not addressed here, please contact our concierge.
            </p>
          </ScrollReveal>
        </header>

        {/* FAQ Accordions */}
        <section className="max-w-4xl">
          {faqSections.map((section, sectionIdx) => (
            <ScrollReveal key={section.title} delay={sectionIdx * 100} className="border-b border-outline-variant/30 mb-8 pb-4">
              <h2 className="font-label-caps text-label-caps text-tertiary mb-6 tracking-wider uppercase">
                {section.title}
              </h2>
              <div className="flex flex-col">
                {section.items.map((item) => {
                  const currentIndex = absoluteItemIndex++;
                  const isOpen = openIndex === currentIndex;

                  return (
                    <div
                      key={item.question}
                      className="border-t border-outline-variant/10 first:border-t-0"
                    >
                      <button
                        className="w-full text-left py-6 flex justify-between items-center group focus:outline-none cursor-pointer"
                        onClick={() => toggleAccordion(currentIndex)}
                        aria-expanded={isOpen}
                      >
                        <span className={`font-headline-md text-2xl md:text-headline-md text-on-surface group-hover:text-primary transition-colors duration-300 ${isOpen ? 'text-primary' : ''}`}>
                          {item.question}
                        </span>
                        <span 
                          className={`material-symbols-outlined text-outline transition-transform duration-300 group-hover:text-primary ${isOpen ? 'rotate-180 text-primary' : ''}`}
                        >
                          expand_more
                        </span>
                      </button>
                      
                      {/* Accordion Smooth Height Collapse/Expand */}
                      <div
                        className={`overflow-hidden transition-all duration-500 ease-in-out`}
                        style={{
                          maxHeight: isOpen ? '300px' : '0px',
                          opacity: isOpen ? 1 : 0,
                          pointerEvents: isOpen ? 'auto' : 'none'
                        }}
                      >
                        <p className="font-body-md text-body-md text-on-surface-variant max-w-3xl pb-8 pt-2 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </ScrollReveal>
          ))}
        </section>
      </main>
    </div>
  );
}
