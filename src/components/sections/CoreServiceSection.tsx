import SectionLabel from "../common/SectionLabel";
import SectionTitle from "../common/SectionTitle";
import { servicesData } from "@/constants/constants";

const CoreServiceSection = () => {
  return (
    <section
      id="epcc-contracting"
      className="px-[2rem] py-[6rem] md:px-[4rem] md:py-[10rem]"
    >
      <div className="mx-auto max-w-[128rem]">
        <div className="mx-auto flex max-w-[60rem] flex-col items-center gap-[.5rem] text-center">
          <div data-aos="fade-up" data-aos-delay="0">
            <SectionLabel label="Our Core Expertise" />
          </div>

          <div data-aos="fade-up" data-aos-delay="100">
            <SectionTitle label="Comprehensive Solutions Backed by Industry Experience" />
          </div>
        </div>

        <div className="mt-[6rem] grid grid-cols-1 gap-[1rem] md:mt-[8rem] md:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((item, idx) => (
            <div id={item.hashId} key={idx} className="p-[1rem]">
              <div
                data-aos="fade-up"
                className="group shadow-01 flex h-full w-full flex-col overflow-hidden rounded-[.8rem] bg-white p-[.4rem]"
              >
                <div className="h-[25rem] overflow-hidden rounded-[.4rem]">
                  <img
                    src={item.image}
                    alt="Services Image"
                    className="size-full object-cover object-center transition-all duration-200 group-hover:scale-[1.05]"
                  />
                </div>

                <div className="flex flex-col gap-[1rem] p-[1.6rem]">
                  <div className="flex flex-col items-start gap-[1rem]">
                    <h3 className="text-[1.8rem] leading-[2.4rem] font-normal tracking-[-0.36px]">
                      {item.title}
                    </h3>

                    <p className="text-[1.4rem] font-light text-[#425466]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreServiceSection;
