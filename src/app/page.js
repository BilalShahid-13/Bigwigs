"use client";
import SplashScreen from "@/components/SplashScreen";
import { useEffect, useState } from "react";
import { SplashScreenHeadlines } from "./lib/constant";
import Hero from "./sections/Hero";
import { VerticleMarquee } from "./sections/VerticleMarquee";
import MainHeadline from "./sections/MainHeadline";

export default function Home() {
  const [headlineData, setHeadlineData] = useState({
    headline: "",
    subheadline: "",
  });
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  useEffect(() => {
    const getRandomHeadline = () => {
      const randomIndex = Math.floor(
        Math.random() * SplashScreenHeadlines.length
      );
      return SplashScreenHeadlines[randomIndex];
    };
    setHeadlineData(getRandomHeadline());
  }, []);
  return (
    <>
      {isSplashVisible && (
        <SplashScreen
          headline={headlineData.headline}
          subheadline={headlineData.subheadline}
          duration={3000} // Splash screen duration in milliseconds
          onFinish={() => setIsSplashVisible(false)} // Hide splash screen when done
        />
      )}

      {!isSplashVisible && (
        <>
          <Hero />
          <MainHeadline />
          <VerticleMarquee />
          {/* <Categories /> */}
        </>
      )}
    </>
  );
}
