import { FaLinkedinIn } from "react-icons/fa";
// @ts-expect-error "type not supported"
import ksheeraj from "../assets/images/xlabs_ksheeraj.jpeg";
// @ts-expect-error "type not supported"
import naijith from "../assets/images/xlabs_naijith.jpeg";
// @ts-expect-error "type not supported"
import pranav from "../assets/images/xlabs_pranav.jpeg";
// @ts-expect-error "type not supported"
import shreesha from "../assets/images/xlabs_shreesha.jpeg";
// @ts-expect-error "type not supported"
import ruturaj from "../assets/images/xlabs_ruturaj.jpeg";

type teamArrayProps = {
  name: string;
  photo: string | undefined;
  position: string;
  description: string;
  linkedinUrl: string;
};

export const TeamCards = () => {
  const teamArray: teamArrayProps[] = [
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
    <>
      {teamArray.map((member, index) => (
        <div
          key={index}
          className="teamCards__container m-5 h-[510px] w-[320px] rounded-lg border border-[#374151] bg-[#1f2937]"
        >
          <div className="photo">
            <img src={member.photo} />
            <div className="glow-wrap">
              <i className="glow"></i>
            </div>
          </div>
          <div className="p-4 pt-0">
            <h1 className="text-xl font-bold text-white">{member.name}</h1>
            <h3 className="text-base text-[#6B7280]">{member.position}</h3>
            <p className="mb-3 mt-3 text-base text-[#9CA3AF]">
              {member.name} drives the technical and strategy of the ProjectX
              Labs platform and brand
            </p>
            <ul className="socials__ul">
              <li className="socials__list">
                <a
                  href={member.linkedinUrl}
                  target="_blank"
                  className="socials__link"
                >
                  <FaLinkedinIn size={12} color="#0077b5" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};
