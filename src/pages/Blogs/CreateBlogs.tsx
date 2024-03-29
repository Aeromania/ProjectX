import { NavRoutes } from "../../components/constants";
import TextEditor from "../../components/Blogs/TextEditor";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";

const CreateBlogs: React.FC = (): React.JSX.Element => {
  return (
    <div className="flex min-h-dvh w-full flex-col bg-[#292a2b]">
      <Link
        to={"/" + NavRoutes.BLOGS}
        className="mx-4 mt-6 flex w-fit items-center justify-center text-muted-foreground"
      >
        <FaArrowLeft className="mr-2" />
        Go back to blogs
      </Link>
      <TextEditor buttonTitle="Create Post" />
    </div>
  );
};

export default CreateBlogs;
