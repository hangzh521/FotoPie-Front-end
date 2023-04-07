import axiosInstance from "../index";

export const getInitialData = <T>(data: T) => {
  return axiosInstance({
    url: `/api/quick-view?filename=${data}`,
    method: "get",
  });
};

export const getCollectNumber = <T>(data: T) => {
  return axiosInstance({
    url: `/api/collect/${data}`,
    method: "post",
    data,
  });
};

export const getLikeNumber = <T>(data: T) => {
  return axiosInstance({
    url: `/api/like/${data}`,
    method: "post",
    data,
  });
};

export const getDownloadImage = <T>(data: T) => {
  return axiosInstance({
    url: `/api/download?filename=${data}`,
    method: "get",
  });
};
