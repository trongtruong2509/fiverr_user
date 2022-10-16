import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { paths } from "../../app/routes";
import { rentAJob } from "../../common/slices/jobSlice";

const Package = ({ job }) => {
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const currentUser = useSelector((state) => state.user.auth);

   const handleContinue = () => {
      if (!currentUser) {
         navigate(paths.login);
      } else {
         const model = {
            // id: 0,
            maCongViec: job?.id,
            maNguoiThue: currentUser?.user.id,
            ngayThue: new Date(Date.now()).toLocaleString(),
            hoanThanh: false,
         };

         dispatch(rentAJob(model));
      }
   };

   return (
      <div className="w-full">
         <div>
            <div className="grid grid-cols-3 border-r">
               <div className="flex items-center justify-center col-span-1 py-5 font-semibold border-l border-y">
                  Basic
               </div>
               <div className="flex items-center justify-center col-span-1 py-5 font-semibold border-l border-y">
                  Standard
               </div>
               <div className="flex items-center justify-center col-span-1 py-5 font-semibold border-l border-y">
                  Premium
               </div>
            </div>
            <div className="px-6 pt-8 pb-3 border-b border-x">
               <div className="flex items-center justify-between w-full">
                  <p className="font-semibold text-secondary">Standard</p>
                  <p className="text-2xl">${job?.congViec.giaTien}</p>
               </div>
               <p className="my-8">{job?.congViec.moTaNgan}</p>
               <div>
                  <button
                     className="rounded-[4px] bg-primary hover:bg-primary-dark text-white font-semibold py-[10px] w-full"
                     onClick={handleContinue}
                  >
                     Continue <span>(${job?.congViec.giaTien})</span>
                  </button>
                  <button className="rounded-[4px]  text-primary py-3 w-full text-sm">
                     Compare Packages
                  </button>
               </div>
            </div>
         </div>
         <div className="flex items-center justify-center py-5 w-full bg-[#fafafa] flex-col mt-4 gap-4">
            <p className="text-secondary font-semibold text-[15px]">
               Do you have any special requirements?
            </p>
            <button className="rounded-[4px] font-semibold py-2 px-5 hover:bg-accent hover:text-white border border-accent">
               Get a Quote
            </button>
         </div>
      </div>
   );
};

export default Package;
