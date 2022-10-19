import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { paths } from "../../app/routes";
import Star from "../../common/components/Star";
import {
   deleteBookingJobById,
   updateDeletingJob,
} from "../../common/slices/bookingSlice";

const BookingJob = ({ job }) => {
   const navigate = useNavigate();
   const dispatch = useDispatch();

   return (
      <div>
         <div className="grid-cols-12 gap-4 bg-[#fafafa] md:grid">
            <div className="col-span-5">
               <img
                  src={job?.congViec.hinhAnh}
                  alt={job?.congViec.tenCongViec}
                  className="w-full"
               />
            </div>
            <div className="col-span-7">
               <div className="">
                  <p
                     className="mt-3 text-2xl font-semibold cursor-pointer text-secondary hover:text-primary"
                     onClick={() =>
                        navigate(
                           paths.jobDetail.replace(":id", job?.congViec.id)
                        )
                     }
                  >
                     {job?.congViec.tenCongViec}
                  </p>
                  <div className="flex items-center gap-1 text-[15px] font-semibold text-[#ffbe5b] ">
                     <Star />
                     <Star />
                     <Star />
                     <Star />
                     <Star />
                     <p>{parseFloat(job?.congViec.saoCongViec).toFixed(1)}</p>
                     <span className="font-normal text-accent">
                        ({job?.congViec.danhGia})
                     </span>
                  </div>
               </div>
               <p className="mt-4">{job?.congViec.moTaNgan}</p>
               <div className="flex justify-end gap-4 p-3">
                  <button
                     className="px-4 py-[6px] rounded-[4px] border hover:text-white hover:bg-slate-600"
                     onClick={() => {
                        dispatch(updateDeletingJob(job));
                        dispatch(deleteBookingJobById(job?.id));
                     }}
                  >
                     Delete
                  </button>
                  <button
                     className="px-4 py-[6px] rounded-[4px] border border-primary bg-primary hover:bg-primary-dark text-white"
                     onClick={() =>
                        navigate(
                           paths.jobDetail.replace(":id", job?.congViec.id)
                        )
                     }
                  >
                     Detail
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default BookingJob;
