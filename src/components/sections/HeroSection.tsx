// import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import heroImg01 from "../../assets/images/homepage-hero-img-01.jpg";
import heroImg02 from "../../assets/images/homepage-hero-img-02.jpg";
import heroImg03 from "../../assets/images/homepage-hero-img-03.jpg";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const heroImages = [
  {
    png: heroImg02,
    title:
      "Industrial EPC, Maintenance, and Engineering Support for Oil and Gas Industry",
    desc: "Delivering expert EPC, maintenance, and field services that minimize downtime and maximize operational reliability for your assets.",
  },
  {
    png: heroImg01,
    title:
      "Comprehensive EPC and Maintenance Services for Oil and Gas Operations",
    desc: "Providing reliable engineering and field solutions that ensure asset uptime, reduce delays, and support safe and efficient oil and gas production.",
  },
  {
    png: heroImg03,
    title: "Reliable Engineering, EPC, and Maintenance for the Energy Sector",
    desc: "Expert-driven support in EPC and field services to enhance asset longevity, boost performance, and minimize costly operational disruptions.",
  },
];

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="px-[2rem] pt-[8rem] md:px-[4rem]">
      <div
        style={{ height: "calc(100vh - 100px)" }}
        className="mx-auto max-w-[150rem] overflow-hidden rounded-[1.5rem]"
      >
        <Swiper
          effect="fade"
          loop={true}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          modules={[Autoplay, EffectFade]}
          allowTouchMove={false} // disables dragging/swiping
          simulateTouch={false} // disables simulated click drag
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="hero-slider"
        >
          {heroImages.map((item, idx) => (
            <SwiperSlide key={idx} className="relative">
              {/* Overlay */}
              {/* <div className="absolute z-[1] size-full bg-black/50" /> */}

              <div className="size-full">
                <picture>
                  <img
                    src={item.png}
                    alt="Hero Image"
                    loading="lazy"
                    className="size-full object-cover object-center"
                  />
                </picture>
              </div>

              <div className="absolute bottom-[5rem] left-1/2 w-full max-w-[134rem] -translate-x-1/2 rounded-[.8rem] bg-[#006BFF]/50 p-[2rem]">
                <div className="flex flex-col items-center justify-center gap-[4rem] text-center md:gap-[6rem] xl:flex-row xl:items-end xl:justify-between xl:text-left">
                  <h1
                    className={`max-w-[70rem] text-[2.4rem] leading-[3rem] font-semibold text-white uppercase transition-opacity delay-200 duration-700 md:text-[4rem] md:leading-[5.6rem] md:font-bold ${
                      activeIndex === idx ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {item.title}
                  </h1>

                  <div className="max-w-[50rem]">
                    <div className="progress-wrapper">
                      <div
                        key={activeIndex} // resets animation on slide change
                        className="progress-bar"
                        style={{ animationDuration: "3.5s" }} // same as Swiper autoplay delay
                      />
                    </div>

                    <p
                      className={`my-[2rem] text-white transition-opacity delay-200 duration-700 md:text-[2rem] md:leading-[3rem] md:font-normal ${
                        activeIndex === idx ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      {item.desc}
                    </p>

                    <div
                      className={`flex flex-col items-center justify-center gap-[1rem] md:flex-row xl:justify-start`}
                    >
                      <Button variant="dark" asChild>
                        <NavLink to="/services">
                          <span>Explore Our Services</span>
                        </NavLink>
                        {/* <div className="relative inline-flex size-[3.3rem] items-center justify-center rounded-[.8rem] bg-white">
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
                        </div> */}
                      </Button>

                      <Button className="text-white">
                        <NavLink to="/projects">
                          <span>View Projects</span>
                        </NavLink>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default HeroSection;
