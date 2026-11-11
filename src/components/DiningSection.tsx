import React from 'react';
import { HOTEL_CONFIG, buildWhatsAppUrl } from '../data/hotelData';
import { WhatsAppIcon } from './Icons';
import { Picture } from './Picture';
import './DiningSection.css';

export const DiningSection: React.FC = () => {
  const diningWhatsAppUrl = buildWhatsAppUrl(
    `Hello Hotel Rajmahal, I would like to enquire about dining and table reservations at ${HOTEL_CONFIG.restaurantName}.`
  );

  return (
    <section id="dining" className="section section--ivory">
      <div className="container">
        <div className="dining-grid">
          <div className="dining-copy" data-reveal="">
            <span className="eyebrow">{HOTEL_CONFIG.restaurantName}</span>
            <h2 className="heading-serif heading-section">
              Good Food.
              <br />
              Beautiful Moments.
            </h2>

            <div className="dining-copy__text">
              <p className="lead-copy">
                Gather beneath warm circular ceiling coves and solid teak dining
                tables at Times Rajmahal Restaurant, our welcoming multi-cuisine
                dining room on the property.
              </p>
              <p className="lead-copy">
                Designed for unhurried family meals, temple-visit mornings, and
                comforting evening dinners, our kitchen and dining team welcome
                both in-house guests and Nathdwara visitors with attentive
                Rajasthani warmth.
              </p>
            </div>

            <div className="dining-highlights">
              <div>
                <span className="dining-highlight__label">Cuisine</span>
                <span className="dining-highlight__val">Multi-Cuisine Dining</span>
              </div>
              <div>
                <span className="dining-highlight__label">Setting</span>
                <span className="dining-highlight__val">In-House Dining Hall &amp; Room Service</span>
              </div>
            </div>

            <div>
              <a
                href={diningWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary"
              >
                <WhatsAppIcon size={15} />
                Enquire on WhatsApp
              </a>
            </div>
          </div>

          <div className="dining-visual" data-reveal="" data-reveal-image="">
            <Picture
              folder="hotel"
              baseName="restaurant"
              alt="Times Rajmahal Restaurant dining room featuring teak tables, chevron marble flooring, and warm lighting"
              width={1024}
              height={682}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
