import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { SyncLoader } from "react-spinners";
import Footer from "../../common/components/Footer/Footer";
import Header from "../../common/components/Header/Header";
import JobItem from "../../common/components/Job/JobItem";
import {
   getCategoryItem,
   getJobByCategory,
} from "../../common/slices/categorySlice";

const JobsPage = () => {
   const params = useParams();
   const dispatch = useDispatch();

   const category = useSelector((state) => state.category);

   useEffect(() => {
      dispatch(getCategoryItem(params.id));
   }, [params]);

   useEffect(() => {
      if (category?.currentCategoryItem?.id) {
         dispatch(getJobByCategory(category?.currentCategoryItem?.id));
      }
   }, [category?.currentCategoryItem]);

   return (
      <div>
         <Header />
         <div className="container py-8">
            <div>
               <p className="text-3xl font-semibold text-black">{`Result for "${category?.currentCategoryItem?.tenChiTiet}"`}</p>
               <div>
                  <div className="flex gap-4 pt-8 pb-6">
                     <button className="pl-3 py-[6px] font-semibold text-black border rounded-[4px] pr-8">
                        Category
                     </button>
                     <button className="pl-3 py-[6px] font-semibold text-black border rounded-[4px] pr-8">
                        Service Options
                     </button>
                     <button className="pl-3 py-[6px] font-semibold text-black border rounded-[4px] pr-8">
                        Seller Details
                     </button>
                     <button className="pl-3 py-[6px] font-semibold text-black border rounded-[4px] pr-8">
                        Budget
                     </button>
                     <button className="pl-3 py-[6px] font-semibold text-black border rounded-[4px] pr-8">
                        Delivery Time
                     </button>
                  </div>
               </div>
            </div>
            <div>
               <div>
                  <p className="px-1 text-sm font-semibold">
                     123 services available
                  </p>
               </div>
               <div className="mt-5">
                  {category?.pending ? (
                     <div className="flex items-center justify-center w-full h-full min-h-[600px]">
                        <SyncLoader
                           color="#1dbf73"
                           cssOverride={{
                              display: "block",
                              margin: "0 auto",
                              borderColor: "red",
                           }}
                           size={10}
                        />
                     </div>
                  ) : (
                     <div className="grid grid-cols-4 gap-8 mb-10">
                        {category?.jobsByCategory?.map((job) => (
                           <div className="col-span-1" key={job.id}>
                              <JobItem job={job} />
                           </div>
                        ))}
                     </div>
                  )}
               </div>
            </div>
         </div>
         <Footer />
      </div>
   );
};

export default JobsPage;
