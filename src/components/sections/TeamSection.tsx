import SectionLabel from "../common/SectionLabel";
import SectionTitle from "../common/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import type SwiperType from "swiper";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { teamMembers } from "@/constants/constants";
import { useEffect, useRef, useState } from "react";
import { NavigationOptions } from "swiper/types";

const TeamSection = () => {
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
    <section className="bg-[#EFECEB] px-[2rem] py-[6rem] md:px-[4rem] md:py-[10rem]">
      <div className="mx-auto max-w-[150rem]">
        <div className="mx-auto flex max-w-[60rem] flex-col items-center gap-[.5rem] text-center">
          <div data-aos="fade-up" data-aos-delay="0">
            <SectionLabel label="Meet the Team" />
          </div>

          <div data-aos="fade-up" data-aos-delay="100">
            <SectionTitle label="Experienced Professionals Driving Reliable Industrial Solutions" />
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="mt-[6rem] md:mt-[8rem]"
        >
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
                slidesPerView: 3,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 32,
              },
              1280: {
                slidesPerView: 5,
                spaceBetween: 40,
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
            {teamMembers.map((item, idx) => (
              <SwiperSlide key={idx}>
                <>
                  <div className="h-auto w-full overflow-hidden rounded-[.8rem]">
                    <img
                      src={item.png}
                      alt="Team Image"
                      loading="lazy"
                      className="size-full object-contain object-center"
                    />
                  </div>

                  <ul className="mt-[.6rem] flex flex-wrap items-center gap-x-[.5rem] text-[1.4rem] leading-[2rem]">
                    {item.roles.map((role, idx) => (
                      <div className="flex items-center gap-[.5rem]" key={idx}>
                        <li>{role}</li>
                        {idx < item.roles.length - 1 && (
                          <li className="text-[#006BFF]">|</li>
                        )}
                      </div>
                    ))}
                  </ul>
                </>
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
      </div>
    </section>
  );
};

export default TeamSection;
