import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import "./styles/index.css";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs/Blogs";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import School from "./pages/School/School";
import University from "./pages/University";
import Intership from "./pages/Intership";
import Training from "./pages/Training";
import CustomDrones from "./pages/CustomDrones";
import Design from "./pages/Design";
import Consultation from "./pages/Consultation";
import { NavRoutes, WorkshopNavRoutes } from "./components/constants";
import CfdAnalysis from "./pages/CfdAnalysis";
import CreateBlogs from "./pages/Blogs/CreateBlogs";
import EditBlogs from "./pages/Blogs/EditBlogs";
import Printing3d from "./pages/School/Printing3d";
import ModelRocketry from "./pages/School/ModelRocketry";
import Robotics from "./pages/School/Robotics";
import WaterRocketry from "./pages/School/WaterRocketry";
import Glider from "./pages/School/Glider";

const App: React.FC = (): React.JSX.Element => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path={NavRoutes.HOME} element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path={NavRoutes.BLOGS}>
          <Route index element={<Blogs />} />
          <Route path={NavRoutes.CreateBlogs} element={<CreateBlogs />} />
          <Route path={NavRoutes.EditBlogs} element={<EditBlogs />} />
        </Route>
        <Route path={NavRoutes.ABOUT_US} element={<AboutUs />} />
        <Route path={NavRoutes.CONTACT_US} element={<ContactUs />} />
        <Route path={NavRoutes.HIGH_SCHOOL} element={<School />}>
          <Route
            path={WorkshopNavRoutes.PRINTING_3D}
            element={<Printing3d />}
          />
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
        <Route path={NavRoutes.UNIVERSITY} element={<University />} />
        <Route path={NavRoutes.INTERNSHIP} element={<Intership />} />
        <Route path={NavRoutes.TRAINING} element={<Training />} />
        <Route path={NavRoutes.CUSTOM_DRONES} element={<CustomDrones />} />
        <Route path={NavRoutes.DESIGN} element={<Design />} />
        <Route path={NavRoutes.PROJ_CONSULT} element={<Consultation />} />
        <Route path={NavRoutes.CFD_ANALYSIS} element={<CfdAnalysis />} />
      </Routes>
    </div>
  );
};

export default App;
