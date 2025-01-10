import Marquee from "@/components/ui/marquee";
import { cn } from "@/lib/utils";
import React from "react";

const logo = [
  // "/skills logo/rb_2149540345.png",
  "/skills logo/IELTS_logo.svg.png",
  "/skills logo/Logo.svg",
  // "/skills logo/1664968720-x7ae0beh7i.png",
];


const ReviewCard = React.memo(({ img }) => {
  return (
    <figure
      className={cn(
        "relative w-64 h-24 max-sm:w-44 max-sm:h-20 flex justify-center items-center overflow-hidden rounded-xl border p-3",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <img
        className="rounded-xl w-full h-auto" // Object cover ensures no overflow
        alt="skills"
        src={img}
        loading="lazy"
      />
    </figure>
  );
});

function English_Spoken() {
  return (
    <>
      <figure
        className={cn(
          "relative w-64 h-24 max-sm:w-44 max-sm:h-20 flex justify-center items-center overflow-hidden rounded-xl border p-3",
          // light styles
          "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
          // dark styles
          "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
        )}
      >
        <div className="flex flex-row gap-9 justify-center items-center">
          <div className="flex flex-col gap-1 font-montserrat">
            <h6 className="text-red-500 font-bold">ONLINE</h6>
            <h6 className="text-slate-100 font-medium">ENGLISH</h6>
            <h6 className="text-blue-500 font-base">SPOKEN</h6>
          </div>
          <img src="/skills logo/united-kingdom.png"
            className="rounded-xl w-20 h-20" // Object cover ensures no overflow
            alt="skills"
            loading="lazy" />
        </div>
      </figure>
    </>
  )
}

function Buisness() {
  return (
    <figure
      className={cn(
        "relative w-64 h-24 max-sm:w-44 max-sm:h-20 flex justify-center items-center overflow-hidden rounded-xl border p-3",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-col font-montserrat">
        <h6 className="text-blue-500 font-bold text-2xl">Buisness</h6>
        <h6 className="text-white text-right text-xl">English</h6>
      </div>
    </figure>
  )
}



export function VerticleMarquee() {
  return (
    <div className="relative flex flex-col w-full overflow-hidden rounded-lg
    max-sm:justify-center max-sm:items-center ">
      <Marquee className="[--duration:70s]">
        <English_Spoken />
        <Buisness />
        {logo.map((imgs, index) => (
          <ReviewCard key={index} img={imgs} />
        ))}
      </Marquee>
      <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
