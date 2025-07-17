import { useEffect, useState } from "react";
import SectionLabel from "../common/SectionLabel";
import SectionTitle from "../common/SectionTitle";
import { WpPost } from "@/types/wordpress";
import BlogCard from "../ui/BlogCard";
import { getWhatsNextPosts } from "@/api/wordpress";

const BlogSection = () => {
  const [whatsNextPosts, setWhatsNextPosts] = useState<WpPost[]>([]);

  useEffect(() => {
    getWhatsNextPosts().then(setWhatsNextPosts);
  }, []);

  return (
    <section className="px-[2rem] py-[6rem] md:px-[4rem] md:py-[10rem]">
      <div className="container">
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
          className="mt-[6rem] grid grid-cols-1 gap-[3rem] md:mt-[8rem] md:grid-cols-2 lg:grid-cols-3"
        >
          {whatsNextPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
