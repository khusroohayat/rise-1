import { useState } from "react";
import CtaButton from "@/components/ui/CtaButton";
import HamburgerNavbar from "./HamburgerNavbar";
import { ChevronLeft, X } from "lucide-react";

type HamburgerMenuProps = {
  setActiveHamburger: React.Dispatch<React.SetStateAction<boolean | false>>;
};

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({
  setActiveHamburger,
}) => {
  const [activePopup, setActivePopup] = useState<
    "solutions" | "productsandservices" | null
  >(null);

  const closePopup = () => setActivePopup(null);

  return (
    <div className="flex h-screen w-full flex-col bg-white p-[.4rem]">
      <div className="flex items-center justify-between border-b border-dashed border-[#e4e4e4] p-[1.6rem]">
        <div className="relative h-[3rem] w-[6rem]">
          <a
            href=""
            className={`absolute top-1/2 inline-flex -translate-y-1/2 text-[2rem] font-bold tracking-wider text-[var(--primary-color)] transition-all duration-200 ${activePopup ? "pointer-events-none invisible left-[-10px] opacity-0" : "pointer-events-auto visible relative left-[0px] opacity-100"}`}
          >
            RISE
          </a>

          <button
            onClick={closePopup}
            className={`absolute top-1/2 flex -translate-y-1/2 cursor-pointer gap-[.5rem] text-[1.6rem] font-normal text-[var(--primary-color)] transition-all duration-200 ${activePopup ? "pointer-events-auto visible left-[0px] opacity-100" : "pointer-events-none invisible left-[10px] opacity-0"}`}
          >
            <ChevronLeft className="relative top-[5px] size-[1.6rem] stroke-3" />
            <span>Back</span>
          </button>
        </div>

        <button
          onClick={() => {
            closePopup();
            setActiveHamburger(false);
          }}
          className="cursor-pointer"
        >
          <X className="text-[var(--secondary-color)]" />
        </button>
      </div>

      <div className="relative flex-1 overflow-x-hidden overflow-y-auto">
        <HamburgerNavbar
          activePopup={activePopup}
          setActivePopup={setActivePopup}
          setActiveHamburger={setActiveHamburger}
        />
      </div>

      <div className="flex h-[6.4rem] items-center justify-center border-t border-dashed border-[#e4e4e4] bg-[#ffffff2d] p-[.4rem] backdrop-blur-[3.5px]">
        <CtaButton
          text="Contact Sales"
          bgColor="bg-[var(--primary-color)]"
          textColor="text-white"
          href=""
        />
      </div>
    </div>
  );
};

export default HamburgerMenu;
