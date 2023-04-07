import { getRefreshToken } from "./../../utils/token";
import axios from "axios";
import axiosInstance from "../index";

export const adminLoginRequest = <T>(data: T) => {
  return axiosInstance({
    url: "/api/admin-auth/login",
    method: "post",
    data,
  });
};

export const adminGetUserData = () => {
  return axiosInstance({
    url: "/api/admin/user",
    method: "get",
  });
};

// Because refresh token is not stored in cookie, we need to send it in request body
export const refreshAccessToken = async <T>(refreshToken: T): Promise<T> => {
  const response = await axios.post("/api/auth/refresh", { refreshToken });
  return response.data.access_token;
};
