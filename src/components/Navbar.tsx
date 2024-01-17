import React, { useEffect, useMemo, useState } from "react";
import "../styles/index.css";
import { NavRoutes } from "./constants";
import { NavLinks } from "./NavLinks";
// @ts-expect-error "Photos type not supported"
import logo from "../assets/images/xlabs_logo_white.png";
import { Link } from "react-router-dom";
import {
  Bars3Icon,
  Bars3CenterLeftIcon,
  XMarkIcon
} from "@heroicons/react/20/solid";
import { twMerge } from "tailwind-merge";
import { Divide as Hamburger } from "hamburger-react";
import StaggeredDropDown from "./StaggeredDropDown";
import { motion, useScroll } from "framer-motion";

export const Navbar: React.FC = (): React.JSX.Element => {
  const [activeRoute, setActiveRoute] = useState<string | null>(null);
  const [isNavMenuVisible, setIsNavMenuVisible] = useState<boolean>(false);
  const handleLinkClick = (routeName: string) => {
    setActiveRoute(routeName);
  };
  const { scrollYProgress } = useScroll();

  const navMenuIcons = {
    Bars3Icon,
    Bars3CenterLeftIcon,
    XMarkIcon
  } as const;

  useEffect(() => {
    if (isNavMenuVisible) {
      setIsNavMenuVisible(!isNavMenuVisible);
    }
  }, [activeRoute]);

  const Icon = useMemo(() => {
    return isNavMenuVisible ? navMenuIcons.XMarkIcon : navMenuIcons.Bars3Icon;
  }, [isNavMenuVisible]);

  const navbarDropDownVisibleStyles: string =
    "flex justify-center items-center flex-row w-5/6 py-0 w-full";

  return (
    <nav className="sticky top-0 z-50 flex w-full items-center justify-center text-black shadow-md shadow-[#374151] transition-all duration-300 ease-in-out md:h-24 md:bg-black">
      <div
        className={twMerge(
          "relative flex w-full flex-col items-center bg-transparent transition-all duration-300 ease-in-out md:h-full md:w-[90%] md:flex-row md:justify-between lg:w-9/12",
          !isNavMenuVisible ? navbarDropDownVisibleStyles : ""
        )}
      >
        <div className="flex w-full items-center justify-between bg-black px-6 md:hidden">
          <Link className="inline md:hidden" to={NavRoutes.HOME}>
            <img
              className="inline h-32 w-32 md:hidden md:h-0 md:w-0"
              src={logo}
              alt="Logo"
            />
          </Link>
          <Hamburger
            toggled={isNavMenuVisible}
            toggle={setIsNavMenuVisible}
            easing="ease-in-out"
            size={28}
            label="Show menu"
            color="white"
          />
        </div>
        <div
          className={`${
            isNavMenuVisible
              ? "absolute top-32 w-full flex-col border-t border-[#374151] py-2 opacity-100 transition-all duration-300 ease-in-out"
              : "absolute -top-16 -z-50 w-full flex-col opacity-0 transition-all duration-300 ease-in-out"
          } flex items-center justify-between bg-black md:relative md:top-0 md:z-0 md:flex md:w-full md:flex-row md:items-center md:justify-between md:bg-transparent md:opacity-100`}
        >
          <StaggeredDropDown
            title={NavRoutes.WORKSHOP}
            setActiveRoute={setActiveRoute}
            routeName={[NavRoutes.HIGH_SCHOOL, NavRoutes.UNIVERSITY]}
          />
          <StaggeredDropDown
            title={NavRoutes.INTERNSHIP}
            setActiveRoute={setActiveRoute}
            routeName={[NavRoutes.INTERNSHIP, NavRoutes.TRAINING]}
          />
          <StaggeredDropDown
            title={NavRoutes.SERVICES}
            setActiveRoute={setActiveRoute}
            routeName={[
              NavRoutes.CUSTOM_DRONES,
              NavRoutes.DESIGN,
              NavRoutes.PROJ_CONSULT,
              NavRoutes.CFD_ANALYSIS
            ]}
          />
          <Link
            to={NavRoutes.HOME}
            className="overflow-clip md:flex md:h-24 md:items-center md:justify-center"
            onClick={() => {
              setActiveRoute(NavRoutes.HOME);
            }}
          >
            <img
              className="hidden md:inline md:h-32 md:w-32"
              src={logo}
              alt="Logo"
            />
          </Link>
          <NavLinks
            routeName={NavRoutes.BLOGS}
            isActive={activeRoute === NavRoutes.BLOGS}
            onClick={() => handleLinkClick(NavRoutes.BLOGS)}
          />
          <NavLinks
            routeName={NavRoutes.ABOUT_US}
            isActive={activeRoute === NavRoutes.ABOUT_US}
            onClick={() => handleLinkClick(NavRoutes.ABOUT_US)}
          />
          <NavLinks
            routeName={NavRoutes.CONTACT_US}
            isActive={activeRoute === NavRoutes.CONTACT_US}
            onClick={() => handleLinkClick(NavRoutes.CONTACT_US)}
          />
        </div>
      </div>
      <motion.div
        style={{
          position: "absolute",
          scaleX: scrollYProgress,
          height: "4px",
          bottom: "0px",
          right: "0px",
          left: "0px",
          transformOrigin: "0%",
          backgroundColor: "red",
          zIndex: -1
        }}
        className="hidden md:inline-block"
      />
    </nav>
  );
};
