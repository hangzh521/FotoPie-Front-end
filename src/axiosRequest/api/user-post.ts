import axiosInstance from "../index";

export const getUserPosts = <T>(params: T) => {
  return axiosInstance({
    url: `/api/profile/${params}`,
    method: "get",
  });
};