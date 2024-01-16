import TypingAnimation from "@/components/TypingAnimation";
import React from "react";
import { twMerge } from "tailwind-merge";

const AboutUs: React.FC = (): React.JSX.Element => {
  const typeItems = [
    "Custom Drone Building",
    "Design and Fabrication",
    "Offering Tailored Solutions",
    "Structure and CFD Analysis"
  ];
  const beforeStyles = "";
  // "before:absolute before:left-0 before:top-full before:h-[4px] before:w-[50px] before:bg-blue-600 before:content-['']";
  const afterStyles = "";
  // "after:absolute after:left-0 after:top-full after:mt-[8px] after:h-[4px] after:w-[25px] after:bg-blue-600 after:content-['']";
  return (
    <div className="min-h-vh flex w-full flex-col items-center justify-center bg-black">
      <section className="flex h-dvh w-full items-center justify-center bg-[url('../assets/images/xlabs_fullTeam.png')] bg-cover bg-center bg-no-repeat xl:bg-center">
        <div className="mb-24 flex w-[95%] flex-col md:w-[90%] xl:w-[65%]">
          <h1
            className={twMerge(
              "relative py-6 text-4xl font-normal text-white sm:py-8 md:text-6xl lg:font-semibold",
              beforeStyles,
              afterStyles
            )}
          >
            ABOUT <span className="text-sky-400">US</span>
          </h1>
          <h2 className="mb-2 text-base font-medium text-white sm:text-2xl sm:font-medium md:text-3xl md:font-semibold">
            We specialize in{" "}
            <TypingAnimation textColor={" text-sky-400"} items={typeItems} />
          </h2>
          <p
            className="text-white sm:text-2xl"
            style={{ textShadow: "2px 0px black" }}
          >
            ProjectX Labs, a dynamic engineering services company founded by
            Aerospace graduates. Our mission is to inspire the next generation
            of aerospace enthusiasts and engineers through immersive educational
            workshops. Having successfully conducted engaging sessions in
            various institutions.
          </p>
        </div>
      </section>
      <section></section>
    </div>
  );
};

export default AboutUs;
