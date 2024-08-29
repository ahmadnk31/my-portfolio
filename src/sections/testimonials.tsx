// components/Testimonials.tsx
'use client'
import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  { id: 1, name: 'John Doe', text: 'Great work! Very professional and skilled.' },
  { id: 2, name: 'Jane Smith', text: 'Exceeded my expectations. Highly recommended!' },
  { id: 3, name: 'Bob Johnson', text: 'A pleasure to work with. Will definitely hire again.' },
  { id: 4, name: 'Alice Brown', text: 'Incredible attention to detail. The end result was perfect.' },
  { id: 5, name: 'Charlie Davis', text: 'Fast, efficient, and great communication throughout the project.' },
];

const Testimonials: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);
  const controls = useAnimation();

  const handleMouseEnter = () => {
    setIsPaused(true);
    controls.stop();
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
    controls.start({
      x: '-100%',
      transition: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 20,
        ease: 'linear',
      },
    });
  };

  return (
    <section id="testimonials" className="py-16 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Testimonials</h2>
        <div 
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div
            className="flex space-x-6"
            animate={controls}
            initial={{ x: 0 }}
            style={{ width: `${testimonials.length * 320 + (testimonials.length - 1) * 24}px` }}
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <Card 
                key={`${testimonial.id}-${index}`} 
                className="w-80 flex-shrink-0"
              >
                <CardContent className="p-6">
                  <p className="mb-4 text-gray-600 italic">&quote;{testimonial.text}&quote;</p>
                  <p className="font-semibold text-gray-800">- {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;