import BlogCard, { BlogCardsProps } from "./BlogCard";
import BlogsCardWithoutImage from "./BlogsCardWithoutImage";

type TRecentPosts = {
  blogsInfo: BlogCardsProps[];
};

const RecentPosts: React.FC<TRecentPosts> = ({
  blogsInfo
}): React.JSX.Element => {
  const URL = import.meta.env.VITE_URL;

  return (
    <div className="grid grid-cols-2 gap-6">
      {blogsInfo[0] && (
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
      )}
      {blogsInfo[1] && (
        <div className="group col-span-2 flex cursor-pointer gap-4 overflow-hidden transition-transform duration-200 ease-in-out active:scale-95 lg:col-span-1">
          <div className="flex-1 overflow-hidden">
            <img
              src={URL + blogsInfo[1].thumbnail}
              className="h-64 w-full object-cover object-center transition-transform duration-200 ease-in-out lg:group-hover:scale-125"
            />
          </div>
          <BlogsCardWithoutImage
            title={blogsInfo[1]?.title}
            summary={blogsInfo[1]?.summary}
            createdAt={blogsInfo[1]?.createdAt}
            averageReadTime={blogsInfo[1]?.averageReadTime}
            thumbnail={URL + blogsInfo[1]?.thumbnail}
            author={blogsInfo[1]?.author}
            className="flex-1"
            showReadTime={false}
          />
        </div>
      )}
      {blogsInfo[2] && (
        <div className="group col-span-2 flex cursor-pointer gap-4 overflow-hidden transition-transform duration-200 ease-in-out active:scale-95 lg:col-span-1">
          <div className="flex-1 overflow-hidden">
            <img
              src={URL + blogsInfo[2].thumbnail}
              className="h-64 w-full object-cover object-center transition-transform duration-200 ease-in-out lg:group-hover:scale-125"
            />
          </div>
          <BlogsCardWithoutImage
            title={blogsInfo[2]?.title}
            summary={blogsInfo[2]?.summary}
            createdAt={blogsInfo[2]?.createdAt}
            averageReadTime={blogsInfo[2]?.averageReadTime}
            thumbnail={URL + blogsInfo[2]?.thumbnail}
            author={blogsInfo[2]?.author}
            className="flex-1"
            showReadTime={false}
          />
        </div>
      )}
      {blogsInfo[3] && (
        <div className="group col-span-2 flex cursor-pointer gap-4 overflow-hidden transition-transform duration-200 ease-in-out active:scale-95">
          <div className="flex-1 overflow-hidden">
            <img
              src={URL + blogsInfo[3].thumbnail}
              className="h-64 w-full object-cover object-center transition-transform duration-200 ease-in-out lg:group-hover:scale-125"
            />
          </div>
          <BlogsCardWithoutImage
            title={blogsInfo[3]?.title}
            summary={blogsInfo[3]?.summary}
            createdAt={blogsInfo[3]?.createdAt}
            averageReadTime={blogsInfo[3]?.averageReadTime}
            thumbnail={URL + blogsInfo[3]?.thumbnail}
            author={blogsInfo[3]?.author}
            className="flex-1"
            titleTextSize="sm:text-2xl"
            showReadTime={false}
          />
        </div>
      )}
    </div>
  );
};

export default RecentPosts;
