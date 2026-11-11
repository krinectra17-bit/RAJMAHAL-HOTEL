import React, { useCallback, useEffect, useState } from 'react';
import { GALLERY_PHOTOS } from '../data/hotelData';
import { ChevronIcon, CloseIcon } from './Icons';
import { Picture } from './Picture';
import './GallerySection.css';

const CATEGORIES = ['All', 'Exterior', 'Rooms & Suites', 'Dining & Lobby'] as const;
type FilterCategory = (typeof CATEGORIES)[number];

export const GallerySection: React.FC = () => {
  const [filter, setFilter] = useState<FilterCategory>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const visiblePhotos =
    filter === 'All'
      ? GALLERY_PHOTOS
      : GALLERY_PHOTOS.filter((p) => p.category === filter);

  const handleClose = useCallback(() => setLightboxIndex(null), []);

  const handlePrev = useCallback(() => {
    setLightboxIndex((curr) =>
      curr === null
        ? null
        : (curr - 1 + visiblePhotos.length) % visiblePhotos.length
    );
  }, [visiblePhotos.length]);

  const handleNext = useCallback(() => {
    setLightboxIndex((curr) =>
      curr === null ? null : (curr + 1) % visiblePhotos.length
    );
  }, [visiblePhotos.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [lightboxIndex, handleClose, handlePrev, handleNext]);

  const activePhoto =
    lightboxIndex !== null ? visiblePhotos[lightboxIndex] : null;

  return (
    <section id="gallery" className="section section--beige">
      <div className="container">
        <header className="gallery-header" data-reveal="">
          <div className="gallery-header__top">
            <div>
              <span className="eyebrow">Visual Archive</span>
              <h2
                className="heading-serif heading-section"
                style={{ marginTop: '0.85rem' }}
              >
                Inside Hotel Rajmahal.
              </h2>
            </div>
            <p className="lead-copy" style={{ maxWidth: '430px' }}>
              Explore authentic photographs of our illuminated heritage facade,
              reception lobby, guestrooms, suites, baths, and dining room.
            </p>
          </div>

          <div className="gallery-filters" role="tablist" aria-label="Gallery categories">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={filter === category}
                className={`gallery-filter-btn ${
                  filter === category ? 'gallery-filter-btn--active' : ''
                }`}
                onClick={() => {
                  setFilter(category);
                  setLightboxIndex(null);
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </header>

        <div className="gallery-masonry" data-reveal="">
          {visiblePhotos.map((photo, index) => (
            <button
              key={photo.id}
              type="button"
              className="gallery-card"
              onClick={() => setLightboxIndex(index)}
              aria-label={`Open photograph: ${photo.title}`}
            >
              <div
                className="gallery-card__media"
                style={{ aspectRatio: `${photo.width} / ${photo.height}` }}
              >
                <Picture
                  folder="hotel"
                  baseName={photo.baseName}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                />
              </div>
              <div className="gallery-card__caption">
                <span className="gallery-card__title">{photo.title}</span>
                <span className="gallery-card__cat">{photo.category}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {activePhoto && lightboxIndex !== null && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={activePhoto.title}
          onClick={(e) => {
            if (e.target === e.currentTarget) handleClose();
          }}
        >
          <div className="lightbox__bar">
            <span className="lightbox__count">
              {String(lightboxIndex + 1).padStart(2, '0')} /{' '}
              {String(visiblePhotos.length).padStart(2, '0')}
            </span>
            <button
              type="button"
              className="lightbox__close"
              aria-label="Close lightbox"
              onClick={handleClose}
            >
              <CloseIcon size={20} />
            </button>
          </div>

          <div
            className="lightbox__stage"
            onClick={(e) => {
              if (e.target === e.currentTarget) handleClose();
            }}
          >
            <button
              type="button"
              className="lightbox__nav lightbox__nav--prev"
              aria-label="Previous photograph"
              onClick={handlePrev}
            >
              <ChevronIcon direction="left" size={20} />
            </button>

            <div className="lightbox__img-wrap">
              <Picture
                folder="hotel"
                baseName={activePhoto.baseName}
                alt={activePhoto.alt}
                loading="eager"
              />
            </div>

            <button
              type="button"
              className="lightbox__nav lightbox__nav--next"
              aria-label="Next photograph"
              onClick={handleNext}
            >
              <ChevronIcon direction="right" size={20} />
            </button>
          </div>

          <div className="lightbox__footer">
            <h3 className="lightbox__title">{activePhoto.title}</h3>
            <p className="lightbox__cat">{activePhoto.category}</p>
          </div>
        </div>
      )}
    </section>
  );
};
