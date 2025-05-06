import { Menu } from "lucide-react";
import Logo from "../../assets/images/logo.png";
import CtaButton from "@/components/ui/CtaButton";
import Navbar from "./Navbar";
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu";
import { useEffect, useState } from "react";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [activeHamburger, setActiveHamburger] = useState<boolean>(false);

  const toggleHamburger = () => {
    setActiveHamburger(!activeHamburger);
  };

  // 👉 Lock/unlock body scroll when hamburger menu is active
  useEffect(() => {
    if (activeHamburger) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Optional cleanup in case component unmounts while menu is open
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeHamburger]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1025) {
        setActiveHamburger(false);
      }
    };

    window.addEventListener("resize", handleResize);

    // Call it once on mount in case the screen is already > 1025
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="border-dashed border-[#e4e4e4] px-[2rem] sm:px-[4rem]">
      <div className="relative flex h-[8rem] items-center justify-between">
        <div className="flex items-center gap-[3rem]">
          <div>
            <NavLink to="/" className="inline-flex max-w-[18rem]">
              <img
                src={Logo}
                alt="Brand Logo"
                className="size-full object-cover"
              />
            </NavLink>
          </div>

          <div className="hidden lg:block">
            <Navbar />
          </div>
        </div>

        <div className="hidden items-center gap-[2rem] lg:flex">
          <LanguageSelector />

          <CtaButton
            text="Contact Sales"
            bgColor="bg-[var(--primary-color)]"
            textColor="text-white"
            href=""
          />
        </div>

        <div className="block lg:hidden">
          <button
            onClick={toggleHamburger}
            className="flex h-[3.2rem] w-[4.8rem] cursor-pointer items-center justify-center rounded-[1.6rem] bg-[var(--primary-color)] transition-all duration-200 hover:opacity-80"
          >
            <Menu className="size-[2.2rem] text-white" />
          </button>
        </div>

        <div
          className={`fixed top-0 left-0 z-[999] w-full transition-all duration-200 ${activeHamburger ? "pointer-events-auto visible opacity-100" : "pointer-events-none invisible opacity-0"}`}
        >
          <HamburgerMenu setActiveHamburger={setActiveHamburger} />
        </div>
      </div>
    </header>
  );
};

export default Header;
