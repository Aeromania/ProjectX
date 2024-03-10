import ServiceDescriptionPage from "@/components/ServiceDescriptionPage";
import { ServiceDescriptionsArray } from "./constants";

const CustomDrones: React.FC = () => {
  return (
    <ServiceDescriptionPage
      title={ServiceDescriptionsArray[0].title}
      content={ServiceDescriptionsArray[0].content}
    />
  );
};

export default CustomDrones;
