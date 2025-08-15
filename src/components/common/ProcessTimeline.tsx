import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Step = {
  hashId: string;
  title: string;
  points: string[];
};

interface ProcessTimelineProps {
  steps: Step[];
}

const ProcessTimeline = ({ steps }: ProcessTimelineProps) => {
  const lineRef = useRef(null);
  const timelineRef = useRef(null);
  const stepRefs = useRef<HTMLDivElement[]>([]);
  const cardRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate Step Circles First
      stepRefs.current.forEach((step) => {
        gsap.to(step, {
          backgroundColor: "#006BFF",
          borderColor: "#006BFF",
          color: "#ffffff",
          duration: 0.1,
          scrollTrigger: {
            trigger: step,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        });
      });

      // Animate Cards
      cardRefs.current.forEach((card, index) => {
        const direction = index % 2 === 0 ? -100 : 100; // alternate left/right
        gsap.fromTo(
          card,
          {
            opacity: 0,
            x: direction,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 60%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });

      // Then animate the line fill
      gsap.fromTo(
        lineRef.current,
        { height: "0%" },
        {
          height: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 40%",
            end: "bottom bottom",
            scrub: true,
          },
        },
      );
    }, timelineRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={timelineRef}
      className="px-[2rem] py-[6rem] md:px-[4rem] md:py-[10rem]"
    >
      <div className="mx-auto max-w-[128rem]">
        <div className="relative z-[1]">
          {/* Timeline Vertical Line */}
          <div className="process-line absolute top-0 left-[1.6rem] z-[-1] h-full w-[.8rem] overflow-hidden rounded-[2.8rem] border-[1px] border-[#e4e2e9] bg-white lg:left-[50%] lg:translate-x-[-50%]">
            <div
              ref={lineRef}
              className="w-full rounded-[2.8rem] bg-[#006BFF]"
              style={{ height: "0%" }}
            ></div>
          </div>

          <div className="grid gap-[2.4rem] lg:block">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="flex gap-[.8rem] lg:flex-col lg:gap-[1rem]"
              >
                <div className="flex justify-center">
                  <div
                    ref={(el) => {
                      if (el) stepRefs.current[idx] = el;
                    }}
                    className="flex size-[4rem] items-center justify-center rounded-[100%] border-[1px] border-[#e4e2e9] bg-white text-[1.4rem] leading-[1.6rem] font-semibold tracking-[0.42px] text-[#6F6C75] transition-all duration-300"
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </div>
                </div>

                <div className="grid-cols-2 gap-[3.2rem] lg:grid xl:gap-[12rem]">
                  {idx % 2 === 0 && <div className="hidden lg:block" />}

                  <div
                    id={step.hashId}
                    ref={(el) => {
                      if (el) cardRefs.current[idx] = el;
                    }}
                    className="shadow-04 rounded-[1.6rem] border-[1px] border-[#e4e2e9] bg-[#FAFAFA]"
                  >
                    <div className="grid gap-[2rem] rounded-[1.6rem] border-[2px] border-white p-[1.6rem] md:gap-[4rem] md:p-[3.2rem]">
                      <div className="grid gap-[2rem] md:gap-[4rem]">
                        <h3 className="text-[2rem] leading-[2.4rem] font-medium md:text-[2.4rem] md:leading-[2.88rem]">
                          {step.title}
                        </h3>

                        <hr className="w-full border-1 border-[#e4e2e9]" />
                      </div>

                      <ul className="grid list-inside list-disc gap-[2.4rem]">
                        {step.points.map((point, idx) => (
                          <li
                            key={idx}
                            className="text-[1.6rem] leading-[2.56rem] font-light tracking-[-0.16px]"
                          >
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {idx % 2 !== 0 && <div className="hidden lg:block" />}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessTimeline;
