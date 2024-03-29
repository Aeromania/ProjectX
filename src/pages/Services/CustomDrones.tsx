import ServiceDescriptionPage from "@/components/ServiceDescriptionPage";
import { ServiceDescriptionsArray } from "./constants";

const CustomDrones: React.FC = () => {
  return (
    <ServiceDescriptionPage
      title={ServiceDescriptionsArray[0].title}
      content={ServiceDescriptionsArray[0].content}
      images={ServiceDescriptionsArray[0].images}
    />
  );
};

export default CustomDrones;
