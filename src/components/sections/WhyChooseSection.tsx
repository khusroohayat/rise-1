import SectionLabel from "../common/SectionLabel";
import SectionTitle from "../common/SectionTitle";
import { whyChooseData } from "@/constants/constants";

const WhyChooseSection = () => {
  return (
    <section className="bg-[#F7F7F7] px-[2rem] py-[6rem] md:px-[4rem] md:py-[10rem]">
      <div className="mx-auto max-w-[150rem]">
        <div className="mx-auto flex max-w-[60rem] flex-col items-center gap-[.5rem] text-center">
          <div data-aos="fade-up" data-aos-delay="0">
            <SectionLabel label="Why Choose RISE?" />
          </div>

          <div data-aos="fade-up" data-aos-delay="100">
            <SectionTitle label="Trusted by Industry for Precision Performance and Proven Results" />
          </div>
        </div>

        <div className="mt-[6rem] grid grid-cols-1 gap-[4rem] md:mt-[8rem] md:grid-cols-2 lg:grid-cols-3 lg:gap-[1.5rem]">
          {whyChooseData.map((item, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={`${idx * 200}`}
              className={`group relative flex flex-col items-start gap-[1rem] border-l border-[#006BFF] pl-[2.4rem] text-left`}
            >
              <div className="absolute top-0 left-0 h-[35px] w-[3px] bg-[#006BFF] transition-all duration-300 group-hover:h-[100%]" />

              <h4 className="flex items-center gap-[1rem] text-[2rem] leading-[3rem] font-medium tracking-[0.1px]">
                <span>{item.title}</span>
              </h4>

              <p className="max-w-[70rem] text-[1.8rem] leading-[2.8rem] tracking-[0.2px] text-[#425466]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
