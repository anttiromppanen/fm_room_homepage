import { AnimatePresence, motion } from "framer-motion";
import ArrowRight from "./ArrowRight";
import ImageSwapButton from "./Hero/ImageSwapButton";

interface Props {
  text: { heading: string; body: string };
  currentHeroBgIndex: number;
  carouselDirection: number;
  handlePreviousImage: () => void;
  handleNextImage: () => void;
}

type Direction = "back" | "forward";

const variants = {
  initial: (direction: Direction) => ({
    y: direction === "forward" ? 50 : -50,
    opacity: 0,
  }),
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: (direction: Direction) => ({
    y: direction === "forward" ? -50 : 50,
    opacity: 0,
  }),
};

export default function HeroText({
  text,
  currentHeroBgIndex,
  carouselDirection,
  handlePreviousImage,
  handleNextImage,
}: Props) {
  const directionAsText: Direction =
    carouselDirection === 1 ? "forward" : "back";

  return (
    <div
      className="
      p-userMobilePadding relative flex flex-1 flex-col items-center justify-center overflow-hidden 
      md:h-[50dvh] md:px-32
      lg:h-auto lg:px-[6%] lg:py-[5%]
      "
    >
      <AnimatePresence mode="wait" custom={directionAsText}>
        <motion.div
          key={currentHeroBgIndex}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          custom={directionAsText}
          transition={{
            duration: 0.7,
            delay: 0.1,
          }}
        >
          <h1 className="text-[2.65rem] font-bold leading-none md:text-7xl lg:text-[2.65rem]">
            {text.heading}
          </h1>
          <p className="mt-6 font-medium leading-6 text-userDarkGray md:text-xl lg:text-base">
            {text.body}
          </p>
          <button
            type="button"
            className="group mt-3 flex items-center gap-x-6 py-3 pr-3 font-medium tracking-[0.6em] text-black"
          >
            <p>SHOP NOW</p> <ArrowRight color="currentColor" />
          </button>
        </motion.div>
      </AnimatePresence>
      <div className="absolute bottom-0 left-0 hidden w-full lg:block">
        <ImageSwapButton
          handlePreviousImage={handlePreviousImage}
          handleNextImage={handleNextImage}
        />
      </div>
    </div>
  );
}
