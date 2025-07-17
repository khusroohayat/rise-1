import AboutSection from "@/components/sections/AboutSection";
import BlogSection from "@/components/sections/BlogSection";
import ContactSection from "@/components/sections/ContactSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import HeroSection from "@/components/sections/HeroSection";
import ServiceSection from "@/components/sections/ServiceSection";
import TeamSection from "@/components/sections/TeamSection";
import TrustedSection from "@/components/sections/TrustedSection";
import WhyChooseSection from "@/components/sections/WhyChooseSection";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <main className="overflow-hidden">
      <Helmet>
        <title>RISE Engineering</title>
        <meta
          name="description"
          content="RadixTech's MEAL System simplifies monitoring and evaluation, delivering real-time insights to empower humanitarian aid organizations."
        />
      </Helmet>

      <HeroSection />
      <TrustedSection />
      <AboutSection />
      <ExperienceSection />
      <ServiceSection />
      <WhyChooseSection />
      <TeamSection />
      <BlogSection />
      <ContactSection />
    </main>
  );
};

export default Home;
