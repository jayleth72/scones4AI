'use client';

import Image from 'next/image';
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="max-w-[100vw] overflow-hidden">
      <section className="relative w-full">
        <div className="grid lg:grid-cols-2">
          {/* Image Container - Full height on mobile, left side on desktop */}
          <div className="relative h-screen lg:h-[600px]">
            <Image
              src="/images/hero/scones_man1.png"
              alt="Hero image"
              fill
              priority
              className="object-cover"
              quality={90}
            />
            {/* Overlay only shows on mobile */}
            <div className="absolute inset-0 bg-black/40 lg:hidden" />
        </div>

        {/* Content Container */}
        <div className="absolute lg:relative inset-0 lg:inset-auto order-2 flex items-center justify-center p-4 sm:p-6 lg:p-12 xl:p-16">
          <div className="w-full max-w-xl mx-auto text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 text-white lg:text-gray-900">
              Welcome to Scones AI
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-6 lg:mb-8 text-white/90 lg:text-gray-600">
              Crafting the Perfect Scone Experience with Artificial Intelligence
            </p>
            <button className="inline-block rounded-full bg-white lg:bg-primary px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-black lg:text-white transition-all duration-300 hover:bg-gray-200 lg:hover:bg-primary/90 hover:scale-105">
              Discover More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
