"use client";
import { MarqueeDemo } from '@/components/MarqueeDemo';

export const metadata = {
  title: 'Bigwigs English Academy',
  description: 'Master Spoken English, Business English,IELTS, and PTE with expert trainers at Bigwigs English Academy. Enroll now and transform your future!',
};




const Hero = () => {

  return (
    <>
      <div className="relative w-full">
        <MarqueeDemo />
      </div>
    </>
  );
};

export default Hero;