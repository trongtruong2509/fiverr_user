import * as httpRequest from "../common/utils/httpRequest";

export const getComments = async (jobId) => {
   const res = await httpRequest.get(
      `/binh-luan/lay-binh-luan-theo-cong-viec/${jobId}`
   );

   console.log("[getComments]", res);
   return res;
};
