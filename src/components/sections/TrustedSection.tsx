import { partnersLogo } from "@/constants/constants";
import Marquee from "react-fast-marquee";
import SectionLabel from "../common/SectionLabel";
import SectionTitle from "../common/SectionTitle";

const TrustedSection = () => {
  return (
    <section className="px-[2rem] py-[6rem] md:px-[4rem] md:py-[10rem]">
      <div className="mx-auto max-w-[150rem]">
        <div className="mx-auto flex max-w-[60rem] flex-col items-center gap-[.5rem] text-center">
          <div data-aos="fade-up" data-aos-delay="0">
            <SectionLabel label="Trusted By" />
          </div>

          <div data-aos="fade-up" data-aos-delay="100">
            <SectionTitle label="Clients Who Trust Us With Their Operations" />
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="marquee-sec mt-[6rem] md:mt-[8rem]"
        >
          <Marquee speed={50} gradient={false} pauseOnHover={true}>
            {partnersLogo.map((item, idx) => (
              <a
                target="_blank"
                href={item.href}
                key={idx}
                className="mx-[4rem] inline-block h-[6rem] max-w-[18rem]"
              >
                <img
                  src={item.src}
                  alt="Clients Logo"
                  className="size-full object-contain object-center opacity-[0.7] grayscale-[1] transition-all duration-[0.3s] hover:opacity-[1] hover:grayscale-[0]"
                />
              </a>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default TrustedSection;
