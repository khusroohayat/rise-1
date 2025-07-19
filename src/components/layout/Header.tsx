import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import Navbar from "./Navbar";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import HamburgerMenu from "./HamburgerMenu";

const Header = () => {
  return (
    <header className="px-[2rem] md:px-[4rem]">
      <div className="relative mx-auto flex h-[8rem] max-w-[150rem] items-center justify-between">
        <div className="flex items-center gap-[3rem]">
          <NavLink to="/" className="inline-flex max-w-[22rem]">
            <img
              src={logo}
              alt="Brand Logo"
              className="size-full object-cover"
            />
          </NavLink>
        </div>

        <div className="block lg:hidden">
          <HamburgerMenu />
        </div>

        <div className="hidden items-center gap-[3rem] lg:flex">
          <Navbar />

          <div className="flex items-center gap-[3rem]">
            <Button variant="dark">
              <span>Get in touch</span>
              <div className="relative inline-flex size-[3.3rem] items-center justify-center rounded-[.8rem] bg-white">
                <div className="size-[1.7rem] overflow-hidden">
                  <div className="flex -translate-x-full transform transition-transform duration-300 group-hover:translate-x-0">
                    <div className="flex size-full items-center justify-center">
                      <ArrowRight className="size-[1.7rem] stroke-2 text-[#0B3558]" />
                    </div>

                    <div className="flex size-full items-center justify-center">
                      <ArrowRight className="size-[1.7rem] stroke-2 text-[#0B3558]" />
                    </div>
                  </div>
                </div>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
