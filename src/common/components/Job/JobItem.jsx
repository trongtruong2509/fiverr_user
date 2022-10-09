import React from "react";
import { IoHeartOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { paths } from "../../../app/routes";

import Star from "../Star";

const JobItem = ({ job }) => {
   const navigate = useNavigate();

   return (
      <div
         className="cursor-pointer group"
         onClick={() => navigate(paths.jobDetail.replace(":id", job?.id))}
      >
         <div>
            <img
               src={job?.congViec.hinhAnh}
               alt={job?.congViec.tenCongViec}
               className="object-cover w-full"
            />
         </div>
         <div className="border">
            <div className="flex flex-col gap-3 p-3">
               <div className="flex items-center gap-2">
                  <img
                     src={job?.avatar}
                     alt={job?.tenNguoiTao}
                     className="w-6 h-6 rounded-full"
                  />
                  <p className="text-black hover:underline">
                     {job?.tenNguoiTao}
                  </p>
               </div>
               <div>
                  <p className="leading-6 h-[3rem] mb-3 group-hover:text-primary">
                     {job?.congViec.tenCongViec}
                  </p>
                  <div className="rating-wrapper">
                     <span className="text-[#ffbe5b] flex gap-1 text-[15px] items-center font-semibold">
                        <Star />
                        {parseFloat(job?.congViec.saoCongViec).toFixed(1)}
                        <span className="font-normal text-accent">
                           ({job?.congViec.danhGia})
                        </span>
                     </span>
                  </div>
               </div>
            </div>
            <div className="border-t">
               <div className="flex items-center justify-between p-3">
                  <IoHeartOutline className="text-xl" />
                  <p className="flex items-center gap-2 text-sm font-semibold uppercase">
                     Starting at{" "}
                     <span className="text-lg font-normal text-black">
                        ${job?.congViec.giaTien}
                     </span>
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default JobItem;
