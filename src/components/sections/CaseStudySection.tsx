import SectionLabel from "../common/SectionLabel";
import SectionTitle from "../common/SectionTitle";
import caseStudiesImg01 from "../../assets/images/case-studies-img-01.png";
import caseStudiesImg02 from "../../assets/images/case-studies-img-02.png";
import caseStudiesImg03 from "../../assets/images/case-studies-img-03.png";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Button } from "../ui/button";
import { useRef, useState } from "react";

const CaseStudySection = () => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [activeIndex, setActiveIndex] = useState(0); // ✅ Track current slide

  const tabs = ["Oil & Gas", "Civil Projects", "EPCC Projects"];

  return (
    <section className="px-[2rem] py-[6rem] md:px-[4rem] md:py-[10rem]">
      <div className="mx-auto max-w-[128rem]">
        <div className="mx-auto flex max-w-[60rem] flex-col items-center gap-[.5rem] text-center">
          <div data-aos="fade-up" data-aos-delay="0">
            <SectionLabel label="Case Studies" />
          </div>

          <div data-aos="fade-up" data-aos-delay="100">
            <SectionTitle label="How We Turn Engineering Into Results" />
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="mt-[6rem] flex flex-col gap-[6rem] md:mt-[8rem]"
        >
          {/* Custom Button */}
          <div className="flex flex-wrap justify-center gap-[1rem]">
            {tabs.map((tab, index) => (
              <Button
                key={index}
                variant={activeIndex === index ? "default" : "dark"} // Highlight active
                onClick={() => {
                  swiperRef.current?.slideToLoop(index);
                  setActiveIndex(index); // Manual update on click
                }}
              >
                {tab}
              </Button>
            ))}
          </div>

          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => {
              const realIndex = swiper.realIndex;
              setActiveIndex(realIndex); // ✅ Update active index on change
            }}
            effect="fade"
            loop={true}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            modules={[Autoplay, EffectFade]}
            allowTouchMove={false}
            simulateTouch={false}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="grid grid-cols-1 items-center gap-[6rem] bg-[#F7F7F7] xl:grid-cols-2 xl:gap-[0rem]">
                <div className="flex flex-col gap-[2rem] xl:pr-[8rem]">
                  <h3 className="text-[3rem] leading-[4rem] font-normal tracking-[-0.48px]">
                    Floating Tender Maintenance – Offshore UAE
                  </h3>

                  <p className="max-w-[50rem] text-[1.8rem] leading-[3rem] font-light">
                    RISE delivered full preventive maintenance and system
                    optimization for a floating production tender operating in
                    offshore UAE. The project included engine diagnostics, gas
                    system calibration, and automation support — resulting in
                    18% downtime reduction over 6 months.
                  </p>

                  <div>
                    <Button>Read More</Button>
                  </div>
                </div>

                <div className="block h-[40rem] overflow-hidden rounded-[1.2rem]">
                  <picture>
                    <img
                      src={caseStudiesImg01}
                      alt={`About Image`}
                      loading="lazy"
                      className="size-full object-cover object-center"
                    />
                  </picture>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-1 items-center gap-[6rem] bg-[#F7F7F7] xl:grid-cols-2 xl:gap-[0rem]">
                <div className="flex flex-col gap-[2rem] xl:pr-[8rem]">
                  <h3 className="text-[3rem] leading-[4rem] font-normal tracking-[-0.48px]">
                    Industrial Foundation & Civil Infrastructure – Saudi Arabia
                  </h3>

                  <p className="max-w-[50rem] text-[1.8rem] leading-[3rem] font-light">
                    Our team led the construction of reinforced foundations and
                    utility networks for an industrial energy facility in
                    Riyadh. RISE managed end-to-end civil execution, ensuring
                    compliance with safety and structural standards under
                    extreme weather conditions.
                  </p>

                  <div>
                    <Button>Read More</Button>
                  </div>
                </div>

                <div className="block h-[40rem] overflow-hidden rounded-[1.2rem]">
                  <picture>
                    <img
                      src={caseStudiesImg02}
                      alt={`About Image`}
                      loading="lazy"
                      className="size-full object-cover object-center"
                    />
                  </picture>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-1 items-center gap-[6rem] bg-[#F7F7F7] xl:grid-cols-2 xl:gap-[0rem]">
                <div className="flex flex-col gap-[2rem] xl:pr-[8rem]">
                  <h3 className="text-[3rem] leading-[4rem] font-normal tracking-[-0.48px]">
                    EPC of Gas Separation Plant – Qatar
                  </h3>

                  <p className="max-w-[50rem] text-[1.8rem] leading-[3rem] font-light">
                    RISE executed a turnkey EPCC project for a midstream gas
                    separation plant — including engineering designs,
                    procurement of specialized compressors, full-scale plant
                    construction, and final commissioning. The plant was
                    delivered 2 weeks ahead of schedule.
                  </p>

                  <div>
                    <Button>Read More</Button>
                  </div>
                </div>

                <div className="block h-[40rem] overflow-hidden rounded-[1.2rem]">
                  <picture>
                    <img
                      src={caseStudiesImg03}
                      alt={`About Image`}
                      loading="lazy"
                      className="size-full object-cover object-center"
                    />
                  </picture>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
