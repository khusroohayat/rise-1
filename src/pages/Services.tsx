import PageHeroSection from "@/components/common/PageHeroSection";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import serviceHeroImg01 from "../assets/images/services-page-hero-img-01.png";
import serviceHeroImg02 from "../assets/images/services-page-hero-img-02.png";
import serviceHeroImg03 from "../assets/images/services-page-hero-img-03.png";
import CoreServiceSection from "@/components/sections/CoreServiceSection";
import CtaSection from "@/components/sections/CtaSection";
import ServiceOverviewSection from "@/components/sections/ServiceOverviewSection";
import TrustedSection from "@/components/sections/TrustedSection";
import WhyChooseSection from "@/components/sections/WhyChooseSection";
import FaqSection from "@/components/sections/FaqSection";
import { NavLink } from "react-router-dom";

const Services = () => {
  return (
    <main>
      <Helmet>
        <title>RISE Engineering - Services</title>
        <meta
          name="description"
          content="RadixTech's MEAL System simplifies monitoring and evaluation, delivering real-time insights to empower humanitarian aid organizations."
        />
      </Helmet>

      <PageHeroSection
        title="End-to-End Engineering Solutions You Can Trust"
        description="From design to commissioning, we deliver scalable, reliable, and efficient services tailored for the oil, gas, and energy industries across the GCC region."
        benefits={["Industry-Focused", "ISO-Certified Standards"]}
        slides={[
          {
            image: serviceHeroImg01,
            title: "Engineering & Project Scoping",
            description:
              "Expert-led plant design and detailed technical scoping tailored to upstream and downstream oil & gas operations across the GCC.",
          },
          {
            image: serviceHeroImg02,
            title: "EPCC Execution & Construction Management",
            description:
              "Seamless integration of engineering, procurement, construction, and commissioning — ensuring safety, quality, and on-time delivery.",
          },
          {
            image: serviceHeroImg03,
            title: "Operations, Maintenance & Automation",
            description:
              "In-house maintenance for engines and gas systems, with smart automation support to optimize uptime and extend asset life.",
          },
        ]}
      >
        <Button variant="dark" asChild>
          <NavLink to="/services">Explore Our Services</NavLink>
        </Button>
        <Button asChild>
          <NavLink to="/contact">Get a Free Consultation</NavLink>
        </Button>
      </PageHeroSection>
      <div className="bg-[#F7F7F7]">
        <ServiceOverviewSection />
      </div>
      <div className="bg-[#EFECEB]">
        <CoreServiceSection />
      </div>
      <TrustedSection />
      <WhyChooseSection />
      <CtaSection />
      <FaqSection />
    </main>
  );
};

export default Services;
