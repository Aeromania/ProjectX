import React from "react";
import { ImageTrail } from "./ImageTrail";
import { ServiceTitles } from "@/pages/Services/constants";
import EncryptButton from "./EncryptButton";
import { useNavigate } from "react-router-dom";
import { NavRoutes } from "./constants";
import { FaArrowLeft } from "react-icons/fa6";

export type ServiceDescriptionProps = {
  title: string;
  content: string;
  images: string[];
};

const ServiceDescriptionPage: React.FC<ServiceDescriptionProps> = ({
  content,
  title,
  images
}) => {
  const navigate = useNavigate();
  const parts = title.split(" ");
  return (
    <ImageTrail images={images}>
      <div className="hidden w-fit cursor-pointer rounded-full bg-white bg-opacity-80 p-2 text-black backdrop-blur-2xl backdrop-saturate-200 transition-all duration-200 ease-in-out hover:scale-105 active:scale-95 lg:inline-block">
        <FaArrowLeft onClick={() => navigate(-1)} size={20} />
      </div>
      <h1 className="font-sans text-2xl sm:text-6xl" data-aos="fade-down-right">
        {ServiceTitles.COMMON_TITLE}
      </h1>
      <h3
        className="font-sans text-3xl font-semibold sm:text-8xl sm:font-bold"
        data-aos="fade-left"
      >
        {parts.map((word) => (
          <>
            <span className="uppercase">{word}</span>
            <br />
          </>
        ))}
      </h3>
      <p className="font-sans text-xl" data-aos="fade-right">
        {content}
      </p>
      <EncryptButton
        animation="fade-up"
        onClick={() => navigate("/" + NavRoutes.CONTACT_US)}
        className="lg:text-lg"
        customAnimationColor="black"
      />
    </ImageTrail>
  );
};

export default ServiceDescriptionPage;
