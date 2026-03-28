// components/BackToTopButton.tsx
import { ArrowUp } from "lucide-react";

const BackToTopButton: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`flex size-[4rem] cursor-pointer items-center justify-center rounded-full bg-[var(--primary-color)] text-white transition-opacity duration-300`}
    >
      <ArrowUp className="size-[2rem]" />
    </button>
  );
};

export default BackToTopButton;
