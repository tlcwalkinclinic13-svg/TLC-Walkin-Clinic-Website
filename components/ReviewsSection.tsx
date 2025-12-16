import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const ReviewsSection: React.FC = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Define the number of reviews available in the language context
  const reviews = [1, 2, 3, 4];

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 8000); // Rotate every 8 seconds
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setIsAnimating(true);
    setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % reviews.length);
        setIsAnimating(false);
    }, 400); // Wait for fade out to complete
  };

  const handleDotClick = (index: number) => {
    if (index === currentIndex) return;
    setIsAnimating(true);
    setTimeout(() => {
        setCurrentIndex(index);
        setIsAnimating(false);
    }, 400);
  };

  return (
    <section className="py-12 px-4 md:px-6">
      <div className="max-w-7xl mx-auto bg-neutral-50 p-12 md:p-20 rounded-3xl flex flex-col items-center justify-center text-center border border-neutral-100 shadow-sm hover:shadow-md transition-shadow duration-300 min-h-[450px] relative">
        
        {/* Stars */}
        <div className="flex gap-2 mb-8 text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-8 w-8 fill-current" />
          ))}
        </div>

        {/* Review Text Area */}
        <div className={`transition-opacity duration-400 ease-in-out ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
            <blockquote className="text-2xl md:text-3xl font-medium font-heading text-dark italic leading-relaxed mb-10 max-w-4xl mx-auto">
            {t(`review.${reviews[currentIndex]}.text`)}
            </blockquote>
            <div className="font-bold font-heading text-dark flex items-center justify-center gap-4 text-lg uppercase tracking-widest">
            <span className="w-12 h-[3px] bg-primary"></span>
            {t(`review.${reviews[currentIndex]}.author`)}
            <span className="w-12 h-[3px] bg-primary"></span>
            </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex gap-3 mt-12 absolute bottom-8">
            {reviews.map((_, index) => (
                <button
                    key={index}
                    onClick={() => handleDotClick(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        currentIndex === index 
                        ? 'bg-primary w-8' 
                        : 'bg-neutral-300 hover:bg-primary/50'
                    }`}
                    aria-label={`Go to review ${index + 1}`}
                />
            ))}
        </div>

      </div>
    </section>
  );
};