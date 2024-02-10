import React, { ReactNode, Ref, SetStateAction } from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import classNames from "classnames";
import { CaretDownIcon } from "@radix-ui/react-icons";
import { Link, LinkProps } from "react-router-dom";
import { typeOfNavRoutes } from "./types";

type routeOptions = {
  routeName: typeOfNavRoutes;
  description?: string;
};

type MenuDropDownProps = {
  buttonTitle: string;
  setActiveLink: React.Dispatch<SetStateAction<string | null>>;
  routeOptions: routeOptions[];
};

const MenuDropDown: React.FC<MenuDropDownProps> = ({
  buttonTitle,
  routeOptions,
  setActiveLink
}): React.JSX.Element => {
  return (
    <NavigationMenu.Root className="relative z-[1] flex w-full justify-center sm:w-auto">
      <NavigationMenu.List className="center m-0 flex list-none rounded-[6px] bg-transparent p-1">
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 font-sans text-[15px] text-base font-normal leading-none text-black outline-none focus:shadow-[0_0_0_2px] focus:shadow-violet7">
            {buttonTitle}{" "}
            <CaretDownIcon
              className="relative top-[1px] text-violet10 transition-transform duration-200 ease-in group-data-[state=open]:-rotate-180"
              aria-hidden
            />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="absolute left-0 top-0 sm:w-auto">
            <ul className="m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[400px] sm:grid-flow-col sm:grid-rows-2">
              {routeOptions.map((value) => {
                return (
                  <ListItem
                    title={value.routeName}
                    to={value.routeName}
                    onClick={() => setActiveLink(value.routeName)}
                  >
                    {value.description}
                  </ListItem>
                );
              })}
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Indicator className="data-[state=visible]:animate-fadeIn data-[state=hidden]:animate-fadeOut top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden bg-transparent transition-[width,transform_250ms_ease]">
          <div className="relative top-[70%] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px] bg-violet11" />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

      <div className="perspective-[2000px] absolute left-0 top-full flex w-full justify-center">
        <NavigationMenu.Viewport className="data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut absolute z-50 mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-[6px] bg-white shadow-sm shadow-sky-600 transition-[width,_height] duration-300 sm:w-[var(--radix-navigation-menu-viewport-width)]" />
      </div>
    </NavigationMenu.Root>
  );
};

type ListItemProps = {
  className?: string;
  children?: ReactNode;
  title: string;
} & LinkProps;

type forwardRefProps = Ref<HTMLAnchorElement> | undefined;

const ListItem: React.FC<ListItemProps> = React.forwardRef(
  ({ className, children, title, ...props }, forwardedRef: forwardRefProps) => (
    <li>
      <NavigationMenu.Link asChild>
        <Link
          className={classNames(
            "block select-none rounded-[6px] p-3 text-[15px] leading-none no-underline outline-none transition-colors hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-violet7",
            className
          )}
          {...props}
          ref={forwardedRef}
        >
          <div className="mb-[5px] font-medium leading-[1.2] text-violet12">
            {title}
          </div>
          <p className="leading-[1.4] text-mauve11">{children}</p>
        </Link>
      </NavigationMenu.Link>
    </li>
  )
);

export default MenuDropDown;
