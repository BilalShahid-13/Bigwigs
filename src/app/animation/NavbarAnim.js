import gsap from "gsap";

export const NavbarAnim = (leftRef, centerRef, rightRef,mobileView) => {
  if (leftRef.current && centerRef.current && rightRef.current) {
    const timeline = gsap.timeline();

    timeline
      .fromTo(
        leftRef.current.children,
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.3, ease: "bounce.inOut" }
      )
      .fromTo(
        centerRef.current.children, // Target children of centerRef
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.3, ease: "power2.inOut" }
      )
      .fromTo(
        rightRef.current.children,
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.3, ease: "bounce.inOut" }
      );
  }
  if(mobileView && centerRef.current){
    gsap.fromTo(
      
    )
  }
};
