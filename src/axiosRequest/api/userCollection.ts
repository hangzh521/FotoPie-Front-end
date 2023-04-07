import axiosInstance from "../index";

export const profileCollection = <T>(id: T, page:Number, limit:Number) => {
  return axiosInstance({
    url: `/api/user-collect/${id}?page=${page}&limit=${limit}`,
    method: "get",
  });
};