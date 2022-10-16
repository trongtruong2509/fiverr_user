import * as httpRequest from "../common/utils/httpRequest";

export const getCategories = async () => {
   const res = await httpRequest.get(`/cong-viec/lay-menu-loai-cong-viec`);

   // console.log("[getCategories] service", res);
   return res;
};

export const getCategory = async (id) => {
   const res = await httpRequest.get(
      `/cong-viec/lay-chi-tiet-loai-cong-viec/${id}`
   );

   // console.log("[getCategory] service", res);
   return res;
};

export const getCategoryItem = async (id) => {
   const res = await httpRequest.get(`/chi-tiet-loai-cong-viec/${id}`);

   // console.log("[getCategoryItem] service", res);
   return res;
};

export const getJobByCategory = async (id) => {
   const res = await httpRequest.get(
      `/cong-viec/lay-cong-viec-theo-chi-tiet-loai/${id}`
   );

   // console.log("[getJobByCategory] service", res);
   return res;
};

// export const getJobByCategory = async (id) => {
//    const res = await httpRequest.get(
//       `/cong-viec/lay-cong-viec-theo-chi-tiet-loai/${id}`
//    );

//    console.log("[getJobByCategory]", res);
//    return res;
// };
