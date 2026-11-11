import React from 'react';
import { HOTEL_CONFIG } from '../data/hotelData';
import { ArrowRightIcon } from './Icons';
import { Picture } from './Picture';
import './AboutSection.css';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section section--ivory">
      <div className="container">
        <div className="about-grid">
          <div className="about-visual" data-reveal="">
            <div className="about-visual__primary" data-reveal-image="">
              <Picture
                folder="hotel"
                baseName="exterior-angled"
                alt="Architectural perspective of Hotel Rajmahal by Vilasa Group featuring carved jharokhas and entrance"
                width={1024}
                height={822}
              />
            </div>
            <div className="about-visual__inset" data-reveal-image="">
              <Picture
                folder="hotel"
                baseName="lobby"
                alt="Hotel Rajmahal reception lobby with backlit Rajasthani jali panels and marble floor"
                width={1024}
                height={575}
              />
            </div>
          </div>

          <div className="about-copy" data-reveal="">
            <span className="eyebrow">The Address in Nathdwara</span>
            <h2 className="heading-serif heading-section">
              Where Heritage Meets Comfort.
            </h2>

            <div className="about-copy__text">
              <p className="lead-copy">
                Welcome to Hotel Rajmahal by Vilasa Group, a welcoming
                hospitality destination in Nathdwara, Rajasthan.
              </p>
              <p className="lead-copy">
                Experience comfortable accommodation, thoughtful hospitality and
                convenient access to the spiritual and cultural attractions of
                Nathdwara.
              </p>
            </div>

            <div className="about-ledger">
              <div className="about-ledger__row">
                <span className="about-ledger__label">Location</span>
                <span className="about-ledger__val">
                  Nathuwas Circle, NH-8
                </span>
              </div>
              <div className="about-ledger__row">
                <span className="about-ledger__label">Shrinathji Temple</span>
                <span className="about-ledger__val">Approx. 1.5 km</span>
              </div>
              <div className="about-ledger__row">
                <span className="about-ledger__label">Presented By</span>
                <span className="about-ledger__val">Vilasa Group</span>
              </div>
            </div>

            <div className="about-actions">
              <a href="#rooms" className="btn btn--primary">
                View Rooms &amp; Suites
                <ArrowRightIcon size={14} />
              </a>
              <a
                href={HOTEL_CONFIG.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--outline-dark"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
