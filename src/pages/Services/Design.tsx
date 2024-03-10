import ServiceDescriptionPage from "@/components/ServiceDescriptionPage";
import { ServiceDescriptionsArray } from "./constants";

const Design = () => {
  return (
    <ServiceDescriptionPage
      title={ServiceDescriptionsArray[2].title}
      content={ServiceDescriptionsArray[2].content}
    />
  );
};

export default Design;
