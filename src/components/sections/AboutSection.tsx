import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import aboutImg01 from "../../assets/images/about-img-01.png";
import aboutImg02 from "../../assets/images/about-img-02.png";
import aboutImg03 from "../../assets/images/about-img-03.png";
import SectionLabel from "../common/SectionLabel";
import SectionTitle from "../common/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { useState } from "react";

const AboutSection = () => {
  const [swiperRef, setSwiperRef] = useState<SwiperCore | null>(null);

  return (
    <section className="bg-[#F7F7F7] px-[2rem] py-[6rem] md:px-[4rem] md:py-[10rem]">
      <div className="mx-auto grid max-w-[128rem] grid-cols-1 items-center gap-[6rem] xl:grid-cols-2 xl:gap-[0rem]">
        <div className="flex flex-col gap-[4rem] xl:pr-[8rem]">
          <div className="flex flex-col items-center gap-[1rem] text-center xl:items-start xl:text-left">
            <div data-aos="fade-up" data-aos-delay="0">
              <SectionLabel label="About RISE" />
            </div>

            <div data-aos="fade-up" data-aos-delay="100">
              <SectionTitle label="Solving Industrial Challenges with Smart Execution" />
            </div>
          </div>

          <Accordion
            data-aos="fade-up"
            className="w-full"
            type="single"
            collapsible
            defaultValue="item-1" // ✅ this opens accordion 1 on load
            onValueChange={(value) => {
              if (!swiperRef) return;
              if (value === "item-1") swiperRef.slideTo(0);
              if (value === "item-2") swiperRef.slideTo(1);
              if (value === "item-3") swiperRef.slideTo(2);
            }}
          >
            <AccordionItem
              value="item-1"
              className="!border-b border-solid border-[#C9C9C9] py-[1rem]"
            >
              <AccordionTrigger className="rounded-none border-[#006BFF] text-[1.6rem] leading-[2.4rem] font-normal !no-underline data-[state=open]:border-l-[4px] data-[state=open]:pl-[1rem] md:text-[1.8rem]">
                <span>Who We Are</span>
              </AccordionTrigger>
              <AccordionContent className="pt-[1.5rem] text-[1.4rem] font-light">
                <p>
                  RISE (Reliable Industrial Solutions Engineering) is a
                  specialized engineering company built by industry veterans
                  with over 40 years of combined experience. We provide
                  end-to-end support in Exploration & Production, EPC, and
                  industrial maintenance.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="!border-b border-solid border-[#C9C9C9] py-[1rem]"
            >
              <AccordionTrigger className="rounded-none border-[#006BFF] text-[1.6rem] leading-[2.4rem] font-normal !no-underline data-[state=open]:border-l-[4px] data-[state=open]:pl-[1rem] md:text-[1.8rem]">
                <span>Our Approach</span>
              </AccordionTrigger>
              <AccordionContent className="pt-[1.5rem] text-[1.4rem] font-light">
                <p>
                  We work side by side with clients to understand their
                  operational needs and challenges. Our approach focuses on
                  tailored engineering, safety-first execution, and continuous
                  performance monitoring.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="!border-b border-solid border-[#C9C9C9] py-[1rem]"
            >
              <AccordionTrigger className="rounded-none border-[#006BFF] text-[1.6rem] leading-[2.4rem] font-normal !no-underline data-[state=open]:border-l-[4px] data-[state=open]:pl-[1rem] md:text-[1.8rem]">
                <span>Our Commitment</span>
              </AccordionTrigger>
              <AccordionContent className="pt-[1.5rem] text-[1.4rem] font-light">
                <p>
                  We are committed to delivering safe, timely, and
                  cost-effective solutions without cutting corners. Our people,
                  processes, and values are aligned around quality, integrity,
                  and respect for the environment.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <Swiper
          onSwiper={setSwiperRef}
          effect="fade"
          modules={[EffectFade]}
          className="mySwiper"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {[aboutImg02, aboutImg01, aboutImg03].map((item, idx) => (
            <SwiperSlide key={idx} className="!h-auto">
              <div className="h-full overflow-hidden rounded-[1.2rem]">
                <img
                  src={item}
                  alt="About Image"
                  className="size-full object-cover object-center"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default AboutSection;
