import axios from "axios";

const instance = axios.create({
  // baseURL:
  //   process.env.NODE_ENV === "production"
  //     ? "https://kkt9102.com:8086/"
  //     : process.env.PUBLIC_URL,
  // baseURL: "https://kkt9102.com:8086/",
  baseURL: "https://ktkim9102.com:8086/",
  withCredentials: false,
  timeout: 1000,
});

export default instance;
