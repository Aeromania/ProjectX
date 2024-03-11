import { IoIosSearch } from "react-icons/io";
import { useState, useRef, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import BlogCard, { BlogCardsProps } from "./BlogCard";
import { getAllBlogs } from "@/api/blogs-api";
import BlogsCardWithoutImage from "./BlogsCardWithoutImage";
import { Toast } from "@/components/Toast";
import { AnimatedLoader } from "@/components/Loader/AnimatedLoader";

const Blogs = () => {
  const [showSearchBox, setShowSearchBox] = useState<boolean>(false);
  const searchBox = useRef<HTMLInputElement>(null);
  const searchBarContainer = useRef<HTMLDivElement>(null);
  const [toastMessage, setToastMessage] = useState<string | undefined>(
    undefined
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [blogsInfo, setBlogsInfo] = useState<BlogCardsProps[]>([]);
  const URL = import.meta.env.VITE_URL;

  useEffect(() => {
    const toggleSearchBarVisibility = (event: MouseEvent) => {
      if (
        searchBarContainer.current &&
        !searchBarContainer.current?.contains(event.target as Node)
      ) {
        setShowSearchBox(false);
      }
    };

    document.addEventListener("mousedown", toggleSearchBarVisibility);

    return () =>
      document.removeEventListener("mousedown", toggleSearchBarVisibility);
  }, []);

  useEffect(() => {
    const processBlogsInfo = async () => {
      try {
        setIsLoading(true);
        const response = await getAllBlogs();
        if (response) {
          setBlogsInfo(response);
        } else {
          setBlogsInfo([]);
        }
      } catch (error) {
        setToastMessage("Failed to get blogs");
        setBlogsInfo([]);
      } finally {
        setIsLoading(false);
      }
    };

    processBlogsInfo();
  }, []);

  return (
    <section className="flex min-h-dvh flex-col items-center bg-[#090D1F] text-white">
      <div className="flex w-[96%] flex-col justify-center py-10 2xl:w-[80%]">
        {/* Heading */}
        <div className="mb-16 flex items-center justify-center border-b border-t py-6 tracking-widest">
          <h1 className="font-sans text-4xl font-bold uppercase sm:text-6xl lg:text-8xl">
            ProjectX Blogs<span className="font-bold text-yellow-400">.</span>
          </h1>
        </div>
        {blogsInfo.length > 0 ? (
          <>
            {/* Recent Blog title*/}
            <div className="flex items-center justify-between pb-8">
              <h3 className="font-sans text-xl font-medium">
                Recent blog posts
              </h3>
            </div>
            {/* Recent Blogs */}
            <div className="">
              <div className="grid grid-cols-2 gap-6">
                <div className="col-span-2 row-span-2 lg:col-span-1">
                  <BlogCard
                    title={blogsInfo[0]?.title}
                    summary={blogsInfo[0]?.summary}
                    createdAt={blogsInfo[0]?.createdAt}
                    averageReadTime={blogsInfo[0]?.averageReadTime}
                    thumbnail={URL + blogsInfo[0]?.thumbnail}
                    author={blogsInfo[0]?.author}
                    titleTextSize="text-2xl"
                    lineClamp="line-clamp-6"
                    className="h-full"
                  />
                </div>
                <div className="group col-span-2 flex cursor-pointer gap-4 overflow-hidden transition-transform duration-200 ease-in-out active:scale-95 lg:col-span-1">
                  <div className="flex-1 overflow-hidden">
                    <img
                      src={URL + blogsInfo[0].thumbnail}
                      className="h-64 w-full rounded-sm object-cover object-center transition-transform duration-200 ease-in-out group-hover:scale-125"
                    />
                  </div>
                  <BlogsCardWithoutImage
                    title={blogsInfo[0]?.title}
                    summary={blogsInfo[0]?.summary}
                    createdAt={blogsInfo[0]?.createdAt}
                    averageReadTime={blogsInfo[0]?.averageReadTime}
                    thumbnail={URL + blogsInfo[0]?.thumbnail}
                    author={blogsInfo[0]?.author}
                    className="flex-1"
                    showReadTime={false}
                  />
                </div>
                <div className="group col-span-2 flex cursor-pointer gap-4 overflow-hidden transition-transform duration-200 ease-in-out active:scale-95 lg:col-span-1">
                  <div className="flex-1 overflow-hidden">
                    <img
                      src={URL + blogsInfo[1].thumbnail}
                      className="h-64 w-full rounded-sm object-cover object-center transition-transform duration-200 ease-in-out group-hover:scale-125"
                    />
                  </div>
                  <BlogsCardWithoutImage
                    title={blogsInfo[0]?.title}
                    summary={blogsInfo[0]?.summary}
                    createdAt={blogsInfo[0]?.createdAt}
                    averageReadTime={blogsInfo[0]?.averageReadTime}
                    thumbnail={URL + blogsInfo[0]?.thumbnail}
                    author={blogsInfo[0]?.author}
                    className="flex-1"
                    showReadTime={false}
                  />
                </div>
                <div className="group col-span-2 flex cursor-pointer gap-4 overflow-hidden transition-transform duration-200 ease-in-out active:scale-95">
                  <div className="flex-1 overflow-hidden">
                    <img
                      src={URL + blogsInfo[2].thumbnail}
                      className="h-64 w-full rounded-sm object-cover object-center transition-transform duration-200 ease-in-out group-hover:scale-125"
                    />
                  </div>
                  <BlogsCardWithoutImage
                    title={blogsInfo[0]?.title}
                    summary={blogsInfo[0]?.summary}
                    createdAt={blogsInfo[0]?.createdAt}
                    averageReadTime={blogsInfo[0]?.averageReadTime}
                    thumbnail={URL + blogsInfo[0]?.thumbnail}
                    author={blogsInfo[0]?.author}
                    className="flex-1"
                    titleTextSize="sm:text-2xl"
                    showReadTime={false}
                  />
                </div>
              </div>
            </div>
            {/* All Blog Posts */}
            <div className="flex items-center justify-between pb-8 pt-16">
              <h3 className="font-sans text-xl font-medium">All blog posts</h3>
              <div
                className="relative flex items-center gap-1"
                ref={searchBarContainer}
              >
                <input
                  type="text"
                  className={twMerge(
                    "w-0 rounded-sm px-1 text-black outline-none transition-all duration-300 ease-in-out",
                    showSearchBox
                      ? "w-[100px] bg-white focus:ring-2 focus:ring-sky-500 sm:w-[200px]"
                      : "pointer-events-none border-0 bg-transparent"
                  )}
                  placeholder="Search..."
                  ref={searchBox}
                />
                <IoIosSearch
                  className={twMerge(
                    "left-2 top-1 cursor-pointer text-xl text-white"
                  )}
                  onClick={() => {
                    if (!showSearchBox) {
                      console.log("showSearchBox === false");
                      setShowSearchBox(true);
                      searchBox.current?.focus();
                    } else {
                      console.log("showSearchBox === true");
                      setShowSearchBox(false);
                      searchBox.current?.blur();
                    }
                  }}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {blogsInfo.map((blog) => (
                <BlogCard
                  key={blog?.title}
                  title={blog?.title}
                  summary={blog?.summary}
                  createdAt={blog?.createdAt}
                  averageReadTime={blog?.averageReadTime}
                  thumbnail={URL + blog?.thumbnail}
                  author={blog?.author}
                />
              ))}
            </div>
          </>
        ) : (
          <div className="flex h-full w-full items-center justify-center text-white">
            Looks like our blogs are taking a little break. Check back soon for
            new content!
          </div>
        )}
      </div>
      <Toast open={toastMessage} setOpen={setToastMessage} />
      {isLoading && <AnimatedLoader />}
    </section>
  );
};

export default Blogs;
