import React, { useEffect, useState } from 'react';
import { HOTEL_CONFIG, buildWhatsAppUrl } from '../data/hotelData';
import { CloseIcon, WhatsAppIcon } from './Icons';
import './Navbar.css';

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Rooms & Suites', href: '#rooms' },
  { label: 'Experiences', href: '#amenities' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 56);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [menuOpen]);

  const directWhatsAppUrl = buildWhatsAppUrl(
    'Hello Hotel Rajmahal by Vilasa Group, I would like to enquire about room availability and tariff details.'
  );

  return (
    <>
      <header
        className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}
      >
        <div className="container nav-inner">
          <a href="#home" className="brand-mark" aria-label="Hotel Rajmahal by Vilasa Group Home">
            <span className="brand-mark__title">{HOTEL_CONFIG.name}</span>
            <span className="brand-mark__sub">{HOTEL_CONFIG.brandGroup}</span>
          </a>

          <nav aria-label="Primary Navigation">
            <ul className="nav-links">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="nav-actions">
            <a href="#booking" className="nav-cta">
              Book Your Stay
            </a>
            <button
              type="button"
              className="menu-toggle"
              aria-label="Open navigation menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(true)}
            >
              <span className="menu-bars" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Lightweight Mobile Drawer */}
      <div
        className={`mobile-drawer-backdrop ${
          menuOpen ? 'mobile-drawer-backdrop--open' : ''
        }`}
        onClick={() => setMenuOpen(false)}
        aria-hidden={!menuOpen}
      />

      <aside
        className={`mobile-drawer ${menuOpen ? 'mobile-drawer--open' : ''}`}
        aria-label="Mobile Navigation"
        aria-hidden={!menuOpen}
      >
        <div>
          <div className="mobile-drawer__head">
            <div className="brand-mark">
              <span className="brand-mark__title">{HOTEL_CONFIG.name}</span>
              <span className="brand-mark__sub">{HOTEL_CONFIG.brandGroup}</span>
            </div>
            <button
              type="button"
              className="mobile-drawer__close"
              aria-label="Close navigation menu"
              onClick={() => setMenuOpen(false)}
            >
              <CloseIcon size={18} />
            </button>
          </div>

          <ul className="mobile-drawer__list">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={() => setMenuOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mobile-drawer__footer">
          <p className="mobile-drawer__meta">{HOTEL_CONFIG.fullAddress}</p>
          <a
            href="#booking"
            className="btn btn--primary"
            onClick={() => setMenuOpen(false)}
          >
            Book Your Stay
          </a>
          <a
            href={directWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--outline-dark"
          >
            <WhatsAppIcon size={15} />
            WhatsApp Enquiry
          </a>
        </div>
      </aside>
    </>
  );
};
