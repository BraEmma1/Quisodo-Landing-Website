import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: 'Privacy & Terms', path: '/terms' },
    { label: 'Our Story', path: '/story' },
    { label: 'Arrival & Transport', path: '/arrival' },
    { label: 'Assistance', path: '/assistance' },
    { label: 'Reflections', path: '/reflections' },
  ];

  return (
    <footer className="w-full px-margin-mobile md:px-margin-desktop py-24 bg-surface-container-lowest border-t border-outline-variant/10 relative z-10">
      <div className="max-w-container-max mx-auto">
        <div className="flex flex-col gap-16">
          {/* Top Section: Wordmark */}
          <div>
            <h2 className="font-display-xl text-4xl md:text-5xl text-on-surface tracking-[0.25em] mb-4">
              QUISODO
            </h2>
            <p className="font-label-caps text-label-caps text-tertiary tracking-[0.3em]">
              Riverside Sanctuary
            </p>
          </div>

          {/* Middle Section: Navigation and Socials */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-start">
            <div className="md:col-span-8 flex flex-wrap gap-x-12 gap-y-6">
              {footerLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  className="font-label-caps text-label-caps text-on-surface-variant hover:text-tertiary transition-colors duration-500"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Social Links with Official SVG Icons */}
            <div className="md:col-span-4 flex md:justify-end gap-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 font-label-caps text-label-caps text-on-surface hover:text-tertiary transition-colors duration-500"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 fill-current transition-transform duration-500 group-hover:scale-110"
                  aria-hidden="true"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span className="hidden lg:inline">Facebook</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 font-label-caps text-label-caps text-on-surface hover:text-tertiary transition-colors duration-500"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 fill-current transition-transform duration-500 group-hover:rotate-12"
                  aria-hidden="true"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
                <span className="hidden lg:inline">Instagram</span>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 font-label-caps text-label-caps text-on-surface hover:text-tertiary transition-colors duration-500"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 fill-current transition-transform duration-500 group-hover:scale-105"
                  aria-hidden="true"
                >
                  <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.107C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.388.511a3.003 3.003 0 00-2.11 2.107C0 8.053 0 12 0 12s0 3.947.502 5.837a3.003 3.003 0 002.11 2.107C4.495 20.455 12 20.455 12 20.455s7.505 0 9.388-.511a3.003 3.003 0 002.11-2.107C24 15.947 24 12 24 12s0-3.947-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                <span className="hidden lg:inline">YouTube</span>
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 font-label-caps text-label-caps text-on-surface hover:text-tertiary transition-colors duration-500"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 fill-current transition-transform duration-500 group-hover:-rotate-12"
                  aria-hidden="true"
                >
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.59 4.23.99 1.18 2.37 1.93 3.86 2.14v3.83c-1.8-.1-3.52-.75-4.96-1.88v7.41c.01 1.9-.53 3.76-1.58 5.31-1.4 2.02-3.66 3.32-6.12 3.57-2.6.26-5.26-.52-7.14-2.34C.2 20.4-1.07 17.27-.85 14.15c.21-3 1.9-5.74 4.54-7.22 1.62-.91 3.48-1.32 5.34-1.2v3.74c-1.22-.09-2.45.24-3.44.97-1.12.82-1.78 2.16-1.75 3.56.03 1.92 1.54 3.51 3.46 3.63 1.8.11 3.4-1.05 3.85-2.79.16-.62.22-1.26.21-1.9V.02z" />
                </svg>
                <span className="hidden lg:inline">TikTok</span>
              </a>
              <a
                href="https://wa.me/233241234567"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 font-label-caps text-label-caps text-on-surface hover:text-tertiary transition-colors duration-500"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 fill-current transition-transform duration-500 group-hover:scale-110"
                  aria-hidden="true"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.588 1.977 14.113.953 11.488.953c-5.43 0-9.85 4.37-9.854 9.8.001 1.713.465 3.39 1.346 4.887L1.933 21.05l5.714-1.896zM17.07 14.54c-.275-.138-1.63-.805-1.885-.898-.252-.093-.437-.139-.62.139-.183.276-.708.898-.868 1.082-.16.184-.32.207-.595.069-.276-.138-1.163-.428-2.214-1.366-.817-.73-1.368-1.63-1.528-1.905-.16-.276-.017-.424.12-.562.124-.125.275-.32.413-.48.139-.16.184-.277.276-.46.092-.185.046-.346-.023-.484-.069-.138-.62-1.493-.85-2.046-.224-.54-.449-.467-.62-.476-.16-.008-.344-.01-.528-.01-.184 0-.482.069-.733.344-.252.276-.962.94-9.62 2.294 0 1.353.985 2.658 1.122 2.842.138.184 1.938 2.96 4.696 4.152.656.283 1.168.453 1.567.58.659.21 1.259.18 1.733.11.528-.08 1.63-.667 1.859-1.278.228-.61.228-1.129.16-1.24-.07-.11-.253-.178-.528-.316z" />
                </svg>
                <span className="hidden lg:inline">WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Bottom Section: Copyright */}
          <div className="pt-12 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <p className="font-body-md text-body-md text-on-surface-variant/60 italic">
              © {currentYear} Quisodo Riverside Sanctuary. All rights reserved.
            </p>
            <p className="font-label-caps text-label-caps text-tertiary/80 tracking-widest">
              CRAFTED FOR THE DISCERNING TRAVELER.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
