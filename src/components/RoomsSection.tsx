import React, { useState } from 'react';
import { ROOM_CATEGORIES, RoomCategory, buildWhatsAppUrl } from '../data/hotelData';
import { WhatsAppIcon } from './Icons';
import { Picture } from './Picture';
import './RoomsSection.css';

interface RoomsSectionProps {
  onSelectCategoryForBooking: (categoryName: string) => void;
}

interface RoomRowProps {
  room: RoomCategory;
  index: number;
  onSelectCategoryForBooking: (categoryName: string) => void;
}

const RoomRow: React.FC<RoomRowProps> = ({
  room,
  index,
  onSelectCategoryForBooking,
}) => {
  const [showSecondary, setShowSecondary] = useState(false);

  const activeBaseName =
    showSecondary && room.secondaryImage
      ? room.secondaryImage.baseName
      : room.image.baseName;

  const activeAlt =
    showSecondary && room.secondaryImage
      ? room.secondaryImage.alt
      : room.image.alt;

  const whatsappUrl = buildWhatsAppUrl(
    `Hello Hotel Rajmahal, I am interested in booking your ${room.name}. Please share availability and tariff details.`
  );

  const numberLabel = String(index + 1).padStart(2, '0');
  const isReverse = index % 2 === 1;

  return (
    <article
      className={`room-row ${isReverse ? 'room-row--reverse' : ''}`}
      data-reveal=""
    >
      <div className="room-media">
        <div
          className="room-media__frame"
          style={{ aspectRatio: showSecondary ? '3 / 2' : room.image.aspect }}
        >
          <Picture
            folder="hotel"
            baseName={activeBaseName}
            alt={activeAlt}
          />
        </div>

        {room.secondaryImage && (
          <div className="room-media__switcher" role="group" aria-label={`${room.name} photography toggle`}>
            <button
              type="button"
              className={`room-view-btn ${!showSecondary ? 'room-view-btn--active' : ''}`}
              onClick={() => setShowSecondary(false)}
            >
              Room View
            </button>
            <button
              type="button"
              className={`room-view-btn ${showSecondary ? 'room-view-btn--active' : ''}`}
              onClick={() => setShowSecondary(true)}
            >
              {room.secondaryImage.label}
            </button>
          </div>
        )}
      </div>

      <div className="room-body">
        <span className="room-body__index">Accommodation · {numberLabel}</span>
        <h3 className="room-body__title">{room.name}</h3>
        <p className="room-body__subtitle">{room.subtitle}</p>
        <p className="room-body__desc">{room.description}</p>

        <ul className="room-amenities" aria-label={`${room.name} key comforts`}>
          {room.amenities.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <div className="room-actions">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary"
          >
            <WhatsAppIcon size={15} />
            Enquire for Price
          </a>
          <button
            type="button"
            className="room-book-link"
            onClick={() => onSelectCategoryForBooking(room.name)}
          >
            Reserve via Enquiry Form
          </button>
        </div>
      </div>
    </article>
  );
};

export const RoomsSection: React.FC<RoomsSectionProps> = ({
  onSelectCategoryForBooking,
}) => {
  return (
    <section id="rooms" className="section section--white">
      <div className="container">
        <header className="rooms-header" data-reveal="">
          <span className="eyebrow">Rooms &amp; Suites</span>
          <h2 className="heading-serif heading-section">
            Thoughtfully Appointed Stays in Nathdwara.
          </h2>
          <p className="lead-copy">
            From restful double guestrooms to expansive suites opening onto
            sandstone jali balconies, every category reflects calm hospitality.
            Reach out directly on WhatsApp for live availability and best
            available tariffs.
          </p>
        </header>

        <div className="rooms-list">
          {ROOM_CATEGORIES.map((room, index) => (
            <RoomRow
              key={room.id}
              room={room}
              index={index}
              onSelectCategoryForBooking={onSelectCategoryForBooking}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
