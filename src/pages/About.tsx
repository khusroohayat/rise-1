import { Helmet } from "react-helmet-async";
import quoteImg from "../assets/images/quote.svg";
import aboutTeamBanner from "../assets/images/about-team-banner.png";
import ofertyPracy from "../assets/images/oferty-pracy.svg";
import email from "../assets/images/email.svg";
import { MoveRight } from "lucide-react";
import { WorldMap } from "@/components/ui/world-map";
import doubleRec from "../assets/images/double-rec.svg";
import doubleLongRec from "../assets/images/double-long-rec.svg";
import KeyPolicySection from "@/components/sections/KeyPolicySection";

const About = () => {
  return (
    <main>
      <Helmet>
        <title>RISE Engineering - About</title>
        <meta
          name="description"
          content="RadixTech's MEAL System simplifies monitoring and evaluation, delivering real-time insights to empower humanitarian aid organizations."
        />
      </Helmet>

      <div
        data-aos="fade-up"
        data-aos-delay="0"
        id="who-we-are"
        className="px-[2rem] py-[8rem] md:px-[4rem] md:py-[10rem] md:pt-[15rem]"
      >
        <div className="mx-auto flex max-w-[128rem] flex-col justify-between gap-[4rem] text-center lg:flex-row lg:text-left">
          <div className="lg:w-[40%]">
            <h4 className="text-[3rem] leading-[4rem] font-medium tracking-[-0.4px] md:text-[4rem] md:leading-[4.6rem] lg:max-w-[45rem]">
              <span className="text-[#006BFF]">Built on Experience.</span>{" "}
              Driven by Reliability.
            </h4>
          </div>

          <div className="flex flex-col gap-[2rem] lg:w-[50%]">
            <p className="text-[1.8rem] font-extralight tracking-[0.1px] md:text-[2rem] md:leading-[3rem]">
              RISE Engineering is a forward-thinking engineering firm delivering
              turnkey solutions across the oil and gas sector, with a core focus
              on the Gulf region. From upstream E&P support to complex EPCC
              projects and operational maintenance, we combine technical
              precision with deep industry insight to serve clients across the
              UAE, Saudi Arabia, Qatar, and beyond.
            </p>

            <p className="text-[1.8rem] font-extralight tracking-[0.1px] md:text-[2rem] md:leading-[3rem]">
              Backed by a multidisciplinary team, we bring together engineering
              design, procurement intelligence, civil expertise, and automation
              capabilities under one roof. Our mission is to deliver reliable,
              cost-effective, and scalable solutions that empower our clients to
              operate efficiently, safely, and sustainably in today’s energy
              landscape.
            </p>
          </div>
        </div>
      </div>

      <div className="relative bg-[#F7F7F7]">
        <div className="absolute top-[-4.9rem] left-[0rem] z-[1] hidden md:block">
          <img
            src={doubleLongRec}
            alt="Element"
            className="size-full object-contain object-center"
          />
        </div>

        <div className="container">
          <WorldMap
            dots={[
              {
                start: {
                  lat: 64.2008,
                  lng: -149.4937,
                }, // Alaska (Fairbanks)
                end: {
                  lat: 34.0522,
                  lng: -118.2437,
                }, // Los Angeles
              },
              {
                start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
                end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
              },
              {
                start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
                end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
              },
              {
                start: { lat: 51.5074, lng: -0.1278 }, // London
                end: { lat: 28.6139, lng: 77.209 }, // New Delhi
              },
              {
                start: { lat: 28.6139, lng: 77.209 }, // New Delhi
                end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
              },
              {
                start: { lat: 28.6139, lng: 77.209 }, // New Delhi
                end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
              },
            ]}
          />
        </div>

        <div className="absolute right-[20rem] bottom-[-7rem] z-[1] hidden max-w-[7rem] rotate-180 md:block">
          <img
            src={doubleRec}
            alt="Element"
            className="size-full object-contain object-center"
          />
        </div>
      </div>

      <div
        id="our-approach"
        className="bg-[#EFECEB] px-[2rem] py-[6rem] md:px-[4rem] md:py-[10rem]"
      >
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="mx-auto flex max-w-[128rem] flex-col items-center justify-between gap-[4rem] text-center lg:flex-row lg:items-start lg:text-left"
        >
          <div className="flex flex-col gap-[2rem] lg:w-[40%]">
            <div className="mx-auto max-w-[5.2rem] lg:mx-0">
              <img
                src={quoteImg}
                alt="Image"
                className="size-full object-contain object-center"
              />
            </div>

            <h4 className="text-[3rem] leading-[4rem] font-medium tracking-[-0.4px] md:text-[4rem] md:leading-[4.6rem] lg:max-w-[45rem]">
              A Commitment to{" "}
              <span className="text-[#006BFF]">Operational Excellence</span>
            </h4>
          </div>

          <div className="flex flex-col gap-[2rem] lg:w-[50%]">
            <p className="text-[1.8rem] font-extralight tracking-[0.1px] md:text-[2rem] md:leading-[3rem]">
              At RISE Engineering, our approach is rooted in clarity,
              collaboration, and execution excellence. We begin every project
              with a deep understanding of client needs, industry standards, and
              operational goals — ensuring each solution is tailored to deliver
              long-term value. Our cross-functional teams integrate engineering
              precision with real-time adaptability, keeping projects aligned
              with timelines and budgets.
            </p>

            <p className="text-[1.8rem] font-extralight tracking-[0.1px] md:text-[2rem] md:leading-[3rem]">
              From initial concept through design, procurement, construction,
              and commissioning, we follow a structured yet flexible methodology
              that reduces risks and accelerates outcomes. Whether it's a
              greenfield project or preventive maintenance, we stay hands-on,
              transparent, and client-focused every step of the way.
            </p>
          </div>
        </div>
      </div>

      <div data-aos="fade-up" data-aos-delay="200">
        <img src={aboutTeamBanner} alt="Image" className="w-full" />
      </div>

      <div
        id="our-commitment"
        className="px-[2rem] py-[6rem] md:px-[4rem] md:py-[10rem]"
      >
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="mx-auto flex max-w-[128rem] flex-col justify-between gap-[4rem] text-center lg:flex-row lg:text-left"
        >
          <div className="flex flex-col gap-[2rem] lg:w-[50%]">
            <p className="text-[1.8rem] font-extralight tracking-[0.1px] md:text-[2rem] md:leading-[3rem]">
              At RISE Engineering, our commitment goes beyond project delivery —
              it's about building lasting partnerships grounded in trust,
              performance, and integrity. We hold ourselves to the highest
              standards of safety, quality, and compliance to ensure our clients
              receive solutions they can rely on, every single time.
            </p>

            <p className="text-[1.8rem] font-extralight tracking-[0.1px] md:text-[2rem] md:leading-[3rem]">
              Our team takes ownership of every phase, from engineering to
              operations, ensuring transparent communication, timely execution,
              and measurable results. Whether it's a small-scale civil project
              or a large-scale EPCC venture, we remain dedicated to exceeding
              expectations and driving sustainable value across every
              initiative.
            </p>
          </div>

          <div className="flex flex-col gap-[2rem] lg:w-[40%]">
            <div className="mx-auto max-w-[5.2rem] lg:mx-0">
              <img
                src={quoteImg}
                alt="Image"
                className="size-full object-contain object-center"
              />
            </div>

            <h4 className="text-[3rem] leading-[4rem] font-medium tracking-[-0.4px] md:text-[4rem] md:leading-[4.6rem] lg:max-w-[45rem]">
              <span className="text-[#006BFF]">Built by</span> Experts Who
              Understand the Industry
            </h4>
          </div>
        </div>
      </div>

      <div id="key-policies" className="bg-[#F7F7F7]">
        <KeyPolicySection />
      </div>

      <div
        id="careers"
        className="bg-[#EFECEB] px-[2rem] py-[6rem] md:px-[4rem] md:py-[10rem]"
      >
        <div
          data-aos="fade-up"
          data-aos-delay="500"
          className="mx-auto grid max-w-[128rem] grid-cols-1 gap-[6rem] lg:grid-cols-2"
        >
          <a
            target="_blank"
            href="https://www.linkedin.com/company/reliable-industrail-solutions-engineering/jobs/"
            className="group flex flex-col items-start gap-[4rem] border-b-[1px] border-[#C9C9C9] pb-[4rem] lg:flex-row lg:justify-start lg:border-r-[1px] lg:border-b-0 lg:pr-[4rem] lg:pb-[0rem]"
          >
            <div className="max-w-[7.2rem]">
              <img
                src={ofertyPracy}
                alt="Image"
                className="size-full object-contain object-center"
              />
            </div>

            <div className="flex flex-col gap-[2rem]">
              <h5 className="text-[2rem] leading-[2.8rem] tracking-[-0.26px] md:text-[2.6rem] md:leading-[3.4rem] lg:max-w-[25rem]">
                Grow Your Career with Purpose
              </h5>

              <h4 className="text-[3rem] leading-[4rem] font-semibold tracking-[-0.4px] group-hover:!text-[#006BFF] md:max-w-[35rem] md:text-[4rem] md:leading-[4.6rem]">
                Build a future with impact and passion.
              </h4>

              <MoveRight className="mt-[1rem] size-[4rem] stroke-[1px] text-[#0B3558] group-hover:text-[#006BFF]" />
            </div>
          </a>

          <a
            target="_blank"
            href="https://www.linkedin.com/company/reliable-industrail-solutions-engineering/jobs/"
            className="group flex flex-col items-start gap-[4rem] pb-[4rem] lg:flex-row lg:justify-start lg:pr-[4rem] lg:pb-[0rem]"
          >
            <div className="max-w-[7.2rem]">
              <img
                src={email}
                alt="Image"
                className="size-full object-contain object-center"
              />
            </div>

            <div className="flex flex-col gap-[2rem]">
              <h5 className="text-[2rem] leading-[2.8rem] tracking-[-0.26px] md:text-[2.6rem] md:leading-[3.4rem] lg:max-w-[25rem]">
                Opportunities for Growth and Learning
              </h5>

              <h4 className="text-[3rem] leading-[4rem] font-semibold tracking-[-0.4px] group-hover:!text-[#006BFF] md:max-w-[35rem] md:text-[4rem] md:leading-[4.6rem]">
                Advance your skills through real project work.
              </h4>

              <MoveRight className="mt-[1rem] size-[4rem] stroke-[1px] text-[#0B3558] group-hover:text-[#006BFF]" />
            </div>
          </a>
        </div>
      </div>
    </main>
  );
};

export default About;
