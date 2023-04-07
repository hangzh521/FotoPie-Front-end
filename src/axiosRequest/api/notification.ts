import axiosInstance from "../index";

export const getNotificationCountRequest = () => {
  return axiosInstance({
    url: "/api/notification/count",
    method: "get",
  });
};

export const markNotificationReadRequest = () => {
  return axiosInstance({
    url: "/api/notification/mark-read",
    method: "post",
  });
};

export const getNotification= () => {
    return axiosInstance({
      url: `/api/notification/latest`,
      method: "get",
    });
};