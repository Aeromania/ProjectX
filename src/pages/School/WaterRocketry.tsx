import useWindowDimensions from "@/CustomHooks/hooks";
// @ts-expect-error "type not supported"
import WaterRocketryLanding from "../../assets/images/xlabs_waterRocketryLanding.png";
// @ts-expect-error "type not supported"
import WaterRocketryLandingFull from "../../assets/images/xlabs_waterRocketryLandingFull.png";
import { useState, useEffect } from "react";
import { Carousel } from "@/components/Carousel/Carousel";
import { waterRocketryInfoArray } from "./CarouselData";

const WaterRocketry: React.FC = (): React.JSX.Element => {
  const { width } = useWindowDimensions();
  const [landingImage, setLandingImage] = useState();

  useEffect(() => {
    const result =
      width < 1024 ? WaterRocketryLandingFull : WaterRocketryLanding;
    setLandingImage(result);
  }, [width]);

  return (
    <section className="w-full">
      <div className="relative flex w-full flex-col items-center py-10 sm:min-h-dvh sm:justify-center lg:items-end lg:py-0">
        <div className="w-[90%] lg:mr-8 lg:w-[50%]">
          <img
            src={landingImage}
            alt="3D Printer"
            className="mt-8 max-h-[600px] w-full rounded-md lg:absolute lg:left-10 lg:top-[5%] lg:h-[90%] lg:max-h-fit lg:w-[65%] lg:rounded-none"
          />
          <h1 className="relative mb-6 text-center text-4xl font-semibold lg:text-start lg:text-7xl lg:font-bold">
            WATER ROCKETRY
          </h1>
          <p className="relative text-start text-xl lg:text-start lg:text-2xl xl:text-3xl">
            <span
              className={
                "absolute inset-x-0 -top-1 left-0 hidden h-0.5 scale-x-100 bg-[#373737] font-sans text-lg font-normal transition-all duration-300 lg:inline-block"
              }
            />
            The Water Rocketry Workshop offers a thrilling and educational
            experience that allows participants of all ages to dive into the
            exciting world of space exploration. By combining design,
            engineering, and hands-on rocket launching, this workshop promises a
            unique and engaging way to learn about aerodynamics and rocketry.
          </p>
        </div>
      </div>
      <div className="relative flex w-full flex-col items-center justify-center bg-[#111827] py-12 sm:py-20">
        <h1 className="text-center font-sans text-3xl sm:text-4xl">
          Workshop Overview
        </h1>
        <h3 className="my-4 mb-10 text-center font-sans text-xl sm:text-3xl lg:my-10 lg:mb-10">
          Duration: <span className="text-red-500">3 Hours</span>
        </h3>
        <Carousel infoArray={waterRocketryInfoArray} />
      </div>
    </section>
  );
};

export default WaterRocketry;
