import axios, { Axios, AxiosRequestConfig } from "axios";

export class APIService {
  isTokenRequired: boolean = false;
  axiosInstance: Axios;

  constructor(isTokenRequired: boolean) {
    this.isTokenRequired = isTokenRequired;
    this.axiosInstance = axios.create(this.getAxiosConfig());
  }

  getAxiosConfig = (): AxiosRequestConfig => {
    return {
      baseURL: import.meta.env.VITE_URL,
      timeout: 10000,
      responseType: "json"
    };
  };
}
