import { NavRoutes } from "../components/constants";
import Blogs from "../pages/Blogs/Blogs";
import CreateBlogs from "../pages/Blogs/CreateBlogs";
import EditBlogs from "../pages/Blogs/EditBlogs";
import { Route, Routes } from "react-router-dom";

const BlogsRoute = () => {
  return (
    <Routes>
      <Route index element={<Blogs />} />
      <Route path={NavRoutes.CreateBlogs} element={<CreateBlogs />} />
      <Route path={NavRoutes.EditBlogs} element={<EditBlogs />} />
    </Routes>
  );
};

export default BlogsRoute;