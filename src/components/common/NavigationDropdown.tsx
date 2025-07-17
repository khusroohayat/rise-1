import { ChevronDown } from "lucide-react";
import { useState } from "react";
import NavigationLink from "./NavigationLink";

interface NavigationDropdownProps {
  title: string;
  media: string;
  description?: string;
  navItems: { label: string; link: string; description?: string }[];
}

const NavigationDropdown = ({
  title,
  media,
  description,
  navItems,
}: NavigationDropdownProps) => {
  const [activeDropdown, setActiveDropdown] = useState(false);

  const handleToggle = () => {
    setActiveDropdown(!activeDropdown);
  };
  return (
    <div
      onMouseEnter={() => setActiveDropdown(true)}
      onMouseLeave={() => setActiveDropdown(false)}
    >
      <button
        onClick={handleToggle}
        className={`relative inline-flex cursor-pointer gap-[3px] text-[1.6rem] leading-[2.4rem] font-normal transition-all duration-200 hover:text-[#006BFF] ${activeDropdown ? "text-[#006BFF]" : "text-(--black-color)"}`}
      >
        <span>{title}</span>
        <ChevronDown
          className={`relative top-[7px] size-[1.4rem] stroke-3 transition-all duration-300 ${activeDropdown ? "rotate-180" : "rotate-0"}`}
        />
      </button>

      <div
        className={`absolute left-1/2 z-50 -translate-x-1/2 transition-all duration-300 ${
          activeDropdown
            ? "pointer-events-auto visible pt-[1.6rem] opacity-100"
            : "pointer-events-none invisible pt-[0rem] opacity-0"
        }`}
      >
        <div className="shadow-01 flex h-[45rem] overflow-hidden rounded-[8px] bg-white">
          {/* Left Side */}
          <ul className="grid min-w-[65rem] grid-cols-2 gap-[2.4rem] overflow-y-auto p-[2rem]">
            {navItems.map((item, idx) => (
              <li key={idx} className="flex flex-col items-start gap-[.8rem]">
                <NavigationLink label={item.label} link={item.link} />
                <p className="text-[1.4rem] leading-[2rem] font-light">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>

          {/* Right Side  */}
          <div className="flex min-w-[25rem] flex-col gap-[1rem] bg-[#E5E1DC] p-[1.6rem]">
            <h4 className="text-[1.4rem] font-medium tracking-[0.8px] uppercase">
              {title}
            </h4>

            <div className="h-[16rem] w-full">
              <video
                autoPlay
                loop
                muted
                src={media}
                className="size-full object-contain object-center"
              ></video>
            </div>

            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationDropdown;
