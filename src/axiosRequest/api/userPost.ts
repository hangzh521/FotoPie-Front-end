import axiosInstance from "../index";

export const deletePost = <T>(params: T) => {
  return axiosInstance({
    url: `/api/profile/${params}`,
    method: "delete",
  });
};

export const getUserPost = <T>(params: T) => {
  return axiosInstance({
    url: `api/profile/${params}`,
    method: "get",
  });
};
