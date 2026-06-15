import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import quisodoLogo from '../assets/Optimized images/quisodo logo.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant/10 pt-24 pb-12 relative overflow-hidden z-10">
      {/* Ambient Glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-tertiary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-12 lg:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-16 lg:gap-x-12 mb-24">

          {/* Section 1: Newsletter & Contact Cluster */}
          <div className="col-span-12 lg:col-span-4 space-y-16">
            {/* Newsletter */}
            <div className="space-y-6">
              <h3 className="font-label-caps text-label-caps text-tertiary tracking-[0.2em]">NEWSLETTER</h3>
              <p className="font-body-md text-on-surface-variant max-w-xs uppercase leading-relaxed">
                RECEIVE OUR LATEST OFFERS AND NEWS UPDATES
              </p>

              {subscribed ? (
                <div className="font-label-caps text-label-caps text-tertiary py-4 transition-all duration-500 animate-pulse">
                  THANK YOU FOR SUBSCRIBING
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row max-w-sm group">
                  <input
                    type="email"
                    required
                    placeholder="ENTER EMAIL HERE"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-transparent border-b border-on-surface/30 focus:border-tertiary outline-none py-4 px-0 flex-grow font-label-caps text-label-caps transition-all duration-500 placeholder:text-on-surface-variant/40 focus:ring-0 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="bg-secondary-container text-on-secondary-container px-8 py-4 font-label-caps text-label-caps hover:bg-tertiary hover:text-surface transition-all duration-500 mt-4 sm:mt-0 active:scale-95 whitespace-nowrap"
                  >
                    SEND
                  </button>
                </form>
              )}
            </div>

            {/* Contact */}
            <div className="space-y-6">
              <h3 className="font-label-caps text-label-caps text-tertiary tracking-[0.2em]">CONTACT</h3>
              <p className="font-body-md text-on-surface-variant tracking-wider uppercase">
                32 KIFISSIAS AVENUE, ADA, GHANA
              </p>

              {/* Premium Brand Socials */}
              <div className="flex gap-4 pt-2">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-outline-variant/30 flex items-center justify-center text-on-surface-variant hover:border-tertiary hover:text-tertiary hover:bg-tertiary/10 transition-all duration-300 active:scale-95"
                  aria-label="Facebook"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-outline-variant/30 flex items-center justify-center text-on-surface-variant hover:border-tertiary hover:text-tertiary hover:bg-tertiary/10 transition-all duration-300 active:scale-95"
                  aria-label="Instagram"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-outline-variant/30 flex items-center justify-center text-on-surface-variant hover:border-tertiary hover:text-tertiary hover:bg-tertiary/10 transition-all duration-300 active:scale-95"
                  aria-label="YouTube"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                    <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.107C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.388.511a3.003 3.003 0 00-2.11 2.107C0 8.053 0 12 0 12s0 3.947.502 5.837a3.003 3.003 0 002.11 2.107C4.495 20.455 12 20.455 12 20.455s7.505 0 9.388-.511a3.003 3.003 0 002.11-2.107C24 15.947 24 12 24 12s0-3.947-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-outline-variant/30 flex items-center justify-center text-on-surface-variant hover:border-tertiary hover:text-tertiary hover:bg-tertiary/10 transition-all duration-300 active:scale-95"
                  aria-label="TikTok"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.59 4.23.99 1.18 2.37 1.93 3.86 2.14v3.83c-1.8-.1-3.52-.75-4.96-1.88v7.41c.01 1.9-.53 3.76-1.58 5.31-1.4 2.02-3.66 3.32-6.12 3.57-2.6.26-5.26-.52-7.14-2.34C.2 20.4-1.07 17.27-.85 14.15c.21-3 1.9-5.74 4.54-7.22 1.62-.91 3.48-1.32 5.34-1.2v3.74c-1.22-.09-2.45.24-3.44.97-1.12.82-1.78 2.16-1.75 3.56.03 1.92 1.54 3.51 3.46 3.63 1.8.11 3.4-1.05 3.85-2.79.16-.62.22-1.26.21-1.9V.02z" />
                  </svg>
                </a>
                <a
                  href="https://wa.me/233241234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-outline-variant/30 flex items-center justify-center text-on-surface-variant hover:border-tertiary hover:text-tertiary hover:bg-tertiary/10 transition-all duration-300 active:scale-95"
                  aria-label="WhatsApp"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.588 1.977 14.113.953 11.488.953c-5.43 0-9.85 4.37-9.854 9.8.001 1.713.465 3.39 1.346 4.887L1.933 21.05l5.714-1.896zM17.07 14.54c-.275-.138-1.63-.805-1.885-.898-.252-.093-.437-.139-.62.139-.183.276-.708.898-.868 1.082-.16.184-.32.207-.595.069-.276-.138-1.163-.428-2.214-1.366-.817-.73-1.368-1.63-1.528-1.905-.16-.276-.017-.424.12-.562.124-.125.275-.32.413-.48.139-.16.184-.277.276-.46.092-.185.046-.346-.023-.484-.069-.138-.62-1.493-.85-2.046-.224-.54-.449-.467-.62-.476-.16-.008-.344-.01-.528-.01-.184 0-.482.069-.733.344-.252.276-.962.94-9.62 2.294 0 1.353.985 2.658 1.122 2.842.138.184 1.938 2.96 4.696 4.152.656.283 1.168.453 1.567.58.659.21 1.259.18 1.733.11.528-.08 1.63-.667 1.859-1.278.228-.61.228-1.129.16-1.24-.07-.11-.253-.178-.528-.316z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Section 2: Links Columns */}
          <div className="col-span-12 lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 lg:pl-12">
              {/* About */}
              <div className="space-y-8">
                <h3 className="font-display-xl text-[20px] text-on-surface italic normal-case tracking-normal">
                  About Quisodo Landing
                </h3>
                <ul className="space-y-4 flex flex-col">
                  <li>
                    <Link to="/story" className="font-label-caps text-label-caps text-on-surface-variant hover:text-tertiary transition-colors duration-300">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/journal" className="font-label-caps text-label-caps text-on-surface-variant hover:text-tertiary transition-colors duration-300">
                      Insights
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="font-label-caps text-label-caps text-on-surface-variant hover:text-tertiary transition-colors duration-300">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Discover */}
              <div className="space-y-8">
                <h3 className="font-display-xl text-[20px] text-on-surface italic normal-case tracking-normal">
                  Discover
                </h3>
                <ul className="space-y-4 flex flex-col">
                  <li>
                    <Link to="/stay" className="font-label-caps text-label-caps text-on-surface-variant hover:text-tertiary transition-colors duration-300">
                      Lodgings
                    </Link>
                  </li>
                  <li>
                    <Link to="/fishing" className="font-label-caps text-label-caps text-on-surface-variant hover:text-tertiary transition-colors duration-300">
                      Fishing
                    </Link>
                  </li>
                  <li>
                    <Link to="/arrival" className="font-label-caps text-label-caps text-on-surface-variant hover:text-tertiary transition-colors duration-300">
                      Transport
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Policy */}
              <div className="space-y-8">
                <h3 className="font-display-xl text-[20px] text-on-surface italic normal-case tracking-normal">
                  Policy
                </h3>
                <ul className="space-y-4 flex flex-col">
                  <li>
                    <Link to="/terms" className="font-label-caps text-label-caps text-on-surface-variant hover:text-tertiary transition-colors duration-300">
                      Terms & Condition
                    </Link>
                  </li>
                  <li>
                    <Link to="/terms" className="font-label-caps text-label-caps text-on-surface-variant hover:text-tertiary transition-colors duration-300">
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Payment Methods Section */}
            <div className="mt-24 lg:pl-12">
              <div className="flex flex-wrap items-center gap-x-8 gap-y-6">
                <span className="font-label-caps text-label-caps text-on-surface-variant border-r border-outline-variant/20 pr-8 mr-4 hidden md:block tracking-widest">
                  PAYMENT METHODS
                </span>
                <div className="flex flex-wrap items-center gap-10">
                  {/* Visa */}
                  <img
                    alt="Visa"
                    className="h-6 payment-logo"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxks7C_rTNbxzcEmErGc7tbNdVMpYx-mZiR1ViVlSvbCJfpvhLlu-O6p-x4I5DtBPWkcKF9mcK_Ul2MoqqmLMK7UPW4UgzfUXhC49qT4cG9UkUhNQZ_TnM-y2EHgmEht5u83AGgJJ1XkM3HOnlgdGRvWtRNQAfmtEpfSxwj-6X1PKjXrUo5Cg5hiMvxBXYPA89HT4YrXQIPlwFQhUzuXZARsogIT_65Zva-OMcTos_ZIv3GDLABWfrmupfOsacokj55PaI6rx_lhzh"
                  />
                  {/* Mastercard */}
                  <img
                    alt="Mastercard"
                    className="h-8 payment-logo"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqFJgK1JV2ksG7_AnusOY4TfQNDwc7tdaKI2945-77-CWcR5-NDQcP2HcNviCgaSAnxANDWwHyzyXSHEfSBHf-epMaAt1jCKuZYY3AbsSTqmE2Fz8vS42GCG2flaRcw3rO3c-mf02785CIJzy-W-VIIRcvnX8dcNTA1vuklwwhwc9ny8o_j9rECMC4Fbf5VGqPBqrnlzK4aM0_FIcd7IyzKNhgDrzEB-KF5OqjWJ1kdomQkmB47FPiG0-K2Cx2FuE2xvRnrXwZb2hQ"
                  />
                  {/* AMEX */}
                  <img
                    alt="AMEX"
                    className="h-10 payment-logo"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqcHXfZH0eruXeolWhc0VRU9yERFTdSH2srYLc85YeC3_xv2OszUKh5gEU2mfUssX1xzbvVsiwdDcLOiLovT8YRWWXkKpxDsfrl8Zh6zJd3MJXhZvjyLmoqCJgPx1YCtPQr2ZZMtdLxiHXkxxDN_yD5oi6qN3slo3Od3OmN7Nl01CLbu3W8Yb-ldEmpe3eQTUtYnjb_24G_IzUJJCvkhxGyde9J2C2enku1W1jMwi5m63WSvmB5wrphuUT0wIBzTKrzQ4FJo5RYb1g"
                  />
                  {/* Apple Pay */}
                  <img
                    alt="Apple Pay"
                    className="h-6 payment-logo invert"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8raix41R8380rStl8dfOSUXR5caT-R4vDXAnxxrq6ooBHObSi3foWfKvYDrOCXXrJMA4-upkjp7FJ_eeuKTXKEou_yLQONqA925C20OEcV7uyO26Ued_RgW11rX4Bccja-bi9sqeQGuhmccAxuid28fUQoonz56ejrDcPBIrOJJKOnJJG8QzKHrBvilsT7AP5bq2G0qnfR2cxZU1_mrIBdlMdedn1xB6FWBJp8PTqsHmMUlROB4PcLMHxJGT55kKEuKq2W1-fIlkw"
                  />
                  {/* Klarna */}
                  <img
                    alt="Klarna"
                    className="h-6 payment-logo"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqcHXfZH0eruXeolWhc0VRU9yERFTdSH2srYLc85YeC3_xv2OszUKh5gEU2mfUssX1xzbvVsiwdDcLOiLovT8YRWWXkKpxDsfrl8Zh6zJd3MJXhZvjyLmoqCJgPx1YCtPQr2ZZMtdLxiHXkxxDN_yD5oi6qN3slo3Od3OmN7Nl01CLbu3W8Yb-ldEmpe3eQTUtYnjb_24G_IzUJJCvkhxGyde9J2C2enku1W1jMwi5m63WSvmB5wrphuUT0wIBzTKrzQ4FJo5RYb1g"
                  />
                  {/* Clearpay */}
                  <div className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity duration-300 cursor-default">
                    <span className="font-label-caps text-label-caps font-extrabold tracking-tighter text-[18px]">
                      clearpay<span className="text-primary">◇</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-outline-variant/10 pt-12 flex flex-col items-center gap-6">
          <img
            src={quisodoLogo}
            alt="Quisodo Landing"
            className="h-14 w-auto object-contain opacity-40"
          />
          <p className="font-label-caps text-label-caps text-on-surface-variant/40 tracking-[0.3em] uppercase">
            COPYRIGHT QUISODO LANDING © {currentYear}
          </p>
          <div className="flex items-center gap-2 text-on-surface-variant/20 hover:text-tertiary transition-colors duration-500 cursor-default">
            <span className="w-1.5 h-1.5 bg-current rounded-full"></span>
            <span className="font-label-caps text-[10px] tracking-[0.2em] font-semibold">
              CRAFTED FOR THE DISCERNING TRAVELER
            </span>
            <span className="w-1.5 h-1.5 bg-current rounded-full"></span>
          </div>
        </div>

      </div>
    </footer>
  );
}
