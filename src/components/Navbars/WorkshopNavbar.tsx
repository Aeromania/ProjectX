import { useState, useEffect } from "react";
import { WorkshopNavlinks } from "./WorkshopNavlinks";
import { typeOfWorkshopNavRoutes } from "../types";
import { twMerge } from "tailwind-merge";
import { FaArrowRightLong } from "react-icons/fa6";
import Hamburger from "hamburger-react";

type WorkshopNavbarProps = {
  initialRoute: typeOfWorkshopNavRoutes;
  NavRoutes: typeOfWorkshopNavRoutes[];
  className?: string;
};

export const WorkshopNavbar: React.FC<WorkshopNavbarProps> = ({
  NavRoutes,
  initialRoute,
  className
}): React.JSX.Element => {
  const [isActive, setIsActive] = useState<string>(initialRoute);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [isActive]);

  return (
    <>
      <div className="flex w-full items-center justify-center lg:hidden">
        <button
          className="relative flex w-[60%] items-center justify-center border border-input py-2 font-mono font-medium uppercase text-slate-300 transition-all duration-200 ease-in-out active:scale-95"
          onClick={() => {
            setIsMenuOpen(true);
          }}
        >
          <FaArrowRightLong className="mr-2 text-xl" color="#cbd5e1" />
          <span className="tracking-widest">Access Menu</span>
        </button>
      </div>
      <nav
        className={twMerge(
          "fixed top-0 -z-10 h-full w-full items-center justify-center bg-black py-6 opacity-0 shadow-md shadow-[#374151] transition-all duration-300 ease-in-out lg:relative lg:z-20 lg:flex lg:h-fit lg:w-full lg:translate-x-0 lg:opacity-100",
          isMenuOpen ? "z-50 opacity-100" : ""
        )}
        data-aos="fade-up"
        data-aos-once={true}
      >
        <div className="flex h-full w-full flex-col items-start justify-center gap-16 px-10 lg:h-fit lg:w-[95%] lg:flex-row lg:items-center lg:justify-between lg:gap-0 lg:px-0">
          <div className="flex w-full items-center justify-end border-b border-sky-500 lg:hidden">
            <Hamburger
              toggle={setIsMenuOpen}
              toggled={isMenuOpen}
              easing="ease-in-out"
              size={28}
              label="Show menu"
              color="white"
            />
          </div>
          {NavRoutes.map((routeName, index) => (
            <WorkshopNavlinks
              isActive={isActive == routeName}
              routeName={routeName}
              onClick={() => {
                setIsActive(routeName);
                setIsMenuOpen(false);
              }}
              key={index}
              className={className}
            />
          ))}
          <div className="w-full border border-sky-500 lg:hidden" />
        </div>
      </nav>
    </>
  );
};
