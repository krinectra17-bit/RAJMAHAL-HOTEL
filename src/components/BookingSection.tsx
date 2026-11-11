import React, { useEffect, useState } from 'react';
import {
  HOTEL_CONFIG,
  ROOM_CATEGORIES,
  buildWhatsAppUrl,
} from '../data/hotelData';
import { WhatsAppIcon } from './Icons';
import './BookingSection.css';

interface BookingSectionProps {
  preselectedCategory: string;
}

interface FormState {
  guestName: string;
  checkIn: string;
  checkOut: string;
  adults: string;
  children: string;
  rooms: string;
  roomCategory: string;
  contactNumber: string;
  specialRequests: string;
}

type FormErrors = Partial<Record<keyof FormState, string>>;

function getTodayIso(): string {
  const now = new Date();
  const offsetMs = now.getTimezoneOffset() * 60000;
  return new Date(now.getTime() - offsetMs).toISOString().split('T')[0];
}

export const BookingSection: React.FC<BookingSectionProps> = ({
  preselectedCategory,
}) => {
  const todayIso = getTodayIso();

  const [form, setForm] = useState<FormState>({
    guestName: '',
    checkIn: '',
    checkOut: '',
    adults: '2',
    children: '0',
    rooms: '1',
    roomCategory: preselectedCategory || ROOM_CATEGORIES[1].name,
    contactNumber: '',
    specialRequests: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [generatedWhatsAppUrl, setGeneratedWhatsAppUrl] = useState<string | null>(
    null
  );

  useEffect(() => {
    if (preselectedCategory) {
      setForm((prev) => ({ ...prev, roomCategory: preselectedCategory }));
    }
  }, [preselectedCategory]);

  const updateField = (key: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => {
      if (!prev[key]) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
  };

  const validate = (): FormErrors => {
    const next: FormErrors = {};
    if (!form.guestName.trim() || form.guestName.trim().length < 2) {
      next.guestName = 'Please enter the primary guest name.';
    }
    if (!form.checkIn) {
      next.checkIn = 'Please select a check-in date.';
    }
    if (!form.checkOut) {
      next.checkOut = 'Please select a check-out date.';
    } else if (form.checkIn && form.checkOut <= form.checkIn) {
      next.checkOut = 'Check-out date must be after check-in date.';
    }
    const adultsNum = Number(form.adults);
    if (!Number.isInteger(adultsNum) || adultsNum < 1) {
      next.adults = 'At least 1 adult is required.';
    }
    const childrenNum = Number(form.children);
    if (!Number.isInteger(childrenNum) || childrenNum < 0) {
      next.children = 'Enter 0 or more children.';
    }
    const roomsNum = Number(form.rooms);
    if (!Number.isInteger(roomsNum) || roomsNum < 1) {
      next.rooms = 'At least 1 room is required.';
    }
    if (!form.roomCategory) {
      next.roomCategory = 'Please select a preferred room category.';
    }
    const digits = form.contactNumber.replace(/\D/g, '');
    if (digits.length < 10) {
      next.contactNumber = 'Please enter a valid 10-digit contact number.';
    }
    return next;
  };

  const formatWhatsAppMessage = (): string => {
    const lines = [
      'Hello Hotel Rajmahal by Vilasa Group!',
      '',
      'I would like to enquire about a room reservation.',
      '',
      `Guest Name: ${form.guestName.trim()}`,
      `Check-in: ${form.checkIn}`,
      `Check-out: ${form.checkOut}`,
      `Adults: ${form.adults}`,
      `Children: ${form.children || '0'}`,
      `Rooms Required: ${form.rooms}`,
      `Room Category: ${form.roomCategory}`,
      `Contact Number: ${form.contactNumber.trim()}`,
    ];

    if (form.specialRequests.trim()) {
      lines.push(`Special Requests: ${form.specialRequests.trim()}`);
    }

    lines.push(
      '',
      'Please share room availability and the best available tariff.',
      '',
      'Thank you!'
    );
    return lines.join('\n');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const message = formatWhatsAppMessage();
    const url = buildWhatsAppUrl(message);
    setGeneratedWhatsAppUrl(url);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="booking" className="section section--white">
      <div className="container">
        <div className="booking-layout">
          <div className="booking-intro" data-reveal="">
            <span className="eyebrow">Direct Reservations Desk</span>
            <h2 className="heading-serif heading-section">
              Enquire Directly on WhatsApp.
            </h2>
            <p className="lead-copy">
              Share your preferred dates and room category below to send a
              complete reservation enquiry straight to our front desk on
              WhatsApp. Our team responds personally with live room availability
              and our best available tariff.
            </p>

            <div className="booking-notes">
              <p className="booking-note">
                1. Complete your stay dates, party size, and room preference.
              </p>
              <p className="booking-note">
                2. Clicking confirm prepares a pre-formatted WhatsApp message for
                our reservations desk.
              </p>
              <p className="booking-note">
                3. Bookings are finalised once our team confirms room
                availability directly with you.
              </p>
            </div>

            <div className="booking-direct-box">
              <span className="booking-direct-box__label">
                Primary WhatsApp Reservations
              </span>
              <a
                href={HOTEL_CONFIG.whatsappBaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="booking-direct-box__num"
              >
                {HOTEL_CONFIG.primaryPhoneDisplay}
              </a>
            </div>
          </div>

          <div className="booking-form-wrap" data-reveal="">
            <form className="booking-form" onSubmit={handleSubmit} noValidate>
              <div className="field field--full">
                <label htmlFor="guestName" className="field__label">
                  Guest Name <span className="field__req">*</span>
                </label>
                <input
                  id="guestName"
                  name="guestName"
                  type="text"
                  autoComplete="name"
                  placeholder="Enter full name"
                  value={form.guestName}
                  onChange={(e) => updateField('guestName', e.target.value)}
                  className={`field__input ${
                    errors.guestName ? 'field__input--error' : ''
                  }`}
                  aria-invalid={Boolean(errors.guestName)}
                />
                {errors.guestName && (
                  <span className="field__error">{errors.guestName}</span>
                )}
              </div>

              <div className="field">
                <label htmlFor="checkIn" className="field__label">
                  Check-in Date <span className="field__req">*</span>
                </label>
                <input
                  id="checkIn"
                  name="checkIn"
                  type="date"
                  min={todayIso}
                  value={form.checkIn}
                  onChange={(e) => updateField('checkIn', e.target.value)}
                  className={`field__input ${
                    errors.checkIn ? 'field__input--error' : ''
                  }`}
                  aria-invalid={Boolean(errors.checkIn)}
                />
                {errors.checkIn && (
                  <span className="field__error">{errors.checkIn}</span>
                )}
              </div>

              <div className="field">
                <label htmlFor="checkOut" className="field__label">
                  Check-out Date <span className="field__req">*</span>
                </label>
                <input
                  id="checkOut"
                  name="checkOut"
                  type="date"
                  min={form.checkIn || todayIso}
                  value={form.checkOut}
                  onChange={(e) => updateField('checkOut', e.target.value)}
                  className={`field__input ${
                    errors.checkOut ? 'field__input--error' : ''
                  }`}
                  aria-invalid={Boolean(errors.checkOut)}
                />
                {errors.checkOut && (
                  <span className="field__error">{errors.checkOut}</span>
                )}
              </div>

              <div className="field">
                <label htmlFor="adults" className="field__label">
                  Number of Adults <span className="field__req">*</span>
                </label>
                <input
                  id="adults"
                  name="adults"
                  type="number"
                  min={1}
                  max={20}
                  value={form.adults}
                  onChange={(e) => updateField('adults', e.target.value)}
                  className={`field__input ${
                    errors.adults ? 'field__input--error' : ''
                  }`}
                  aria-invalid={Boolean(errors.adults)}
                />
                {errors.adults && (
                  <span className="field__error">{errors.adults}</span>
                )}
              </div>

              <div className="field">
                <label htmlFor="children" className="field__label">
                  Number of Children
                </label>
                <input
                  id="children"
                  name="children"
                  type="number"
                  min={0}
                  max={15}
                  value={form.children}
                  onChange={(e) => updateField('children', e.target.value)}
                  className={`field__input ${
                    errors.children ? 'field__input--error' : ''
                  }`}
                  aria-invalid={Boolean(errors.children)}
                />
                {errors.children && (
                  <span className="field__error">{errors.children}</span>
                )}
              </div>

              <div className="field">
                <label htmlFor="numRooms" className="field__label">
                  Number of Rooms <span className="field__req">*</span>
                </label>
                <input
                  id="numRooms"
                  name="rooms"
                  type="number"
                  min={1}
                  max={20}
                  value={form.rooms}
                  onChange={(e) => updateField('rooms', e.target.value)}
                  className={`field__input ${
                    errors.rooms ? 'field__input--error' : ''
                  }`}
                  aria-invalid={Boolean(errors.rooms)}
                />
                {errors.rooms && (
                  <span className="field__error">{errors.rooms}</span>
                )}
              </div>

              <div className="field">
                <label htmlFor="roomCategory" className="field__label">
                  Preferred Room Category <span className="field__req">*</span>
                </label>
                <select
                  id="roomCategory"
                  name="roomCategory"
                  value={form.roomCategory}
                  onChange={(e) => updateField('roomCategory', e.target.value)}
                  className={`field__select ${
                    errors.roomCategory ? 'field__select--error' : ''
                  }`}
                  aria-invalid={Boolean(errors.roomCategory)}
                >
                  {ROOM_CATEGORIES.map((room) => (
                    <option key={room.id} value={room.name}>
                      {room.name}
                    </option>
                  ))}
                </select>
                {errors.roomCategory && (
                  <span className="field__error">{errors.roomCategory}</span>
                )}
              </div>

              <div className="field field--full">
                <label htmlFor="contactNumber" className="field__label">
                  Contact Number <span className="field__req">*</span>
                </label>
                <input
                  id="contactNumber"
                  name="contactNumber"
                  type="tel"
                  autoComplete="tel"
                  placeholder="+91 98XXX XXXXX"
                  value={form.contactNumber}
                  onChange={(e) => updateField('contactNumber', e.target.value)}
                  className={`field__input ${
                    errors.contactNumber ? 'field__input--error' : ''
                  }`}
                  aria-invalid={Boolean(errors.contactNumber)}
                />
                {errors.contactNumber && (
                  <span className="field__error">{errors.contactNumber}</span>
                )}
              </div>

              <div className="field field--full">
                <label htmlFor="specialRequests" className="field__label">
                  Special Requests
                </label>
                <textarea
                  id="specialRequests"
                  name="specialRequests"
                  rows={3}
                  placeholder="Early check-in request, arrival timing, temple darshan assistance, etc."
                  value={form.specialRequests}
                  onChange={(e) =>
                    updateField('specialRequests', e.target.value)
                  }
                  className="field__textarea"
                />
              </div>

              <div className="booking-submit-row">
                <button
                  type="submit"
                  className="btn btn--primary booking-submit-btn"
                >
                  <WhatsAppIcon size={16} />
                  Confirm Your Enquiry on WhatsApp
                </button>
                <p className="booking-disclaimer">
                  Submitting sends a reservation enquiry to Hotel Rajmahal on
                  WhatsApp. Rooms are only confirmed once our reservations desk
                  verifies availability and responds to you.
                </p>
              </div>
            </form>

            {generatedWhatsAppUrl && (
              <div className="booking-handover" role="status" aria-live="polite">
                <h3 className="booking-handover__title">
                  Enquiry Prepared for WhatsApp
                </h3>
                <p className="booking-handover__text">
                  Your message has been prepared for{' '}
                  <strong>{HOTEL_CONFIG.primaryPhoneDisplay}</strong>. If
                  WhatsApp did not open automatically in a new tab, use the link
                  below to send your enquiry. Your stay will be confirmed once
                  our hotel desk verifies availability.
                </p>
                <div>
                  <a
                    href={generatedWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--gold"
                  >
                    <WhatsAppIcon size={15} />
                    Open WhatsApp Enquiry
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
