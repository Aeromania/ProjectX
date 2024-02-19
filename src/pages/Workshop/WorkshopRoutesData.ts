import { WorkshopNavRoutes } from "@/components/constants";
import { typeOfWorkshopNavRoutes } from "@/components/types";

export const WorkshopForSchoolRoute: typeOfWorkshopNavRoutes[] = [
  WorkshopNavRoutes.PRINTING_3D,
  WorkshopNavRoutes.MODEL_ROCKETRY,
  WorkshopNavRoutes.ROBOTICS,
  WorkshopNavRoutes.WATER_ROCKETRY,
  WorkshopNavRoutes.GLIDER
];

export const WorkshopForUniversityRoute: typeOfWorkshopNavRoutes[] = [
  WorkshopNavRoutes.ADDITIVE_MANUFACTURING,
  WorkshopNavRoutes.AMATEUR_ROCKETRY,
  WorkshopNavRoutes.AIRCRAFT_DESIGN,
  WorkshopNavRoutes.QUAD_DRONE,
  WorkshopNavRoutes.RC_PLANE
];
