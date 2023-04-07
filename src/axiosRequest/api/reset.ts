import axiosInstance from "../index";

export const createResetRequest = <T>(data: T) => {
  return axiosInstance({
    url: "/api/reset/resetRequest",
    method: "post",
    data,
  });
};

export const createResetPassword = <T>(data: T) => {
  return axiosInstance({
    url: "/api/reset/resetPassword",
    method: "post",
    data,
  });
};
