import { ChevronDown } from "lucide-react";
import { useState } from "react";
import ProductsAndServicesDD from "./ProductsAndServicesDD";
import SolutionsDD from "./SolutionsDD";
import SustainabilityDD from "./SustainabilityDD";
import NewsAndInsightsDD from "./NewsAndInsightsDD";
// import AboutUsDD from "./AboutUsDD";

const navItems = [
  { label: "Solutions", hasDropdown: true, key: "solutions" },
  {
    label: "Products and Services",
    hasDropdown: true,
    key: "productsandservices",
  },
  { label: "Sustainability", hasDropdown: true, key: "sustainability" },
  { label: "News and Insights", hasDropdown: true, key: "newsandinsights" },
  // { label: "About Us", hasDropdown: true, key: "aboutus" },
];

const Navbar: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleToggle = (key: string | undefined) => {
    if (!key) return;
    setActiveDropdown((prev) => (prev === key ? null : key));
  };

  return (
    <nav>
      <ul className="flex items-center gap-[2rem]">
        {navItems.map((item) => (
          <li
            key={item.label}
            className="relative"
            onMouseEnter={() =>
              item.hasDropdown && setActiveDropdown(item.key || item.label)
            }
            onMouseLeave={() => item.hasDropdown && setActiveDropdown(null)}
          >
            {item.hasDropdown ? (
              <button
                onClick={() => handleToggle(item.key)}
                className="flex cursor-pointer gap-[.3rem] text-[1.5rem] font-normal"
              >
                <span>{item.label}</span>
                <ChevronDown
                  className={`relative top-[.7rem] size-[1.4rem] stroke-3 transition-transform duration-300 ${
                    activeDropdown === item.key ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
            ) : (
              <a href="#" className="text-[1.5rem] font-normal hover:underline">
                {item.label}
              </a>
            )}

            {item.key === "solutions" && (
              <div
                className={`absolute top-full z-50 transition-all duration-300 ${
                  activeDropdown === "solutions"
                    ? "pointer-events-auto visible pt-[1.6rem] opacity-100"
                    : "pointer-events-none invisible pt-[0rem] opacity-0"
                }`}
              >
                <SolutionsDD />
              </div>
            )}

            {item.key === "productsandservices" && (
              <div
                className={`absolute top-full z-50 transition-all duration-300 ${
                  activeDropdown === "productsandservices"
                    ? "pointer-events-auto visible pt-[1.6rem] opacity-100"
                    : "pointer-events-none invisible pt-[0rem] opacity-0"
                }`}
              >
                <ProductsAndServicesDD />
              </div>
            )}

            {item.key === "sustainability" && (
              <div
                className={`absolute top-full left-[-18rem] z-50 transition-all duration-300 ${
                  activeDropdown === "sustainability"
                    ? "pointer-events-auto visible pt-[1.6rem] opacity-100"
                    : "pointer-events-none invisible pt-[0rem] opacity-0"
                }`}
              >
                <SustainabilityDD />
              </div>
            )}

            {item.key === "newsandinsights" && (
              <div
                className={`absolute top-full left-[-30rem] z-50 transition-all duration-300 ${
                  activeDropdown === "newsandinsights"
                    ? "pointer-events-auto visible pt-[1.6rem] opacity-100"
                    : "pointer-events-none invisible pt-[0rem] opacity-0"
                }`}
              >
                <NewsAndInsightsDD />
              </div>
            )}

            {/* {item.key === "aboutus" && (
              <div
                className={`absolute top-full left-[-30rem] z-50 transition-all duration-300 ${
                  activeDropdown === "aboutus"
                    ? "pointer-events-auto visible pt-[1.6rem] opacity-100"
                    : "pointer-events-none invisible pt-[0rem] opacity-0"
                }`}
              >
                <AboutUsDD />
              </div>
            )} */}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
