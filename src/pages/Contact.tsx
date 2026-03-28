import { Helmet } from "react-helmet-async";
import officeDetailsIcon from "../assets/images/office-details-icon.gif";
import addressesIcon from "../assets/images/addresses-icon.gif";
import ContactForm from "@/components/common/ContactForm";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <main>
      <Helmet>
        <title>RISE Engineering - Contact</title>
        <meta
          name="description"
          content="RadixTech's MEAL System simplifies monitoring and evaluation, delivering real-time insights to empower humanitarian aid organizations."
        />
      </Helmet>

      <div className="mx-auto max-w-[128rem] py-[10rem]">
        <div className="flex flex-col items-center gap-[1rem] text-center">
          <h1 className="text-[4.8rem] leading-[5.4rem] font-semibold tracking-[-0.48px]">
            Do you have any questions?
          </h1>

          <h2 className="text-[2.6rem] leading-[3.4rem] font-extralight tracking-[-0.26px]">
            We will be happy to answer them.
          </h2>
        </div>

        <div className="mt-[6rem] grid grid-cols-2 gap-[4rem] md:mt-[8rem]">
          <div>
            <div className="flex max-w-[56rem] items-center gap-[2.4rem] border-t-[2px] border-[#cdcdcd]/50 py-[4rem]">
              <div className="w-[9.6rem]">
                <img
                  src={officeDetailsIcon}
                  alt="Image"
                  className="size-full object-contain object-center"
                />
              </div>

              <div className="flex flex-col gap-[.6rem]">
                <h5 className="text-[1.6rem] leading-[2.6rem] font-medium tracking-[0.1px]">
                  Office Details
                </h5>

                <p className="text-[1.6rem] leading-[2.6rem] font-extralight tracking-[0.1px]">
                  Monday–Friday <br /> 9:00–20:00
                </p>

                <a
                  href="tel:+922137120968"
                  className="text-[1.8rem] leading-[2.4rem] font-normal tracking-[-0.22px] hover:underline"
                >
                  +92 21 371 20968
                </a>
              </div>
            </div>

            <div className="flex max-w-[56rem] flex-col gap-[2.4rem] border-t-[2px] border-[#cdcdcd]/50 py-[4rem]">
              <div className="flex flex-col items-start gap-[1rem]">
                <h5 className="text-[3rem] leading-[4rem] font-normal tracking-[-0.64px]">
                  Let’s Talk About Your Next Project
                </h5>

                <p className="mb-[2rem] max-w-[45rem] text-[1.8rem] leading-[3.2rem] font-light">
                  Have questions or looking to collaborate? Reach out to our
                  team — we’re ready to support your engineering and project
                  needs across the GCC.
                </p>

                <Button variant="dark" asChild>
                  <a href="mailto:enquiries@risengineering.org">
                    Talk to Expert
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[1.6rem]">
            <div className="rounded-[.8rem] bg-[#FAFAFA] p-[2rem]">
              <ContactForm />
            </div>

            <div className="flex flex-col gap-[2rem] rounded-[.8rem] bg-[#FAFAFA] p-[2rem]">
              <h5 className="text-[1.6rem] leading-[2.6rem] font-medium tracking-[0.1px]">
                Addresses
              </h5>

              <div className="flex">
                <div className="flex gap-[1rem]">
                  <div className="h-[4rem] w-[4rem]">
                    <img
                      src={addressesIcon}
                      alt="Icon"
                      className="size-full object-contain object-center"
                    />
                  </div>

                  <p className="max-w-[22rem] text-[1.6rem] leading-[2.6rem] font-light tracking-[0.1px]">
                    Suite 303, Lane 10, Phase 6, Bukhari Commercial, DHA,
                    Karachi, Sindh 75500, Pakistan.
                  </p>
                </div>

                <div className="ml-[1rem] flex border-l-2 border-[#006BFF] pl-[1.6rem]">
                  <p className="max-w-[22rem] text-[1.6rem] leading-[2.6rem] font-light tracking-[0.1px]">
                    Office No. 56, Street 3, MPCHS, E-11/1, Islamabad, Pakistan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
