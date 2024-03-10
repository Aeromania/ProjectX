import ServiceDescriptionPage from "@/components/ServiceDescriptionPage";
import { ServiceDescriptionsArray } from "./constants";
import DesignImage1 from "../../assets/images/xlabs_services-design-1.jpg";
import DesignImage2 from "../../assets/images/xlabs_services-design-2.jpg";
import DesignImage3 from "../../assets/images/xlabs_services-design-3.jpeg";
import DesignImage4 from "../../assets/images/xlabs_services-design-4.jpeg";
import DesignImage5 from "../../assets/images/xlabs_services-design-5.jpeg";

const Design = () => {
  const images = [
    DesignImage1,
    DesignImage2,
    DesignImage3,
    DesignImage4,
    DesignImage5
  ];
  return (
    <ServiceDescriptionPage
      title={ServiceDescriptionsArray[2].title}
      content={ServiceDescriptionsArray[2].content}
      images={images}
    />
  );
};

export default Design;
