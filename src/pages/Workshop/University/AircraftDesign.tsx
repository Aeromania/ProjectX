import useWindowDimensions from "@/CustomHooks/hooks";
// @ts-expect-error "type not supported"
import AircraftDesignLanding from "../../../assets/images/xlabs_aircraftDesign.png";
// @ts-expect-error "type not supported"
import AircraftDesignLandingFull from "../../../assets/images/xlabs_aircraftDesignFull.png";
import { useState, useEffect } from "react";
import { Carousel } from "@/components/Carousel/Carousel";
import { printing3dInfoArray } from "../School/SchoolCarouselData";

const AircraftDesign: React.FC = (): React.JSX.Element => {
  const { width } = useWindowDimensions();
  const [landingImage, setLandingImage] = useState();

  useEffect(() => {
    const result =
      width < 1024 ? AircraftDesignLandingFull : AircraftDesignLanding;
    setLandingImage(result);
  }, [width]);

  return (
    <section className="w-full">
      <div className="relative flex w-full flex-col items-center py-10 sm:min-h-dvh sm:justify-center lg:items-start lg:py-0">
        <div className="w-[90%] lg:ml-16 lg:w-[50%]">
          <img
            src={landingImage}
            alt="Aircraft Design"
            className="mt-8 w-full rounded-sm lg:absolute lg:right-10 lg:top-[5%] lg:h-[90%] lg:w-[65%] lg:rounded-none"
          />
          <h1 className="relative mb-6 mt-4 text-center text-4xl font-semibold lg:mt-0 lg:text-start lg:text-7xl lg:font-bold">
            AIRCRAFT DESIGN
          </h1>
          <p className="relative text-start text-xl lg:text-start lg:text-2xl xl:text-3xl">
            <span
              className={
                "absolute inset-x-0 -top-1 left-0 hidden h-0.5 scale-x-100 bg-[#373737] font-sans text-lg font-normal transition-all duration-300 lg:inline-block"
              }
            />
            The Aircraft Design Workshop provides participants with a
            comprehensive understanding of the principles, methodologies, and
            tools involved in designing aircraft. From conceptualization to CAD
            designs, structural analysis, and Computational Fluid Dynamics (CFD)
            simulations, this workshop equips attendees with the knowledge and
            skills necessary to develop innovative and efficient aircraft
            designs.
          </p>
        </div>
      </div>
      <div className="relative flex w-full flex-col items-center justify-center bg-[#111827] py-12 sm:py-20">
        <h1 className="text-center font-sans text-3xl sm:text-4xl">
          Workshop Overview
        </h1>
        <h3 className="my-4 mb-10 text-center font-sans text-xl sm:text-3xl lg:my-10 lg:mb-10">
          Duration: <span className="text-red-500">2 Weeks</span>
        </h3>
        <Carousel infoArray={printing3dInfoArray} />
      </div>
    </section>
  );
};

export default AircraftDesign;
