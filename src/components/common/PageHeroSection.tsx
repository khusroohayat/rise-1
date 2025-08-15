import { ArrowLeft, ArrowRight, CircleCheck } from "lucide-react";
import { ReactNode, useEffect, useRef, useState } from "react";
import { NavigationOptions } from "swiper/types";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type SwiperType from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import bgElement01 from "../../assets/images/page-hero-bg-element-01.svg";
import bgElement02 from "../../assets/images/page-hero-bg-element-02.svg";

type SlideData = {
  image: string;
  title: string;
  description: string;
};

type HeroSectionProps = {
  title: string;
  description: string;
  benefits: string[];
  slides: SlideData[];
  showButtons?: boolean;
  children?: ReactNode; // for buttons or CTA elements
};

const PageHeroSection = ({
  title,
  description,
  benefits,
  slides,
  showButtons = true,
  children,
}: HeroSectionProps) => {
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
    <section className="relative flex min-h-screen items-center px-[2rem] md:px-[4rem] lg:pt-[0rem]">
      {/* Background Elements */}
      <div>
        <img
          src={bgElement01}
          alt="Bg Element 01"
          className="absolute right-[0] bottom-[0] max-w-[10rem]"
        />
        <img
          src={bgElement02}
          alt="Bg Element 02"
          className="absolute bottom-[0] left-[0] max-w-[10rem]"
        />
      </div>

      <div className="mx-auto max-w-[128rem]">
        <div className="grid grid-cols-1 items-center gap-[4rem] pt-[10rem] pb-[8rem] xl:grid-cols-2 xl:gap-[0rem] xl:pt-[4.8rem] xl:pb-[0rem]">
          <div
            className={`flex flex-col items-center gap-[2rem] text-center xl:items-start xl:text-left`}
          >
            <h1 className="text-[3rem] leading-[4rem] font-medium tracking-[-0.4px] md:text-[4rem] md:leading-[4.6rem] xl:max-w-[45rem]">
              {title}
            </h1>

            <div className="group relative border-[#006BFF] xl:border-l">
              <div className="absolute top-0 left-[-1.5px] hidden h-[3.5rem] w-[.3rem] bg-[#006BFF] transition-all duration-300 group-hover:h-[100%] xl:block" />

              <p className="text-[1.8rem] font-extralight tracking-[0.1px] md:text-[2rem] md:leading-[3rem] xl:max-w-[55rem] xl:pl-[2.4rem]">
                {description}
              </p>
            </div>

            {showButtons && (
              <div className="mt-[4rem] flex flex-col items-center justify-center gap-[1rem] md:flex-row xl:justify-start">
                {children}
              </div>
            )}

            <ul className="flex flex-col items-center gap-[2rem] md:flex-row">
              {benefits.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-[1rem] font-extralight tracking-[0.1px]"
                >
                  <CircleCheck className="text-[#006BFF] xl:size-[1.8rem]" />
                  <span className="max-w-[25rem]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative md:px-[1.5rem]">
            <Swiper
              slidesPerView={1}
              modules={[Autoplay, Navigation, Pagination]}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              pagination={{
                el: ".page-hero-custom-pagination",
                clickable: true,
              }}
              navigation={false}
              onSwiper={(swiper) => setSwiperInstance(swiper)}
              className="mySwiper page-hero-slider"
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index} className="!h-auto md:p-[1rem]">
                  <div className="flex h-full w-full flex-col gap-[2rem] overflow-hidden rounded-[.8rem] p-[.4rem]">
                    <div className="overflow-hidden rounded-[.4rem]">
                      <img
                        src={slide.image}
                        alt={`Slide ${index}`}
                        className="size-full object-cover object-center transition-all duration-200"
                      />
                    </div>
                    <div className="flex flex-col gap-[1rem] p-[1.6rem]">
                      <div className="flex flex-col items-center gap-[1rem] text-center xl:items-start xl:text-left">
                        <h3 className="text-[1.8rem] leading-[2.4rem] font-normal tracking-[-0.36px]">
                          {slide.title}
                        </h3>
                        <p className="text-[1.4rem] font-light text-[#425466]">
                          {slide.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="mt-[2rem] flex flex-col items-center justify-center">
              <div className="page-hero-custom-pagination flex justify-center gap-[.3rem] text-[1.4rem] leading-[1.2rem]" />

              <div className="hidden w-full items-center gap-[1rem] md:flex">
                <button
                  ref={prevRef}
                  disabled={!swiperInstance}
                  className="absolute top-1/2 left-[-3.5rem] inline-flex size-[3.5rem] -translate-y-1/2 cursor-pointer items-center justify-center rounded-[1.2rem] bg-[#0B3558] text-white transition-all duration-[0.3s] disabled:cursor-not-allowed disabled:opacity-30 md:size-[4.5rem]"
                  aria-label="Previous slide"
                >
                  <ArrowLeft className="size-[1.6rem] md:size-[2rem]" />
                </button>

                <button
                  ref={nextRef}
                  disabled={!swiperInstance}
                  className="absolute top-1/2 right-[-3.5rem] inline-flex size-[3.5rem] -translate-y-1/2 cursor-pointer items-center justify-center rounded-[1.2rem] bg-[#0B3558] text-white transition-all duration-[0.3s] disabled:cursor-not-allowed disabled:opacity-30 md:size-[4.5rem]"
                  aria-label="Next slide"
                >
                  <ArrowRight className="size-[1.6rem] md:size-[2rem]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHeroSection;
