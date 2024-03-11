import { IoIosSearch } from "react-icons/io";
import { useState, useRef, useEffect, ChangeEvent } from "react";
import { twMerge } from "tailwind-merge";
import BlogCard, { BlogCardsProps } from "./BlogCard";
import { getAllBlogs } from "@/api/blogs-api";
import { Toast } from "@/components/Toast";
import { AnimatedLoader } from "@/components/Loader/AnimatedLoader";
import RecentPosts from "./RecentPosts";
import { IoMdClose } from "react-icons/io";

const Blogs = () => {
  const [showSearchBox, setShowSearchBox] = useState<boolean>(false);
  const searchBox = useRef<HTMLInputElement>(null);
  const searchBarContainer = useRef<HTMLDivElement>(null);
  const [toastMessage, setToastMessage] = useState<string | undefined>(
    undefined
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [blogsInfo, setBlogsInfo] = useState<BlogCardsProps[]>([]);
  const [searchBarValue, setSearchBarValue] = useState<string>("");
  const [filteredBlogsInfo, setFilteredBlogsInfo] = useState<BlogCardsProps[]>(
    []
  );
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

  const filterBlogs = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchBarValue(e.target.value);
    if (e.target.value.trim().length > 0) {
      const filteredBlogPost = blogsInfo.filter((blog) =>
        blog.title.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setFilteredBlogsInfo(filteredBlogPost);
    } else {
      setFilteredBlogsInfo([]);
    }
  };

  return (
    <section className="relative flex min-h-dvh flex-col items-center overflow-x-hidden bg-[#090D1F] pb-10 text-white">
      <div className="flex w-[90%] flex-col justify-center py-10 2xl:w-[80%]">
        {/* Heading */}
        <div
          className="mb-16 flex items-center justify-center border-b border-t py-6 tracking-widest"
          style={{
            borderImage:
              "linear-gradient(109.6deg, rgb(9, 9, 121) 11.2%, rgb(144, 6, 161) 53.7%, rgb(0, 212, 255) 100.2%)",
            borderImageSlice: "1"
          }}
        >
          <h1 className="text-center font-sans text-4xl font-bold capitalize sm:text-start sm:text-6xl lg:text-8xl">
            ProjectX Blogs<span className="font-bold text-sky-500">.</span>
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
            <RecentPosts blogsInfo={blogsInfo} />
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
                  onChange={filterBlogs}
                  value={searchBarValue}
                />
                {showSearchBox ? (
                  <IoMdClose
                    className="left-2 top-1 cursor-pointer text-xl text-white"
                    onClick={() => {
                      setShowSearchBox(false);
                      searchBox.current?.blur();
                    }}
                  />
                ) : (
                  <IoIosSearch
                    className={twMerge(
                      "left-2 top-1 cursor-pointer text-xl text-white"
                    )}
                    onClick={() => {
                      setShowSearchBox(true);
                      searchBox.current?.focus();
                    }}
                  />
                )}
              </div>
            </div>
            <div className="relative grid min-h-64 grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {searchBarValue.length > 0 ? (
                filteredBlogsInfo.length > 0 ? (
                  filteredBlogsInfo?.map((filteredBlog) => (
                    <BlogCard
                      key={filteredBlog?.title}
                      title={filteredBlog?.title}
                      summary={filteredBlog?.summary}
                      createdAt={filteredBlog?.createdAt}
                      averageReadTime={filteredBlog?.averageReadTime}
                      thumbnail={URL + filteredBlog?.thumbnail}
                      author={filteredBlog?.author}
                    />
                  ))
                ) : (
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center text-xl text-white">
                    No blogs found
                  </div>
                )
              ) : (
                blogsInfo.map((blog) => (
                  <BlogCard
                    key={blog?.title}
                    title={blog?.title}
                    summary={blog?.summary}
                    createdAt={blog?.createdAt}
                    averageReadTime={blog?.averageReadTime}
                    thumbnail={URL + blog?.thumbnail}
                    author={blog?.author}
                  />
                ))
              )}
            </div>
          </>
        ) : (
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center text-xl text-white">
            Looks like our blogs are taking a little break. Check back soon for
            new content
            <span className="font-bold text-yellow-400">.</span>
          </div>
        )}
      </div>
      <Toast open={toastMessage} setOpen={setToastMessage} />
      {isLoading && <AnimatedLoader />}
    </section>
  );
};

export default Blogs;
