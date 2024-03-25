import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

type WorkshopNavbarProps = {
  routeName: string;
  onClick: () => void;
  className?: string;
};

export const WorkshopNavlinks: React.FC<WorkshopNavbarProps> = ({
  routeName,
  className,
  onClick
}): React.JSX.Element => {
  const [isThisActiveRoute, setIsThisActiveRoute] = useState<boolean>(false);
  const currentPath = decodeURIComponent(window.location.pathname);

  useEffect(() => {
    const parts = currentPath.split("/");

    if (routeName.toString() === parts[parts.length - 1].toString()) {
      setIsThisActiveRoute(true);
    } else {
      setIsThisActiveRoute(false);
    }
  }, [currentPath]);

  return (
    <>
      <Link
        to={routeName}
        className={twMerge(
          "text-2xl text-white transition-colors duration-200 ease-in-out hover:text-sky-500 active:scale-90 xl:text-3xl",
          isThisActiveRoute ? "text-sky-500" : "",
          className
        )}
        onClick={onClick}
      >
        {routeName}
      </Link>
    </>
  );
};
