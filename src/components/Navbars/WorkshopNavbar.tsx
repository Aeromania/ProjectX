import { useState } from "react";
import { WorkshopNavlinks } from "./WorkshopNavlinks";
import { typeOfWorkshopNavRoutes } from "../types";

type WorkshopNavbarProps = {
  initialRoute: typeOfWorkshopNavRoutes;
  NavRoutes: typeOfWorkshopNavRoutes[];
};

export const WorkshopNavbar: React.FC<WorkshopNavbarProps> = ({
  NavRoutes,
  initialRoute
}): React.JSX.Element => {
  const [isActive, setIsActive] = useState<string>(initialRoute);
  return (
    <nav className="sticky top-[95px] z-20 mt-16 hidden items-center justify-center bg-[#161617] py-6 shadow-md shadow-[#374151] lg:flex">
      <div className="flex w-[95%] items-center justify-between">
        {NavRoutes.map((routeName, index) => (
          <WorkshopNavlinks
            isActive={isActive == routeName}
            routeName={routeName}
            onClick={() => setIsActive(routeName)}
            key={index}
          />
        ))}
      </div>
    </nav>
  );
};
