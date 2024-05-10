import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { heroSlides } from "../../const/const";
import AppBar from "../AppBar/AppBar";
import HeroText from "../HeroText";
import ImageSwapButton from "./ImageSwapButton";

function Hero() {
  const [currentHeroBgIndex, setCurrentHeroBgIndex] = useState(0);
  const { bg, text } = heroSlides[currentHeroBgIndex];
  // 1 = right, 0 = left
  const [carouselDirection, setCarouselDirection] = useState(1);

  // if index goes to negative; go back to length - 1
  const handlePreviousImage = () => {
    setCarouselDirection(0);
    setCurrentHeroBgIndex((state) =>
      state - 1 >= 0 ? state - 1 : heroSlides.length - 1,
    );
  };

  // if index goes over length; go to index 0
  const handleNextImage = () => {
    setCarouselDirection(1);
    setCurrentHeroBgIndex((state) =>
      state + 1 < heroSlides.length ? state + 1 : 0,
    );
  };

  return (
    <div className="relative lg:flex lg:h-[67vh] lg:flex-row">
      {/* HERO IMAGE SECTION */}
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          key={currentHeroBgIndex}
          initial={{ opacity: 0.5, filter: "grayscale(100%)" }}
          animate={{ opacity: 1, filter: "grayscale(0)" }}
          exit={{ opacity: 0.5, filter: "grayscale(100%)" }}
          transition={{ duration: 1.5 }}
          className={`
            relative flex h-[360px] w-full bg-cover bg-no-repeat
            md:h-[50dvh]
            lg:h-auto lg:w-[58.333333%]
            ${bg}
            `}
        >
          <div className="absolute bottom-0 left-0 flex w-full justify-end lg:hidden">
            <ImageSwapButton
              handlePreviousImage={handlePreviousImage}
              handleNextImage={handleNextImage}
            />
          </div>
        </motion.div>
      </AnimatePresence>
      <AppBar />
      {/* HERO TEXT SECTION */}
      <HeroText
        text={text}
        currentHeroBgIndex={currentHeroBgIndex}
        carouselDirection={carouselDirection}
        handlePreviousImage={handlePreviousImage}
        handleNextImage={handleNextImage}
      />
    </div>
  );
}

export default Hero;
