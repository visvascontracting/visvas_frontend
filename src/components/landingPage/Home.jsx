import React from 'react';
import IntroSection from './introSection';
import ChooseUsSection from './chooseUsSection';
import RightChoiceSection from './rightChoiceSection';
import HowItWorks from './howItWorks';
import Packages from './packages';
import GallerySection from './gallerySection';
import FaqSection from './faqSection';

const Home = ({ onBookMeetingClick }) => {
  return (
    <div className="Home">
      <main className="pt-16 lg:pt-20">
        <IntroSection onBookMeetingClick={onBookMeetingClick} />
        <ChooseUsSection />
        <RightChoiceSection />
        <HowItWorks />
        <Packages />
        <GallerySection />
        <FaqSection />
      </main>
    </div>
  );
};

export default Home;
