import React, { useState } from 'react';
import { AboutSection } from './components/AboutSection';
import { AmenitiesSection } from './components/AmenitiesSection';
import { BookingSection } from './components/BookingSection';
import { ContactSection } from './components/ContactSection';
import { DiningSection } from './components/DiningSection';
import { ExploreSection } from './components/ExploreSection';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';
import { GallerySection } from './components/GallerySection';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { RoomsSection } from './components/RoomsSection';
import { ROOM_CATEGORIES } from './data/hotelData';
import { useRevealOnScroll } from './hooks/useRevealOnScroll';

export const App: React.FC = () => {
  const [selectedRoomCategory, setSelectedRoomCategory] = useState<string>(
    ROOM_CATEGORIES[1].name
  );

  useRevealOnScroll();

  const handleSelectCategoryForBooking = (categoryName: string) => {
    setSelectedRoomCategory(categoryName);
    const bookingEl = document.getElementById('booking');
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content">
        <Hero />
        <AboutSection />
        <RoomsSection
          onSelectCategoryForBooking={handleSelectCategoryForBooking}
        />
        <AmenitiesSection />
        <DiningSection />
        <GallerySection />
        <ExploreSection />
        <BookingSection preselectedCategory={selectedRoomCategory} />
        <ContactSection />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
};

export default App;
