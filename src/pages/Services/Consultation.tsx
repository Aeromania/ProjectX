import ServiceDescriptionPage from "@/components/ServiceDescriptionPage";
import { ServiceDescriptionsArray } from "./constants";

const Consultation = () => {
  return (
    <ServiceDescriptionPage
      title={ServiceDescriptionsArray[5].title}
      content={ServiceDescriptionsArray[5].content}
    />
  );
};

export default Consultation;
