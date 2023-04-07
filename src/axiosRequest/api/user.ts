import axiosInstance from "../index";

export const getUserInfo = <T>(params: T) => {
  return axiosInstance({
    url: `/api/user/${params}`,
    method: "get",
  });
};

export const signUp = <T>(data: T) => {
  return axiosInstance({
    url: "/api/user/create",
    method: "post",
    data,
  });
};

export const activateEmail = <T>(data: T) => {
  return axiosInstance({
    url: "/api/user/singup",
    method: "post",
    data,
  });
};
