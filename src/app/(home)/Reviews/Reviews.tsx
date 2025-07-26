"use client";

import dynamic from 'next/dynamic';
import React from 'react';
const items = ["Amazing product, really loved it!", "Fast shipping and great customer service.", "Quality could be better, but overall satisfied.", "Highly recommend to everyone!", "Five stars for sure, will buy again.", "Product did not meet my expectations.", "Good value for the price.", "The colors and design are fantastic.", "Easy to use and looks great.", "Customer support was very helpful.", "Received a damaged item, but it was replaced quickly.", "Perfect gift for my friend, she loved it!", "The packaging was neat and professional.", "Website was easy to navigate.", "Overall, a wonderful shopping experience.", "The size fits perfectly and is very comfortable.", "Shipping was delayed, but worth the wait.", "The product exceeded my expectations!", "Customer support did not respond promptly.", "Simple and effective design, love it.", "Colors faded after washing, disappointed.", "Great price for the features offered.", "User-friendly and intuitive interface.", "Arrived early and well-packaged.", "The material feels premium and durable.", "I had issues with checkout, but resolved fast.", "Will recommend to my colleagues and friends.", "Love the personalized packaging options."];
const GridMotion = dynamic(() => import('@/components/background/GridMotion/GridMotion'), {
  ssr: false
});

const Reviews = () => {
  return (
    <section className="w-full text-white">
      <GridMotion items={items}>
        awddw
      </GridMotion>
    </section>
  );
};

export default Reviews;