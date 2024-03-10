import ServiceDescriptionPage from "@/components/ServiceDescriptionPage";
import { ServiceDescriptionsArray } from "./constants";
import CustomDronesImage1 from "../../assets/images/xlabs_services-customDrones-1.jpeg";
import CustomDronesImage2 from "../../assets/images/xlabs_services-customDrones-2.jpeg";
import CustomDronesImage3 from "../../assets/images/xlabs_services-customDrones-3.jpeg";
import CustomDronesImage4 from "../../assets/images/xlabs_services-customDrones-4.jpeg";
import CustomDronesImage5 from "../../assets/images/xlabs_services-customDrones-5.jpeg";
import CustomDronesImage6 from "../../assets/images/xlabs_services-customDrones-6.jpeg";
import CustomDronesImage7 from "../../assets/images/xlabs_services-customDrones-7.jpeg";
import CustomDronesImage8 from "../../assets/images/xlabs_services-customDrones-8.jpeg";

const CustomDrones: React.FC = () => {
  const images = [
    CustomDronesImage1,
    CustomDronesImage2,
    CustomDronesImage3,
    CustomDronesImage4,
    CustomDronesImage5,
    CustomDronesImage6,
    CustomDronesImage7,
    CustomDronesImage8
  ];
  return (
    <ServiceDescriptionPage
      title={ServiceDescriptionsArray[0].title}
      content={ServiceDescriptionsArray[0].content}
      images={images}
    />
  );
};

export default CustomDrones;
