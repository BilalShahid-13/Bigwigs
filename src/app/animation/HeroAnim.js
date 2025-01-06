import gsap from "gsap";

export const HeroAnim = (
  headlineRef,
  subheadlineRef,
  highlightedRef,
  imageRef,
  buttonRef,
  descriptionRef
) => {
  if (
    headlineRef.current &&
    subheadlineRef.current &&
    highlightedRef.current &&
    imageRef.current &&
    buttonRef.current &&
    descriptionRef.current
  ) {
    // Split the highlighted text into individual characters
    const splitText = (element) => {
      const text = element.innerText;
      element.innerHTML = ""; // Clear existing content
      text.split("").forEach((char) => {
        const span = document.createElement("span");
        span.innerText = char;
        element.appendChild(span);
      });
    };

    // Split the highlighted text into characters
    splitText(highlightedRef.current);

    const timeline = gsap.timeline();

    // Animating headline
    timeline
      .fromTo(
        headlineRef.current,
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: "power2.inOut" }
      )
      // Animating subheadline
      .fromTo(
        subheadlineRef.current,
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: "power2.inOut" }
      )
      // Expand background of highlighted text and text fade-in
      .fromTo(
        highlightedRef.current,
        { width: "0%" },
        {
          // display: "inline",
          width: "77%", // Make the background width 100% of the parent
          duration: 0.4,
          ease: "power2.out", // Smooth easing for the background expansion
        }
      )
      .fromTo(
        highlightedRef.current.children,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.1, // Controls how fast each character appears
          stagger: 0.1, // Controls how fast each character appears
          ease: "none", // No easing for text typing effect
        }
      )
      // Animating image
      .fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1, ease: "power2.inOut" }
      )
      // Animating buttons
      .fromTo(
        buttonRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.inOut", stagger: 0.3 }
      )
      // Animating description
      .fromTo(
        descriptionRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.inOut" }
      );
  }
};
