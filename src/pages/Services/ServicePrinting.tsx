import ServiceDescriptionPage from "@/components/ServiceDescriptionPage";
import { ServiceDescriptionsArray } from "./constants";
import { NavRoutes, ServicesNavRoutes } from "@/components/constants";

const ServicePrinting: React.FC = (): React.JSX.Element => {
  return (
    <ServiceDescriptionPage
      content={ServiceDescriptionsArray[1].content}
      title={ServiceDescriptionsArray[1].title}
      images={ServiceDescriptionsArray[1].images}
      navigateTo={`/${NavRoutes.SERVICES}/${ServicesNavRoutes.PRINTING3D_CONTACT_FORM}`}
    />
  );
};

export default ServicePrinting;
