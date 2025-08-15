interface SectionTitleProps {
  label: string;
}

const SectionTitle = ({ label }: SectionTitleProps) => {
  return (
    <h3 className="text-[2.2rem] leading-[3.4rem] font-medium tracking-[-0.2px] capitalize md:text-[3.8rem] md:leading-[4.8rem]">
      {label}
    </h3>
  );
};

export default SectionTitle;
