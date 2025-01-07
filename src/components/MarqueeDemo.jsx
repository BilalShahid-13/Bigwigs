import React from "react";
import { cn } from "@/lib/utils";
import Marquee from "./ui/marquee";

const reviews = [
  "marquee/4797.jpg",
  "marquee/18011.jpg",
  "marquee/26843.jpg",
  "marquee/53807.jpg",
  "marquee/77463.jpg",
  "marquee/2147657078.jpg",
  "marquee/2148225295.jpg",
  "marquee/2148522213.jpg",
  "marquee/2149455156.jpg",
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = React.memo(({ img }) => {
  return (
    <figure
      className={cn(
        "relative w-64 max-sm:w-52 cursor-pointer overflow-hidden rounded-xl border p-3",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <img
        className="rounded-xl will-change-transform w-full h-full object-cover"
        alt=""
        src={img}
        loading="lazy"
      />
    </figure>
  );
});

export function MarqueeDemo() {
  return (
    <div className="relative flex flex-col h-[500px] w-full overflow-hidden rounded-lg
    max-sm:justify-center max-sm:items-center ">
      <Marquee className="[--duration:70s]">
        {firstRow.map((review, index) => (
          <ReviewCard key={index} img={review} />
        ))}
      </Marquee>
      <Marquee reverse className="[--duration:70s]">
        {secondRow.map((review, index) => (
          <ReviewCard key={index} img={review} />
        ))}
      </Marquee>
      <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
