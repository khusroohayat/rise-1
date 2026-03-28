import { ChevronRight } from "lucide-react";

interface CtaButtonProps {
  text: string;
  bgColor?: string; // e.g., "bg-blue-500"
  textColor?: string; // e.g., "text-white"
  href?: string; // optional link destination
}

const CtaButton: React.FC<CtaButtonProps> = ({
  text,
  bgColor = "bg-(--primary-color)",
  textColor = "text-white",
  href = "#",
}) => {
  return (
    <a
      href={href}
      className={`group inline-flex justify-center rounded-[.8rem] px-[1.6rem] pt-[.3rem] pb-[.6rem] text-[1.5rem] font-normal transition-all duration-200 hover:opacity-90 ${bgColor} ${textColor}`}
    >
      <span>{text}</span>

      <ChevronRight className="relative top-[6px] left-[.3rem] size-[1.5rem] stroke-3 transition-all duration-200 group-hover:left-[.6rem]" />
    </a>
  );
};

export default CtaButton;
