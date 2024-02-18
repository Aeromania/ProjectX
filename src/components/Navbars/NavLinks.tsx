import React from "react";
import { TNavLinksProps } from "../types";
import { twMerge } from "tailwind-merge";
import { Link } from "react-router-dom";

export const NavLinks: React.FC<TNavLinksProps> = ({
  routeName,
  isActive,
  onClick,
  className
}): React.JSX.Element => {
  const renderRouteName = String(routeName);
  const checkIsActive = () => {
    return isActive ? "scale-x-1" : "scale-x-0";
  };
  return (
    <Link
      className={twMerge(
        "group relative ml-4 cursor-pointer py-2 text-white transition duration-1000 ease-in-out lg:ml-0 lg:inline-block lg:py-0",
        className
      )}
      to={routeName}
      onClick={onClick}
    >
      {renderRouteName}
      <span
        className={twMerge(
          "absolute inset-x-0 -bottom-1 hidden h-0.5 scale-x-0 bg-sky-600 font-sans text-lg font-normal transition-all duration-300 group-hover:origin-center group-hover:scale-x-100 group-hover:transform lg:block",
          checkIsActive()
        )}
      />
    </Link>
  );
};
