import { useNavigate } from "react-router-dom";
import { NavRoutes } from "../../components/constants";

const Blogs = () => {
  const navigate = useNavigate();
  return (
    <div className="flex h-dvh flex-col items-center justify-center bg-black text-white">
      Blogs
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
    </div>
  );
};

export default Blogs;
