import axios from "axios";
import { ACCESS_TOKEN, BASE_URL, GROUP_ID, TOKEN } from "./config";

const defaultHeader = {
   accept: "application/json",
   TokenCybersoft: TOKEN,
};

const httpRequest = axios.create({
   baseURL: BASE_URL,
   headers: {
      ...defaultHeader,
   },
});

export const get = async (path, params = {}, options = {}) => {
   const response = await httpRequest.get(path, {
      params,
      ...options,
   });

   return response.data;
};

export const post = async (path, data, options = {}) => {
   const response = await httpRequest.post(path, data, {
      headers: {
         ...defaultHeader,
         token: localStorage.getItem("accessToken"),
         // "Content-Type": "application/json-patch+json",
      },
      ...options,
   });
   return response;
};

export const put = async (path, data, options = {}) => {
   console.log("[options]", options);
   const response = await httpRequest.put(path, data, {
      headers: {
         ...defaultHeader,
      },
      ...options,
   });
   return response.data;
};

export const Delete = async (path, payload, options = {}) => {
   console.log("[options]", options);
   const response = await httpRequest.delete(path, {
      headers: {
         ...defaultHeader,
         // Authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
      params: {
         ...payload,
      },
      ...options,
   });
   return response;
};

export default httpRequest;
