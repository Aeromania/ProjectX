import { NavRoutes } from "./constants";

export type TNavLinksProps = {
  routeName: typeOfNavRoutes;
  className?: string;
  isActive: boolean;
  onClick: () => void;
};

export type typeOfNavRoutes = (typeof NavRoutes)[keyof typeof NavRoutes];
