import React, { useEffect, useMemo, useState } from "react";
import "../styles/index.css";
import { NavLinks } from "./constants";
import { NavRoutes } from "./NavRoutes";
import { DropDown } from "./DropDown";
import logo from "../assets/images/xlabs_logo_black.png";
import { Link } from "react-router-dom";
import {
  Bars3Icon,
  Bars3CenterLeftIcon,
  XMarkIcon
} from "@heroicons/react/20/solid";
import { twMerge } from "tailwind-merge";

export const Navbar: React.FC = (): React.JSX.Element => {
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const [isNavbarVisible, setIsNavbarVisible] = useState<boolean>(false);
  const handleLinkClick = (routeName: string) => {
    setActiveLink(routeName);
  };

  const NavbarIcon = {
    Bars3Icon,
    Bars3CenterLeftIcon,
    XMarkIcon
  } as const;

  useEffect(() => {
    if (isNavbarVisible) {
      setIsNavbarVisible(!isNavbarVisible);
    }
  }, [activeLink]);

  const Icon = useMemo(() => {
    return isNavbarVisible ? NavbarIcon.XMarkIcon : NavbarIcon.Bars3Icon;
  }, [isNavbarVisible]);

  const navbarDropDownVisibleStyles: string =
    "flex justify-center items-center flex-row w-5/6 py-0 w-full";
  const navbarDropDownNotVisibleStyles: string = "hidden";

  return (
    <nav className="absolute top-0 z-50 flex w-full items-center justify-center text-black transition-all duration-150 ease-in-out md:sticky md:h-24 md:border-b-2 md:border-gray-200 md:bg-white">
      <div
        className={twMerge(
          "relative flex w-full flex-col items-center bg-transparent transition-all duration-300 ease-in-out md:h-full md:w-[90%] md:flex-row md:justify-between lg:w-9/12",
          !isNavbarVisible ? navbarDropDownVisibleStyles : ""
        )}
      >
        <div className="flex w-full items-center justify-between bg-white px-6 md:hidden">
          <Link className="inline md:hidden" to={NavLinks.HOME}>
            <img
              className="inline h-32 w-32 md:hidden md:h-0 md:w-0"
              src={logo}
              alt="Logo"
            />
          </Link>
          <Icon
            className={twMerge("inline h-8 w-7")}
            onClick={() => setIsNavbarVisible(!isNavbarVisible)}
          />
        </div>
        <div
          className={`${
            isNavbarVisible
              ? "block w-full opacity-100 transition-all duration-500 ease-in-out"
              : "absolute opacity-0"
          } flex flex-col items-center justify-between bg-neutral-500 md:flex md:w-full md:flex-row md:items-center md:justify-between md:bg-transparent md:opacity-100`}
        >
          <DropDown
            title={NavLinks.WORKSHOP}
            setActiveLink={setActiveLink}
            routeName={[NavLinks.HIGH_SCHOOL, NavLinks.UNIVERSITY]}
          />
          <DropDown
            title={NavLinks.INTERNSHIP}
            setActiveLink={setActiveLink}
            routeName={[NavLinks.INTERNSHIP, NavLinks.TRAINING]}
          />
          <DropDown
            title={NavLinks.SERVICES}
            setActiveLink={setActiveLink}
            routeName={[
              NavLinks.CUSTOM_DRONES,
              NavLinks.DESIGN,
              NavLinks.PROJ_CONSULT,
              NavLinks.CFD_ANALYSIS
            ]}
          />
          <Link to={NavLinks.HOME}>
            <img
              className="hidden md:inline md:h-32 md:w-32"
              src={logo}
              alt="Logo"
            />
          </Link>
          <NavRoutes
            routeName={NavLinks.BLOGS}
            isActive={activeLink === NavLinks.BLOGS}
            onClick={() => handleLinkClick(NavLinks.BLOGS)}
          />
          <NavRoutes
            routeName={NavLinks.ABOUT_US}
            isActive={activeLink === NavLinks.ABOUT_US}
            onClick={() => handleLinkClick(NavLinks.ABOUT_US)}
          />
          <NavRoutes
            routeName={NavLinks.CONTACT_US}
            isActive={activeLink === NavLinks.CONTACT_US}
            onClick={() => handleLinkClick(NavLinks.CONTACT_US)}
          />
        </div>
      </div>
    </nav>
  );
};
