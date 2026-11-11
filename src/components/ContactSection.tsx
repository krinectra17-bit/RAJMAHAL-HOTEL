import React from 'react';
import { HOTEL_CONFIG, buildWhatsAppUrl } from '../data/hotelData';
import { MapPinIcon, PhoneIcon, WhatsAppIcon } from './Icons';
import './ContactSection.css';

export const ContactSection: React.FC = () => {
  const contactWhatsAppUrl = buildWhatsAppUrl(
    'Hello Hotel Rajmahal by Vilasa Group, I have a question regarding location and stay details.'
  );

  return (
    <section id="contact" className="section section--ivory">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-details" data-reveal="">
            <span className="eyebrow">Contact &amp; Location</span>
            <h2 className="heading-serif heading-section">
              Find Us at Nathuwas Circle.
            </h2>
            <p className="lead-copy">
              Conveniently situated on Shrinathji Main Road / NH-8 at Nathuwas
              Circle, welcoming guests arriving from Udaipur, Jaipur, Ahmedabad,
              and nearby Mewar landmarks.
            </p>

            <div className="contact-ledger">
              <div className="contact-row">
                <span className="contact-row__label">Address</span>
                <div className="contact-row__value">
                  <strong>{HOTEL_CONFIG.fullName}</strong>
                  <br />
                  {HOTEL_CONFIG.addressLines[0]}
                  <br />
                  {HOTEL_CONFIG.addressLines[1]}
                </div>
              </div>

              <div className="contact-row">
                <span className="contact-row__label">Phone</span>
                <div className="contact-row__value contact-phones">
                  <a
                    href={`tel:${HOTEL_CONFIG.primaryPhoneTel}`}
                    className="contact-link"
                  >
                    <PhoneIcon size={14} />
                    <span>{HOTEL_CONFIG.primaryPhoneDisplay} (Primary / WhatsApp)</span>
                  </a>
                  <a
                    href={`tel:${HOTEL_CONFIG.alternatePhoneTel}`}
                    className="contact-link"
                  >
                    <PhoneIcon size={14} />
                    <span>{HOTEL_CONFIG.alternatePhoneDisplay} (Alternate)</span>
                  </a>
                  <a
                    href={`tel:${HOTEL_CONFIG.landlineTel}`}
                    className="contact-link"
                  >
                    <PhoneIcon size={14} />
                    <span>{HOTEL_CONFIG.landlineDisplay} (Landline)</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-actions">
              <a
                href={contactWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary"
              >
                <WhatsAppIcon size={15} />
                WhatsApp Desk
              </a>
              <a
                href={HOTEL_CONFIG.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--outline-dark"
              >
                <MapPinIcon size={15} />
                Get Directions
              </a>
            </div>
          </div>

          <div className="contact-map-frame" data-reveal="">
            <iframe
              title="Hotel Rajmahal by Vilasa Group on Google Maps"
              src={HOTEL_CONFIG.mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};
