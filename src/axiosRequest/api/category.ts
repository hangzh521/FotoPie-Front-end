import axiosInstance from "../index";

export const categoryPosts = <T>(tag: T, page: Number, limit: Number) => {
  return axiosInstance({
    url: `/api/category/${tag}?page=${page}&limit=${limit}`,
    method: "get",
  });
};
