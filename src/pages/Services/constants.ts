import { ServicesNavRoutes } from "@/components/constants";
import ServiceImage_1 from "../../assets/images/xlabs_service-1.jpeg";
import ServiceImage_2 from "../../assets/images/xlabs_service-2.jpg";
import ServiceImage_3 from "../../assets/images/xlabs_service-3.png";
import ServiceImage_4 from "../../assets/images/xlabs_aircraftDesign-4.png";
import ServiceImage_5 from "../../assets/images/xlabs_aircraftDesign-5.jpeg";
import ServiceImage_6 from "../../assets/images/xlabs_service-6.jpg";

type TservicesInfoArrayType = {
  id: number;
  title: string;
  content: string;
  image: string;
  leftButtonNavigateTo: string;
};

export const servicesInfoArray: TservicesInfoArrayType[] = [
  {
    id: 1,
    title: "Custom Drones",
    content:
      "Custom and ready-to-fly drones designed for beginners and experts.",
    image: ServiceImage_1,
    leftButtonNavigateTo: ServicesNavRoutes.CUSTOM_DRONE
  },
  {
    id: 2,
    title: "3D Printing",
    content:
      "Your creativity with precision engineer 3D printing: The future of design starts here",
    image: ServiceImage_2,
    leftButtonNavigateTo: ServicesNavRoutes.PRINTING_3D
  },
  {
    id: 3,
    title: "Desgin And Fabrication",
    content:
      "Elevate your project with seamless design integration and expert fabrication solutions",
    image: ServiceImage_3,
    leftButtonNavigateTo: ServicesNavRoutes.DESIGN_FABRICATION
  },
  {
    id: 4,
    title: "Structural Analysis",
    content:
      "Ensure the strength and integrity of your designs with advance structural analysis expertise",
    image: ServiceImage_4,
    leftButtonNavigateTo: ServicesNavRoutes.STRUCTURAL_ANALYSIS
  },
  {
    id: 5,
    title: "CFD Analysis",
    content:
      "Optimise performance and efficiency through comprehensive computational fluid dynamics (CFD)",
    image: ServiceImage_5,
    leftButtonNavigateTo: ServicesNavRoutes.CFD_ANALYSIS
  },
  {
    id: 6,
    title: "Project Consultation",
    content:
      "Unlock insights and solutions with tailored technical consultation from industrial experts",
    image: ServiceImage_6,
    leftButtonNavigateTo: ServicesNavRoutes.PROJECT_CONSULTATION
  }
];
