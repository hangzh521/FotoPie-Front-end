import { getRefreshToken } from "./../../utils/token";
import axios from "axios";
import axiosInstance from "../index";

export const loginRequest = <T>(data: T) => {
  return axiosInstance({
    url: "/api/auth/login",
    method: "post",
    data,
  });
};

export const logoutRequest = () => {
  return axiosInstance({
    url: "/api/auth/logout",
    method: "post",
  });
};

// Because refresh token is not stored in cookie, we need to send it in request body
export const refreshAccessToken = async <T>(refreshToken: T): Promise<T> => {
  const response = await axios.post("/api/auth/refresh", { refreshToken });
  return response.data.access_token;
};
