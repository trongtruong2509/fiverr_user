import * as httpRequest from "../common/utils/httpRequest";

export const getCategories = async () => {
   const res = await httpRequest.get(`/cong-viec/lay-menu-loai-cong-viec`);

   console.log("[getCategories]", res);
   return res;
};

export const getCategory = async (id) => {
   const res = await httpRequest.get(
      `/cong-viec/lay-chi-tiet-loai-cong-viec/${id}`
   );

   console.log("[getCategory]", res);
   return res;
};
