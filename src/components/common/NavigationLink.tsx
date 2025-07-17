import { NavLink } from "react-router-dom";

export interface NavigationLinkProps {
  link: string;
  label: string;
}

const NavigationLink = ({ link, label }: NavigationLinkProps) => {
  return (
    <NavLink
      to={link}
      className="hover-link text-[1.6rem] leading-[2.4rem] font-normal transition-all duration-200 hover:text-[#006BFF]"
    >
      {label}
    </NavLink>
  );
};

export default NavigationLink;
