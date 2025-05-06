import { Building, ChevronRight } from "lucide-react";
import { NavLink } from "react-router-dom";

type HamburgerNavbarProps = {
  activePopup: "solutions" | "productsandservices" | null;
  setActivePopup: React.Dispatch<
    React.SetStateAction<"solutions" | "productsandservices" | null>
  >;
  setActiveHamburger: React.Dispatch<React.SetStateAction<boolean>>; // ← Add this line
};

const solutionsPopupData = [
  {
    id: 0,
    link: "",
    text: "Product Optimization",
  },
  {
    id: 1,
    link: "",
    text: "Performance Assurance",
  },
  {
    id: 2,
    link: "",
    text: "Geothermal",
  },
  {
    id: 3,
    link: "",
    text: "Data and AI Platform",
  },
  {
    id: 4,
    link: "",
    text: "Methane and Flaring Elimination",
  },
  {
    id: 5,
    link: "",
    text: "Carbon Capture and Storage",
  },
  {
    id: 6,
    link: "",
    text: "Accelerated Time to Market",
  },
  {
    id: 7,
    link: "",
    text: "Emissions Reduction",
  },
];

const HamburgerNavbar: React.FC<HamburgerNavbarProps> = ({
  activePopup,
  setActivePopup,
  setActiveHamburger,
}) => {
  return (
    <ul className="mx-[1.6rem] my-[2rem]">
      <li className="border-b-[2px] border-dashed border-[#e4e4e4]">
        <button
          onClick={() => setActivePopup("solutions")}
          className="flex w-full cursor-pointer items-center justify-between py-[2rem] text-[1.8rem] font-medium tracking-[0.2px] text-[var(--secondary-color)] transition-all duration-200 hover:opacity-50"
        >
          <span>Solutions</span>
          <ChevronRight />
        </button>

        {/*  Popup */}
        <div
          className={`absolute top-0 flex size-full flex-col gap-[.4rem] overflow-y-auto bg-[#F6F9FB] transition-all duration-300 ${activePopup === "solutions" ? "pointer-events-auto visible left-0 opacity-100" : "pointer-events-none invisible left-full opacity-0"}`}
        >
          <div className="bg-white px-[1.6rem] py-[2.4rem]">
            {/* <h5 className="text-[1.3rem] font-normal text-[var(--secondary-color)] uppercase">
              By Taha
            </h5> */}

            <ul className="flex flex-col gap-[2.4rem] py-[1.2rem]">
              {solutionsPopupData.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.link}
                    className="group flex items-center gap-[1rem] text-[1.6rem] font-normal"
                  >
                    <Building className="size-[1.6rem] opacity-60 transition-all duration-200 group-hover:opacity-100" />{" "}
                    <span>{item.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </li>

      <li className="border-b-[2px] border-dashed border-[#e4e4e4]">
        <button
          onClick={() => setActivePopup("productsandservices")}
          className="flex w-full cursor-pointer items-center justify-between py-[2rem] text-[1.8rem] font-medium tracking-[0.2px] text-[var(--secondary-color)] transition-all duration-200 hover:opacity-50"
        >
          <span>Products and Services</span>
          <ChevronRight />
        </button>

        {/*  Popup */}
        <div
          className={`absolute top-0 flex size-full flex-col gap-[.4rem] overflow-y-auto bg-[#F6F9FB] transition-all duration-300 ${activePopup === "productsandservices" ? "pointer-events-auto visible left-0 opacity-100" : "pointer-events-none invisible left-full opacity-0"}`}
        >
          <div className="bg-white px-[1.6rem] py-[2.4rem]">
            {/* <h5 className="text-[1.3rem] font-normal text-[var(--secondary-color)] uppercase">
              By Stage
            </h5> */}

            <ul className="flex flex-col gap-[2.4rem] py-[1.2rem]">
              {solutionsPopupData.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.link}
                    className="group flex items-center gap-[1rem] text-[1.6rem] font-normal"
                  >
                    <Building className="size-[1.6rem] opacity-60 transition-all duration-200 group-hover:opacity-100" />{" "}
                    <span>{item.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </li>

      <li className="border-b-[2px] border-dashed border-[#e4e4e4]">
        <NavLink
          onClick={() => setActiveHamburger(false)}
          to="/blog"
          className="flex w-full items-center justify-between py-[2rem] text-[1.8rem] font-medium tracking-[0.2px] text-[var(--secondary-color)] transition-all duration-200 hover:opacity-50"
        >
          Blogs
        </NavLink>
      </li>
    </ul>
  );
};

export default HamburgerNavbar;
