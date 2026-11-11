import React from 'react';
import { EXPLORE_DESTINATIONS } from '../data/hotelData';
import { Picture } from './Picture';
import './ExploreSection.css';

export const ExploreSection: React.FC = () => {
  const [featured, ...others] = EXPLORE_DESTINATIONS;

  return (
    <section id="explore" className="section section--ivory">
      <div className="container">
        <header className="explore-header" data-reveal="">
          <div>
            <span className="eyebrow">Destination Guide · Mewar</span>
            <h2
              className="heading-serif heading-section"
              style={{ marginTop: '0.85rem' }}
            >
              Explore Nathdwara &amp; Beyond.
            </h2>
          </div>
          <p className="lead-copy">
            Positioned at Nathuwas Circle on NH-8, Hotel Rajmahal places you
            moments from sacred Shrinathji darshan and within comfortable day-trip
            reach of Mewar’s finest fortresses and carved marble temples.
          </p>
        </header>

        {/* Featured Editorial Anchor: Shrinathji Temple */}
        <article className="explore-lead-card" data-reveal="">
          <div className="explore-lead-card__media" data-reveal-image="">
            <Picture
              folder="attractions"
              baseName={featured.imageBaseName}
              alt={featured.imageAlt}
              width={960}
              height={720}
            />
          </div>
          <div>
            <div className="explore-meta">
              <span className="explore-meta__region">{featured.region}</span>
              <span className="explore-meta__dist">{featured.distance}</span>
            </div>
            <h3 className="explore-title explore-title--lead">
              {featured.name}
            </h3>
            <p className="lead-copy">{featured.description}</p>
            <p className="explore-time">
              From Hotel Rajmahal · {featured.distance} ({featured.travelTime})
            </p>
          </div>
        </article>

        {/* Six Remaining Attractions */}
        <div className="explore-grid">
          {others.map((dest) => (
            <article key={dest.id} className="explore-card" data-reveal="">
              <div className="explore-card__media" data-reveal-image="">
                <Picture
                  folder="attractions"
                  baseName={dest.imageBaseName}
                  alt={dest.imageAlt}
                  width={960}
                  height={720}
                />
              </div>
              <div className="explore-meta">
                <span className="explore-meta__region">{dest.region}</span>
                <span className="explore-meta__dist">{dest.distance}</span>
              </div>
              <h3 className="explore-title">{dest.name}</h3>
              <p className="explore-desc">{dest.description}</p>
              <p className="explore-time">{dest.travelTime} from hotel</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
