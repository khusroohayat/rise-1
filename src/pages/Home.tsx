import { Suspense, lazy } from "react";

// Above-the-fold components – load immediately
import HeroSection from "@/components/HeroSection/HeroSection";
import TrustedSection from "@/components/TrustedSection/TrustedSection";

// Lazy-loaded components
const EnterpriseSection = lazy(
  () => import("@/components/EnterpriseSection/EnterpriseSection"),
);
const LaunchSection = lazy(
  () => import("@/components/LaunchSection/LaunchSection"),
);
const SolutionSection = lazy(
  () => import("@/components/SolutionSection/SolutionSection"),
);
const WhySection = lazy(() => import("@/components/WhySection/WhySection"));
const BuiltSection = lazy(
  () => import("@/components/BuiltSection/BuiltSection"),
);
const AboutSection = lazy(
  () => import("@/components/AboutSection/AboutSection"),
);
const BlogSection = lazy(() => import("@/components/BlogSection/BlogSection"));
const ContactSection = lazy(
  () => import("@/components/ContactSection/ContactSection"),
);
const ReadySection = lazy(
  () => import("@/components/ReadySection/ReadySection"),
);

const Home = () => {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <TrustedSection />

      <Suspense fallback={<div>Loading Enterprise Section...</div>}>
        <EnterpriseSection />
      </Suspense>

      <Suspense fallback={<div>Loading Launch Section...</div>}>
        <LaunchSection />
      </Suspense>

      <Suspense fallback={<div>Loading Solution Section...</div>}>
        <SolutionSection />
      </Suspense>

      <Suspense fallback={<div>Loading Why Section...</div>}>
        <WhySection />
      </Suspense>

      <Suspense fallback={<div>Loading Built Section...</div>}>
        <BuiltSection />
      </Suspense>

      <Suspense fallback={<div>Loading About Section...</div>}>
        <AboutSection />
      </Suspense>

      <Suspense fallback={<div>Loading Blog Section...</div>}>
        <BlogSection />
      </Suspense>

      <Suspense fallback={<div>Loading Contact Section...</div>}>
        <ContactSection />
      </Suspense>

      <Suspense fallback={<div>Loading Ready Section...</div>}>
        <ReadySection />
      </Suspense>
    </main>
  );
};

export default Home;
