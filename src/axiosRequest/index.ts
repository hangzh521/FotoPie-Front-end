import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import axiosConfig from "./config";
import {
  getAccessToken,
  getRefreshToken,
  removeRefreshToken,
  setAccessToken,
} from "../utils/token";
import { refreshAccessToken } from "./api/auth";

const axiosInstance = axios.create({
  timeout: axiosConfig.timeOut as number | undefined,
  withCredentials: true,
});

// resquest interceptor - before request is sent
axiosInstance.interceptors.request.use(
  function (config: any) {
    const accessToken = getAccessToken();
    accessToken && (config.headers["Authorization"] = `Bearer ${accessToken}`);
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// response interceptor - after response is received
axiosInstance.interceptors.response.use(
  function (response) {
    console.log("✅response:", response);
    return Promise.resolve(response);
  },
  async function (error) {
    const refreshToken = getRefreshToken();
    const originalRequest = error.config;

    let message = "";
    if (error && error.response) {
      console.log("❌Error!", error);
      switch (error.response.status) {
        case 302:
          message = "Redirect to other url";
          break;
        case 400:
          message = "Bad request!";
          break;
        case 401:
          if (!originalRequest._retry && refreshToken) {
            originalRequest._retry = true;
            try {
              // refresh access token
              const accessToken = await refreshAccessToken(refreshToken);
              setAccessToken(accessToken);

              // retry request
              return axiosInstance(originalRequest);
            } catch (error) {
              message = "Please login!";
              removeRefreshToken();
            }
          }
          break;
        case 403:
          message = "Forbidden!";
          break;
        case 404:
          message = `Not found!: ${error.response.config.url}`;
          break;
        case 408:
          message = "request timeout!";
          break;
        case 409:
          message = "Conflict!";
          break;
        case 500:
          message = "Internal Server Error!";
          break;
        case 501:
          message = "Not Implemented!";
          break;
        case 502:
          message = "Bad Gateway!";
          break;
        case 503:
          message = "Service Unavailable!";
          break;
        case 504:
          message = "Gateway Timeout! Please try again later!";
          break;
        case 505:
          message = "HTTP Version Not Supported!";
          break;
        default:
          message = "Something went wrong!";
          break;
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
