import { STATUS_CODES } from "@/components/constants";
import { TInternshipInfo } from "@/pages/Internship/Internship";
import axios from "axios";

export const getAllInternships = async (): Promise<
  TInternshipInfo[] | undefined
> => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_URL}${
        import.meta.env.VITE_INTERNSHIP_GET_ALL_ENDPOINT
      }`
    );
    if (response.status === STATUS_CODES.OK) {
      return response.data;
    }
  } catch (error) {
    console.log("getAllInternships() || ERROR:", error);
    throw error;
  }
};
