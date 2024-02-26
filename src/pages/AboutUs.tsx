import TypingAnimation from "@/components/TypingAnimation";
import React from "react";
import { twMerge } from "tailwind-merge";
import VisionIcon from "../assets/images/xlabs_visionIcon.png";
import MissionIcon from "../assets/images/xlabs_missionIcon.png";
import topPlane from "../assets/images/xlabs_mv_bgTop.png";
import bottomPlane from "../assets/images/xlabs_mv_bgBottom.png";
import teamPhoto from "../assets/images/xlabs_fullTeam.png";
import ksheeraj from "../assets/images/xlabs_ksheeraj.jpeg";
import naijith from "../assets/images/xlabs_naijith.jpeg";
import pranav from "../assets/images/xlabs_pranav.jpeg";
import shreesha from "../assets/images/xlabs_shreesha.jpeg";
import ruturaj from "../assets/images/xlabs_ruturaj.jpeg";
import { EmployeeInfoCard } from "@/components/employeeInfoCard.tsx";

type infoCardsProps = {
  id: number;
  title: string;
  icon: string | undefined;
  description: string;
  animation: string;
};

type employeeInfoProps = {
  name: string;
  photo: string | undefined;
  position: string;
  description: string;
  linkedinUrl: string;
};

const AboutUs: React.FC = (): React.JSX.Element => {
  // <-- title double underline styles -->
  const beforeStyles = "";
  // "before:absolute before:left-0 before:top-full before:h-[4px] before:w-[50px] before:bg-blue-600 before:content-['']";
  const afterStyles = "";
  // "after:absolute after:left-0 after:top-full after:mt-[8px] after:h-[4px] after:w-[25px] after:bg-blue-600 after:content-['']";

  // <-- Data Arrays -->
  const typingAnimationItems: string[] = [
    "Custom Drone Building",
    "Design and Fabrication",
    "Offering Tailored Solutions",
    "Structure and CFD Analysis"
  ];

  const infoCards: infoCardsProps[] = [
    {
      id: 1,
      title: "Our Vision",
      icon: VisionIcon,
      description:
        " We envision a future where every student in India is not only proficient in engineering theory but is also adept at applying their skills to solve practical challenges. we aspire to be the catalyst for this transformation. Our vision is to introduce students to the thrilling and fun aspects of engineering through activities such as rockets, UAVs, and additive manufacturing. ",
      animation: "zoom-in-right"
    },
    {
      id: 2,
      title: "Our Mission",
      icon: MissionIcon,
      description:
        "Our mission is to ignite the spark of creativity and innovation within the hearts of students across India. We are dedicated to fostering a dynamic learning environment that empowers the next generation of engineers. Our focus lies in providing students with the tools, knowledge, and hands-on experiences necessary to tackle real-world problems through the lens of hardware engineering.",
      animation: "zoom-in-left"
    }
  ];

  const employeeInfo: employeeInfoProps[] = [
    {
      name: "Naijith Rai",
      photo: naijith,
      position: "Founder",
      description:
        "Naijith Rai drives the technical and strategy of the ProjectX Labs platform and brand",
      linkedinUrl:
        "https://www.linkedin.com/in/naijith-rai-71202a1b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
      name: "Ksheeraj Krishna K V",
      photo: ksheeraj,
      position: "Co-Founder",
      description:
        "Ksheeraj Krishna K V drives the technical and strategy of the ProjectX Labs platform and brand",
      linkedinUrl:
        "https://www.linkedin.com/in/ksheeraj-krishna-k-v-185b091b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
      name: "Pranav P V",
      photo: pranav,
      position: "Co-Founder",
      description:
        "Pranav P V drives the technical and strategy of the ProjectX Labs platform and brand",
      linkedinUrl:
        "https://www.linkedin.com/in/pranav-pv-281a97214?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
      name: "Ruturaj Yellurkar",
      photo: ruturaj,
      position: "Co-Founder",
      description:
        "Ruturaj Yellurkar drives the technical and strategy of the ProjectX Labs platform and brand",
      linkedinUrl:
        "https://www.linkedin.com/in/ruturaj10?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
      name: "Shreesha Sridhar",
      photo: shreesha,
      position: "Chairman",
      description:
        "Shreesha Sridhar drives the technical and strategy of the ProjectX Labs platform and brand",
      linkedinUrl:
        "https://www.linkedin.com/in/shreesha-sridhar-3ab7b728b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    }
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      <section className="relative flex h-dvh w-full justify-center bg-black sm:items-center md:bg-[url('../assets/images/xlabs_fullTeam.png')] md:bg-cover md:bg-center md:bg-no-repeat xl:bg-center">
        <div
          className="relative mb-24 flex w-[95%] flex-col md:w-[90%] xl:w-[65%]"
          data-aos="fade-down"
          data-aos-once={true}
        >
          <div className="relative mb-6 md:hidden">
            <img src={teamPhoto} className="object-contain object-top" />
            <h1
              className={twMerge(
                "absolute -bottom-4 py-6 text-4xl font-normal text-white sm:py-8 md:block md:text-6xl lg:font-semibold",
                beforeStyles,
                afterStyles
              )}
            >
              ABOUT <span className="text-sky-400">US</span>
            </h1>
          </div>
          <h1
            className={twMerge(
              "relative hidden py-6 text-4xl font-normal text-white sm:py-8 md:block md:text-6xl lg:font-semibold",
              beforeStyles,
              afterStyles
            )}
            data-aos="fade-left"
            data-aos-once={true}
          >
            ABOUT <span className="text-sky-400">US</span>
          </h1>
          <h2
            className="mb-2 text-base font-medium text-white sm:text-2xl sm:font-medium md:text-3xl md:font-semibold"
            data-aos="fade-right"
            data-aos-once={true}
          >
            We specialize in{" "}
            <TypingAnimation
              textColor={"text-sky-400"}
              items={typingAnimationItems}
            />
          </h2>
          <p
            className="text-xl text-white sm:text-2xl"
            style={{ textShadow: "2px 0px black" }}
            data-aos="fade-left"
            data-aos-once={true}
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
          data-aos="fade-right"
          data-aos-once={true}
        />
        <img
          src={bottomPlane}
          className="absolute -right-16 bottom-10 hidden h-52 md:w-64 lg:inline xl:w-80"
          data-aos="fade-left"
          data-aos-once={true}
        />
        <div className="m-0 mx-6 flex h-full flex-col items-center justify-center md:mx-0 md:flex-row lg:gap-6">
          {infoCards.map((info) => (
            <div
              className="card my-8 min-h-[60%] md:mx-5 md:my-0 lg:mx-0"
              key={info.id}
              data-aos={info.animation}
              data-aos-once={true}
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
      <section className="flex min-h-dvh w-full flex-col items-center bg-black">
        <div
          className="team__header mb-4 mt-16 w-[80%] text-center text-5xl text-white sm:text-6xl md:mt-24 md:text-left"
          data-aos="fade-down-right"
          data-aos-once={true}
        >
          Team Leaders
        </div>
        <div className="team__section grid h-full w-full place-items-center gap-4 md:grid-cols-2 md:py-20 lg:p-20 xl:grid-cols-3 2xl:w-[80%]">
          {employeeInfo.map((employee, index) => (
            <EmployeeInfoCard
              key={index}
              name={employee.name}
              photo={employee.photo}
              position={employee.position}
              linkedinUrl={employee.linkedinUrl}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
