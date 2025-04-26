import { Plus } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import mainImg from "../../assets/images/founder-msg-img.jpg";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // ✅ Add this

const AboutSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 300,
    });
  }, []);

  return (
    <section className="bg-[#ffffff] px-[2rem] lg:px-[0rem]">
      <div className="container grid grid-cols-1 items-center gap-[4rem] py-[6rem] lg:grid-cols-2 lg:items-start">
        <div className="flex flex-col items-center gap-[4rem] text-center lg:items-start lg:text-left">
          <div>
            <h5
              data-aos="fade-left"
              className="text-[2rem] leading-[1.6rem] font-medium text-[var(--primary-color)] uppercase"
            >
              Founders' Message
            </h5>

            <h2
              data-aos="fade-left"
              className="text-[2.8rem] leading-[4rem] font-light tracking-[-0.48px]"
            >
              More than a service provider — your long-term industrial partner.
            </h2>
          </div>

          <Accordion
            data-aos="fade-left"
            className="w-full"
            type="single"
            collapsible
          >
            <AccordionItem
              value="item-1"
              className="!border-b border-solid border-[#C9C9C9] py-[1rem]"
            >
              <AccordionTrigger className="rounded-none border-[var(--primary-color)] text-[1.8rem] leading-[2.4rem] font-normal !no-underline data-[state=open]:border-l-[4px] data-[state=open]:pl-[1rem]">
                <span>Our Purpose</span>
                <Plus className="size-[2rem] transition-transform duration-300" />
              </AccordionTrigger>
              <AccordionContent className="pt-[1.5rem] text-[1.4rem] font-light">
                <p>
                  The world of technology has left voids it has progressed and
                  developed over the time; RISE is filling the gaps by achieving
                  a seamless ecosystem for our customers. With a combined
                  experience of four (04) decades; Reliable Industrial Solutions
                  Engineering specializes in bringing the industrial equipment
                  services at doorstep of our esteemed clientele.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="!border-b border-solid border-[#C9C9C9] py-[1rem]"
            >
              <AccordionTrigger className="rounded-none border-[var(--primary-color)] text-[1.8rem] leading-[2.4rem] font-normal !no-underline data-[state=open]:border-l-[4px] data-[state=open]:pl-[1rem]">
                <span>Our Aspiration</span>
                <Plus className="size-[2rem] transition-transform duration-300" />
              </AccordionTrigger>
              <AccordionContent className="pt-[1.5rem] text-[1.4rem] font-light">
                <p>
                  We want to be an organization which serves customers & its
                  employees to their 100% satisfaction, serve the humanity
                  professionally and bring values to our customers & employees.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="!border-b border-solid border-[#C9C9C9] py-[1rem]"
            >
              <AccordionTrigger className="rounded-none border-[var(--primary-color)] text-[1.8rem] leading-[2.4rem] font-normal !no-underline data-[state=open]:border-l-[4px] data-[state=open]:pl-[1rem]">
                <span>Our Commitment</span>
                <Plus className="size-[2rem] transition-transform duration-300" />
              </AccordionTrigger>
              <AccordionContent className="pt-[1.5rem] text-[1.4rem] font-light">
                <p>
                  As a long-term partner, we work hard to understand your
                  challenges and we work with you to develop customized
                  solutions that deliver real benefits. We understand your need
                  to minimize downtime and to run your production process
                  without interruptions.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="flex items-start justify-center">
          <div
            data-aos="fade-right"
            className="h-[33rem] w-full max-w-[55rem] overflow-hidden rounded-[1.2rem]"
          >
            <img src={mainImg} alt="Image" className="size-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
