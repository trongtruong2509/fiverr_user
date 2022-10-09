import * as httpRequest from "../common/utils/httpRequest";

export const getJobs = async (name) => {
   const res = await httpRequest.get(
      `/cong-viec/lay-danh-sach-cong-viec-theo-ten/${name}`
   );

   console.log("[getJobs]", res);
   return res;
};

export const getJobById = async (id) => {
   const res = await httpRequest.get(`/cong-viec/lay-cong-viec-chi-tiet/${id}`);

   console.log("[getJobById]", res);
   return res;
};
