import GridPattern from '@/components/ui/grid-pattern';
import { cn } from '@/lib/utils';
import React, { useEffect, useRef } from 'react'
import { HeroAnim } from '../animation/HeroAnim';

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
        w-full h-[500px]
        backdrop-blur-0"
    >
      <h1
        className="text-4xl max-sm:text-xl dark:text-slate-50 text-zinc-900
        font-semibold font-montserrat leading-tight text-center"
        ref={headlineRef}
      >
        Unlock Your Potential with
        <span className="text-[#ef233c] font-bold">  Bigwigs</span> English
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
          className="bg-[#d00000] text-lg px-2 py-1 text-center
           rounded-sm inline-block max-sm:text-xs
            text-white dark:text-white dark:bg-text-zinc-900"
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
          className="bg-[#ef233c] text-white py-2 px-4
            rounded-md hover:bg-[#d90429] active:bg-red-700 transition-all ease-in duration-150
            max-sm:text-sm max-sm:w-full"
          aria-label="Enroll Now"
        >
          Enroll Now
        </button>
        <button
          className="bg-[#F6F4F0] text-[#ef233c] py-2 px-4
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
export default function MainHeadline() {


  return (
    <>
      <div className="relative flex
      h-[500px] w-full flex-col items-center
      justify-center overflow-hidden rounded-lg
      border md:shadow-xl dark:bg-black/80 bg-black/0">
        <div className="z-10 ">
          <Content />
        </div>
        <GridPattern
          className={cn(
            "w-full [mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
          )}
        />
      </div>
    </>
  );
}
