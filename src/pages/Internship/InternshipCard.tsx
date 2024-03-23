import { twMerge } from "tailwind-merge";
import { FaArrowRight } from "react-icons/fa6";
import { IconType } from "react-icons/lib";
import { FaRegClock } from "react-icons/fa6";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { GoLocation } from "react-icons/go";
import { GoBriefcase } from "react-icons/go";

export type TInternshipCardProps = {
  title: string;
  duration: string;
  stipend: string;
  location: string;
  workPolicy: "WFH" | "WFO" | "Hybrid";
  className?: string;
  summary: string;
  onClick?: () => void;
};

const InternshipCard: React.FC<TInternshipCardProps> = ({
  title,
  duration,
  location,
  stipend,
  workPolicy,
  className,
  summary,
  onClick
}) => {
  const content: { icon: IconType; title: string }[] = [
    {
      icon: FaRegClock,
      title: duration
    },
    {
      icon: FaIndianRupeeSign,
      title: stipend
    },
    {
      icon: GoLocation,
      title: location
    },
    {
      icon: GoBriefcase,
      title: workPolicy
    }
  ];
  return (
    <div
      className={twMerge(
        "group overflow-hidden text-ellipsis whitespace-normal bg-transparent transition-transform duration-200 ease-in-out",
        className
      )}
      onClick={onClick}
    >
      <div className="flex items-center justify-between text-white">
        <h1 className="my-3 line-clamp-1 text-ellipsis text-xl font-semibold">
          {title}
        </h1>
        <FaArrowRight className="rotate-[315deg]" size={20} />
      </div>
      <div className="flex flex-wrap items-center justify-between text-sm text-[#6941C6]">
        {content.map((contents) => (
          <div className="flex items-center justify-center gap-1 py-[2px]">
            <contents.icon size={14} />
            <p>{contents.title}</p>
          </div>
        ))}
      </div>
      <p
        className="line-clamp-1 overflow-hidden text-ellipsis text-[#C0C5D0]"
        style={{
          display: "-webkit-box",
          WebkitBoxOrient: "vertical"
        }}
      >
        {summary}
      </p>
      <div className="mt-6 flex items-center justify-between text-white">
        <button className="text-sm hover:font-medium active:scale-95">
          Read more
        </button>
        <button className="flex items-center justify-center rounded-md border border-input bg-black p-2 px-3 text-center text-sm hover:font-medium active:scale-95">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default InternshipCard;
