import React from 'react';
import { Hero } from '../components/Hero';
import { Steps } from '../components/Steps';
import { WeightLossSection, DOTSection } from '../components/FeatureSection';
import { ReviewsSection } from '../components/ReviewsSection';

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Steps />
      <div className="flex flex-col gap-8 mb-16">
        <WeightLossSection />
        <DOTSection />
      </div>
      <ReviewsSection />
    </>
  );
};