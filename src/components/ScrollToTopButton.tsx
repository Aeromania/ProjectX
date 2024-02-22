import { useState, useEffect } from "react";
import { HiChevronDoubleUp } from "react-icons/hi2";
import { twMerge } from "tailwind-merge";

export const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState<boolean>();

  useEffect(() => {
    function getScrollYValue() {
      if (window.scrollY > 250) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
    document.addEventListener("scroll", getScrollYValue);

    return () => document.removeEventListener("scroll", getScrollYValue);
  }, []);

  return (
    <div
      className={twMerge(
        "pointer-events-none fixed bottom-3 right-8 z-50 flex size-12 cursor-pointer items-center justify-center rounded-lg bg-sky-500 text-center text-3xl opacity-0 outline-1 outline-transparent transition-all duration-300 ease-in-out hover:scale-105 active:scale-95",
        isVisible ? "pointer-events-auto bottom-8 opacity-100" : ""
      )}
      onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
    >
      <HiChevronDoubleUp size={30} color="white" />
    </div>
  );
};
