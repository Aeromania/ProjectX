import ServiceDescriptionPage from "@/components/ServiceDescriptionPage";
import { ServiceDescriptionsArray } from "./constants";
import ConsultationImage1 from "../../assets/images/xlabs_services-consultation-1.jpeg";
import ConsultationImage2 from "../../assets/images/xlabs_services-consultation-2.jpeg";
import ConsultationImage3 from "../../assets/images/xlabs_services-consultation-3.jpeg";
import ConsultationImage4 from "../../assets/images/xlabs_services-consultation-4.jpeg";
import ConsultationImage5 from "../../assets/images/xlabs_services-consultation-5.jpeg";
import ConsultationImage6 from "../../assets/images/xlabs_services-consultation-6.jpg";
import ConsultationImage7 from "../../assets/images/xlabs_services-consultation-7.jpg";

const Consultation = () => {
  const images = [
    ConsultationImage1,
    ConsultationImage2,
    ConsultationImage3,
    ConsultationImage4,
    ConsultationImage5,
    ConsultationImage6,
    ConsultationImage7
  ];
  return (
    <ServiceDescriptionPage
      title={ServiceDescriptionsArray[5].title}
      content={ServiceDescriptionsArray[5].content}
      images={images}
    />
  );
};

export default Consultation;
