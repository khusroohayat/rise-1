import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import Navbar from "./Navbar";
import { Button } from "../ui/button";
// import { ArrowRight } from "lucide-react";
import HamburgerMenu from "./HamburgerMenu";
import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Earth } from "lucide-react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 10); // change 10 to any threshold you like
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-[999] w-full px-[2rem] transition-all duration-200 md:px-[4rem] ${
        scrolled ? "shadow-01 bg-white" : "bg-white"
      }`}
    >
      <div className="relative mx-auto flex h-[8rem] max-w-[150rem] items-center justify-between">
        <div className="flex items-center gap-[3rem]">
          <NavLink to="/" className="inline-flex max-w-[22rem]">
            <img
              src={logo}
              alt="Brand Logo"
              className="size-full object-cover"
            />
          </NavLink>

          <div className="hidden xl:block">
            <Navbar />
          </div>
        </div>

        <div className="block xl:hidden">
          <HamburgerMenu />
        </div>

        <div className="hidden gap-[2rem] xl:flex">
          <Select>
            <SelectTrigger className="h-auto w-[15rem] border-[#C9C9C9]">
              <div className="flex items-center gap-[.3rem]">
                <Earth className="size-[2.2rem] stroke-[1.5px]" />
                <SelectValue placeholder="English" />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="English">English</SelectItem>
              <SelectItem value="العربية">العربية</SelectItem>
            </SelectContent>
          </Select>

          <div className="flex items-center gap-[3rem]">
            <Button variant="dark">
              <NavLink to="/contact">
                <span>Get in touch</span>
              </NavLink>
              {/* <div className="relative inline-flex size-[3.3rem] items-center justify-center rounded-[.8rem] bg-white">
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
              </div> */}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
