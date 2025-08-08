import { Mail, MapPin, Phone } from "lucide-react";
import SectionLabel from "../common/SectionLabel";
import SectionTitle from "../common/SectionTitle";
import { Button } from "../ui/button";
import mapImg from "../../assets/images/map.png";
import { NavLink } from "react-router-dom";

const ContactSection = () => {
  return (
    <section className="bg-[#F7F7F7] px-[2rem] py-[6rem] md:px-[4rem] md:py-[10rem]">
      <div className="mx-auto grid max-w-[124rem] grid-cols-1 gap-[4rem] lg:grid-cols-[.6fr_1fr] lg:gap-[8rem]">
        <div className="flex flex-col items-start">
          <div data-aos="fade-up" data-aos-delay="0" className="mb-[1rem]">
            <SectionLabel label="Let’s Work Together" />
          </div>

          <div data-aos="fade-up" data-aos-delay="100" className="mb-[3rem]">
            <SectionTitle label="Ready to Power Up Your Operations?" />
          </div>

          <div className="rounded-[1.2rem] bg-[#F7F7F7] py-[2rem] lg:py-[5rem]">
            <h4
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-[2.5rem] leading-[3rem] font-medium"
            >
              General Support
            </h4>

            <div className="mt-[2rem] mb-[4rem] flex flex-col gap-[1.5rem]">
              <a
                data-aos="fade-up"
                data-aos-delay="300"
                href="tel:+922137120968"
                className="flex items-center gap-[1rem] text-[1.8rem] leading-[2.7rem] font-normal text-[#425466] transition-all duration-300 hover:text-[#006BFF]"
              >
                <Phone className="min-w-[2.2rem] text-[#006BFF]" />{" "}
                <span className="max-w-[24rem]">+92 21 371 20968</span>
              </a>

              <a
                data-aos="fade-up"
                data-aos-delay="400"
                href="mailto:enquiries@risengineering.org"
                className="flex items-center gap-[1rem] text-[1.8rem] leading-[2.7rem] font-normal text-[#425466] transition-all duration-300 hover:text-[#006BFF]"
              >
                <Mail className="min-w-[2.2rem] text-[#006BFF]" />{" "}
                <span className="max-w-[24rem]">
                  enquiries@risengineering.org
                </span>
              </a>

              <p
                data-aos="fade-up"
                data-aos-delay="500"
                className="flex items-start gap-[1rem] text-[1.8rem] leading-[2.7rem] font-normal text-[#425466]"
              >
                <MapPin className="min-w-[2.2rem] text-[#006BFF]" />{" "}
                <span className="max-w-[40rem]">
                  Suite 303, Lane 10, Phase 6 Bukhari Commercial Area Defence
                  Housing Authority, Karachi Sindh 75500, Pakistan
                </span>
              </p>
            </div>

            <div data-aos="fade-up" data-aos-delay="600">
              <Button variant="dark">
                <NavLink to="/contact">
                  <span>Contact Us</span>
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
            </div>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="700"
          className="flex flex-col gap-[5rem]"
        >
          <div className="relative">
            <img
              src={mapImg}
              alt="Map Image"
              className="size-full object-cover object-center opacity-20"
            />

            <div className="group absolute top-[10.5rem] left-[20rem] sm:top-[12rem] sm:left-[23rem] md:top-[22rem] md:left-[42rem] lg:top-[17.5rem] lg:left-[33rem] xl:top-[23rem] xl:left-[44rem]">
              {/* Tooltip */}
              <div className="absolute -top-[4rem] left-1/2 z-[10] w-max -translate-x-1/2 scale-0 transform rounded-full bg-[#0B3558] px-[1.2rem] py-[.4rem] text-[1.4rem] leading-[1.8rem] font-normal text-white opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:bg-[#006BFF] group-hover:opacity-100">
                GCC Countries
              </div>

              <div
                className="flex size-[1.4rem] items-center justify-center rounded-full border border-[#0B3558] transition-all duration-300 group-hover:border-[#006BFF]"
                style={{ animation: "pulseScale 1.2s ease-in-out infinite" }}
              >
                <div
                  className="size-[.8rem] rounded-full bg-[#0B3558] transition-all duration-300 group-hover:bg-[#006BFF]"
                  style={{
                    animation: "pulseScale 1.2s ease-in-out infinite",
                    animationDelay: "0.2s",
                  }}
                ></div>
              </div>
            </div>

            <div className="group absolute top-[8.5rem] left-[23rem] sm:top-[10rem] sm:left-[26rem] md:top-[19rem] md:left-[45rem] lg:top-[15rem] lg:left-[36rem] xl:top-[20rem] xl:left-[48rem]">
              {/* Tooltip */}
              <div className="absolute -top-[4rem] left-1/2 z-[10] w-max -translate-x-1/2 scale-0 transform rounded-full bg-[#0B3558] px-[1.2rem] py-[.4rem] text-[1.4rem] leading-[1.8rem] font-normal text-white opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:bg-[#006BFF] group-hover:opacity-100">
                Pakistan
              </div>

              <div
                className="flex size-[1.4rem] items-center justify-center rounded-full border border-[#0B3558] transition-all duration-300 group-hover:border-[#006BFF]"
                style={{ animation: "pulseScale 1.2s ease-in-out infinite" }}
              >
                <div
                  className="size-[.8rem] rounded-full bg-[#0B3558] transition-all duration-300 group-hover:bg-[#006BFF]"
                  style={{
                    animation: "pulseScale 1.2s ease-in-out infinite",
                    animationDelay: "0.2s",
                  }}
                ></div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-[2rem] text-center md:flex-row md:text-left">
            <h4 className="text-[5rem] leading-[5rem] font-medium md:text-[8rem] md:leading-[8rem]">
              1000+
            </h4>
            <p className="max-w-[25rem] font-normal text-[#425466] md:text-[2rem] md:leading-[3rem]">
              Projects and Assignments Delivered Across Pakistan and Worldwide
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
