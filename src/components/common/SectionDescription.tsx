interface SectionDescriptionProp {
  label: string;
}

const SectionDescription = ({ label }: SectionDescriptionProp) => {
  return (
    <p className="text-[1.6rem] leading-[2.4rem] font-light tracking-[0.2px] text-[#425466] sm:text-[1.8rem] sm:leading-[2.8rem]">
      {label}
    </p>
  );
};

export default SectionDescription;
