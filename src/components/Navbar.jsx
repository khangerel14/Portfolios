import MENU from "./Menu";
import MobileMenu from "./MobileMenu";
import { useState } from "react";
import { useTheme } from "next-themes";
import Moon from "./DarkTheme";
import Logo from "./Logoicon";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const menuHandler = () => {
    setIsOpen(!isOpen);
  };
  const themeToggle = () => {
    if (theme === "dark") {
      setTheme("light");
    }
    if (theme === "light" || theme == "system") {
      setTheme("dark");
    }
  };
  return (
    <header className="header flex justify-between max-w-screen-2xl px-[80px] mx-auto pt-5 items-center max-md:px-2">
      <div className="font-normal text-3xl dark:text-white">
        <h1><b>{'<SS/>'}</b></h1>
      </div>
      <div className="nav--left flex gap-7 items-center max-md:hidden">
        <ul className="list--items flex gap-7 border-r-2 pr-5">
          <button><li className="hover:bg-purple-300 rounded-xl p-1 hover:translate-y-4 duration-500 hover:scale-125 transition ease-in-out">About</li></button>
          <button><li className="hover:bg-purple-300 rounded-xl p-1 hover:translate-y-4 duration-500 hover:scale-125 transition ease-in-out">Work</li></button>
          <button><li className="hover:bg-purple-300 rounded-xl p-1 hover:translate-y-4 duration-500 hover:scale-125 transition ease-in-out">Testimonials</li></button>
          <button><li className="hover:bg-purple-300 rounded-xl p-1 hover:translate-y-4 duration-500 hover:scale-125 transition ease-in-out">Contact</li></button>
        </ul>
        <button className="dark-mode" onClick={themeToggle}>
          {theme === "dark" ? <Logo /> : <Moon />}
        </button>
        <button className="download--CV bg-slate-900 py-2 px-5 text-white rounded-xl dark:bg-white dark:text-slate-900 font-medium">
          Download CV
        </button>
      </div>
      <button className="md:hidden" onClick={menuHandler}>
        <MENU />
      </button>
      {isOpen && <MobileMenu setIsOpen={setIsOpen} />}
    </header>
  );
}
