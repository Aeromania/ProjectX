import axios from "axios";

export const getAllBlogs = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_URL}${
        import.meta.env.VITE_BLOGS_GET_ALL_ENDPOINT
      }`
    );
    if (response.status === 200) {
      console.log(response.data);
      return response.data;
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 404) {
        return false;
      } else {
        console.log(error);
        return null;
      }
    } else {
      console.log(error);
      return null;
    }
  }
};
