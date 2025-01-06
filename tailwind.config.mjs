/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        btnColor: "var(--btnColor)",
      },
      fontFamily: {
        playfair: ['"Playfair Display"', "serif"],
        montserrat: ['"Montserrat"', "sans-serif"],
      },
      transition: {
        ease: "var(--transition)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".transition-standard": {
          transition: "all 0.2s linear",
        },
      });
    },
  ],
};
