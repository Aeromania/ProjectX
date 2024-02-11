import useWindowDimensions from "@/CustomHooks/hooks";
// @ts-expect-error "type not supported"
import Printing3D from "../../assets/images/xlabs_3dprinting.png";
// @ts-expect-error "type not supported"
import Printing3dFull from "../../assets/images/xlabs_mob_printing3d.png";
import { useState, useEffect } from "react";

const Printing3d: React.FC = (): React.JSX.Element => {
  const { width } = useWindowDimensions();
  const [landingImage, setLandingImage] = useState();

  useEffect(() => {
    const result = width < 1024 ? Printing3dFull : Printing3D;
    setLandingImage(result);
  }, [width]);

  return (
    <div className="relative flex min-h-dvh w-full flex-col items-center justify-center lg:items-start">
      <div className="w-[90%] lg:ml-16 lg:w-[50%]">
        <img
          src={landingImage}
          alt="3D Printer"
          className="mt-8 w-full lg:absolute lg:right-10 lg:top-[5%] lg:h-[90%] lg:w-[65%]"
        />
        <h1 className="group relative mb-6 text-center text-4xl font-semibold lg:text-start lg:text-7xl lg:font-bold">
          3D PRINTING
        </h1>
        <p className="group relative text-start text-xl lg:text-start lg:text-2xl xl:text-3xl">
          <span
            className={
              "absolute inset-x-0 -top-1 left-0 hidden h-0.5 scale-x-100 bg-[#373737] font-sans text-lg font-normal transition-all duration-300 lg:inline-block"
            }
          />
          Welcome to our captivating 3D Printing Workshop, an immersive 4-hour
          experience that not only introduces you to the fascinating realm of 3D
          printing but also equips you with the essential skills in
          Computer-Aided Design (CAD). In this workshop, we seamlessly blend the
          art of design with the science of printing, empowering you to bring
          your digital visions to life.
        </p>
      </div>
    </div>
  );
};

export default Printing3d;
