import React from 'react';
import { HOTEL_AMENITIES } from '../data/hotelData';
import './AmenitiesSection.css';

export const AmenitiesSection: React.FC = () => {
  return (
    <section id="amenities" className="section section--beige">
      <div className="container">
        <header className="amenities-header" data-reveal="">
          <div>
            <span className="eyebrow">Amenities &amp; Services</span>
            <h2 className="heading-serif heading-section" style={{ marginTop: '0.85rem' }}>
              Essential Comforts,
              <br />
              Quietly Delivered.
            </h2>
          </div>
          <p className="lead-copy">
            Every stay at Hotel Rajmahal is backed by reliable, round-the-clock
            hospitality services so families, pilgrims, and travellers enjoy an
            effortless stay from check-in to departure.
          </p>
        </header>

        <div className="amenities-grid" data-reveal="">
          {HOTEL_AMENITIES.map((amenity) => (
            <div key={amenity.code} className="amenity-item">
              <span className="amenity-item__code" aria-hidden="true">
                {amenity.code}
              </span>
              <div>
                <h3 className="amenity-item__title">{amenity.name}</h3>
                <p className="amenity-item__note">{amenity.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
