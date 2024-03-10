import ServiceDescriptionPage from "@/components/ServiceDescriptionPage";
import { ServiceDescriptionsArray } from "./constants";

const ServicePrinting = () => {
  return (
    <ServiceDescriptionPage
      content={ServiceDescriptionsArray[1].content}
      title={ServiceDescriptionsArray[1].title}
      images={ServiceDescriptionsArray[1].images}
    />
  );
};

export default ServicePrinting;
