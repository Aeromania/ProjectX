import { WorkshopNavRoutes } from "../components/constants";
import { Route, Routes } from "react-router-dom";
import NotFound from "@/pages/PageNotFound/NotFound";
import University from "@/pages/Workshop/University/University";
import AdditiveManufacturing from "@/pages/Workshop/University/AdditiveManufacturing";
import AmateurRocketry from "@/pages/Workshop/University/AmateurRocketry";
import AircraftDesign from "@/pages/Workshop/University/AircraftDesign";
import QuadDrone from "@/pages/Workshop/University/QuadDrone";
import RcPlane from "@/pages/Workshop/University/RcPlane";
import Composites from "@/pages/Workshop/University/Composites";

const WorkshopUniversityRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<University />}>
        <Route index element={<AdditiveManufacturing />} />
        <Route
          path={WorkshopNavRoutes.ADDITIVE_MANUFACTURING}
          element={<AdditiveManufacturing />}
        />
        <Route
          path={WorkshopNavRoutes.AMATEUR_ROCKETRY}
          element={<AmateurRocketry />}
        />
        <Route
          path={WorkshopNavRoutes.AIRCRAFT_DESIGN}
          element={<AircraftDesign />}
        />
        <Route path={WorkshopNavRoutes.QUAD_DRONE} element={<QuadDrone />} />
        <Route path={WorkshopNavRoutes.RC_PLANE} element={<RcPlane />} />
        <Route path={WorkshopNavRoutes.COMPOSITES} element={<Composites />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default WorkshopUniversityRoutes;
