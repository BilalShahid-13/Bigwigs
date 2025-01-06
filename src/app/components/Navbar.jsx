"use client";
import React, { useEffect, useRef, useState } from "react";
import { NavbarItems } from "../lib/constant";
import Link from "next/link";
import Image from "next/image";
import { NavbarAnim } from "../animation/NavbarAnim";
import { useRouter } from "next/navigation";
import { RxHamburgerMenu } from "react-icons/rx";
import gsap from "gsap";

export const Navbar = () => {
  const [onMouseEnter, setOnMouseEnter] = useState(null);
  const leftRef = useRef(null);
  const centerRef = useRef(null);
  const rightRef = useRef(null);
  const navigate = useRouter();
  const [mobileView, setMobileView] = useState(false);
  const [toggleHamburger, setToggleHamburger] = useState(false);

  // Update mobile view on window resize
  useEffect(() => {
    const handleResize = () => setMobileView(window.innerWidth < 480);
    handleResize(); // Check initial window width
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    NavbarAnim(leftRef, centerRef, rightRef);
  }, []);

  useEffect(() => {
    if (mobileView) {
      const timeline = gsap.timeline();
      if (toggleHamburger) {
        timeline
          .to(centerRef.current.children, {
            x: '-100%',
            duration: 0.2,
          })
          .to(centerRef.current,
            {
              height: '100%',
              duration: 0.2
            }).to(centerRef.current.children, {
              x: '0%',
              duration: 0.4,
              stagger: 0.4
            })

      } else {
        timeline
          .from(centerRef.current.children, {
            y: '-100%',
            duration: 0.3
          })
          // .to(centerRef.current, {
          //   height: '0',
          //   duration: 0.2
          // })

      }

    }
  }, [toggleHamburger, mobileView]);


  const MiddleNavbar = () => (
    <ul className="flex flex-row justify-center items-center
     gap-7 font-medium max-sm:flex-col max-sm:w-full overflow-hidden max-sm:h-0"
      ref={centerRef}>
      {NavbarItems.map((Item, index) => (
        <div
          key={index}

          // onClick={() => navigate(Item.link)}
          onMouseEnter={() => setOnMouseEnter(index)}
          onMouseLeave={() => setOnMouseEnter(null)}
          className={`cursor-pointer flex flex-row max-sm:w-full
            max-sm:py-2 max-sm:border-b-[1px] max-sm:border-indigo-300
            max-sm:active:bg-indigo-200 justify-center
             items-center gap-2 transition-standard
             ${onMouseEnter === index && "border-b-2 border-indigo-500"
            }`}
        >
          <Item.icon
            className={`${onMouseEnter === index && "text-indigo-500"
              } transition-standard`}
          />
          <p
            className={`${onMouseEnter === index && "text-indigo-500"
              } transition-standard`}
          >
            {Item.name}
          </p>
        </div>
      ))}
    </ul>
  );



  return (
    <>
      <nav className="flex flex-row justify-between items-center mt-2
      mb-4 px-2 max-sm:w-full max-sm:flex-col">
        {/* Left */}
        <div className="max-sm:flex max-sm:flex-row
        max-sm:justify-between items-center max-sm:w-full">
          <div className="flex flex-row justify-center items-center gap-2" ref={leftRef}>
            <Image
              src={"/logo.jpg"}
              width={40}
              height={40}
              priority={true}
              alt="bigwigs logo"
              className="rounded-full"
            />
            <h6 className="text-2xl font-semibold font-playfair">Bigwigs</h6>
          </div>
          {mobileView &&
            <RxHamburgerMenu
              className='text-3xl'
              onClick={() => setToggleHamburger(!toggleHamburger)}
            />
          }
        </div>

        {/* Center */}
        <MiddleNavbar />
        {/* {!mobileView ? (
        ) : (
          <MobileNavbar />
        )} */}

        {/* Right */}
        {!mobileView && (
          <div className="flex flex-row justify-center items-center gap-3" ref={rightRef}>
            <button className="hover:bg-violet-500 border-2 transition-standard active:bg-violet-600 border-violet-400 rounded-md px-3 py-1 hover:text-slate-200">
              Enroll Now
            </button>
            <button className="bg-indigo-500 hover:bg-indigo-600 border-2 text-white transition-standard active:bg-indigo-700 active:border-indigo-800 border-indigo-400 rounded-md px-3 py-1 hover:text-slate-200">
              Book a Free Demo
            </button>
          </div>
        )}
      </nav>
    </>
  );
};
