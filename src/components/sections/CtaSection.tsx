import { Mail, Phone } from "lucide-react";
import ctaImage from "../../assets/images/cta-image.png";
import { Button } from "../ui/button";
import { NavLink } from "react-router-dom";

const CtaSection = () => {
  return (
    <section className="bg-[#EFECEB] px-[2rem] py-[6rem] md:px-[4rem] md:py-[10rem]">
      <div
        data-aos="fade-up"
        data-aos-delay="0"
        className="mx-auto grid max-w-[128rem] grid-cols-1 items-end justify-items-center gap-[4rem] lg:grid-cols-2 lg:justify-items-normal xl:gap-[0rem]"
      >
        <div className="flex justify-center">
          <div className="max-w-[50rem] overflow-hidden rounded-[1.2rem]">
            <img
              src={ctaImage}
              alt="Image"
              className="size-full object-contain object-center"
            />
          </div>
        </div>

        <div>
          <div className="max-w-[50rem]">
            <h3 className="text-[2.8rem] leading-[3.2rem] font-semibold tracking-[-0.32px] md:text-[3.2rem] md:leading-[4rem]">
              Partner with Us to Power the Future of Energy
            </h3>

            <p className="mt-[3rem] mb-[2rem] text-[1.8rem] leading-[2.6rem] font-extralight tracking-[0.1px]">
              From exploration to operations, our expert-driven approach ensures
              excellence at every step. Let’s build something
              impactful—together.
            </p>

            <div className="flex flex-col items-start justify-between gap-[1.8rem] border-b border-[#CCDFFF] pb-[2rem] xl:flex-row xl:items-center">
              <h4 className="max-w-[25rem] text-[1.8rem] leading-[2.6rem] font-extralight tracking-[0.1px]">
                Let’s discuss how we can bring your vision to life.
              </h4>

              <span className="min-w-min rounded-full bg-amber-400 px-[1.5rem] py-[1rem] text-[1.6rem] leading-[2.4rem] font-light tracking-[0.1px]">
                Have a project in mind?
              </span>
            </div>

            <div className="mt-[2rem] mb-[4rem] flex flex-col items-start gap-[2rem] xl:flex-row xl:items-center xl:gap-[4.8rem]">
              <div className="flex gap-[1.2rem]">
                <Mail className="relative top-[.2rem] size-[2.4rem] stroke-[1.5px] text-[#006BFF]" />
                <a
                  href="mailto:enquiries@risengineering.org"
                  className="text-[1.8rem] leading-[2.4rem] font-normal tracking-[-0.22px] hover:underline"
                >
                  enquiries@risengineering.org
                </a>
              </div>

              <div className="flex gap-[1.6rem]">
                <Phone className="relative top-[.2rem] size-[2.4rem] stroke-[1.5px] text-[#006BFF]" />
                <a
                  href="tel:+922137120968"
                  className="text-[1.8rem] leading-[2.4rem] font-normal tracking-[-0.22px] hover:underline"
                >
                  +92 21 371 20968
                </a>
              </div>
            </div>

            <Button variant="dark" asChild>
              <NavLink to="/contact">
                <span>Get in touch</span>
              </NavLink>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
