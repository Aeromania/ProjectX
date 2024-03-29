import { ServiceDescriptionProps } from "@/components/ServiceDescriptionPage";
import HomeImageTrail_image1 from "../../assets/images/xlabs_homeImageTrails-1.jpeg";
import HomeImageTrail_image2 from "../../assets/images/xlabs_homeImageTrails-2.jpeg";
import HomeImageTrail_image3 from "../../assets/images/xlabs_homeImageTrails-3.jpeg";
import HomeImageTrail_image4 from "../../assets/images/xlabs_homeImageTrails-4.jpeg";
import HomeImageTrail_image5 from "../../assets/images/xlabs_homeImageTrails-5.jpeg";
import HomeImageTrail_image6 from "../../assets/images/xlabs_homeImageTrails-6.jpeg";
import HomeImageTrail_image7 from "../../assets/images/xlabs_homeImageTrails-7.jpeg";
import HomeImageTrail_image8 from "../../assets/images/xlabs_homeImageTrails-8.jpeg";
import HomeImageTrail_image9 from "../../assets/images/xlabs_homeImageTrails-9.jpeg";
import HomeImageTrail_image10 from "../../assets/images/xlabs_homeImageTrails-10.jpeg";
import {
  NavRoutes,
  ServicesNavRoutes,
  WorkshopNavRoutes
} from "@/components/constants";

const commonImagesArray: string[] = [
  HomeImageTrail_image1,
  HomeImageTrail_image2,
  HomeImageTrail_image3,
  HomeImageTrail_image4,
  HomeImageTrail_image5,
  HomeImageTrail_image6,
  HomeImageTrail_image7,
  HomeImageTrail_image8,
  HomeImageTrail_image9,
  HomeImageTrail_image10
];

export const HomePageImageTrailPropsArray: ServiceDescriptionProps[] = [
  {
    title: "Services",
    images: commonImagesArray,
    content:
      "Our services cover custom drones for specialized applications, 3D printing for rapid prototyping, design, and fabrication ensuring quality, structural and CFD analysis optimizing performance, and project consultation guiding success.",
    buttonTitle: "Explore More",
    showButtonIcon: false,
    navigateTo: "/" + NavRoutes.SERVICES,
    hideCommonTitle: true,
    SecondButtonTitle: "Our Bestseller",
    showSecondButtonIcon: false,
    secondButtonNavigateTo: "/Services/" + ServicesNavRoutes.PRINTING_3D
  },
  {
    title: "Workshops",
    images: commonImagesArray,
    content:
      "Workshops offer hands-on learning: 3D printing explores additive manufacturing; model rocketry covers rocket science; drone workshops assemble, program, and fly drones; glider workshops study aerodynamics; aircraft design covers aerospace principles; composites workshops teach material fabrication. Each fosters creativity and deeper STEM understanding.",
    buttonTitle: "Explore More",
    showButtonIcon: false,
    navigateTo: "/" + NavRoutes.HIGH_SCHOOL,
    hideCommonTitle: true,
    SecondButtonTitle: "Our Bestseller",
    showSecondButtonIcon: false,
    secondButtonNavigateTo:
      "/" + NavRoutes.UNIVERSITY + "/" + WorkshopNavRoutes.COMPOSITES
  }
];
