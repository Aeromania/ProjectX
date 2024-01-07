import { NavLink, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import './styles/index.css';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import School from './pages/School';
import University from './pages/University';
import Intership from './pages/Intership';
import Training from './pages/Training';
import CustomDrones from './pages/CustomDrones';
import Design from './pages/Design';
import Consultation from './pages/Consultation';
import { NavLinks } from './components/constants';
import CfdAnalysis from './pages/CfdAnalysis';

const App: React.FC = (): React.JSX.Element => {
  return (
    <div className="h-screen bg-white">
      <Navbar />
      <Routes>
        <Route path={NavLinks.HOME} element={<Home />} />
        <Route path={NavLinks.BLOGS} element={<Blogs />} />
        <Route path={NavLinks.ABOUT_US} element={<AboutUs />} />
        <Route path={NavLinks.CONTACT_US} element={<ContactUs />} />
        <Route path={NavLinks.HIGH_SCHOOL} element={<School />} />
        <Route path={NavLinks.UNIVERSITY} element={<University />} />
        <Route path={NavLinks.INTERNSHIP} element={<Intership />} />
        <Route path={NavLinks.TRAINING} element={<Training />} />
        <Route path={NavLinks.CUSTOM_DRONES} element={<CustomDrones />} />
        <Route path={NavLinks.DESIGN} element={<Design />} />
        <Route path={NavLinks.PROJ_CONSULT} element={<Consultation />} />
        <Route path={NavLinks.CFD_ANALYSIS} element={<CfdAnalysis />} />
      </Routes>
    </div>
  );
};

export default App;
