import { TOKEN } from "../common/utils/config";
import * as httpRequest from "../common/utils/httpRequest";

export const getRentingJobs = async () => {
   const res = await httpRequest.get(
      `/thue-cong-viec/lay-danh-sach-da-thue`,
      {},
      {
         headers: {
            token: localStorage.getItem("accessToken"),
            accept: "application/json",
            TokenCybersoft: TOKEN,
         },
      }
   );

   console.log("[getUserInfo]", res);
   return res;
};

export const deleteRentingJob = async (id) => {
   const res = await httpRequest.Delete(
      `/thue-cong-viec/${id}`,
      {},
      {
         headers: {
            token: localStorage.getItem("accessToken"),
            accept: "application/json",
            TokenCybersoft: TOKEN,
         },
      }
   );

   console.log("[deleteRentingJob]", res);
   return res;
};
