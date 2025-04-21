import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/swiper-bundle.css"; // or 'swiper/css/bundle' for modular CSS
import { ArrowRight } from "lucide-react";
import services from "../../assets/images/services.jpg";
import upgrades from "../../assets/images/upgrades.jpg";
import partsEquipment from "../../assets/images/parts-equipment.jpg";
// import newEngines from "../../assets/images/new-engines.jpg";
import sliderIcon1 from "../../assets/images/slider-icon-1.png";
import sliderIcon2 from "../../assets/images/slider-icon-2.png";
import sliderIcon3 from "../../assets/images/slider-icon-3.png";
import whiteLogo from "../../assets/images/white-logo-rise.png";

// import required modules
import { Autoplay } from "swiper/modules";

const CarouselSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const leftSwiperRef = useRef<SwiperCore | null>(null);
  const rightSwiperRef = useRef<SwiperCore | null>(null);

  const handlePaginationClick = (index: number) => {
    leftSwiperRef.current?.slideTo(index);
    rightSwiperRef.current?.slideTo(index);
  };

  return (
    <div className="h-full w-full">
      <div className="flex h-full flex-col gap-[2rem] sm:gap-[4rem] lg:flex-row lg:gap-[0rem]">
        {/* Left Slider */}
        <div className="w-full sm:w-[60rem] lg:w-[30rem]">
          <Swiper
            modules={[Autoplay]}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            onSwiper={(swiper) => (leftSwiperRef.current = swiper)}
            className="mySwiper rounded-[1rem]"
            allowTouchMove={false}
            speed={800}
            autoplay={{ delay: 1000, disableOnInteraction: false }} // Autoplay settings
          >
            <SwiperSlide className="pr-[3.2rem]">
              {/* Slide 1 Content */}
              <div className="grid gap-[5rem]">
                <div className="flex flex-col gap-[.8rem]">
                  <h5 className="pr-[11.2rem] pl-[1.6rem] text-[2.4rem] font-medium">
                    Services
                  </h5>
                  <ul className="flex flex-col gap-[1rem] pr-[2rem] pl-[1.6rem] text-[1.5rem] text-[#425466]">
                    <li>
                      Our certified technicians spend more time at your facility
                      than at our offices, delivering hands-on solutions where
                      they matter most.
                    </li>

                    <li>
                      Combining decades of equipment-specific experience with
                      cutting-edge diagnostic technologies for Superior, Ariel,
                      and Waukesha systems.
                    </li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="pr-[3.2rem]">
              {/* Slide 1 Content */}
              <div className="grid gap-[5rem]">
                <div className="flex flex-col gap-[.8rem]">
                  <h5 className="pr-[11.2rem] pl-[1.6rem] text-[2.4rem] font-medium">
                    Parts & Equipment
                  </h5>
                  <ul className="flex flex-col gap-[1rem] pr-[2rem] pl-[1.6rem] text-[1.5rem] text-[#425466]">
                    <li>
                      Focuses on having the right products in stock when the
                      customer calls.
                    </li>
                    <li>
                      Strives to make customer satisfaction easy and efficient.
                    </li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="pr-[3.2rem]">
              {/* Slide 1 Content */}
              <div className="grid gap-[5rem]">
                <div className="flex flex-col gap-[.8rem]">
                  <h5 className="pr-[11.2rem] pl-[1.6rem] text-[2.4rem] font-medium">
                    Upgrades
                  </h5>
                  <ul className="flex flex-col gap-[1rem] pr-[2rem] pl-[1.6rem] text-[1.5rem] text-[#425466]">
                    <li>Offers a range of upgrade solutions.</li>
                    <li>Aims to reduce engine emissions.</li>
                    <li>Enhances engine and compressor performance.</li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Right Slider */}
        <Swiper
          modules={[Autoplay]}
          onSwiper={(swiper) => (rightSwiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          className="mySwiper w-full rounded-[1rem]"
          allowTouchMove={false}
          speed={800}
          autoplay={{ delay: 1000, disableOnInteraction: false }} // Autoplay settings
        >
          <SwiperSlide className="group relative overflow-hidden rounded-[1rem]">
            <div className="h-[45rem] w-full">
              <img
                src={whiteLogo}
                alt="Image"
                className="absolute top-[2rem] right-[2rem] max-w-[25rem]"
              />

              <img
                src={services}
                alt="Image"
                className="size-full object-cover"
              />

              <div className="absolute inset-0 flex size-full flex-col justify-between p-[2.4rem]">
                <div className="flex items-center justify-between opacity-0">
                  <div className="size-[4rem] bg-amber-300"></div>
                  <div className="size-[2rem] bg-amber-300"></div>
                </div>

                <div>
                  <h4 className="relative top-[0rem] max-w-[46.8rem] text-[2.6rem] leading-[3.6rem] font-medium text-white transition-all duration-400 group-hover:top-[-1rem]">
                    Services
                  </h4>

                  <button className="relative bottom-[-10rem] flex text-[1.6rem] font-light text-white transition-all duration-400 group-hover:bottom-[0rem]">
                    <span>Discover Services</span>{" "}
                    <ArrowRight className="relative top-[8px] left-[.5rem] size-[1.2rem] stroke-3 transition-all duration-200" />
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="group relative overflow-hidden rounded-[1rem]">
            <div className="h-[45rem] w-full">
              <img
                src={whiteLogo}
                alt="Image"
                className="absolute top-[2rem] right-[2rem] max-w-[25rem]"
              />

              <img
                src={partsEquipment}
                alt="Image"
                className="size-full object-cover"
              />

              <div className="absolute inset-0 flex size-full flex-col justify-between p-[2.4rem]">
                <div className="flex items-center justify-between opacity-0">
                  <div className="size-[4rem] bg-amber-300"></div>
                  <div className="size-[2rem] bg-amber-300"></div>
                </div>

                <div>
                  <h4 className="relative top-[0rem] max-w-[46.8rem] text-[2.6rem] leading-[3.6rem] font-medium text-white transition-all duration-400 group-hover:top-[-1rem]">
                    Parts & Equipment
                  </h4>

                  <button className="relative bottom-[-10rem] flex text-[1.6rem] font-light text-white transition-all duration-400 group-hover:bottom-[0rem]">
                    <span>Discover Parts & Equipment</span>{" "}
                    <ArrowRight className="relative top-[8px] left-[.5rem] size-[1.2rem] stroke-3 transition-all duration-200" />
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="group relative overflow-hidden rounded-[1rem]">
            <div className="h-[45rem] w-full">
              <img
                src={whiteLogo}
                alt="Image"
                className="absolute top-[2rem] right-[2rem] max-w-[25rem]"
              />

              <img
                src={upgrades}
                alt="Image"
                className="size-full object-cover"
              />

              <div className="absolute inset-0 flex size-full flex-col justify-between p-[2.4rem]">
                <div className="flex items-center justify-between opacity-0">
                  <div className="size-[4rem] bg-amber-300"></div>
                  <div className="size-[2rem] bg-amber-300"></div>
                </div>

                <div>
                  <h4 className="relative top-[0rem] max-w-[46.8rem] text-[2.6rem] leading-[3.6rem] font-medium text-white transition-all duration-400 group-hover:top-[-1rem]">
                    Upgrades
                  </h4>

                  <button className="relative bottom-[-10rem] flex text-[1.6rem] font-light text-white transition-all duration-400 group-hover:bottom-[0rem]">
                    <span>Discover Upgrades</span>{" "}
                    <ArrowRight className="relative top-[8px] left-[.5rem] size-[1.2rem] stroke-3 transition-all duration-200" />
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Custom Pagination */}
      <div className="mt-[6rem] grid grid-cols-3 justify-items-center gap-[1rem]">
        {[sliderIcon1, sliderIcon2, sliderIcon3].map((item, idx) => (
          <button
            key={idx}
            onClick={() => handlePaginationClick(idx)}
            className="flex w-full items-center justify-center transition-all duration-400"
          >
            <div
              className={`flex size-[8rem] items-center justify-center rounded-full text-[1.4rem] text-white transition-all duration-400 ${activeIndex === idx ? "bg-[var(--secondary-color)]" : "bg-[var(--primary-color)]"}`}
            >
              <img src={item} alt="Icon" className="size-[5rem]" />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CarouselSlider;
