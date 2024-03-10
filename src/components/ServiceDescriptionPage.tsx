import React from "react";
import { ImageTrail } from "./ImageTrail";
import { ServiceTitles } from "@/pages/Services/constants";
import EncryptButton from "./EncryptButton";
import { useNavigate } from "react-router-dom";
import { NavRoutes } from "./constants";

export type ServiceDescriptionProps = {
  title: string;
  content: string;
};

const ServiceDescriptionPage: React.FC<ServiceDescriptionProps> = ({
  content,
  title
}) => {
  const navigate = useNavigate();
  const parts = title.split(" ");
  return (
    <ImageTrail>
      <h1 className="font-sans text-6xl" data-aos="fade-down-right">
        {ServiceTitles.COMMON_TITLE}
      </h1>
      <h3 className="font-sans text-8xl font-bold" data-aos="fade-left">
        {parts.map((word) => (
          <>
            <span className="uppercase">{word}</span>
            <br />
          </>
        ))}
      </h3>
      <p className="font-sans text-2xl" data-aos="fade-right">
        {content}
      </p>
      <EncryptButton
        animation="fade-up"
        onClick={() => navigate("/" + NavRoutes.CONTACT_US)}
        className="text-lg"
        customAnimationColor="black"
      />
    </ImageTrail>
  );
};

export default ServiceDescriptionPage;
