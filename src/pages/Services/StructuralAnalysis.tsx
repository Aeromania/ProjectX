import ServiceDescriptionPage from "@/components/ServiceDescriptionPage";
import { ServiceDescriptionsArray } from "./constants";
import StructuralAnalysisImage1 from "../../assets/images/xlabs_services-structural-1.jpg";
import StructuralAnalysisImage2 from "../../assets/images/xlabs_services-structural-2.png";
import StructuralAnalysisImage3 from "../../assets/images/xlabs_services-structural-3.jpg";
import StructuralAnalysisImage4 from "../../assets/images/xlabs_services-structural-4.png";

const StructuralAnalysis = () => {
  const images = [
    StructuralAnalysisImage1,
    StructuralAnalysisImage2,
    StructuralAnalysisImage3,
    StructuralAnalysisImage4
  ];
  return (
    <ServiceDescriptionPage
      title={ServiceDescriptionsArray[3].title}
      content={ServiceDescriptionsArray[3].content}
      images={images}
    />
  );
};

export default StructuralAnalysis;
