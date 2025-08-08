import { NavLink } from "react-router-dom";

export interface NavigationLinkProps {
  link: string;
  label: string;
  onClick?: () => void; // <-- this was missing
}

const NavigationLink = ({ link, label, onClick }: NavigationLinkProps) => {
  return (
    <NavLink
      onClick={onClick}
      to={link}
      className="hover-link text-[1.6rem] leading-[2.4rem] font-normal transition-all duration-200 hover:text-[#006BFF]"
    >
      {label}
    </NavLink>
  );
};

export default NavigationLink;
