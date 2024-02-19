import useWindowDimensions from "@/CustomHooks/hooks";
// @ts-expect-error "type not supported"
import QuadDroneLanding from "../../../assets/images/xlabs_quadDrone.png";
// @ts-expect-error "type not supported"
import QuadDroneLandingFull from "../../../assets/images/xlabs_quadDroneFull.png";
import { useState, useEffect } from "react";
import { Carousel } from "@/components/Carousel/Carousel";
import { printing3dInfoArray } from "../School/SchoolCarouselData";

const QuadDrone: React.FC = (): React.JSX.Element => {
  const { width } = useWindowDimensions();
  const [landingImage, setLandingImage] = useState();

  useEffect(() => {
    const result = width < 1024 ? QuadDroneLandingFull : QuadDroneLanding;
    setLandingImage(result);
  }, [width]);

  return (
    <section className="w-full">
      <div className="relative flex w-full flex-col items-center py-10 sm:min-h-dvh sm:justify-center lg:items-start lg:py-0">
        <div className="w-[90%] lg:ml-16 lg:w-[50%]">
          <img
            src={landingImage}
            alt="Drone (Quad)"
            className="mt-8 w-full rounded-sm lg:absolute lg:right-10 lg:top-[5%] lg:h-[90%] lg:w-[65%] lg:rounded-none"
          />
          <h1 className="relative mb-6 mt-4 text-center text-4xl font-semibold lg:mt-0 lg:text-start lg:text-7xl lg:font-bold">
            DRONE (QUAD)
          </h1>
          <p className="relative text-start text-xl lg:text-start lg:text-2xl xl:text-3xl">
            <span
              className={
                "absolute inset-x-0 -top-1 left-0 hidden h-0.5 scale-x-100 bg-[#373737] font-sans text-lg font-normal transition-all duration-300 lg:inline-block"
              }
            />
            Welcome to our Drone Workshop. we'll delve into the exciting world
            of Unmanned Aerial Vehicles (UAVs), also known as drones. From
            understanding the fundamental components to hands-on assembly,
            soldering, and flight operations, this workshop offers a
            comprehensive overview for enthusiasts and beginners
            alike.Throughout the workshop, you'll learn how to solder
            components, assemble a UAV from scratch, configure it using Mission
            Planner software, and take to the skies with confidence
          </p>
        </div>
      </div>
      <div className="relative flex w-full flex-col items-center justify-center bg-[#111827] py-12 sm:py-20">
        <h1 className="text-center font-sans text-3xl sm:text-4xl">
          Workshop Overview
        </h1>
        <h3 className="my-4 mb-10 text-center font-sans text-xl sm:text-3xl lg:my-10 lg:mb-10">
          Duration: <span className="text-red-500">3 Days</span>
        </h3>
        <Carousel infoArray={printing3dInfoArray} />
      </div>
    </section>
  );
};

export default QuadDrone;
