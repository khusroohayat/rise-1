import SectionLabel from "../common/SectionLabel";
import SectionTitle from "../common/SectionTitle";
import newsImg01 from "../../assets/images/news-img-01.png";
import newsImg02 from "../../assets/images/news-img-02.png";
import newsImg03 from "../../assets/images/news-img-03.png";
import { Button } from "../ui/button";

const NewsSection = () => {
  return (
    <section className="px-[2rem] py-[6rem] md:px-[4rem] md:py-[10rem]">
      <div className="mx-auto max-w-[128rem]">
        <div className="mx-auto flex max-w-[60rem] flex-col items-center gap-[.5rem] text-center">
          <div data-aos="fade-up" data-aos-delay="0">
            <SectionLabel label="News & Updates" />
          </div>

          <div data-aos="fade-up" data-aos-delay="100">
            <SectionTitle label="The Latest updates from the Field & Beyond" />
          </div>
        </div>

        <div className="mt-[6rem] grid grid-cols-1 gap-[1rem] md:mt-[8rem] md:grid-cols-2 lg:grid-cols-3">
          <div className="p-[1rem]">
            <div
              data-aos="fade-up"
              className="group shadow-01 flex h-full w-full flex-col overflow-hidden rounded-[.8rem] bg-white p-[.4rem]"
            >
              <div className="h-[25rem] overflow-hidden rounded-[.4rem]">
                <img
                  src={newsImg01}
                  alt="Services Image"
                  className="size-full object-cover object-center transition-all duration-200 group-hover:scale-[1.05]"
                />
              </div>

              <div className="flex flex-col gap-[1rem] p-[1.6rem]">
                <div className="flex flex-col items-start gap-[1rem]">
                  <h3 className="text-[1.8rem] leading-[2.4rem] font-normal tracking-[-0.36px]">
                    RISE Wins Major EPCC Contract in UAE
                  </h3>

                  <p className="text-[1.4rem] font-light text-[#425466]">
                    RISE secures a new oil processing plant project, covering
                    design, procurement, construction, and commissioning over 14
                    months.
                  </p>

                  <Button asChild>
                    <a href="">Read More</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="p-[1rem]">
            <div
              data-aos="fade-up"
              className="group shadow-01 flex h-full w-full flex-col overflow-hidden rounded-[.8rem] bg-white p-[.4rem]"
            >
              <div className="h-[25rem] overflow-hidden rounded-[.4rem]">
                <img
                  src={newsImg02}
                  alt="Services Image"
                  className="size-full object-cover object-center transition-all duration-200 group-hover:scale-[1.05]"
                />
              </div>

              <div className="flex flex-col gap-[1rem] p-[1.6rem]">
                <div className="flex flex-col items-start gap-[1rem]">
                  <h3 className="text-[1.8rem] leading-[2.4rem] font-normal tracking-[-0.36px]">
                    New Civil Infrastructure Project Begins in Saudi
                  </h3>

                  <p className="text-[1.4rem] font-light text-[#425466]">
                    We’ve launched large-scale groundwork and foundation
                    development for an energy facility in Eastern Saudi Arabia
                    this quarter.
                  </p>

                  <Button asChild>
                    <a href="">Read More</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="p-[1rem]">
            <div
              data-aos="fade-up"
              className="group shadow-01 flex h-full w-full flex-col overflow-hidden rounded-[.8rem] bg-white p-[.4rem]"
            >
              <div className="h-[25rem] overflow-hidden rounded-[.4rem]">
                <img
                  src={newsImg03}
                  alt="Services Image"
                  className="size-full object-cover object-center transition-all duration-200 group-hover:scale-[1.05]"
                />
              </div>

              <div className="flex flex-col gap-[1rem] p-[1.6rem]">
                <div className="flex flex-col items-start gap-[1rem]">
                  <h3 className="text-[1.8rem] leading-[2.4rem] font-normal tracking-[-0.36px]">
                    RISE Grows Team with New Technical Talent
                  </h3>

                  <p className="text-[1.4rem] font-light text-[#425466]">
                    Our technical department expands with expert engineers in
                    maintenance, automation, and E&P systems across GCC project
                    locations.
                  </p>

                  <Button asChild>
                    <a href="">Read More</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
