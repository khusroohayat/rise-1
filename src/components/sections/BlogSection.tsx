import SectionLabel from "../common/SectionLabel";
import SectionTitle from "../common/SectionTitle";
import img01 from "../../assets/images/blog-img-01.jpg";
import img02 from "../../assets/images/blog-img-02.png";
import { NavLink } from "react-router-dom";

const BlogSection = () => {
  return (
    <section className="px-[2rem] py-[6rem] md:px-[4rem] md:py-[10rem]">
      <div className="mx-auto max-w-[124rem]">
        <div className="mx-auto flex max-w-[60rem] flex-col items-center gap-[.5rem] text-center">
          <div data-aos="fade-up" data-aos-delay="0">
            <SectionLabel label="Insights & Updates" />
          </div>

          <div data-aos="fade-up" data-aos-delay="100">
            <SectionTitle label="Stay Informed with Industry News and Expert Insights" />
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="mt-[6rem] grid grid-cols-2 gap-[4rem] md:mt-[8rem]"
        >
          {/* <div className="flex flex-col gap-[2rem] overflow-hidden rounded-[.8rem]">
            <div className="h-[40rem] rounded-[.8rem] bg-amber-300"></div>

            <div className="flex flex-col gap-[.5rem]">
              <h4 className="text-[2rem] leading-[3rem] font-medium">
                Insights
              </h4>

              <p>
                We cover pertinent questions, provides practical advice and
                strategies to navigate data, technology, and digital
                transformation, helping professionals unlock innovative
                solutions.
              </p>
            </div>
          </div> */}

          <NavLink
            target="_blank"
            to="/blog"
            className="flex flex-col gap-[2rem] overflow-hidden rounded-[.8rem]"
          >
            <img
              src={img01}
              alt={`Custom Blog Image`}
              className="h-[40rem] w-full rounded-[.8rem] object-cover"
            />

            <div className="flex flex-col gap-[1rem]">
              <h4 className="text-[2rem] leading-[3rem] font-medium">Blogs</h4>

              <p className="line-clamp-3 text-[1.8rem] leading-[2.6rem]">
                Explore field stories, expert tips, and real-world applications
                in oil and gas. Learn from operational experiences and evolving
                industry practices.
              </p>
            </div>
          </NavLink>

          <NavLink
            target="_blank"
            to="/blog"
            className="flex flex-col gap-[2rem] overflow-hidden rounded-[.8rem]"
          >
            <img
              src={img02}
              alt={`Custom Blog Image`}
              className="h-[40rem] w-full rounded-[.8rem] object-cover"
            />

            <div className="flex flex-col gap-[1rem]">
              <h4 className="text-[2rem] leading-[3rem] font-medium">
                Insights
              </h4>

              <p className="line-clamp-3 text-[1.8rem] leading-[2.6rem]">
                Discover in-depth analysis on energy trends, market dynamics,
                and innovations. Stay informed with strategic insights driving
                the oil and gas industry forward.
              </p>
            </div>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
