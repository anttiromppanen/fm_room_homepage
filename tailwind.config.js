/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["League Spartan", "sans-serif"],
      },
      colors: {
        userDarkGray: "hsl(0, 0%, 63%)",
        userVeryDarkGray: "hsl(0, 0%, 27%)",
      },
      padding: {
        userMobilePadding: "52px 32px",
      },
      backgroundImage: {
        userHeroDesktopBgImage1: "url('/desktop-image-hero-1.jpg')",
        userHeroDesktopBgImage2: "url('/desktop-image-hero-2.jpg')",
        userHeroDesktopBgImage3: "url('/desktop-image-hero-3.jpg')",
        userHeroMobileBgImage1: "url('/mobile-image-hero-1.jpg')",
        userHeroMobileBgImage2: "url('/mobile-image-hero-2.jpg')",
        userHeroMobileBgImage3: "url('/mobile-image-hero-3.jpg')",
        userAboutDarkBg: "url('/image-about-dark.jpg')",
        userAboutLightBg: "url('/image-about-light.jpg')",
      }
    },
  },
  plugins: [],
}