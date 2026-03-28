import { CircleCheckBig } from "lucide-react";
import SectionLabel from "../common/SectionLabel";
import SectionTitle from "../common/SectionTitle";
import { certificationsData } from "@/constants/constants";
import supportImg from "../../assets/images/what-we-support-img.jpg";

const ServiceOverviewSection = () => {
  return (
    <section
      id="exploration-production-support"
      className="px-[2rem] py-[6rem] md:px-[4rem] md:py-[10rem]"
    >
      <div className="container">
        <div className="mx-auto flex max-w-[60rem] flex-col items-center gap-[.5rem] text-center">
          <div data-aos="fade-up" data-aos-delay="0">
            <SectionLabel label="What We Support" />
          </div>

          <div data-aos="fade-up" data-aos-delay="100">
            <SectionTitle label="Comprehensive Solutions for Exploration & Production" />
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="mt-[6rem] grid grid-cols-1 items-end gap-[4rem] md:mt-[8rem] lg:grid-cols-2 lg:gap-[0rem]"
        >
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <h3 className="w-[80%] text-[2.2rem] leading-[3.4rem] font-medium tracking-[-0.2px] capitalize md:text-[3.8rem] md:leading-[4.8rem]">
              Supporting Every Stage of Oil & Gas Projects
            </h3>

            <p className="my-[2rem] text-[1.4rem] font-light text-[#425466] lg:max-w-[45rem]">
              We provide complete technical and operational support throughout
              the E&P lifecycle—from discovery and well development to plant
              setup and ongoing maintenance. Our solutions are engineered for
              efficiency, safety, and long-term value.
            </p>

            <ul className="flex flex-col lg:w-[60%]">
              <li className="flex gap-[1.5rem] border-b border-[#C9C9C9] py-[.8rem]">
                <CircleCheckBig className="relative top-[.6rem] size-[1.6rem] text-[#006BFF]" />
                <span>Well Development Expertise</span>
              </li>
              <li className="flex gap-[1.5rem] border-b border-[#C9C9C9] py-[.8rem]">
                <CircleCheckBig className="relative top-[.6rem] size-[1.6rem] text-[#006BFF]" />
                <span>Onshore & Offshore Support</span>
              </li>
              <li className="flex gap-[1.5rem] border-b border-[#C9C9C9] py-[.8rem]">
                <CircleCheckBig className="relative top-[.6rem] size-[1.6rem] text-[#006BFF]" />
                <span>High-Compliance Field Operations</span>
              </li>
            </ul>

            <div className="mt-[4rem] flex flex-col gap-[1rem]">
              <h5 className="font-normal">Accreditations & Certifications</h5>

              <div className="flex gap-[1rem]">
                {certificationsData.map((item, idx) => (
                  <div key={idx} className="group relative max-w-[5rem]">
                    <img
                      src={item.img}
                      alt="Certification Image"
                      className="size-full object-contain object-center"
                    />

                    {/* Tooltip */}
                    <div className="absolute -top-[4rem] left-1/2 z-[10] w-max -translate-x-1/2 scale-0 transform rounded-full bg-[#0B3558] px-[1.2rem] py-[.4rem] text-[1.4rem] leading-[1.8rem] font-normal text-white opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:bg-[#006BFF] group-hover:opacity-100">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="-order-1 h-[30rem] overflow-hidden rounded-[.8rem] bg-[lightpink] md:h-[50rem] lg:order-1">
            <img
              src={supportImg}
              alt="Image"
              className="size-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceOverviewSection;
