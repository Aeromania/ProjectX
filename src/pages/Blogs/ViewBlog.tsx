import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { TBlogsInfo } from "./Blogs";
import { FaChevronLeft } from "react-icons/fa6";
import { NavRoutes } from "@/components/constants";
import { AnimatedLoader } from "@/components/Loader/AnimatedLoader";
import { getBlogsById } from "@/api/blogs-api";
import { Toast } from "@/components/Toast";

const ViewBlog: React.FC = (): React.JSX.Element => {
  const location = useLocation();
  const { id } = useParams();
  const [blogsInfo, setBlogsInfo] = useState<TBlogsInfo | undefined>(
    location.state || undefined
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | undefined>(
    undefined
  );
  const URL = import.meta.env.VITE_URL;
  const navigate = useNavigate();

  useEffect(() => {
    if (!blogsInfo || !blogsInfo.title) {
      if (!id) {
        return;
      }
      const populateBlogsInfo = async () => {
        try {
          setIsLoading(true);
          const response = await getBlogsById(id);
          setBlogsInfo(response);
        } catch (error) {
          setToastMessage("There was an error getting blogs");
        } finally {
          setIsLoading(false);
        }
      };
      populateBlogsInfo();
    }
  }, [id, blogsInfo]);

  return (
    <div className="minh-dvh relative flex justify-center overflow-x-hidden bg-[#090D1F] text-white lg:py-32">
      {blogsInfo?.title ? (
        <div className="w-[40%]">
          <div
            className="group mb-8 flex w-fit cursor-pointer items-center gap-2 text-[#C0C5D0] active:scale-95"
            onClick={() => navigate("/" + NavRoutes.BLOGS)}
          >
            <FaChevronLeft />{" "}
            <span className="text-lg transition-transform duration-200 ease-in-out group-hover:font-medium group-active:font-medium">
              Blogs
            </span>
          </div>
          <h1
            className="text-4xl !leading-[125%] lg:text-5xl lg:font-bold"
            aria-label="title"
          >
            {blogsInfo.title}
          </h1>
          <div className="mb-1 mt-4 flex items-center justify-between text-[#C0C5D0]">
            <p>{blogsInfo.author}</p>
            <div className="flex text-[#C0C5D0]">
              <p className="after:px-1 after:text-[#C0C5D0] after:content-['·']">
                {blogsInfo.createdAt}
              </p>
              <p>{blogsInfo.averageReadTime}</p>
            </div>
          </div>
          <hr className="mb-8 border-[#C0C5D0]" />
          <p className="mb-8 font-sans text-2xl !leading-[132%] tracking-wide text-[#C0C5D0]">
            {blogsInfo.summary}
          </p>
          <img
            src={URL + blogsInfo.thumbnail}
            className="mb-8 max-h-[500px] w-full object-cover object-center"
          />
          <div
            dangerouslySetInnerHTML={{ __html: blogsInfo.content }}
            className="text-lg tracking-wide text-[#C0C5D0]"
          />
        </div>
      ) : (
        <div className="w-[40%]">
          <div
            className="group mb-8 flex w-fit cursor-pointer items-center gap-2 text-[#C0C5D0] active:scale-95"
            onClick={() => navigate("/" + NavRoutes.BLOGS)}
          >
            <FaChevronLeft />{" "}
            <span className="text-lg transition-transform duration-200 ease-in-out group-hover:font-medium group-active:font-medium">
              Blogs
            </span>
          </div>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-sans text-2xl text-white">
            Blog not found!
          </div>
        </div>
      )}
      {isLoading && <AnimatedLoader />}
      <Toast open={toastMessage} setOpen={setToastMessage} />
    </div>
  );
};

export default ViewBlog;
