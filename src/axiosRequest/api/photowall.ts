import axiosInstance from "../index";

export const getPhotoWall = (page: number, limit: number) => {
  return axiosInstance({
    url: `/api/posts?page=${page}&limit=${limit}`,
    method: "get",
  });
};
