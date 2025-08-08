import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo-2.png";

import NavigationLink from "../common/NavigationLink";
import {
  aboutLinks,
  certificationsData,
  companyLinks,
  preojectsLinks,
  quickLinks,
  resourcesLinks,
  servicesLinks,
  socialLinks,
  solutionsLinks,
} from "@/constants/constants";
import NavigationHashLink from "../common/NavigationHashLink";

const Footer = () => {
  return (
    <footer className="bg-[#EFECEB] px-[2rem] py-[6rem] md:px-[4rem] md:py-[8rem]">
      <div className="mx-auto grid max-w-[124rem] grid-cols-1 rounded-[1.2rem] bg-white lg:grid-cols-[30%_70%]">
        <div className="flex flex-col justify-between gap-[4rem] border-b border-[#C9C9C9] p-[2rem] md:p-[4rem] lg:border-r lg:border-b-0">
          <div className="flex flex-col gap-[1rem]">
            <NavLink
              to="/"
              className="inline-flex max-w-[8rem] overflow-hidden"
            >
              <img
                src={Logo}
                alt="Brand Logo"
                className="size-full object-contain"
              />
            </NavLink>

            <p className="text-[1.4rem] leading-[2.24rem] font-light">
              Reliable Industrial Solutions Engineering
            </p>
          </div>

          <div className="flex flex-col gap-[1rem]">
            <h5 className="font-normal">Accreditations & Certifications</h5>

            <div className="flex gap-[1rem]">
              {certificationsData.map((item, idx) => (
                <div key={idx} className="group relative max-w-[5rem]">
                  <img
                    src={item.img}
                    alt="Certification Image"
                    className="size-full object-contain object-center"
                  />

                  {/* Tooltip */}
                  <div className="absolute -top-[4rem] left-1/2 z-[10] w-max -translate-x-1/2 scale-0 transform rounded-full bg-[#0B3558] px-[1.2rem] py-[.4rem] text-[1.4rem] leading-[1.8rem] font-normal text-white opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:bg-[#006BFF] group-hover:opacity-100">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-[1rem]">
            <h5 className="font-normal">Stay connected</h5>

            <div className="flex items-center gap-[1rem]">
              {socialLinks.map((item, idx) => (
                <a
                  target="_blank"
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
              <h5 className="font-normal !text-[#006BFF] uppercase">About</h5>

              <div className="flex flex-col items-start gap-[2rem]">
                {aboutLinks.map((item, idx) => (
                  <NavigationHashLink
                    key={idx}
                    link={item.link}
                    label={item.label}
                  />
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-[2rem]">
              <h5 className="font-normal !text-[#006BFF] uppercase">
                Services
              </h5>

              <div className="flex flex-col items-start gap-[2rem]">
                {servicesLinks.map((item, idx) => (
                  <NavigationHashLink
                    key={idx}
                    link={item.link}
                    label={item.label}
                  />
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-[2rem]">
              <h5 className="font-normal !text-[#006BFF] uppercase">
                Projects
              </h5>

              <div className="flex flex-col items-start gap-[2rem]">
                {preojectsLinks.map((item, idx) => (
                  <NavigationHashLink
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
                  <NavigationHashLink
                    key={idx}
                    link={item.link}
                    label={item.label}
                  />
                ))}
              </div>
            </div>
          </div>

          <p className="border-t border-[#C9C9C9] p-[1rem] text-center text-[1.4rem] leading-[2.24rem] font-light lg:pl-[4rem] lg:text-left">
            © Reliable Industrial Solutions Engineering Pvt. Ltd. - 2025 All
            Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
