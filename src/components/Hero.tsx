import React, { useEffect, useRef } from 'react';
import { HOTEL_CONFIG } from '../data/hotelData';
import { ArrowRightIcon } from './Icons';
import './Hero.css';

export const Hero: React.FC = () => {
  const mediaRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReducedMotion) return;

    let rafId = 0;
    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        if (!mediaRef.current) return;
        const offset = Math.min(window.scrollY * 0.18, 60);
        mediaRef.current.style.transform = `translate3d(0, ${offset}px, 0)`;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <section id="home" className="hero" aria-label="Hotel Rajmahal Hero">
      <div className="hero__media" ref={mediaRef}>
        <picture>
          <source
            media="(max-width: 767px)"
            srcSet="/images/hotel/hero-mobile.avif"
            type="image/avif"
          />
          <source
            media="(max-width: 767px)"
            srcSet="/images/hotel/hero-mobile.webp"
            type="image/webp"
          />
          <source
            media="(max-width: 767px)"
            srcSet="/images/hotel/hero-mobile.jpg"
            type="image/jpeg"
          />
          <source srcSet="/images/hotel/hero-desktop.avif" type="image/avif" />
          <source srcSet="/images/hotel/hero-desktop.webp" type="image/webp" />
          <img
            src="/images/hotel/hero-desktop.jpg"
            alt="Hotel Rajmahal by Vilasa Group illuminated Rajasthani heritage facade in Nathdwara at night"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        </picture>
      </div>

      <div className="hero__scrim" aria-hidden="true" />

      <div className="container hero__content">
        <div className="hero__panel">
          <div className="hero__location">{HOTEL_CONFIG.locationLabel}</div>
          <p className="hero__eyebrow">A HERITAGE EXPERIENCE BY VILASA GROUP</p>
          <h1 className="hero__heading">
            Experience the
            <br />
            <em>Royal Side</em> of
            <br />
            Nathdwara.
          </h1>
          <p className="hero__support">
            Discover timeless hospitality, comfortable stays and the warmth of
            Rajasthan at Hotel Rajmahal.
          </p>

          <div className="hero__actions">
            <a href="#rooms" className="btn btn--gold">
              Explore Our Rooms
              <ArrowRightIcon size={14} />
            </a>
            <a href="#booking" className="btn btn--outline-light">
              Book Your Stay
            </a>
          </div>
        </div>
      </div>

      <a href="#about" className="hero__scroll" aria-label="Scroll to introduction">
        <span>Scroll</span>
        <span className="hero__scroll-line" aria-hidden="true" />
      </a>
    </section>
  );
};
