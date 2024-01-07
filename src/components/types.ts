import { NavLinks } from './constants';

export type TNavRouteProps = {
  routeName: typeOfNavLinks;
  className?: string;
  isActive: boolean;
  onClick: () => void;
};

export type typeOfNavLinks = (typeof NavLinks)[keyof typeof NavLinks];
