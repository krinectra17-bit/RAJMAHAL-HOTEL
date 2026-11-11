import React from 'react';

interface IconProps {
  size?: number;
  className?: string;
}

export const WhatsAppIcon: React.FC<IconProps> = ({ size = 16, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M21 11.5a8.5 8.5 0 0 1-12.6 7.45L4 20l1.1-4.2A8.5 8.5 0 1 1 21 11.5Z" />
    <path d="M9.4 9.2c.2-.4.4-.4.6-.4h.5c.15 0 .35.06.5.4.2.45.65 1.55.7 1.65.06.1.08.24.02.38-.07.14-.12.22-.24.36-.12.14-.25.31-.35.42-.12.12-.24.25-.1.48.14.23.62 1.02 1.33 1.65.91.81 1.68 1.06 1.92 1.18.24.12.38.1.52-.06.14-.16.6-.7.76-.94.16-.24.32-.2.54-.12.22.08 1.4.66 1.64.78.24.12.4.18.46.28.06.1.06.58-.14 1.14-.2.56-1.15 1.07-1.6 1.14-.4.06-.92.09-1.48-.09-.34-.11-.78-.26-1.35-.5-2.37-1.02-3.92-3.4-4.04-3.56-.12-.16-.96-1.28-.96-2.44 0-1.16.6-1.73.82-1.97Z" />
  </svg>
);

export const PhoneIcon: React.FC<IconProps> = ({ size = 16, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.58 2.81.7A2 2 0 0 1 22 16.92Z" />
  </svg>
);

export const MapPinIcon: React.FC<IconProps> = ({ size = 16, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

export const ArrowRightIcon: React.FC<IconProps> = ({ size = 15, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </svg>
);

export const CloseIcon: React.FC<IconProps> = ({ size = 22, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
    strokeLinecap="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

export const ChevronIcon: React.FC<IconProps & { direction?: 'left' | 'right' }> = ({
  size = 20,
  direction = 'right',
  className,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    style={direction === 'left' ? { transform: 'rotate(180deg)' } : undefined}
    aria-hidden="true"
  >
    <path d="m9 6 6 6-6 6" />
  </svg>
);
