import axiosInstance from "../index";

export const createImage = <T>(data: T) => {
  return axiosInstance({
    url: "/api/create-image/new-image",
    method: "post",
    data,
  });
};
