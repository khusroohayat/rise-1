import SectionLabel from "../common/SectionLabel";
import SectionTitle from "../common/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import type SwiperType from "swiper";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ArrowLeft, ArrowRight, MoveRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { NavigationOptions } from "swiper/types";
import { keyPoliciesData } from "@/constants/constants";

const KeyPolicySection = () => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  useEffect(() => {
    if (
      swiperInstance &&
      swiperInstance.params &&
      prevRef.current &&
      nextRef.current
    ) {
      const navigation = swiperInstance.params.navigation as NavigationOptions;

      // 👇 Assign your custom buttons
      navigation.prevEl = prevRef.current;
      navigation.nextEl = nextRef.current;

      swiperInstance.navigation.destroy();
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  return (
    <section className="px-[2rem] py-[6rem] md:px-[4rem] md:py-[10rem]">
      <div className="mx-auto flex max-w-[60rem] flex-col items-center gap-[3rem] text-center">
        <div className="flex flex-col items-center gap-[.5rem]">
          <div data-aos="fade-up" data-aos-delay="0">
            <SectionLabel label="Key Policy" />
          </div>

          <div data-aos="fade-up" data-aos-delay="100">
            <SectionTitle label="Guiding Principles Behind Our Operations" />
          </div>
        </div>
      </div>

      <div data-aos="fade-up" data-aos-delay="400" className="mt-[8rem]">
        <Swiper
          data-aos="fade-up"
          slidesPerView={1}
          spaceBetween={16}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 32,
            },
          }}
          modules={[Autoplay, Navigation]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          navigation={false}
          onSwiper={(swiper) => setSwiperInstance(swiper)}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          {keyPoliciesData.map((policy, idx) => (
            <SwiperSlide key={idx} className="!h-auto">
              <a
                target="_blank"
                href={policy.link}
                className="group relative z-[1] grid h-full overflow-hidden rounded-[2.4rem] border border-[#cdcdcd] px-[2rem] py-[3.2rem]"
              >
                <div className="relative">
                  <div className="mb-[1rem]">
                    <policy.icon className="size-[3rem] stroke-[1.5px] transition-all duration-200 group-hover:text-white" />
                  </div>
                </div>

                <div className="mb-[10rem]">
                  <h4 className="text-[2rem] leading-[3rem] font-medium transition-all duration-200 group-hover:!text-white">
                    {policy.title}
                  </h4>
                  <p className="mt-[1rem] line-clamp-2 text-[1.6rem] leading-[2.2rem] font-light transition-all duration-200 group-hover:text-white">
                    {policy.description}
                  </p>
                </div>

                <div className="flex justify-end gap-[.8rem] text-[1.8rem] leading-[2.88rem] font-normal transition-all duration-200 group-hover:text-white">
                  <span>Learn More</span>
                  <MoveRight className="relative top-[3px] size-[2.4rem] stroke-1" />
                </div>

                <div
                  style={{
                    transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                  className="absolute bottom-[-1rem] left-[-1rem] z-[-1] size-[15rem] group-hover:bottom-[-35rem] group-hover:left-[-50rem] group-hover:size-[190rem]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlSpace="preserve"
                    version="1.1"
                    viewBox="0 0 480 480"
                    style={{
                      shapeRendering: "geometricPrecision",
                      textRendering: "geometricPrecision",
                      imageRendering: "auto",
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                    }}
                  >
                    <g id="Layer_x0020_1">
                      <metadata id="CorelCorpID_0Corel-Layer" />
                      <path
                        fill={policy.color}
                        d="M51.06 312.35c4.07,0.17 23.24,7.02 26.55,8.95 7.18,4.2 13.95,6.82 12.02,16.46 -2.96,14.69 -11.25,10.63 -12.49,27.45 -0.1,6.17 -1.98,14.61 -4.65,20.28 -2.17,4.62 -2.54,8.64 -6.97,10 -0.17,0.01 -0.33,0.02 -0.5,0.04 42.16,46.37 102.96,75.47 170.55,75.47 127.26,0 230.43,-103.16 230.43,-230.42 0,-3.37 -0.07,-6.71 -0.22,-10.03 -2.92,2.23 -4.18,4.61 -6.73,7.69 -1.14,1.38 -2.65,3.66 -4.38,4.46 -2.59,1.19 -4.36,1.28 -3.93,5.02 0.37,3.19 1.23,4.29 0.34,8.01 -1.03,4.31 -0.61,3.76 -0.51,7.99 -1.18,0.99 -1.57,0.5 -2.34,1.7 -0.63,0.99 -0.46,2.43 -1.15,3.29 -0.93,1.21 -1.29,0.26 -2.17,1.87 -0.86,1.57 -0.03,1.91 -1.69,2.75 -3.11,-0.83 -4.31,-9.19 -5.74,-12.34 -1.18,-2.32 -1.97,-2.4 -2.49,-5.13 -1.81,-9.44 -5.82,-16.11 -7.12,-26.71 -2.22,-18.01 2,-8.85 -5.1,-7 -5.99,1.56 -3.13,-4.66 -6.1,-7.75 -7.87,-8.2 -11.23,-7.69 -21.19,-9.12 -7.76,-1.11 -31.5,-9.58 -35.92,-8.54 -4.19,0.99 -4.33,8.05 3.36,9.93 10.96,2.67 29.47,8.66 18.05,23.26 -2.95,3.79 -19.76,16.52 -24.15,18.59 -14.2,6.72 -18.32,12.94 -24.42,-4.38 -4.13,-11.83 -9.75,-24.69 -15.95,-35.57 -17.48,-30.68 -3.72,9.31 -0.78,17.17 6.25,16.39 12.72,20.53 19.84,34.09 1.42,2.04 1.98,3.29 4.65,3.82 3.5,0.69 13.4,-2.84 19.62,-3.07 0.08,10.15 -3.22,16.46 -8.27,24.97 -15.15,24.94 -33.04,23.62 -26.41,57.03 7.17,32.27 -14.46,25.66 -15.62,47.45 -0.64,11.78 -2.04,8.89 -6.32,18.53 -2.62,5.91 -5.2,11.63 -8.53,16.72l-41.62 0c-0.26,-0.92 -0.53,-1.84 -0.79,-2.77 -6.21,-22.2 -17.75,-38.63 -13.53,-62.34 4.87,-27.4 0.87,-21.43 -6.98,-45.51 -5.89,-19.11 3.4,-22.15 -16.06,-29.76 -12.48,-4.89 -13.98,-0.2 -23.38,1.59 -12.15,2.33 -21.12,0.88 -29.94,-8.58 -13.02,-13.99 -16.2,-22.53 -15.3,-41.42 1.15,-24.27 3.17,-24.98 16.88,-43.72 5.09,-6.97 7.69,-16.09 11.89,-21.19 8.88,-9.16 27.95,-12.24 40.23,-14.27 17.86,-2.96 12.23,1.12 22.2,12.35 10.9,12.25 41.69,13.87 56.6,11.14 16.24,-2.99 8.43,-12.74 3.46,-20.95 -11.28,-18.65 0.88,-20.19 13.38,-29.81 7.12,-6.18 8.45,-14.52 -2.34,-13.65 -11.6,1.79 -16.68,7.79 -23.75,16.66 -6.56,8.24 -11.59,19.26 -22.53,13.15 -8.21,-4.6 -8.74,-5.49 -18.09,-8.83 -17.67,-6.32 -22.83,-15.24 -38.5,0.84 -9.22,9.46 -14.14,23.23 -29.11,17.98 -13.53,-7.39 -0.39,-21.78 5.91,-28.72 3.65,-4.19 6.27,-7.24 8.64,-12.3 6.75,-14.43 5.62,-13.15 15.88,-25.83 8.1,-10.23 12.29,-18.88 26.22,-20.44 11.39,-1.28 20.58,-2.43 31.11,-7.56 30.98,-15.08 1.58,-24.64 5.04,-38.17 1.82,-7.16 7.97,-8.4 14.26,-7.84 -15.74,-3.39 -32.08,-5.18 -48.84,-5.18 -127.26,0 -230.42,103.17 -230.42,230.43 0,10.92 0.76,21.66 2.23,32.18 1.43,2.52 2.45,1.74 6.04,5.17 9.29,8.84 27.22,10.85 27.11,26.83 -0.08,10.94 1.93,7.24 10.53,7.59z"
                      />
                    </g>
                  </svg>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="relative mt-[4rem] flex w-full items-center justify-end gap-[1rem]">
          <button
            ref={prevRef}
            className="inline-flex size-[3.5rem] cursor-pointer items-center justify-center rounded-[1.2rem] bg-[#0B3558] text-white transition-all duration-[0.3s] disabled:cursor-not-allowed disabled:opacity-30 md:size-[4.5rem]"
            aria-label="Previous slide"
          >
            <ArrowLeft className="size-[1.6rem] md:size-[2rem]" />
          </button>

          <button
            ref={nextRef}
            className="field-next inline-flex size-[3.5rem] cursor-pointer items-center justify-center rounded-[1.2rem] bg-[#0B3558] text-white transition-all duration-[0.3s] disabled:cursor-not-allowed disabled:opacity-30 md:size-[4.5rem]"
            aria-label="Next slide"
          >
            <ArrowRight className="size-[1.6rem] md:size-[2rem]" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default KeyPolicySection;
