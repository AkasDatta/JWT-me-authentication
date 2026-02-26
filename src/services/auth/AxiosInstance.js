import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: "https://api.freeapi.app/api/v1/",
  HEADERS: {
    "Content-Type": "application/json",
  },
});

export default AxiosInstance;
