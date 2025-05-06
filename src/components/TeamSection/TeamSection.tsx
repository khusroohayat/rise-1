import Heading1 from "@/components/ui/Heading1";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // ✅ Add this
import FlipCard from "../ui/FlipCard";
import member2A from "../../assets/images/2A.png";
import member3A from "../../assets/images/3A.png";
import member4A from "../../assets/images/4A.png";
import member5A from "../../assets/images/5A.png";
// import member6A from "../../assets/images/6A.png";
import member7A from "../../assets/images/7A.png";
import member8A from "../../assets/images/8A.jpg";
import twitter from "../../assets/images/twitter.svg";
import linkedin from "../../assets/images/linkedin.svg";

const teamMembers = [
  {
    id: 1,
    frontImage: member2A,
  },
  {
    id: 2,
    frontImage: member3A,
  },
  {
    id: 3,
    frontImage: member4A,
  },
  {
    id: 4,
    frontImage: member5A,
  },
  {
    id: 5,
    frontImage: member7A,
  },
  {
    id: 6,
    frontImage: member8A,
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
                    <ul className="grid w-full gap-[2rem]">
                      <li className="cursor-pointer">
                        <a
                          href="https://twitter.com/RiseEngServices"
                          className="flex h-[4rem] w-full items-center justify-center bg-white shadow-2xs"
                        >
                          <img src={twitter} alt="icon" />
                        </a>
                      </li>

                      <li className="cursor-pointer">
                        <a
                          href="https://www.linkedin.com/company/reliable-industrail-solutions-engineering/"
                          className="flex h-[4rem] w-full items-center justify-center bg-white shadow-2xs"
                        >
                          <img src={linkedin} alt="icon" />
                        </a>
                      </li>
                    </ul>
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
