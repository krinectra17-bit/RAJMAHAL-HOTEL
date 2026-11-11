import React from 'react';
import { HOTEL_CONFIG, buildWhatsAppUrl } from '../data/hotelData';
import { WhatsAppIcon } from './Icons';
import './Footer.css';

export const Footer: React.FC = () => {
  const footerWhatsAppUrl = buildWhatsAppUrl(
    'Hello Hotel Rajmahal by Vilasa Group, I would like to enquire about booking a stay.'
  );

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <p className="footer-brand__title">{HOTEL_CONFIG.name}</p>
            <p className="footer-brand__sub">{HOTEL_CONFIG.brandGroup}</p>
            <p className="footer-brand__tagline">
              Experience the warmth of Rajasthan.
            </p>
            <div style={{ marginTop: '1.5rem' }}>
              <a
                href={footerWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--gold"
              >
                <WhatsAppIcon size={15} />
                Book on WhatsApp
              </a>
            </div>
          </div>

          <div>
            <h3 className="footer-col__heading">Quick Links</h3>
            <ul className="footer-links">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#rooms">Rooms</a>
              </li>
              <li>
                <a href="#gallery">Gallery</a>
              </li>
              <li>
                <a href="#amenities">Experiences</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="footer-col__heading">Contact &amp; Address</h3>
            <div className="footer-contact-list">
              <span>{HOTEL_CONFIG.fullAddress}</span>
              <a href={`tel:${HOTEL_CONFIG.primaryPhoneTel}`}>
                Phone: {HOTEL_CONFIG.primaryPhoneDisplay}
              </a>
              <a href={`tel:${HOTEL_CONFIG.alternatePhoneTel}`}>
                Alternate: {HOTEL_CONFIG.alternatePhoneDisplay}
              </a>
              <a href={`tel:${HOTEL_CONFIG.landlineTel}`}>
                Landline: {HOTEL_CONFIG.landlineDisplay}
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            &copy; 2026 Hotel Rajmahal by Vilasa Group. All Rights Reserved.
          </span>
          <span>Nathdwara, Rajasthan</span>
        </div>
      </div>
    </footer>
  );
};
