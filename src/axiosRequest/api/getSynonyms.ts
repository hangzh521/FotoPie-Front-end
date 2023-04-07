import axiosInstance from "../index";

export const getSynonymsAPI = <T>(tagString:T) => {
  return axiosInstance({
    url: `/${tagString}`,
    method: "get",

  });
};

