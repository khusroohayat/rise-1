import SectionLabel from "../common/SectionLabel";
import SectionTitle from "../common/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import {
  ArrowRight,
  BookText,
  Factory,
  Flame,
  Hammer,
  Layers,
  Truck,
  UserCircle,
  Wrench,
} from "lucide-react";
import projectHighlightImg01 from "../../assets/images/project-highlight-img-01.png";
import projectHighlightImg02 from "../../assets/images/project-highlight-img-02.png";
import projectHighlightImg03 from "../../assets/images/project-highlight-img-03.png";
import projectHighlightImg04 from "../../assets/images/project-highlight-img-04.png";
import cooperLogoWhite from "../../assets/images/cooper-services-logo-white.png";
import molLogoWhite from "../../assets/images/mol-group-logo-white.png";
import mariLogoWhite from "../../assets/images/mari-energies-logo-white.png";
import ppLogoWhite from "../../assets/images/pakistan-petroleum-logo-white.png";
import cooperLogo from "../../assets/images/cooper-services.png";
import molLogo from "../../assets/images/mol-group.png";
import mariLogo from "../../assets/images/mari-energies.png";
import ppLogo from "../../assets/images/pakistan-petroleum.png";
import { useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";

const ProjectHighlightSection = () => {
  const textSwiperRef = useRef<SwiperType | null>(null);
  const imageSwiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="px-[2rem] xl:px-[0rem]">
      <div className="relative container py-[6rem] md:py-[10rem]">
        <div className="absolute inset-0 z-[-1] flex justify-between">
          <div className="h-full border-l border-[#cdcdcd75]" />
          <div className="hidden h-full border-l border-dashed border-[#cdcdcd75] lg:block" />
          <div className="hidden h-full border-l border-dashed border-[#cdcdcd75] lg:block" />
          <div className="hidden h-full border-l border-dashed border-[#cdcdcd75] lg:block" />
          <div className="h-full border-l border-[#cdcdcd75]" />
        </div>

        <div className="mx-auto flex max-w-[60rem] flex-col items-center gap-[.5rem] px-[2rem] text-center">
          <div data-aos="fade-up" data-aos-delay="0">
            <SectionLabel label="Our Projects at a Glance" />
          </div>

          <div data-aos="fade-up" data-aos-delay="100">
            <SectionTitle label="Delivering Excellence, One Project at a Time" />
          </div>
        </div>

        <div className="mt-[6rem] md:mt-[8rem]">
          <div className="flex flex-col gap-[4rem] xl:flex-row xl:gap-[0rem]">
            <div className="xl:w-[27rem]">
              <Swiper
                onSwiper={(swiper) => (textSwiperRef.current = swiper)}
                onSlideChange={(swiper) => {
                  setActiveIndex(swiper.realIndex);
                }}
                modules={[Autoplay]}
                allowTouchMove={false} // disables dragging/swiping
                simulateTouch={false} // disables simulated click drag
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="flex h-full flex-col justify-between gap-[2rem]">
                    <div className="flex flex-col gap-[1rem]">
                      <h4 className="border-l border-[#006BFF] pr-[11.2rem] pl-[1.6rem] text-[2rem] leading-[3rem] font-medium tracking-[0.2px] md:text-[2.4rem]">
                        Completed
                      </h4>

                      <p className="pr-[2rem] pl-[1.6rem] text-[1.5rem] leading-[2.4rem] font-light tracking-[0.2px]">
                        Projects delivered with excellence and precision.
                      </p>
                    </div>

                    <div className="flex flex-col gap-[1rem]">
                      <h4 className="border-l border-[#006BFF] pr-[11.2rem] pl-[1.6rem] text-[2rem] leading-[3rem] font-medium tracking-[0.2px] md:text-[2.4rem]">
                        Results
                      </h4>

                      <p className="pr-[2rem] pl-[1.6rem] text-[1.5rem] leading-[2.4rem] font-light tracking-[0.2px]">
                        Proven outcomes across industrial infrastructure
                        sectors.
                      </p>
                    </div>

                    <div className="flex flex-col gap-[2rem]">
                      <h4 className="border-l border-[#006BFF] pr-[11.2rem] pl-[1.6rem] text-[1.5rem] leading-[2rem] font-medium tracking-[0.2px]">
                        Milestones
                      </h4>

                      <ul className="flex flex-col gap-[1rem] pr-[2rem] pl-[1.6rem]">
                        <li className="flex items-center gap-[1rem] text-[1.5rem] leading-[2rem] font-light tracking-[0.2px]">
                          <Factory className="size-[1.8rem]" />
                          <span className="xl:max-w-[18rem]">
                            150+ industrial installations delivered
                          </span>
                        </li>

                        <li className="flex items-center gap-[1rem] text-[1.5rem] leading-[2rem] font-light tracking-[0.2px]">
                          <Flame className="size-[1.8rem]" />
                          <span className="xl:max-w-[18rem]">
                            20+ refinery and pipeline systems completed
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="flex h-full flex-col justify-between gap-[2rem]">
                    <div className="flex flex-col gap-[1rem]">
                      <h4 className="border-l border-[#006BFF] pr-[11.2rem] pl-[1.6rem] text-[2rem] leading-[3rem] font-medium tracking-[0.2px] md:text-[2.4rem]">
                        Ongoing
                      </h4>

                      <p className="pr-[2rem] pl-[1.6rem] text-[1.5rem] leading-[2.4rem] font-light tracking-[0.2px]">
                        Active projects advancing with skilled execution teams.
                      </p>
                    </div>

                    <div className="flex flex-col gap-[1rem]">
                      <h4 className="border-l border-[#006BFF] pr-[11.2rem] pl-[1.6rem] text-[2rem] leading-[3rem] font-medium tracking-[0.2px] md:text-[2.4rem]">
                        Progress
                      </h4>

                      <p className="pr-[2rem] pl-[1.6rem] text-[1.5rem] leading-[2.4rem] font-light tracking-[0.2px]">
                        Delivering impact through ongoing strategic operations.
                      </p>
                    </div>

                    <div className="flex flex-col gap-[2rem]">
                      <h4 className="border-l border-[#006BFF] pr-[11.2rem] pl-[1.6rem] text-[1.5rem] leading-[2rem] font-medium tracking-[0.2px]">
                        Updates
                      </h4>

                      <ul className="flex flex-col gap-[1rem] pr-[2rem] pl-[1.6rem]">
                        <li className="flex items-center gap-[1rem] text-[1.5rem] leading-[2rem] font-light tracking-[0.2px]">
                          <Hammer className="size-[1.8rem]" />
                          <span className="xl:max-w-[18rem]">
                            Onshore facility construction
                          </span>
                        </li>

                        <li className="flex items-center gap-[1rem] text-[1.5rem] leading-[2rem] font-light tracking-[0.2px]">
                          <Wrench className="size-[1.8rem]" />
                          <span className="xl:max-w-[18rem]">
                            Pipeline installation for gas utility
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="flex h-full flex-col justify-between gap-[2rem]">
                    <div className="flex flex-col gap-[1rem]">
                      <h4 className="border-l border-[#006BFF] pr-[11.2rem] pl-[1.6rem] text-[2rem] leading-[3rem] font-medium tracking-[0.2px] md:text-[2.4rem]">
                        Highlights
                      </h4>

                      <p className="pr-[2rem] pl-[1.6rem] text-[1.5rem] leading-[2.4rem] font-light tracking-[0.2px]">
                        Notable achievements reflecting engineering excellence.
                      </p>
                    </div>

                    <div className="flex flex-col gap-[1rem]">
                      <h4 className="border-l border-[#006BFF] pr-[11.2rem] pl-[1.6rem] text-[2rem] leading-[3rem] font-medium tracking-[0.2px] md:text-[2.4rem]">
                        Trust
                      </h4>

                      <p className="pr-[2rem] pl-[1.6rem] text-[1.5rem] leading-[2.4rem] font-light tracking-[0.2px]">
                        Trusted partner for complex project delivery success.
                      </p>
                    </div>

                    <div className="flex flex-col gap-[2rem]">
                      <h4 className="border-l border-[#006BFF] pr-[11.2rem] pl-[1.6rem] text-[1.5rem] leading-[2rem] font-medium tracking-[0.2px]">
                        Metrics
                      </h4>

                      <ul className="flex flex-col gap-[1rem] pr-[2rem] pl-[1.6rem]">
                        <li className="flex items-center gap-[1rem] text-[1.5rem] leading-[2rem] font-light tracking-[0.2px]">
                          <Truck className="size-[1.8rem]" />
                          <span className="xl:max-w-[18rem]">
                            98% on-time delivery rate
                          </span>
                        </li>

                        <li className="flex items-center gap-[1rem] text-[1.5rem] leading-[2rem] font-light tracking-[0.2px]">
                          <UserCircle className="size-[1.8rem]" />
                          <span className="xl:max-w-[18rem]">
                            95% client retention across projects
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="flex h-full flex-col justify-between gap-[2rem]">
                    <div className="flex flex-col gap-[1rem]">
                      <h4 className="border-l border-[#006BFF] pr-[11.2rem] pl-[1.6rem] text-[2rem] leading-[3rem] font-medium tracking-[0.2px] md:text-[2.4rem]">
                        Future
                      </h4>

                      <p className="pr-[2rem] pl-[1.6rem] text-[1.5rem] leading-[2.4rem] font-light tracking-[0.2px]">
                        Vision-driven goals guiding our next ventures.
                      </p>
                    </div>

                    <div className="flex flex-col gap-[1rem]">
                      <h4 className="border-l border-[#006BFF] pr-[11.2rem] pl-[1.6rem] text-[2rem] leading-[3rem] font-medium tracking-[0.2px] md:text-[2.4rem]">
                        Innovation
                      </h4>

                      <p className="pr-[2rem] pl-[1.6rem] text-[1.5rem] leading-[2.4rem] font-light tracking-[0.2px]">
                        Embracing technology to transform energy solutions.
                      </p>
                    </div>

                    <div className="flex flex-col gap-[2rem]">
                      <h4 className="border-l border-[#006BFF] pr-[11.2rem] pl-[1.6rem] text-[1.5rem] leading-[2rem] font-medium tracking-[0.2px]">
                        Expansion
                      </h4>

                      <ul className="flex flex-col gap-[1rem] pr-[2rem] pl-[1.6rem]">
                        <li className="flex items-center gap-[1rem] text-[1.5rem] leading-[2rem] font-light tracking-[0.2px]">
                          <Layers className="size-[1.8rem]" />
                          <span className="xl:max-w-[18rem]">
                            Entering new regional and global markets
                          </span>
                        </li>

                        <li className="flex items-center gap-[1rem] text-[1.5rem] leading-[2rem] font-light tracking-[0.2px]">
                          <Layers className="size-[1.8rem]" />
                          <span className="xl:max-w-[18rem]">
                            Investing in smart infrastructure upgrades
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>

            <div className="xl:w-[81rem]">
              <Swiper
                onSwiper={(swiper) => (imageSwiperRef.current = swiper)}
                onSlideChange={(swiper) => {
                  setActiveIndex(swiper.realIndex);
                }}
                allowTouchMove={false} // disables dragging/swiping
                simulateTouch={false} // disables simulated click drag
                modules={[Autoplay]}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="group relative size-full h-[41rem] overflow-hidden rounded-[.8rem] bg-pink-100">
                    <img
                      src={projectHighlightImg01}
                      alt="Image"
                      className="size-full object-cover object-center transition-all duration-500 ease-[cubic-bezier(0.7,0,0.3,1)] group-hover:scale-[1.05]"
                    />

                    {/* Default gradient */}
                    <div className="absolute inset-0 size-full bg-gradient-to-t from-[#006affa2] via-[#006BFF]/30 to-[#006BFF]/20 opacity-100 transition-opacity duration-500 ease-[cubic-bezier(0.7,0,0.3,1)] group-hover:opacity-0" />

                    {/* Hover gradient */}
                    <div className="absolute inset-0 size-full bg-gradient-to-t from-[#006aff] via-[#006BFF]/30 to-[#006BFF]/20 opacity-0 transition-opacity duration-500 ease-[cubic-bezier(0.7,0,0.3,1)] group-hover:opacity-100" />

                    <div className="absolute inset-0 flex flex-col justify-between p-[2.4rem]">
                      <div className="flex items-center justify-between">
                        <div className="h-[6rem] max-w-[16rem]">
                          <img
                            src={cooperLogoWhite}
                            alt="Image"
                            className="size-full object-contain object-center"
                          />
                        </div>

                        <div>
                          <BookText className="size-[2.5rem] text-white" />
                        </div>
                      </div>

                      <div className="flex max-w-[46.8rem] flex-col gap-[1rem] pr-[2.4rem]">
                        <h3 className="translate-y-[3rem] transform text-[2.6rem] leading-[3.6rem] font-medium !text-white transition-all duration-500 ease-[cubic-bezier(0.7,0,0.3,1)] group-hover:translate-y-0">
                          Track Record of Success
                        </h3>

                        <div className="translate-y-[1rem] transform opacity-0 transition-all duration-500 ease-[cubic-bezier(0.7,0,0.3,1)] group-hover:translate-y-0 group-hover:opacity-100">
                          <div className="flex gap-[.5rem] text-[1.5rem] leading-[2.4rem] font-light tracking-[0.2px] text-white">
                            <span>Read story</span>
                            <ArrowRight className="relative top-[.4rem] size-[2rem]" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="group relative size-full h-[41rem] overflow-hidden rounded-[.8rem] bg-pink-100">
                    <img
                      src={projectHighlightImg02}
                      alt="Image"
                      className="size-full object-cover object-center transition-all duration-500 ease-[cubic-bezier(0.7,0,0.3,1)] group-hover:scale-[1.05]"
                    />

                    {/* Default gradient */}
                    <div className="absolute inset-0 size-full bg-gradient-to-t from-[#006affa2] via-[#006BFF]/30 to-[#006BFF]/20 opacity-100 transition-opacity duration-500 ease-[cubic-bezier(0.7,0,0.3,1)] group-hover:opacity-0" />

                    {/* Hover gradient */}
                    <div className="absolute inset-0 size-full bg-gradient-to-t from-[#006aff] via-[#006BFF]/30 to-[#006BFF]/20 opacity-0 transition-opacity duration-500 ease-[cubic-bezier(0.7,0,0.3,1)] group-hover:opacity-100" />

                    <div className="absolute inset-0 flex flex-col justify-between p-[2.4rem]">
                      <div className="flex items-center justify-between">
                        <div className="h-[6rem] max-w-[16rem]">
                          <img
                            src={molLogoWhite}
                            alt="Image"
                            className="size-full object-contain object-center"
                          />
                        </div>

                        <div>
                          <BookText className="size-[2.5rem] text-white" />
                        </div>
                      </div>

                      <div className="flex max-w-[46.8rem] flex-col gap-[1rem] pr-[2.4rem]">
                        <h3 className="translate-y-[3rem] transform text-[2.6rem] leading-[3.6rem] font-medium !text-white transition-all duration-500 ease-[cubic-bezier(0.7,0,0.3,1)] group-hover:translate-y-0">
                          Building the Future Now
                        </h3>

                        <div className="translate-y-[1rem] transform opacity-0 transition-all duration-500 ease-[cubic-bezier(0.7,0,0.3,1)] group-hover:translate-y-0 group-hover:opacity-100">
                          <div className="flex gap-[.5rem] text-[1.5rem] leading-[2.4rem] font-light tracking-[0.2px] text-white">
                            <span>Read story</span>
                            <ArrowRight className="relative top-[.4rem] size-[2rem]" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="group relative size-full h-[41rem] overflow-hidden rounded-[.8rem] bg-pink-100">
                    <img
                      src={projectHighlightImg03}
                      alt="Image"
                      className="size-full object-cover object-center transition-all duration-500 ease-[cubic-bezier(0.7,0,0.3,1)] group-hover:scale-[1.05]"
                    />

                    {/* Default gradient */}
                    <div className="absolute inset-0 size-full bg-gradient-to-t from-[#006affa2] via-[#006BFF]/30 to-[#006BFF]/20 opacity-100 transition-opacity duration-500 ease-[cubic-bezier(0.7,0,0.3,1)] group-hover:opacity-0" />

                    {/* Hover gradient */}
                    <div className="absolute inset-0 size-full bg-gradient-to-t from-[#006aff] via-[#006BFF]/30 to-[#006BFF]/20 opacity-0 transition-opacity duration-500 ease-[cubic-bezier(0.7,0,0.3,1)] group-hover:opacity-100" />

                    <div className="absolute inset-0 flex flex-col justify-between p-[2.4rem]">
                      <div className="flex items-center justify-between">
                        <div className="h-[6rem] max-w-[16rem]">
                          <img
                            src={mariLogoWhite}
                            alt="Image"
                            className="size-full object-contain object-center"
                          />
                        </div>

                        <div>
                          <BookText className="size-[2.5rem] text-white" />
                        </div>
                      </div>

                      <div className="flex max-w-[46.8rem] flex-col gap-[1rem] pr-[2.4rem]">
                        <h3 className="translate-y-[3rem] transform text-[2.6rem] leading-[3.6rem] font-medium !text-white transition-all duration-500 ease-[cubic-bezier(0.7,0,0.3,1)] group-hover:translate-y-0">
                          Recognized for Performance
                        </h3>

                        <div className="translate-y-[1rem] transform opacity-0 transition-all duration-500 ease-[cubic-bezier(0.7,0,0.3,1)] group-hover:translate-y-0 group-hover:opacity-100">
                          <div className="flex gap-[.5rem] text-[1.5rem] leading-[2.4rem] font-light tracking-[0.2px] text-white">
                            <span>Read story</span>
                            <ArrowRight className="relative top-[.4rem] size-[2rem]" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="group relative size-full h-[41rem] overflow-hidden rounded-[.8rem] bg-pink-100">
                    <img
                      src={projectHighlightImg04}
                      alt="Image"
                      className="size-full object-cover object-center transition-all duration-500 ease-[cubic-bezier(0.7,0,0.3,1)] group-hover:scale-[1.05]"
                    />

                    {/* Default gradient */}
                    <div className="absolute inset-0 size-full bg-gradient-to-t from-[#006affa2] via-[#006BFF]/30 to-[#006BFF]/20 opacity-100 transition-opacity duration-500 ease-[cubic-bezier(0.7,0,0.3,1)] group-hover:opacity-0" />

                    {/* Hover gradient */}
                    <div className="absolute inset-0 size-full bg-gradient-to-t from-[#006aff] via-[#006BFF]/30 to-[#006BFF]/20 opacity-0 transition-opacity duration-500 ease-[cubic-bezier(0.7,0,0.3,1)] group-hover:opacity-100" />

                    <div className="absolute inset-0 flex flex-col justify-between p-[2.4rem]">
                      <div className="flex items-center justify-between">
                        <div className="h-[6rem] max-w-[16rem]">
                          <img
                            src={ppLogoWhite}
                            alt="Image"
                            className="size-full object-contain object-center"
                          />
                        </div>

                        <div>
                          <BookText className="size-[2.5rem] text-white" />
                        </div>
                      </div>

                      <div className="flex max-w-[46.8rem] flex-col gap-[1rem] pr-[2.4rem]">
                        <h3 className="translate-y-[3rem] transform text-[2.6rem] leading-[3.6rem] font-medium !text-white transition-all duration-500 ease-[cubic-bezier(0.7,0,0.3,1)] group-hover:translate-y-0">
                          Shaping What Comes Next
                        </h3>

                        <div className="translate-y-[1rem] transform opacity-0 transition-all duration-500 ease-[cubic-bezier(0.7,0,0.3,1)] group-hover:translate-y-0 group-hover:opacity-100">
                          <div className="flex gap-[.5rem] text-[1.5rem] leading-[2.4rem] font-light tracking-[0.2px] text-white">
                            <span>Read story</span>
                            <ArrowRight className="relative top-[.4rem] size-[2rem]" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>

          {/* Custom Slider Button */}
          <div className="mt-[4rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {[cooperLogo, molLogo, mariLogo, ppLogo].map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  textSwiperRef.current?.slideTo(index);
                  imageSwiperRef.current?.slideTo(index);
                }}
                className="relative flex cursor-pointer items-center justify-center border-t border-dashed border-[#cdcdcd75] py-[2rem] transition"
              >
                <div className="h-[6rem] max-w-[16rem]">
                  <img
                    src={item}
                    alt={`Client ${index + 1}`}
                    className="size-full object-contain object-center"
                  />
                </div>

                {activeIndex === index && (
                  <div className="absolute top-[-1px] left-0 h-[1px] w-full overflow-hidden">
                    <div className="progress-line absolute top-0 left-0 h-full bg-[#006BFF]" />
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectHighlightSection;
