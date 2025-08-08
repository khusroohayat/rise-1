import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionLabel from "../common/SectionLabel";
import SectionTitle from "../common/SectionTitle";
import { faqsAccordionData } from "@/constants/constants";

const FaqSection = () => {
  return (
    <section className="px-[2rem] py-[6rem] md:px-[4rem] md:py-[10rem]">
      <div className="container">
        <div className="mx-auto flex max-w-[60rem] flex-col items-center gap-[.5rem] text-center">
          <div data-aos="fade-up" data-aos-delay="0">
            <SectionLabel label="FAQs" />
          </div>

          <div data-aos="fade-up" data-aos-delay="100">
            <SectionTitle label="Answers to Your Common Questions" />
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="mt-[6rem] md:mt-[8rem]"
        >
          <Accordion
            data-aos="fade-up"
            className="w-full"
            type="single"
            collapsible
            defaultValue="item-1" // ✅ this opens accordion 1 on load
          >
            {faqsAccordionData.map((item) => (
              <AccordionItem
                key={item.value}
                value={item.value}
                className="!border-b border-solid border-[#C9C9C9] py-[1rem]"
              >
                <AccordionTrigger className="rounded-none border-[#006BFF] text-left text-[1.6rem] leading-[2.4rem] font-normal !no-underline data-[state=open]:border-l-[4px] data-[state=open]:pl-[1rem] md:text-[1.8rem]">
                  <span>{item.title}</span>
                </AccordionTrigger>
                <AccordionContent className="pt-[1.5rem] text-[1.4rem] font-light">
                  <p>{item.content}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
