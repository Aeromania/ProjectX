import { twMerge } from "tailwind-merge";
import { BlogCardsProps } from "./BlogCard";
import { FaArrowRight } from "react-icons/fa6";

const BlogsCardWithoutImage: React.FC<BlogCardsProps> = ({
  author,
  averageReadTime,
  summary,
  createdAt,
  title,
  className,
  titleTextSize,
  showReadTime = true
}) => {
  return (
    <div
      className={twMerge(
        "bg group flex h-64 cursor-pointer flex-col bg-transparent transition-transform duration-200 ease-in-out",
        className
      )}
    >
      <div
        className={twMerge(
          "flex items-center justify-between text-sm text-[#6941C6]"
        )}
      >
        <p>{createdAt}</p>
        <p className={twMerge(showReadTime ? "" : "hidden sm:inline-block")}>
          {averageReadTime}
        </p>
      </div>
      <p className="text-xs text-[#C0C5D0]">by {author}</p>
      <div className="flex items-center justify-between">
        <h1 className={twMerge("py-3 text-xl font-semibold", titleTextSize)}>
          {title}
        </h1>
        <FaArrowRight className="rotate-[315deg]" size={20} />
      </div>
      <p
        className="line-clamp-4 overflow-hidden text-ellipsis text-[#C0C5D0]"
        style={{
          display: "-webkit-box",
          WebkitBoxOrient: "vertical"
        }}
      >
        {summary}
      </p>
    </div>
  );
};

export default BlogsCardWithoutImage;
