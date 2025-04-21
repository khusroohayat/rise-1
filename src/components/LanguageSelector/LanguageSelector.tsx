import { Languages } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Flag from "react-world-flags";

// Define the types
interface Country {
  name: string;
  code: string;
  languages: string[];
}

const countries: Country[] = [
  { name: "United States of America", code: "US", languages: ["English"] },
  { name: "United Kingdom", code: "GB", languages: ["English"] },
  { name: "Bahrain", code: "BH", languages: ["العربية", "English"] },
  { name: "Qatar", code: "QA", languages: ["العربية", "English"] },
];

const LanguageSelector: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // New state to hold selected country and language
  const [selectedCountry, setSelectedCountry] = useState<Country | null>({
    name: "United Kingdom",
    code: "GB",
    languages: ["English"],
  });
  const [selectedLanguage, setSelectedLanguage] = useState<string>("English");

  const toggleCountryList = () => setOpen((prev) => !prev);

  const handleLanguageClick = (country: Country, language: string) => {
    setSelectedCountry(country);
    setSelectedLanguage(language);
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef}>
      <button
        onClick={toggleCountryList}
        className="inline-flex w-max cursor-pointer justify-center rounded-[1.65rem] text-[1.5rem] font-light transition-all duration-200 hover:opacity-90"
      >
        <Languages className="relative top-[6px] right-[.6rem] size-[1.5rem] transition-all duration-200" />

        <span>
          {selectedCountry?.name} ({selectedLanguage})
        </span>
      </button>

      <div
        className={`shadow-01 absolute top-[100%] z-[100] rounded-[8px] bg-[#F6F9FC] py-[1.6rem] transition-all duration-300 ${
          open
            ? "pointer-events-auto visible opacity-100"
            : "pointer-events-none invisible opacity-0"
        }`}
      >
        <div className="grid grid-cols-1 gap-y-[.8rem]">
          {countries.map((country, index) => (
            <div
              key={index}
              className="flex items-center gap-[1rem] px-[1.6rem]"
            >
              <Flag code={country.code} className="w-[2.1rem]" />

              <div>
                <div className="text-[1.5rem] font-light capitalize">
                  {country.name}
                </div>
                <div className="flex items-center gap-[.5rem]">
                  {country.languages.map((lang, idx) => (
                    <button
                      key={idx}
                      className="cursor-pointer text-[1.2rem] leading-[1.6rem] font-light text-gray-600 capitalize transition-all duration-200 hover:text-black"
                      onClick={() => handleLanguageClick(country, lang)}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;
