import { motion } from "framer-motion";
import logoImg from "../../assets/images/logo.svg";
import MobileMenu from "./MobileMenu";
import { links } from "../../const/const";

function NavDesktopButton({ text }: { text: string }) {
  return (
    <div className="group relative">
      <button type="button" className="px-5 py-4">
        {text}
      </button>
      {/* LINE UNDER LINKS ON HOVER */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute bottom-0 left-1/2 hidden h-0.5 w-1/4 -translate-x-1/2 bg-white group-hover:block"
      />
    </div>
  );
}

function AppBar() {
  return (
    <header className="absolute left-8 top-10 flex w-[calc(100%-64px)] items-center text-white md:left-16 md:top-12 md:w-auto md:gap-x-16">
      <MobileMenu />
      <img
        src={logoImg}
        alt="logo"
        className="absolute left-1/2 -translate-x-1/2 md:static"
      />
      <ul className="hidden text-lg md:flex">
        {links.map((x) => (
          <li key={x}>
            <NavDesktopButton text={x} />
          </li>
        ))}
      </ul>
    </header>
  );
}

export default AppBar;
