import ServiceDescriptionPage from "@/components/ServiceDescriptionPage";
import { ServiceDescriptionsArray } from "./constants";

const CfdAnalysis = () => {
  return (
    <ServiceDescriptionPage
      title={ServiceDescriptionsArray[4].title}
      content={ServiceDescriptionsArray[5].content}
    />
  );
};

export default CfdAnalysis;
