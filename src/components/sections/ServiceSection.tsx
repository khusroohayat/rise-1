import { ArrowLeft, ArrowRight, Bookmark } from "lucide-react";
import SectionLabel from "../common/SectionLabel";
import SectionTitle from "../common/SectionTitle";
import { Button } from "../ui/button";
import { servicesData } from "@/constants/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import type SwiperType from "swiper";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useRef, useState } from "react";
import { NavigationOptions } from "swiper/types";

const ServiceSection = () => {
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
      <div className="mx-auto max-w-[128rem]">
        <div className="mx-auto flex max-w-[60rem] flex-col items-center gap-[3rem] text-center">
          <div className="flex flex-col items-center gap-[.5rem]">
            <div data-aos="fade-up" data-aos-delay="0">
              <SectionLabel label="Our Core Capabilities" />
            </div>

            <div data-aos="fade-up" data-aos-delay="100">
              <SectionTitle label="Comprehensive Services Designed for Industrial Excellence" />
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="200">
            <Button variant="dark">
              <span>Explore All Services</span>
              <div className="relative inline-flex size-[3.3rem] items-center justify-center rounded-full bg-white">
                <div className="size-[1.7rem] overflow-hidden">
                  <div className="flex -translate-x-full transform transition-transform duration-300 group-hover:translate-x-0">
                    <div className="flex size-full items-center justify-center">
                      <ArrowRight className="size-[1.7rem] stroke-2 text-[#0B3558]" />
                    </div>

                    <div className="flex size-full items-center justify-center">
                      <ArrowRight className="size-[1.7rem] stroke-2 text-[#0B3558]" />
                    </div>
                  </div>
                </div>
              </div>
            </Button>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="mt-[6rem] md:mt-[8rem]"
        >
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            modules={[Autoplay, Navigation, Pagination]}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            pagination={{
              el: ".custom-pagination",
              clickable: true,
              renderBullet: (index, className) => {
                return `<span class="${className} cursor-pointer !mx-0">${index + 1}</span>`;
              },
            }}
            navigation={false}
            onSwiper={(swiper) => setSwiperInstance(swiper)}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
            }}
            className="mySwiper service-slider"
          >
            {servicesData.map((item, idx) => (
              <SwiperSlide key={idx} className="!h-auto p-[1rem]">
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
                    <div className="inline-flex w-max items-center gap-[.8rem] rounded-[.4rem] bg-[#EFECEB] px-[1rem] py-[.6rem] text-[1.2rem] leading-[1.2rem] font-normal">
                      <Bookmark className="size-[2rem]" />
                      <span>Services</span>
                    </div>

                    <div className="flex flex-col items-start gap-[1rem]">
                      <h4 className="text-[2.6rem] leading-[3.6rem] font-medium">
                        {item.title}
                      </h4>

                      <p className="text-[1.8rem] leading-[2.8rem] font-light tracking-[0.2px] text-[#425466]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="mt-[2rem] flex items-center justify-between">
            <div className="custom-pagination flex gap-[1rem] text-[1.4rem] leading-[1.2rem]" />

            <div className="relative flex w-full items-center justify-end gap-[1rem]">
              <button
                ref={prevRef}
                disabled={!swiperInstance}
                className="inline-flex size-[3.5rem] cursor-pointer items-center justify-center rounded-[.8rem] bg-[#0B3558] text-white transition-all duration-[0.3s] disabled:cursor-not-allowed disabled:opacity-30 md:size-[4.5rem]"
                aria-label="Previous slide"
              >
                <ArrowLeft className="size-[1.6rem] md:size-[2rem]" />
              </button>

              <button
                ref={nextRef}
                disabled={!swiperInstance}
                className="inline-flex size-[3.5rem] cursor-pointer items-center justify-center rounded-[.8rem] bg-[#0B3558] text-white transition-all duration-[0.3s] disabled:cursor-not-allowed disabled:opacity-30 md:size-[4.5rem]"
                aria-label="Next slide"
              >
                <ArrowRight className="size-[1.6rem] md:size-[2rem]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
