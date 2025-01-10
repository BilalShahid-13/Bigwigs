import Marquee from "@/components/ui/marquee";
import { cn } from "@/lib/utils";
import React from "react";

const logo = [
  "/skills logo/1664968720-x7ae0beh7i.png",
  "/skills logo/IELTS_logo.svg.png",
  "/skills logo/Logo.svg",
  "/skills logo/rb_2149540345.png",
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




export function VerticleMarquee() {
  return (
    <div className="relative flex flex-col w-full overflow-hidden rounded-lg
    max-sm:justify-center max-sm:items-center ">
      <Marquee className="[--duration:70s]">
        {logo.map((imgs, index) => (
          <ReviewCard key={index} img={imgs} />
        ))}
      </Marquee>
      <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
