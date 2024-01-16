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
          <NavigationMenu.Trigger className="focus:shadow-violet7 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 font-sans text-[15px] text-base font-normal leading-none text-black outline-none focus:shadow-[0_0_0_2px]">
            {buttonTitle}{" "}
            <CaretDownIcon
              className="text-violet10 duration-[250] relative top-[1px] transition-transform ease-in group-data-[state=open]:-rotate-180"
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
          <div className="bg-violet11 relative top-[70%] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px]" />
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
            "focus:shadow-violet7 hover:bg-mauve3 block select-none rounded-[6px] p-3 text-[15px] leading-none no-underline outline-none transition-colors focus:shadow-[0_0_0_2px]",
            className
          )}
          {...props}
          ref={forwardedRef}
        >
          <div className="text-violet12 mb-[5px] font-medium leading-[1.2]">
            {title}
          </div>
          <p className="text-mauve11 leading-[1.4]">{children}</p>
        </Link>
      </NavigationMenu.Link>
    </li>
  )
);

export default MenuDropDown;
