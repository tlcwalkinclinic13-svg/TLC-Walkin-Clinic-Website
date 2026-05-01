import React from 'react';
import { Hero } from '../components/Hero';
import { PromotionBanner } from '../components/PromotionBanner';
import { WeightLossSection, DOTSection, AboutUsSection } from '../components/FeatureSection';
import { ReviewsSection } from '../components/ReviewsSection';

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <PromotionBanner />
      <div className="flex flex-col gap-8 mb-16">
        <WeightLossSection />
        <DOTSection />
        <AboutUsSection />
      </div>
      <ReviewsSection />
    </>
  );
};