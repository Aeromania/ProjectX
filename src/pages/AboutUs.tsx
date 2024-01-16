import TypingAnimation from "@/components/TypingAnimation";
import React from "react";
import { twMerge } from "tailwind-merge";
// @ts-expect-error "type not supported"
import VisionIcon from "../assets/images/xlabs_visionIcon.png";
// @ts-expect-error "type not supported"
import MissionIcon from "../assets/images/xlabs_missionIcon.png";
// @ts-expect-error "type not supported"
import topPlane from "../assets/images/xlabs_mv_bgTop.png";
// @ts-expect-error "type not supported"
import bottomPlane from "../assets/images/xlabs_mv_bgBottom.png";
import { TeamCards } from "@/components/TeamCards";

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
  const aboutUsCardsInfo = [
    {
      id: 1,
      title: "Our Vision",
      icon: VisionIcon,
      description:
        " We envision a future where every student in India is not only proficient in engineering theory but is also adept at applying their skills to solve practical challenges. we aspire to be the catalyst for this transformation. Our vision is to introduce students to the thrilling and fun aspects of engineering through activities such as rockets, UAVs, and additive manufacturing. "
    },
    {
      id: 2,
      title: "Our Mission",
      icon: MissionIcon,
      description:
        "Our mission is to ignite the spark of creativity and innovation within the hearts of students across India. We are dedicated to fostering a dynamic learning environment that empowers the next generation of engineers. Our focus lies in providing students with the tools, knowledge, and hands-on experiences necessary to tackle real-world problems through the lens of hardware engineering."
    }
  ];
  return (
    <div className="flex flex-col items-center justify-center">
      <section className="flex h-dvh w-full items-center justify-center bg-black bg-[url('../assets/images/xlabs_fullTeam.png')] bg-cover bg-center bg-no-repeat xl:bg-center">
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
      <section
        className="relative flex w-full items-center justify-center overflow-x-clip md:h-dvh"
        style={{
          background: "linear-gradient(180deg, #011330 100%, #091d3ed9)"
        }}
      >
        <img
          src={topPlane}
          className="-left-32 top-10 hidden h-52 md:w-64 lg:absolute lg:inline lg:w-72 xl:w-80"
        />
        <img
          src={bottomPlane}
          className="absolute -right-16 bottom-10 hidden h-52 md:w-64 lg:inline xl:w-80"
        />
        <div className="m-0 mx-6 flex flex-col items-center justify-center md:mx-0 md:flex-row lg:gap-6">
          {aboutUsCardsInfo.map((info) => (
            <div
              className="card my-8 md:mx-5 md:my-0 md:min-h-[600px] lg:mx-0 lg:min-h-[550px] xl:min-h-[580px]"
              key={info.id}
            >
              <div className="box">
                <img src={info.icon} className="h-24 w-32" />
                <div className="text">{info.title}</div>
                <p className="lg:text-base xl:text-lg">{info.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="flex min-h-dvh w-full flex-col items-center bg-[#111827]">
        <div className="team__header mb-4 mt-24  w-[80%] text-6xl text-white">
          OUR TEAM
        </div>
        <div className="team__section grid h-full w-full place-items-center gap-4 py-20 md:grid-cols-2 lg:p-20 xl:grid-cols-3 2xl:w-[80%]">
          <TeamCards />
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
