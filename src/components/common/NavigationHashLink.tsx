import { NavHashLink } from "react-router-hash-link";

export interface NavigationHashLinkProps {
  link: string;
  label: string;
  onClick?: () => void; // <-- this was missing
}

const NavigationHashLink = ({
  link,
  label,
  onClick,
}: NavigationHashLinkProps) => {
  return (
    <NavHashLink
      onClick={onClick}
      to={link}
      smooth
      className="hover-link text-[1.6rem] leading-[2.4rem] font-normal transition-all duration-200 hover:text-[#006BFF]"
    >
      {label}
    </NavHashLink>
  );
};

export default NavigationHashLink;
