// import { NavRoutes } from "@/components/constants";
// import { useNavigate } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { useState, useRef, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import BlogCard, { BlogCardsProps } from "./BlogCard";
import { getAllBlogs } from "@/api/blogs-api";
import Ksheeraj from "../../assets/images/xlabs_waterRocketry-2.png";
import randomImage from "../../assets/images/xlabs_additiveManufacturing-4.jpeg";
import BlogsCardWithoutImage from "./BlogsCardWithoutImage";

const Blogs = () => {
  // const navigate = useNavigate();
  const [showSearchBox, setShowSearchBox] = useState<boolean>(false);
  const searchBox = useRef<HTMLInputElement>(null);
  const searchBarContainer = useRef<HTMLDivElement>(null);
  const [blogsInfo, setBlogsInfo] = useState<BlogCardsProps>({
    title: "A blog to your heart's content",
    summary:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptate fugiat veritatis recusandae! Possimus magnam doloribus molestias quae, dignissimos repellat cum eligendi similique ea blanditiis necessitatibus ipsum amet provident laboriosam!Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptate fugiat veritatis recusandae! Possimus magnam doloribus molestias quae, dignissimos repellat cum eligendi similique ea blanditiis necessitatibus ipsum amet provident laboriosam!",
    timestamp: "10 March 2024",
    averageReadTime: "10 mins read",
    imageURL: Ksheeraj,
    author: "Ksheeraj Krishna K V"
  });

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
      // const response = await getAllBlogs();
      // setBlogsInfo(response);
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
        {/* Recent Blog title*/}
        <div className="flex items-center justify-between pb-8">
          <h3 className="font-sans text-xl font-medium">Recent blog posts</h3>
        </div>
        {/* Recent Blogs */}
        <div className="">
          <div className="grid grid-cols-2 gap-6">
            <div className="col-span-2 row-span-2 lg:col-span-1">
              <BlogCard
                title={blogsInfo?.title}
                summary={blogsInfo?.summary}
                timestamp={blogsInfo?.timestamp}
                averageReadTime={blogsInfo?.averageReadTime}
                imageURL={blogsInfo?.imageURL}
                author={blogsInfo?.author}
                titleTextSize="text-2xl"
                lineClamp="line-clamp-6"
              />
            </div>
            <div className="group col-span-2 flex cursor-pointer gap-4 overflow-hidden transition-transform duration-200 ease-in-out active:scale-95 lg:col-span-1">
              <div className="flex-1 overflow-hidden">
                <img
                  src={Ksheeraj}
                  className="h-64 w-full rounded-sm transition-transform duration-200 ease-in-out group-hover:scale-125"
                />
              </div>
              <BlogsCardWithoutImage
                title={blogsInfo?.title}
                summary={blogsInfo?.summary}
                timestamp={blogsInfo?.timestamp}
                averageReadTime={blogsInfo?.averageReadTime}
                imageURL={blogsInfo?.imageURL}
                author={blogsInfo?.author}
                className="flex-1"
                showReadTime={false}
              />
            </div>
            <div className="group col-span-2 flex cursor-pointer gap-4 overflow-hidden transition-transform duration-200 ease-in-out active:scale-95 lg:col-span-1">
              <div className="flex-1 overflow-hidden">
                <img
                  src={Ksheeraj}
                  className="h-64 w-full rounded-sm transition-transform duration-200 ease-in-out group-hover:scale-125"
                />
              </div>
              <BlogsCardWithoutImage
                title={blogsInfo?.title}
                summary={blogsInfo?.summary}
                timestamp={blogsInfo?.timestamp}
                averageReadTime={blogsInfo?.averageReadTime}
                imageURL={blogsInfo?.imageURL}
                author={blogsInfo?.author}
                className="flex-1"
                showReadTime={false}
              />
            </div>
            <div className="group col-span-2 flex cursor-pointer gap-4 overflow-hidden transition-transform duration-200 ease-in-out active:scale-95">
              <div className="flex-1 overflow-hidden">
                <img
                  src={randomImage}
                  className="h-64 w-full rounded-sm transition-transform duration-200 ease-in-out group-hover:scale-125"
                />
              </div>
              <BlogsCardWithoutImage
                title={blogsInfo?.title}
                summary={blogsInfo?.summary}
                timestamp={blogsInfo?.timestamp}
                averageReadTime={blogsInfo?.averageReadTime}
                imageURL={blogsInfo?.imageURL}
                author={blogsInfo?.author}
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
          <BlogCard
            title={blogsInfo?.title}
            summary={blogsInfo?.summary}
            timestamp={blogsInfo?.timestamp}
            averageReadTime={blogsInfo?.averageReadTime}
            imageURL={blogsInfo?.imageURL}
            author={blogsInfo?.author}
          />
          <BlogCard
            title={blogsInfo?.title}
            summary={blogsInfo?.summary}
            timestamp={blogsInfo?.timestamp}
            averageReadTime={blogsInfo?.averageReadTime}
            imageURL={blogsInfo?.imageURL}
            author={blogsInfo?.author}
          />
          <BlogCard
            title={blogsInfo?.title}
            summary={blogsInfo?.summary}
            timestamp={blogsInfo?.timestamp}
            averageReadTime={blogsInfo?.averageReadTime}
            imageURL={blogsInfo?.imageURL}
            author={blogsInfo?.author}
          />
          <BlogCard
            title={blogsInfo?.title}
            summary={blogsInfo?.summary}
            timestamp={blogsInfo?.timestamp}
            averageReadTime={blogsInfo?.averageReadTime}
            imageURL={blogsInfo?.imageURL}
            author={blogsInfo?.author}
          />
          <BlogCard
            title={blogsInfo?.title}
            summary={blogsInfo?.summary}
            timestamp={blogsInfo?.timestamp}
            averageReadTime={blogsInfo?.averageReadTime}
            imageURL={blogsInfo?.imageURL}
            author={blogsInfo?.author}
          />
          <BlogCard
            title={blogsInfo?.title}
            summary={blogsInfo?.summary}
            timestamp={blogsInfo?.timestamp}
            averageReadTime={blogsInfo?.averageReadTime}
            imageURL={blogsInfo?.imageURL}
            author={blogsInfo?.author}
          />
          <BlogCard
            title={blogsInfo?.title}
            summary={blogsInfo?.summary}
            timestamp={blogsInfo?.timestamp}
            averageReadTime={blogsInfo?.averageReadTime}
            imageURL={blogsInfo?.imageURL}
            author={blogsInfo?.author}
          />
          <BlogCard
            title={blogsInfo?.title}
            summary={blogsInfo?.summary}
            timestamp={blogsInfo?.timestamp}
            averageReadTime={blogsInfo?.averageReadTime}
            imageURL={blogsInfo?.imageURL}
            author={blogsInfo?.author}
          />
          <BlogCard
            title={blogsInfo?.title}
            summary={blogsInfo?.summary}
            timestamp={blogsInfo?.timestamp}
            averageReadTime={blogsInfo?.averageReadTime}
            imageURL={blogsInfo?.imageURL}
            author={blogsInfo?.author}
          />
          <BlogCard
            title={blogsInfo?.title}
            summary={blogsInfo?.summary}
            timestamp={blogsInfo?.timestamp}
            averageReadTime={blogsInfo?.averageReadTime}
            imageURL={blogsInfo?.imageURL}
            author={blogsInfo?.author}
          />
          <BlogCard
            title={blogsInfo?.title}
            summary={blogsInfo?.summary}
            timestamp={blogsInfo?.timestamp}
            averageReadTime={blogsInfo?.averageReadTime}
            imageURL={blogsInfo?.imageURL}
            author={blogsInfo?.author}
          />
        </div>
      </div>
    </section>
  );
};

export default Blogs;
