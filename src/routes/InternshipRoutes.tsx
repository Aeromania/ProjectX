import { InternshipNavRoutes } from "@/components/constants";
import Internship from "@/pages/Internship/Internship";
import InternshipDescription from "@/pages/Internship/InternshipDescription";
import { Routes, Route } from "react-router-dom";

const InternshipRoutes = () => {
  return (
    <Routes>
      <Route index element={<Internship />} />
      <Route
        path={InternshipNavRoutes.INTERNSHIP_DES}
        element={<InternshipDescription />}
      />
    </Routes>
  );
};

export default InternshipRoutes;
