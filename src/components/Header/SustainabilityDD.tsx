import { MoveRight } from "lucide-react";
import dropdownImg4 from "../../assets/images/dropdown-img-4.webm";

const solutionsDropdownData = [
  {
    id: 0,
    link: "",
    text: "Product Optimization",
    desc: "Unlock the full production potential of your asset, across the entire lifecycle.",
  },
  {
    id: 1,
    link: "",
    text: "Performance Assurance",
    desc: "Redefine what’s achievable for your system-level optimization.",
  },
  {
    id: 2,
    link: "",
    text: "Geothermal",
    desc: "Tap into Earth's heat as a reliable, renewable resource.",
  },
  {
    id: 3,
    link: "",
    text: "Data and AI Platform",
    desc: "Engineered AI for the Energy Industry",
  },
  {
    id: 4,
    link: "",
    text: "Methane and Flaring Elimination",
    desc: "Remove methane and flaring emissions from your operations. For good.",
  },
  {
    id: 5,
    link: "",
    text: "Carbon Capture and Storage",
    desc: "Accelerate progress with effective solutions across the CCUS value chain.",
  },
  {
    id: 6,
    link: "",
    text: "Accelerated Time to Market",
    desc: "Access more mature field reserves and bring green fields online faster and with longer sustainable performance.",
  },
  {
    id: 7,
    link: "",
    text: "Emissions Reduction",
    desc: "Reduce operational emissions and environmental impact with quantifiably proven, reliable technologies.",
  },
];

const SustainabilityDD = () => {
  return (
    <div className="shadow-01 flex overflow-hidden rounded-[8px] bg-white">
      <div className="min-w-[65rem] p-[2rem]">
        <ul className="grid grid-cols-2 gap-x-[2.4rem]">
          {solutionsDropdownData.map((item) => (
            <li
              key={item.id}
              className="mt-[1rem] mb-[3rem] flex flex-col gap-[.8rem]"
            >
              <a
                href={item.link}
                className="text-[1.5rem] font-normal hover:text-[var(--primary-color)] hover:underline"
              >
                {item.text}
              </a>

              <p className="text-[1.4rem] leading-[2.2rem] font-thin">
                {item.desc}
              </p>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Sidebar */}
      <div className="min-w-[25rem] bg-[#E5E1DC] p-[1.6rem]">
        <div className="mb-[3.2rem] flex flex-col gap-[1rem] border-b border-[#00000026] pb-[3.2rem]">
          <h4 className="text-[1.4rem] font-medium tracking-[0.8px] uppercase">
            Solutions
          </h4>

          <div className="w-full">
            <video
              autoPlay
              loop
              muted
              src={dropdownImg4}
              className="w-full"
            ></video>
          </div>

          <p className="text-[1.5rem] font-light">
            Planetary problems. Global solutions. Local deployment.
          </p>

          <a
            href="#"
            className="flex gap-[.8rem] text-[1.5rem] font-medium text-[var(--primary-color)]"
          >
            <span>Solutions</span>
            <MoveRight className="relative top-[.2rem] size-[2.4rem] stroke-1" />
          </a>
        </div>
        {/* <ul className="flex flex-col gap-[1.6rem]">
          {features.map((feature) => (
            <li key={feature.value}>
              <a
                href={`#${feature.value}`}
                className="text-[1.5rem] font-light hover:text-[var(--primary-color)] hover:underline"
              >
                {feature.label}
              </a>
            </li>
          ))}
        </ul> */}
      </div>
    </div>
  );
};

export default SustainabilityDD;
