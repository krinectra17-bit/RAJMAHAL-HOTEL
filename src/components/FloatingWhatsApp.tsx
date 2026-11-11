import React from 'react';
import { buildWhatsAppUrl } from '../data/hotelData';
import { WhatsAppIcon } from './Icons';
import './FloatingWhatsApp.css';

export const FloatingWhatsApp: React.FC = () => {
  const url = buildWhatsAppUrl(
    'Hello Hotel Rajmahal by Vilasa Group, I would like to enquire about room availability and bookings.'
  );

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-wa"
      aria-label="Chat with Hotel Rajmahal on WhatsApp"
    >
      <span className="floating-wa__dot" aria-hidden="true" />
      <WhatsAppIcon size={16} />
      <span>
        WhatsApp<span className="floating-wa__suffix"> Booking</span>
      </span>
    </a>
  );
};
