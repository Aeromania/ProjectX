import { FaLinkedinIn } from "react-icons/fa";

type EmployeeInfoCardProps = {
  photo: string | undefined;
  name: string;
  position: string;
  linkedinUrl?: string;
};

export const EmployeeInfoCard: React.FC<EmployeeInfoCardProps> = ({
  name,
  photo,
  position,
  linkedinUrl
}): React.JSX.Element => {
  return (
    <>
      <div className="teamCards__container my-5 h-[510px] w-[320px] rounded-lg border border-[#374151] bg-[#1f2937]">
        <div className="photo">
          <div className="teamImg__container">
            <img src={photo} />
          </div>
          <div className="glow-wrap">
            <i className="glow"></i>
          </div>
        </div>
        <div className="p-4 pt-0">
          <h1 className="text-xl font-bold text-white">{name}</h1>
          <h3 className="text-base text-[#6B7280]">{position}</h3>
          <p className="mb-3 mt-3 text-base text-[#9CA3AF]">
            {name} drives the technical and strategy of the ProjectX Labs
            platform and brand
          </p>
          {linkedinUrl && (
            <ul className="socials__ul">
              <li className="socials__list">
                <a href={linkedinUrl} target="_blank" className="socials__link">
                  <FaLinkedinIn size={12} color="#0077b5" />
                </a>
              </li>
            </ul>
          )}
        </div>
      </div>
    </>
  );
};
