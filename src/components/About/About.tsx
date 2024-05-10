const imageStyles =
  "h-[240px] w-full bg-cover bg-center bg-no-repeat md:h-[33dvh] lg:h-full lg:flex-1";

function About() {
  return (
    <div className="flex flex-col lg:h-[33vh] lg:flex-row">
      <div className={`${imageStyles} bg-userAboutDarkBg`} />
      <div
        className="
        p-userMobilePadding flex flex-col justify-center gap-y-4 
        md:px-32 md:py-24 lg:w-[40.2777%] lg:px-14 lg:py-0"
      >
        <h2 className="font-bold tracking-[0.3em] md:text-5xl lg:text-base">
          ABOUT OUR FURNITURE
        </h2>
        <p className="text-userDarkGray md:text-lg lg:text-base">
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.
        </p>
      </div>
      <div className={`${imageStyles} bg-userAboutLightBg`} />
    </div>
  );
}

export default About;
