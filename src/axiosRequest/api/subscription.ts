import axiosInstance from "../index";

export const createCheckoutSession = <T>(data: T) => {
  return axiosInstance({
    url: "/api/subscription/create-checkout-session",
    method: "post",
    data,
  });
};

export const createPortalSession = () => {
  return axiosInstance({
    url: "/api/subscription/create-portal-session",
    method: "post",
  });
};

export const getSubscriptionStatus = () => {
  return axiosInstance({
    url: "/api/subscription/get-subscription-status",
    method: "get",
  });
};
