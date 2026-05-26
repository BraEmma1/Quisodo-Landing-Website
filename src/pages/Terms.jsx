import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';

export default function Terms() {
  const [activeSection, setActiveSection] = useState('information');

  // Simple scrollspy using IntersectionObserver
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px', // triggers when section is in the middle of the viewport
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.getAttribute('id'));
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const navLinks = [
    { label: 'INFORMATION WE COLLECT', id: 'information' },
    { label: 'HOW WE USE YOUR INFORMATION', id: 'usage' },
    { label: 'SHARING OF INFORMATION', id: 'sharing' },
    { label: 'DATA SECURITY', id: 'security' },
    { label: 'YOUR PRIVACY RIGHTS', id: 'rights' }
  ];

  return (
    <div className="bg-[#14130f] text-[#e6e2da] min-h-screen font-body-md antialiased selection:bg-primary-container selection:text-primary">
      {/* Header Section */}
      <header className="w-full px-margin-mobile md:px-margin-desktop py-8 md:py-16 max-w-container-max mx-auto border-b border-outline-variant/10">
        <div className="flex justify-between items-center mb-16 md:mb-24">
          <Link 
            to="/" 
            className="font-display-xl text-headline-md tracking-[0.25em] text-on-surface hover:text-primary transition-colors duration-500 uppercase select-none"
          >
            QUISODO
          </Link>
          <Link 
            to="/" 
            className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors duration-300 font-label-caps text-label-caps group"
          >
            <span className="material-symbols-outlined group-hover:-translate-x-1 transition-transform duration-300">
              arrow_back
            </span>
            RETURN
          </Link>
        </div>
        <div className="max-w-3xl">
          <ScrollReveal>
            <h1 className="font-display-xl text-display-xl-mobile md:text-display-xl text-primary mb-8 leading-tight">
              Privacy Policy
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Last updated: October 24, 2024
            </p>
          </ScrollReveal>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full px-margin-mobile md:px-margin-desktop py-16 md:py-24 max-w-container-max mx-auto flex flex-col md:flex-row gap-16 md:gap-gutter relative">
        {/* Table of Contents Sidebar (Sticky) */}
        <aside className="w-full md:w-1/4 md:sticky md:top-32 h-fit hidden md:block">
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`font-label-caps text-label-caps transition-colors duration-300 text-left border-l-2 pl-4 py-1 text-[11px] uppercase tracking-widest ${
                  activeSection === link.id
                    ? 'text-primary border-primary font-bold'
                    : 'text-on-surface-variant hover:text-primary border-transparent'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </aside>

        {/* Legal Text Canvas */}
        <article className="w-full md:w-3/4 max-w-3xl font-body-lg text-body-lg leading-relaxed text-on-surface-variant">
          <p className="text-xl md:text-2xl leading-relaxed text-on-surface mb-12">
            At Quisodo Riverside Sanctuary, we recognize the paramount importance of privacy for our discerning guests. This Privacy Policy details our approach to safeguarding the personal information entrusted to us, reflecting our commitment to quiet luxury and absolute discretion.
          </p>

          <section className="scroll-mt-32 mb-16" id="information">
            <h2 className="font-headline-md text-headline-md text-primary mb-6 border-b border-outline-variant/10 pb-2">
              1. Information We Collect
            </h2>
            <p className="mb-6">
              We collect information that identifies, relates to, describes, or could reasonably be linked, directly or indirectly, with a particular guest or household. This includes, but is not limited to, identifiers such as real name, alias, postal address, unique personal identifier, online identifier, Internet Protocol address, email address, account name, Social Security number, driver's license number, passport number, or other similar identifiers.
            </p>
            <p className="mb-6">
              In the pursuit of crafting a bespoke experience, we may also gather commercial information, including records of personal property, products or services purchased, obtained, or considered, or other purchasing or consuming histories or tendencies specific to your stay at the sanctuary.
            </p>
          </section>

          <section className="scroll-mt-32 mb-16" id="usage">
            <h2 className="font-headline-md text-headline-md text-primary mb-6 border-b border-outline-variant/10 pb-2">
              2. How We Use Your Information
            </h2>
            <p className="mb-6">
              The information we curate is utilized primarily to elevate your experience at Quisodo. This includes processing reservations, tailoring our services to your nuanced preferences, and ensuring seamless communication prior to, during, and after your visit.
            </p>
            <p className="mb-6">
              Furthermore, we employ this data to maintain the security of our premises and digital platforms, to analyze trends in pursuit of refining our offerings, and to comply with legal obligations as required by international hospitality standards.
            </p>
          </section>

          <section className="scroll-mt-32 mb-16" id="sharing">
            <h2 className="font-headline-md text-headline-md text-primary mb-6 border-b border-outline-variant/10 pb-2">
              3. Sharing of Information
            </h2>
            <p className="mb-6">
              Quisodo holds your privacy in the highest regard. We do not sell your personal information. We may share necessary data with trusted third-party service providers who assist us in operating our sanctuary, conducting our business, or servicing you, so long as those parties agree to keep this information strictly confidential.
            </p>
            <p className="mb-6">
              We may also release information when its release is appropriate to comply with the law, enforce our sanctuary policies, or protect ours or others' rights, property or safety.
            </p>
          </section>

          <section className="scroll-mt-32 mb-16" id="security">
            <h2 className="font-headline-md text-headline-md text-primary mb-6 border-b border-outline-variant/10 pb-2">
              4. Data Security
            </h2>
            <p className="mb-6">
              We implement a variety of rigorous security measures to maintain the safety of your personal information. Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems, and are required to keep the information confidential.
            </p>
          </section>

          <section className="scroll-mt-32 mb-16" id="rights">
            <h2 className="font-headline-md text-headline-md text-primary mb-6 border-b border-outline-variant/10 pb-2">
              5. Your Privacy Rights
            </h2>
            <p className="mb-6">
              Depending on your jurisdiction, you may have specific rights regarding your personal information, including the right to access, correct, or delete the data we hold about you. To exercise these rights, please contact our dedicated privacy concierge using the information provided below.
            </p>
          </section>

          <div className="mt-24 pt-12 border-t border-outline-variant/20">
            <h3 className="font-headline-md text-headline-md mb-6">Contact the Privacy Concierge</h3>
            <p className="font-body-md text-body-md mb-4 text-on-surface-variant">
              For inquiries regarding this policy or your data:
            </p>
            <a 
              className="font-label-caps text-label-caps text-primary hover:text-tertiary transition-colors duration-300 inline-flex items-center gap-2 tracking-widest text-[11px]" 
              href="mailto:privacy@quisodo.com"
            >
              <span className="material-symbols-outlined text-sm">mail</span>
              PRIVACY@QUISODO.COM
            </a>
          </div>
        </article>
      </main>
    </div>
  );
}
