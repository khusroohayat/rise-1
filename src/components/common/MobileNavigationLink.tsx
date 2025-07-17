import { NavLink } from "react-router-dom";

export interface MobileNavigationLinkProps {
  link: string;
  label: string;
  onClick?: () => void; // 🆕 Added
}

const MobileNavigationLink = ({
  link,
  label,
  onClick,
}: MobileNavigationLinkProps) => {
  return (
    <NavLink
      to={link}
      onClick={onClick} // 🆕 Trigger onClick
      className="text-[2rem] md:text-[2.4rem]"
    >
      {label}
    </NavLink>
  );
};

export default MobileNavigationLink;
