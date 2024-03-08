import { ServicesNavRoutes } from "@/components/constants";
import CfdAnalysis from "@/pages/Services/CfdAnalysis";
import Consultation from "@/pages/Services/Consultation";
import CustomDrones from "@/pages/Services/CustomDrones";
import Design from "@/pages/Services/Design";
import ServicePrinting from "@/pages/Services/ServicePrinting";
import Services from "@/pages/Services/Services";
import StructuralAnalysis from "@/pages/Services/StructuralAnalysis";
import { Routes, Route } from "react-router-dom";
import NotFound from "../pages/PageNotFound/NotFound";

const ServiceRoutes = () => {
  return (
    <Routes>
      <Route index element={<Services />} />
      <Route
        path={ServicesNavRoutes.STRUCTURAL_ANALYSIS}
        element={<StructuralAnalysis />}
      />
      <Route
        path={ServicesNavRoutes.PRINTING_3D}
        element={<ServicePrinting />}
      />
      <Route path={ServicesNavRoutes.DESIGN_FABRICATION} element={<Design />} />
      <Route path={ServicesNavRoutes.CUSTOM_DRONE} element={<CustomDrones />} />
      <Route path={ServicesNavRoutes.CFD_ANALYSIS} element={<CfdAnalysis />} />
      <Route
        path={ServicesNavRoutes.PROJECT_CONSULTATION}
        element={<Consultation />}
      />
      <Route path={"*"} element={<NotFound />} />
    </Routes>
  );
};

export default ServiceRoutes;
