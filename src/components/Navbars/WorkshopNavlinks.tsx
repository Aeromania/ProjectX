import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

type WorkshopNavbarProps = {
  routeName: string;
  isActive: boolean;
  onClick: () => void;
  className?: string;
};

export const WorkshopNavlinks: React.FC<WorkshopNavbarProps> = ({
  isActive,
  routeName,
  className,
  onClick
}): React.JSX.Element => {
  return (
    <>
      <Link
        to={routeName}
        className={twMerge(
          "text-2xl text-white transition-colors duration-200 ease-in-out hover:text-red-500 active:scale-90 xl:text-3xl",
          isActive ? "text-red-500" : "",
          className
        )}
        onClick={onClick}
      >
        {routeName}
      </Link>
    </>
  );
};
