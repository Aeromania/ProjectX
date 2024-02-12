import { useState } from "react";
import { WorkshopNavlinks } from "./WorkshopNavlinks";
import { WorkshopNavRoutes } from "./constants";

export const WorkshopNavbar: React.FC = (): React.JSX.Element => {
  const [isActive, setIsActive] = useState<string>(
    WorkshopNavRoutes.PRINTING_3D
  );
  return (
    <nav className="mt-16 hidden items-center justify-center py-6 shadow-md shadow-[#374151] lg:flex">
      <div className="flex w-[95%] items-center justify-between">
        <WorkshopNavlinks
          isActive={isActive == WorkshopNavRoutes.PRINTING_3D}
          routeName={WorkshopNavRoutes.PRINTING_3D}
          onClick={() => setIsActive(WorkshopNavRoutes.PRINTING_3D)}
        />
        <WorkshopNavlinks
          isActive={isActive == WorkshopNavRoutes.MODEL_ROCKETRY}
          routeName={WorkshopNavRoutes.MODEL_ROCKETRY}
          onClick={() => setIsActive(WorkshopNavRoutes.MODEL_ROCKETRY)}
        />
        <WorkshopNavlinks
          isActive={isActive == WorkshopNavRoutes.ROBOTICS}
          routeName={WorkshopNavRoutes.ROBOTICS}
          onClick={() => setIsActive(WorkshopNavRoutes.ROBOTICS)}
        />
        <WorkshopNavlinks
          isActive={isActive == WorkshopNavRoutes.WATER_ROCKETRY}
          routeName={WorkshopNavRoutes.WATER_ROCKETRY}
          onClick={() => setIsActive(WorkshopNavRoutes.WATER_ROCKETRY)}
        />
        <WorkshopNavlinks
          isActive={isActive == WorkshopNavRoutes.GLIDER}
          routeName={WorkshopNavRoutes.GLIDER}
          onClick={() => setIsActive(WorkshopNavRoutes.GLIDER)}
        />
      </div>
    </nav>
  );
};
