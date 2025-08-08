import SectionLabel from "../common/SectionLabel";
import SectionTitle from "../common/SectionTitle";
import { experienceData } from "@/constants/constants";

const ExperienceSection = () => {
  return (
    <section className="bg-[#EFECEB] px-[2rem] py-[6rem] md:px-[4rem] md:py-[10rem]">
      <div className="container">
        <div className="mx-auto flex max-w-[60rem] flex-col items-center gap-[.5rem] text-center">
          <div data-aos="fade-up" data-aos-delay="0">
            <SectionLabel label="Proven Industry Expertise" />
          </div>

          <div data-aos="fade-up" data-aos-delay="100">
            <SectionTitle label="Built on Experience, Driven by Industrial Excellence" />
          </div>
        </div>

        <div className="mt-[6rem] md:mt-[8rem]">
          <div className="grid grid-cols-1 gap-[3rem] lg:grid-cols-2">
            {experienceData.map((item, idx) => (
              <div key={idx} data-aos="fade-up" data-aos-delay={`${idx * 200}`}>
                <div className="shadow-shadow2 hover:shadow-shadow3 flex flex-col items-center gap-[1rem] rounded-[1.2rem] border-b border-[#006BFF] bg-white p-[2rem] pb-[4rem] transition-all duration-300 hover:scale-[1.05] hover:border-[#e9e2da] md:flex-row">
                  <div>
                    <item.icon className="size-[5rem] stroke-1 text-[#006BFF]" />
                  </div>

                  <div className="flex flex-col gap-[.5rem] text-center md:text-left">
                    <h3 className="text-[1.8rem] leading-[2.4rem] font-normal tracking-[-0.36px]">
                      {item.title}
                    </h3>

                    <p className="text-[1.4rem] font-light lg:max-w-[40rem]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
