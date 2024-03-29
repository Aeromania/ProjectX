import School from "@/pages/Workshop/School/School";
import { WorkshopNavRoutes } from "../components/constants";
import Glider from "../pages/Workshop/School/Glider";
import ModelRocketry from "../pages/Workshop/School/ModelRocketry";
import Printing3d from "../pages/Workshop/School/Printing3d";
import Robotics from "../pages/Workshop/School/Robotics";
import WaterRocketry from "../pages/Workshop/School/WaterRocketry";
import { Route, Routes } from "react-router-dom";
import NotFound from "@/pages/PageNotFound/NotFound";

const WorkshopSchoolRoutes: React.FC = (): React.JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<School />}>
        <Route index element={<Printing3d />} />
        <Route path={WorkshopNavRoutes.PRINTING_3D} element={<Printing3d />} />
        <Route
          path={WorkshopNavRoutes.MODEL_ROCKETRY}
          element={<ModelRocketry />}
        />
        <Route path={WorkshopNavRoutes.ROBOTICS} element={<Robotics />} />
        <Route
          path={WorkshopNavRoutes.WATER_ROCKETRY}
          element={<WaterRocketry />}
        />
        <Route path={WorkshopNavRoutes.GLIDER} element={<Glider />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default WorkshopSchoolRoutes;
