import PageHeroSection from "@/components/common/PageHeroSection";
import { Helmet } from "react-helmet-async";
import resourcesImg01 from "../assets/images/resources-page-img-01.png";
import resourcesImg02 from "../assets/images/resources-page-img-02.png";
import resourcesImg03 from "../assets/images/resources-page-img-03.png";
import { Button } from "@/components/ui/button";
import CaseStudySection from "@/components/sections/CaseStudySection";
import BlogSection from "@/components/sections/BlogSection";
import FaqSection from "@/components/sections/FaqSection";
import CtaSection from "@/components/sections/CtaSection";
import NewsSection from "@/components/sections/NewsSection";
import { NavLink } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

const Resources = () => {
  return (
    <main>
      <Helmet>
        <title>RISE Engineering - Resources</title>
        <meta
          name="description"
          content="RadixTech's MEAL System simplifies monitoring and evaluation, delivering real-time insights to empower humanitarian aid organizations."
        />
      </Helmet>
      <PageHeroSection
        title="Technical Excellence & Industry Insights"
        description="Discover a curated library of technical documents, project case studies, and expert insights designed to help you understand our capabilities and the evolving energy landscape."
        benefits={[
          "Access up-to-date engineering & EPCC documentation",
          "Learn how RISE delivers results in complex oil & gas projects",
        ]}
        slides={[
          {
            image: resourcesImg03,
            title: "Complete EPCC Solutions",
            description:
              "From plant design to final commissioning, RISE delivers turnkey Engineering, Procurement, Construction, and Commissioning services — on time and aligned with industry standards.",
          },
          {
            image: resourcesImg02,
            title: "Ongoing Operational Support",
            description:
              "We provide preventive maintenance, engine diagnostics, gas system support, and automation — ensuring your operations remain optimized and uninterrupted.",
          },
          {
            image: resourcesImg01,
            title: "Specialized Civil Works",
            description:
              "RISE also handles standalone civil projects with a focus on structural integrity, safety, and quality — built to last in even the most demanding environments.",
          },
        ]}
      >
        <Button variant="dark" asChild>
          <NavHashLink smooth to="#case-studies">
            View Case Studies
          </NavHashLink>
        </Button>
        <Button asChild>
          <NavLink to="/contact">Contact Our Team</NavLink>
        </Button>
      </PageHeroSection>
      <div id="case-studies" className="bg-[#F7F7F7]">
        <CaseStudySection />
      </div>
      <div id="news-updates" className="bg-[#EFECEB]">
        <NewsSection />
      </div>
      <div id="white-paper">
        <BlogSection />
      </div>
      <div className="bg-[#F7F7F7]">
        <FaqSection />
      </div>
      <CtaSection />
    </main>
  );
};

export default Resources;
