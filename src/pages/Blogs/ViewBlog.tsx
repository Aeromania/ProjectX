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
    <div className="minh-dvh relative flex justify-center overflow-x-hidden bg-[#090D1F] py-16 text-white">
      {blogsInfo?.title ? (
        <div className="w-[90%] lg:w-[60%] xl:w-[45%]">
          <div
            className="group mb-8 hidden w-fit cursor-pointer items-center gap-2 text-[#C0C5D0] active:scale-95 sm:flex"
            onClick={() => navigate("/" + NavRoutes.BLOGS)}
          >
            <FaChevronLeft />{" "}
            <span className="transition-transform duration-200 ease-in-out group-hover:font-medium group-active:font-medium sm:text-lg">
              Blogs
            </span>
          </div>
          <h1
            className="text-3xl font-bold !leading-[125%] sm:text-5xl sm:font-bold"
            aria-label="title"
          >
            {blogsInfo.title}
          </h1>
          <div className="mb-1 mt-4 flex flex-col text-sm text-[#C0C5D0] sm:flex-row sm:items-center sm:justify-between sm:text-base">
            <p>{blogsInfo.author}</p>
            <div className="flex text-[#C0C5D0]">
              <p className="after:px-1 after:text-[#C0C5D0] after:content-['·']">
                {blogsInfo.createdAt}
              </p>
              <p>{blogsInfo.averageReadTime}</p>
            </div>
          </div>
          <hr className="mb-8 border-[#C0C5D0]" />
          <p className="mb-8 font-sans text-xl !leading-[132%] tracking-wide text-[#C0C5D0] sm:text-2xl">
            {blogsInfo.summary}
          </p>
          <img
            src={URL + blogsInfo.thumbnail}
            className="mb-8 max-h-[300px] w-full object-cover object-center sm:max-h-[500px]"
          />
          <div
            dangerouslySetInnerHTML={{ __html: blogsInfo.content }}
            className="flex w-full flex-col items-center overflow-x-hidden tracking-wide text-[#C0C5D0] sm:text-lg"
          />
        </div>
      ) : (
        <div className="min-h-dvh w-[40%]">
          <div
            className="group mb-8 flex w-fit cursor-pointer items-center gap-2 text-[#C0C5D0] active:scale-95"
            onClick={() => navigate("/" + NavRoutes.BLOGS)}
          >
            <FaChevronLeft />{" "}
            <span className="text-lg transition-transform duration-200 ease-in-out group-hover:font-medium group-active:font-medium">
              Blogs
            </span>
          </div>
          <div className="absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2 font-sans text-2xl text-white">
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
