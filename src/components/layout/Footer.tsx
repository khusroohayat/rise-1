import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import certification01 from "../../assets/images/certification-01.webp";
import certification02 from "../../assets/images/certification-02.webp";
import NavigationLink from "../common/NavigationLink";
import {
  companyLinks,
  quickLinks,
  resourcesLinks,
  socialLinks,
  solutionsLinks,
} from "@/constants/constants";

const Footer = () => {
  return (
    <footer className="bg-[#EFECEB] px-[2rem] py-[6rem] md:px-[4rem] md:py-[8rem]">
      <div className="mx-auto grid max-w-[124rem] grid-cols-1 rounded-[1.2rem] bg-white lg:grid-cols-[30%_70%]">
        <div className="flex flex-col justify-between gap-[4rem] border-[#C9C9C9] p-[2rem] sm:border-b md:p-[4rem] lg:border-r">
          <div className="flex flex-col gap-[1rem]">
            <NavLink to="/" className="inline-flex max-w-[18rem]">
              <img
                src={Logo}
                alt="Brand Logo"
                className="size-full object-cover"
              />
            </NavLink>

            <p className="text-[1.4rem] leading-[2.24rem] font-light">
              Bringing technological ease to manage humanitarian and development
              work
            </p>
          </div>

          <div className="flex flex-col gap-[1rem]">
            <h5 className="font-normal">Compliance Certified</h5>

            <div className="flex gap-[1rem]">
              <div className="max-w-[10rem]">
                <img
                  src={certification01}
                  alt="Certification Image"
                  className="size-full object-contain object-center"
                />
              </div>

              <div className="max-w-[10rem]">
                <img
                  src={certification02}
                  alt="Certification Image"
                  className="size-full object-contain object-center"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[1rem]">
            <h5 className="font-normal">Stay connected</h5>

            <div className="flex items-center gap-[1rem]">
              {socialLinks.map((item, idx) => (
                <a
                  key={idx}
                  href={item.link}
                  className="opacity-70 transition-all duration-300 hover:opacity-100"
                >
                  <img
                    src={item.icon}
                    alt="Icon Image"
                    className="size-full object-contain object-center"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-[4rem]">
          <div className="grid grid-cols-2 gap-[4rem] px-[2rem] pt-[2rem] pb-[2rem] md:grid-cols-4 md:gap-[6rem] md:px-[4rem] md:pt-[4rem]">
            <div className="flex flex-col gap-[2rem]">
              <h5 className="font-normal !text-[#006BFF] uppercase">Company</h5>

              <div className="flex flex-col items-start gap-[2rem]">
                {companyLinks.map((item, idx) => (
                  <NavigationLink
                    key={idx}
                    link={item.link}
                    label={item.label}
                  />
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-[2rem]">
              <h5 className="font-normal !text-[#006BFF] uppercase">
                Solutions
              </h5>

              <div className="flex flex-col items-start gap-[2rem]">
                {solutionsLinks.map((item, idx) => (
                  <NavigationLink
                    key={idx}
                    link={item.link}
                    label={item.label}
                  />
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-[2rem]">
              <h5 className="font-normal !text-[#006BFF] uppercase">
                Resources
              </h5>

              <div className="flex flex-col items-start gap-[2rem]">
                {resourcesLinks.map((item, idx) => (
                  <NavigationLink
                    key={idx}
                    link={item.link}
                    label={item.label}
                  />
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-[2rem]">
              <h5 className="font-normal !text-[#006BFF] uppercase">
                Quick Links
              </h5>

              <div className="flex flex-col items-start gap-[2rem]">
                {quickLinks.map((item, idx) => (
                  <NavigationLink
                    key={idx}
                    link={item.link}
                    label={item.label}
                  />
                ))}
              </div>
            </div>
          </div>

          <p className="border-t border-[#C9C9C9] p-[1rem] text-center text-[1.4rem] leading-[2.24rem] font-light lg:pl-[4rem] lg:text-left">
            © Reliable Industrial Solutions Engineering PVT LTD - 2025 All
            Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
