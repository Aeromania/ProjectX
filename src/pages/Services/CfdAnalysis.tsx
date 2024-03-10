import ServiceDescriptionPage from "@/components/ServiceDescriptionPage";
import { ServiceDescriptionsArray } from "./constants";

const CfdAnalysis = () => {
  return (
    <ServiceDescriptionPage
      title={ServiceDescriptionsArray[4].title}
      content={ServiceDescriptionsArray[4].content}
      images={ServiceDescriptionsArray[4].images}
    />
  );
};

export default CfdAnalysis;
