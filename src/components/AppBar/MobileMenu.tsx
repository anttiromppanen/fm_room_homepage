import { Variants, motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";
import closeImg from "../../assets/images/icon-close.svg";
import hamburgerImg from "../../assets/images/icon-hamburger.svg";
import { links } from "../../const/const";

const variants: Record<"overlay" | "menu", Variants> = {
  overlay: {
    initial: { opacity: 0 },
    animate: { opacity: 0.5 },
  },
  menu: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  },
};

function MobileMenuOverlay({
  isMenuOpen,
  setIsMenuOpen,
}: {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <>
      {isMenuOpen && (
        <motion.div
          variants={variants.overlay}
          initial="initial"
          animate="animate"
          exit="exit"
          className="fixed left-0 top-0 z-10 h-screen w-full bg-black"
        />
      )}
      <motion.div
        variants={variants.menu}
        initial="initial"
        animate="animate"
        exit="exit"
        className="fixed left-0 top-0 z-10 flex w-full justify-between bg-white px-8 py-8 opacity-100"
      >
        <button type="button" onClick={() => setIsMenuOpen(false)}>
          <img src={closeImg} alt="close menu" />
        </button>
        <ul className="-mb-0.5 flex">
          {links.map((x) => (
            <li key={x} className="text-lg font-bold text-black">
              <button type="button" className="px-2 py-2">
                {x}
              </button>
            </li>
          ))}
        </ul>
      </motion.div>
    </>
  );
}

function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="flex md:hidden">
        <button type="button" onClick={() => setIsMenuOpen(true)}>
          <img src={hamburgerImg} alt="open menu" />
        </button>
      </div>
      {/* NAV LINKS OVERLAY */}
      {isMenuOpen && (
        <MobileMenuOverlay
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
      )}
    </>
  );
}

export default MobileMenu;
