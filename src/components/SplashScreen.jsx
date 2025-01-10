"use client";
import { useEffect, useState } from "react";
import { BoxRevealDemo } from "./BoxRevealDemo";

const SplashScreen = ({ headline, subheadline,
  duration = 3000, onFinish }) => {

  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsFadingOut(true); // Start fading out
      setTimeout(onFinish, 500); // Call onFinish after fade-out animation
    }, duration);

    return () => clearTimeout(timeout);
  }, [duration, onFinish]);

  return (
    <div
      className={`fixed inset-0 flex items-center
        F justify-center dark:bg-zinc-900 text-white
         z-50 transition-opacity
         ${isFadingOut ? "opacity-0 duration-500" : "opacity-100"
        }`}
    >
      <div className="text-center">
        <BoxRevealDemo
          headline={headline}
          subheadline={subheadline}
        />
      </div>
    </div>
  );
};

export default SplashScreen;
