"use client";
import { MarqueeDemo } from '@/components/MarqueeDemo';
import { useEffect, useRef } from 'react';
import { HeroAnim } from '../animation/HeroAnim';

export const metadata = {
  title: 'Bigwigs English Academy',
  description: 'Master Spoken English, Business English,IELTS, and PTE with expert trainers at Bigwigs English Academy. Enroll now and transform your future!',
};

function Content() {
  const headlineRef = useRef(null);
  const subheadlineRef = useRef(null);
  const highlightedRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    HeroAnim(headlineRef, subheadlineRef, highlightedRef, buttonRef, descriptionRef)
  }, [])

  return (
    <div
      className="flex flex-col justify-center items-center gap-4
        w-full h-[500px] dark:bg-black/80 bg-black/20
        backdrop-blur-0"
    >
      <h1
        className="text-4xl max-sm:text-xl dark:text-slate-50 text-zinc-900
        font-semibold font-montserrat leading-tight text-center"
        ref={headlineRef}
      >
        Unlock Your Potential with
        <span className="text-[#00ADB5] font-bold"> &nbsp; Bigwigs</span> English
        Academy
      </h1>
      <h2
        className="text-xl text-center max-sm:text-sm dark:text-slate-50 text-zinc-900
        font-medium max-sm:font-normal font-montserrat max-sm:leading-relaxed
        max-sm:flex max-sm:flex-col justify-center items-center max-sm:tracking-wide"
        ref={subheadlineRef}
      >
        Master &nbsp;
        <span
          className="bg-[#00ADB5] text-lg px-2 py-1 text-center
           rounded-sm inline-block max-sm:text-xs dark:text-slate-50 text-zinc-900"
          ref={highlightedRef}
        >
          Spoken English, Business English, IELTS, and PTE
        </span>
        &nbsp; with Expert Trainers
      </h2>
      <p className="font-montserrat text-center" ref={descriptionRef}>
        Join thousands of students who’ve transformed their English skills and
        achieved their dreams with Bigwigs.
      </p>
      <div
        className="flex flex-row max-sm:flex-col max-sm:justify-center
        max-sm:items-center gap-2 font-montserrat max-sm:gap-3"
        ref={buttonRef}
      >
        <button
          className="bg-[#79D7BE] text-white py-2 px-4
            rounded-md hover:bg-[#00adb5] active:bg-teal-400 transition-all ease-in duration-150
            max-sm:text-sm max-sm:w-full"
          aria-label="Enroll Now"
        >
          Enroll Now
        </button>
        <button
          className="bg-[#F6F4F0] text-[#00ADB5] py-2 px-4
            rounded-md hover:bg-[#393E46] hover:text-white active:bg-[#222831]
            transition-all ease-in duration-150
            max-sm:text-sm max-sm:w-full"
          aria-label="Book a Free Demo"
        >
          Book a Free Demo
        </button>
      </div>
    </div>
  );
}


const Hero = () => {

  return (
    <>
      {/* <Marquees /> */}
      <div className="relative w-full h-[500px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <MarqueeDemo />
        </div>
        <div className="relative z-10 justify-center items-center">
          <Content />
        </div>
      </div>
    </>
  );
};

export default Hero;