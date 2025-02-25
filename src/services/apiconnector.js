 
 import axios from "axios";

export const axiosInstance = axios.create({});

export const apiConnector = (method, url, bodyData, headers, params) => {
  console.log("API Call:", { method, url, bodyData, headers, params });

  if (!url) {
    console.error("URL is undefined");
    throw new Error("URL is required for API calls");
  }

  return axiosInstance({
    method: `${method}`,
    url: `${url}`,
    data: bodyData ? bodyData : null,
    headers: headers ? headers : null,
    params: params ? params : null,
  }).catch(error => {
    console.error("API Error Details:", {
      message: error.message,
      code: error.code,
      response: error.response ? {
        status: error.response.status,
        data: error.response.data,
        headers: error.response.headers
      } : null
    });
    throw error;
  });
};
