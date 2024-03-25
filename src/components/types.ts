import { NavRoutes, WorkshopNavRoutes } from "./constants";

export type TNavLinksProps = {
  routeName: typeOfNavRoutes;
  className?: string;
  onClick: () => void;
};

export type typeOfNavRoutes = (typeof NavRoutes)[keyof typeof NavRoutes];

export type typeOfWorkshopNavRoutes =
  (typeof WorkshopNavRoutes)[keyof typeof WorkshopNavRoutes];
