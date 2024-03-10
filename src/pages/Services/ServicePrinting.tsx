import ServiceDescriptionPage from "@/components/ServiceDescriptionPage";
import { ServiceDescriptionsArray } from "./constants";
import Printing3dImage1 from "../../assets/images/xlabs_services-printing3d-1.jpeg";
import Printing3dImage2 from "../../assets/images/xlabs_services-printing3d-2.jpeg";
import Printing3dImage3 from "../../assets/images/xlabs_services-printing3d-3.jpeg";
import Printing3dImage4 from "../../assets/images/xlabs_services-printing3d-4.jpeg";
import Printing3dImage5 from "../../assets/images/xlabs_services-printing3d-5.jpeg";
import Printing3dImage6 from "../../assets/images/xlabs_services-printing3d-6.jpeg";
import Printing3dImage7 from "../../assets/images/xlabs_services-printing3d-7.jpeg";
import Printing3dImage8 from "../../assets/images/xlabs_services-printing3d-8.jpeg";
import Printing3dImage9 from "../../assets/images/xlabs_services-printing3d-9.jpeg";
import Printing3dImage10 from "../../assets/images/xlabs_services-printing3d-10.jpeg";
import Printing3dImage11 from "../../assets/images/xlabs_services-printing3d-11.jpeg";
import Printing3dImage12 from "../../assets/images/xlabs_services-printing3d-12.jpeg";

const ServicePrinting = () => {
  const images = [
    Printing3dImage1,
    Printing3dImage2,
    Printing3dImage3,
    Printing3dImage4,
    Printing3dImage5,
    Printing3dImage6,
    Printing3dImage7,
    Printing3dImage8,
    Printing3dImage9,
    Printing3dImage10,
    Printing3dImage11,
    Printing3dImage12
  ];
  return (
    <ServiceDescriptionPage
      content={ServiceDescriptionsArray[1].content}
      title={ServiceDescriptionsArray[1].title}
      images={images}
    />
  );
};

export default ServicePrinting;
