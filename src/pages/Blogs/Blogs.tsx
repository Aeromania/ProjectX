import { NavRoutes } from "@/components/constants";
import BlogsBackgroundImage from "../../assets/images/xlabs_blogs-bg_out.jpg";
import { useNavigate } from "react-router-dom";

const Blogs = () => {
  const navigate = useNavigate();
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center text-white">
      {/* Background Image */}
      <img
        src={BlogsBackgroundImage}
        alt="Background image"
        className="fixed top-0 -z-50 h-full w-full object-cover object-center"
      />
      <button
        className="my-4 h-16 w-44 rounded-sm bg-purple-700 text-white hover:bg-purple-600"
        onClick={() => navigate(NavRoutes.CreateBlogs)}
      >
        Create Blogs
      </button>
      <button
        className="h-16 w-44 rounded-sm bg-purple-700 text-center text-white hover:bg-purple-600"
        onClick={() => navigate(NavRoutes.EditBlogs)}
      >
        Edit Blogs
      </button>

      {/* Carousel */}
    </div>
  );
};

export default Blogs;
