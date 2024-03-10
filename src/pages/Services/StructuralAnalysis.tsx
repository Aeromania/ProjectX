import ServiceDescriptionPage from "@/components/ServiceDescriptionPage";
import { ServiceDescriptionsArray } from "./constants";

const StructuralAnalysis = () => {
  return (
    <ServiceDescriptionPage
      title={ServiceDescriptionsArray[3].title}
      content={ServiceDescriptionsArray[3].content}
    />
  );
};

export default StructuralAnalysis;
