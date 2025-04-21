import Logo from "../../assets/images/logo.png";
import facebook from "../../assets/images/facebook.svg";
import instagram from "../../assets/images/instagram.svg";
import twitter from "../../assets/images/twitter.svg";
import linkedin from "../../assets/images/linkedin.svg";
import BackToTopButton from "../ui/BackToTopButton";

const productsItem = [
  "Contact",
  "Software Support",
  "Incident Report",
  "Resources",
  "RISE Patents",
  "Events",
  "Alumni",
  "Glossary",
];

const productsItem2 = [
  "Careers",
  "Newsroom",
  "Investor Relations",
  "Other Industries",
  "Governance",
];

const Footer = () => {
  return (
    <footer className="bg-[#EFECEB]">
      <div className="container px-[2rem] py-[6rem] sm:py-[10rem] lg:px-[0rem]">
        <div className="relative grid grid-cols-1 gap-y-[4rem] sm:grid-cols-2 lg:grid-cols-4 lg:gap-y-[0rem]">
          <div className="flex flex-col gap-[2rem]">
            <a href="" className="inline-flex max-w-[18rem]">
              <img
                src={Logo}
                alt="Brand Logo"
                className="size-full object-cover"
              />
            </a>
          </div>

          <div className="flex flex-col gap-[1rem]">
            <h5 className="text-[1.4rem] font-normal tracking-[0.2px]">
              Helpful Links
            </h5>

            <ul className="">
              {productsItem.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-[1.4rem] font-light transition-all duration-200 hover:opacity-70"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-[1rem]">
            <h5 className="text-[1.4rem] font-normal tracking-[0.2px]">
              About RISE
            </h5>

            <ul className="">
              {productsItem2.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-[1.4rem] font-light transition-all duration-200 hover:opacity-70"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-[1rem]">
            <h5 className="text-[1.4rem] font-normal tracking-[0.2px]">
              Follow us
            </h5>

            <ul className="flex items-center">
              <li className="cursor-pointer">
                <a
                  href="https://www.facebook.com/profile.php?id=100093061615807"
                  className="inline-flex size-[3rem] items-center justify-center"
                >
                  <img src={facebook} alt="icon" />
                </a>
              </li>

              <li className="cursor-pointer">
                <a
                  href="https://www.instagram.com/riseengservices/"
                  className="inline-flex size-[3rem] items-center justify-center"
                >
                  <img src={instagram} alt="icon" className="opacity-80" />
                </a>
              </li>

              <li className="cursor-pointer">
                <a
                  href="https://twitter.com/RiseEngServices"
                  className="inline-flex size-[3rem] items-center justify-center"
                >
                  <img src={twitter} alt="icon" />
                </a>
              </li>

              <li className="cursor-pointer">
                <a
                  href="https://www.linkedin.com/company/reliable-industrail-solutions-engineering/"
                  className="inline-flex size-[3rem] items-center justify-center"
                >
                  <img src={linkedin} alt="icon" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-[4rem] flex items-center justify-between">
          <p className="text-[1.4rem] font-light">© 2025 RISE, Eng.</p>

          <BackToTopButton />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
