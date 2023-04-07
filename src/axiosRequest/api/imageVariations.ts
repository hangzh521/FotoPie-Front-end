import axiosInstance from "../index";
export const imageVariations = <T>(data: T) => {
  return axiosInstance({
    url: `/api/create-image/image-variation`,
    method: "post",
    data,
  });
};
