import * as httpRequest from "../common/utils/httpRequest";

export const login = async (info) => {
   const res = await httpRequest.post("/auth/signin", info);

   console.log("[loginService]", res);
   return res;
};

export const signup = async (info) => {
   const res = await httpRequest.post("/auth/signup", info);

   console.log("[signupService] signup", res);
   return res;
};

export const getUserInfo = async (id) => {
   const res = await httpRequest.get(`/users/${id}`);

   console.log("[getUserInfo]", res);
   return res;
};

export const updateUser = async (info) => {
   const res = await httpRequest.put(`/users/${info.id}`, info);

   console.log("[User Service] updateUser", res);
   return res;
};

export const uploadAvatar = async (image) => {
   const res = await httpRequest.post("/users/upload-avatar", image, {
      headers: {
         "Content-Type": "multipart/form-data",
         token: localStorage.getItem("accessToken"),
      },
   });

   console.log("[User Service] uploadAvatar", res);
   return res;
};
