import { Button } from '@/components/ui/button';
import React from 'react';

const Hero = () => {
  return (
    <section className="w-full py-24 mb-20 text-white" style={{
      backgroundImage: 'url("https://images.unsplash.com/photo-1561715276-a2d087060f1d")',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }}>
      <div className="container mx-auto flex flex-col items-center text-center gap-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 bg-clip-text text-transparent">
          Welcome to NextStore
        </h1>
        <p className="max-w-xl text-gray-700 text-lg sm:text-xl">
          Discover products you&apos;ll love. Built with performance and style in mind. Shop the latest trends, enjoy seamless checkout, and experience fast delivery.
        </p>
        <Button className="text-lg px-6 py-4 bg-slate-700 hover:cursor-pointer hover:bg-slate-600">Get Started</Button>
      </div>
    </section>
  );
};

export default Hero;