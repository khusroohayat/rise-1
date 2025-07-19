import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import logoWhite from "../../assets/images/logo-white.png";
import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";
import {
  mobileNavigationLinkData,
  servicesAccordionData,
} from "@/constants/constants";
import MobileNavigationLink from "../common/MobileNavigationLink";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [accordionValue, setAccordionValue] = useState<string>("");

  // ✅ Disable scroll & reset accordion on open/close
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
      setAccordionValue(""); // close all accordions
    }

    return () => {
      document.body.style.overflowY = "auto";
      setAccordionValue(""); // close all accordions
    };
  }, [isOpen]);

  // ✅ Auto-close on screen resize > 1024px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1023) {
        setIsOpen(false); // auto-close
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`relative z-[999] inline-flex size-[4rem] items-center justify-center rounded-[4px] border transition-all duration-300 perspective-[1000px] ${isOpen ? "border-[#ffffff]" : "border-[#C9C9C9]"}`}
      >
        <div
          className={`transition-transform duration-300 ease-in-out [transform-style:preserve-3d] ${
            isOpen ? "rotate-y-180" : ""
          } size-[2.3rem]`}
        >
          {/* Front: Hamburger Icon */}
          <div className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden]">
            <Menu
              className={`size-[2.3rem] ${isOpen ? "text-white" : "text-(--black-color)"}`}
            />
          </div>

          {/* Back: Close Icon */}
          <div className="absolute inset-0 flex rotate-y-180 items-center justify-center [backface-visibility:hidden]">
            <X
              className={`size-[2.3rem] ${isOpen ? "text-white" : "text-(--black-color)"}`}
            />
          </div>
        </div>
      </button>

      <div
        className={`fixed top-0 z-[100] flex h-screen w-full flex-col bg-[#0B3558] transition-all duration-300 ${isOpen ? "left-0" : "left-full"}`}
      >
        <div className="flex h-[8rem] items-center px-[2rem] md:px-[4rem]">
          <NavLink
            onClick={() => setIsOpen(false)}
            to="/"
            className="inline-flex max-w-[16rem] md:max-w-[18rem]"
          >
            <img
              src={logoWhite}
              alt="Brand Logo"
              className="size-full object-cover"
            />
          </NavLink>
        </div>

        <div className="flex-1 overflow-x-hidden overflow-y-auto">
          <ul className="flex flex-col gap-[2rem] py-[2rem] text-white md:py-[4rem]">
            {mobileNavigationLinkData.map((item, idx) => (
              <li
                key={idx}
                className="border-b border-white px-[2rem] pb-[2rem] md:px-[4rem]"
              >
                <MobileNavigationLink
                  onClick={() => setIsOpen(false)}
                  link={item.link}
                  label={item.label}
                />
              </li>
            ))}

            <li>
              <Accordion
                type="single"
                className="flex flex-col gap-[2rem]"
                collapsible
                value={accordionValue || ""}
                onValueChange={(val) => setAccordionValue(val || "")}
              >
                <AccordionItem
                  value="item-1"
                  className="border-b border-white px-[2rem] pb-[2rem] md:px-[4rem]"
                >
                  <AccordionTrigger className="text-[2rem] text-white md:text-[2.4rem]">
                    Services
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="flex flex-col gap-[2rem] pt-[3rem] pb-[2rem] md:pt-[4rem]">
                      {servicesAccordionData.map((item, idx) => (
                        <li key={idx}>
                          <MobileNavigationLink
                            onClick={() => setIsOpen(false)}
                            label={item.label}
                            link={item.link}
                          />
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </li>
          </ul>
        </div>

        <div className="flex justify-center px-[2rem] pb-[8rem] md:px-[4rem]">
          <Button
            onClick={() => setIsOpen(false)}
            className="h-[4rem] w-full text-[1.8rem] leading-[2.6rem]"
          >
            <span>Contact</span>
          </Button>
        </div>
      </div>
    </>
  );
};

export default HamburgerMenu;
