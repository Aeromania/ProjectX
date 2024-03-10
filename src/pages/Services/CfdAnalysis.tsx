import ServiceDescriptionPage from "@/components/ServiceDescriptionPage";
import { ServiceDescriptionsArray } from "./constants";
import CFDImage1 from "../../assets/images/xlabs_services-cfd-1.jpeg";
import CFDImage2 from "../../assets/images/xlabs_services-cfd-2.jpg";
import CFDImage3 from "../../assets/images/xlabs_services-cfd-3.jpg";
import CFDImage4 from "../../assets/images/xlabs_services-cfd-4.jpg";

const CfdAnalysis = () => {
  const images = [CFDImage1, CFDImage2, CFDImage3, CFDImage4];
  return (
    <ServiceDescriptionPage
      title={ServiceDescriptionsArray[4].title}
      content={ServiceDescriptionsArray[5].content}
      images={images}
    />
  );
};

export default CfdAnalysis;
