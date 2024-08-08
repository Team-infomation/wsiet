import axios from "axios";

const instance = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? process.env.PUBLIC_URL
      : "http://kkt9102.com:8086/",
  withCredentials: false,
  timeout: 1000,
});

export default instance;
