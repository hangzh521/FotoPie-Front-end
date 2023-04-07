import Cookies from "universal-cookie";

const cookies = new Cookies();

export const getAccessToken = () => {
  return cookies.get("accessToken");
};

export const getRefreshToken = () => {
  return cookies.get("refreshToken");
};

export const setAccessToken = (token: string) => {
  cookies.set("accessToken", token, {
    path: "/",
    expires: new Date(Date.now() + 1000 * 60 * 15), // 15 minutes
  });
};

export const setRefreshToken = (token: string) => {
  cookies.set("refreshToken", token, {
    path: "/",
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30), // 30 days
  });
};

export const removeAccessToken = () => {
  cookies.remove("accessToken", { path: "/" });
};

export const removeRefreshToken = () => {
  cookies.remove("refreshToken", { path: "/" });
};

export const getAccessTokenExpiration = () => {
  return cookies.get("accessToken").expires * 1000;
};

