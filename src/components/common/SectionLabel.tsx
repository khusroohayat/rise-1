interface SectionLabelProps {
  label: string;
  bgColor?: string;
  textColor?: string;
}

const SectionLabel = ({
  label,
  bgColor = "bg-[#E6F0FF]",
  textColor = "text-[#006BFF]",
}: SectionLabelProps) => {
  return (
    <h5
      className={`rounded-[50px] px-[1.2rem] py-[.4rem] text-[1.2rem] leading-[1.96rem] font-light md:text-[1.4rem] ${textColor} ${bgColor}`}
    >
      {label}
    </h5>
  );
};

export default SectionLabel;
