import React from "react";
import { FiChevronDown } from "react-icons/fi";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

type IconVariantValueProps = {
  rotate: number;
};

type DropDownButtonProps = {
  title: string;
  onClick: () => void;
  checkIsActive: () => boolean;
  isIpad: boolean;
  className?: string;
  iconVariants: {
    open: IconVariantValueProps;
    closed: IconVariantValueProps;
  };
};

const DropDownButton: React.FC<DropDownButtonProps> = ({
  title,
  checkIsActive,
  onClick,
  iconVariants,
  isIpad,
  className = ""
}): React.JSX.Element => {
  return (
    <>
      <button
        onClick={onClick}
        className={`${className} group flex items-center gap-2 rounded-md bg-transparent text-white transition-colors lg:py-0`}
      >
        <span className="font-sans text-base font-normal">
          {title}
          <span
            className={twMerge(
              "inset-x-0 -bottom-1 hidden h-0.5 scale-x-0 bg-sky-600 font-sans text-lg font-normal transition-all duration-300 group-hover:origin-center group-hover:scale-x-100 group-hover:transform lg:absolute lg:inline",
              checkIsActive() ? "scale-x-1" : "scale-x-0"
            )}
          />
        </span>
        {!isIpad && (
          <motion.span variants={iconVariants}>
            <FiChevronDown />
          </motion.span>
        )}
      </button>
    </>
  );
};

export default DropDownButton;
