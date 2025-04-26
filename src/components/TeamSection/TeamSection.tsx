import Heading1 from "@/components/ui/Heading1";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // ✅ Add this
import FlipCard from "../ui/FlipCard";
import member1A from "../../assets/images/1A.png";
import member1B from "../../assets/images/1B.png";
import member2A from "../../assets/images/2A.png";
import member2B from "../../assets/images/2B.png";
import member3A from "../../assets/images/3A.png";
import member3B from "../../assets/images/3B.png";
import member4A from "../../assets/images/4A.png";
import member4B from "../../assets/images/4B.png";
import member5A from "../../assets/images/5A.png";
import member5B from "../../assets/images/5B.png";
import member6A from "../../assets/images/6A.png";
import member6B from "../../assets/images/6B.png";

const teamMembers = [
  {
    id: 0,
    frontImage: member1A,
    backImage: member1B,
  },
  {
    id: 1,
    frontImage: member2A,
    backImage: member2B,
  },
  {
    id: 2,
    frontImage: member3A,
    backImage: member3B,
  },
  {
    id: 3,
    frontImage: member4A,
    backImage: member4B,
  },
  {
    id: 4,
    frontImage: member5A,
    backImage: member5B,
  },
  {
    id: 5,
    frontImage: member6A,
    backImage: member6B,
  },
];

const TeamSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 300,
    });
  }, []);

  return (
    <section className="bg-[#F7F7F7]">
      <div className="container px-[2rem] py-[6rem] lg:px-[0rem]">
        <div data-aos="fade-up">
          <Heading1
            title="The Minds Behind the Magic"
            subtitle="Passionate Professionals Behind Your Success"
          />
        </div>

        <div className="mt-[4rem] grid grid-cols-1 gap-[4rem] sm:grid-cols-2 md:grid-cols-3">
          {teamMembers.map((item) => (
            <div key={item.id} className="h-[50rem]">
              <FlipCard
                front={
                  <div className="flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-[2rem] shadow-lg">
                    <img
                      src={item.frontImage}
                      alt="Image"
                      className="size-full"
                    />
                  </div>
                }
                back={
                  <div className="flex h-full w-full flex-col items-center justify-center rounded-[2rem] shadow-lg">
                    <img
                      src={item.backImage}
                      alt="Image"
                      className="size-full"
                    />
                  </div>
                }
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
