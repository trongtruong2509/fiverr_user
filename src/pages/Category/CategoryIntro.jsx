import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { IoPlayCircleSharp } from "react-icons/io5";

const CategoryIntro = ({ category }) => {
   return (
      <div className="container">
         <div className="relative">
            <img
               src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/3f1b7ea10295936b6846bcff0afd38cf-1626595415203/graphics-design-desktop.png"
               alt="Banner"
               className="relative w-full rounded-lg"
            />
            <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center gap-1 text-white">
               <p className="text-[32px] font-semibold">Graphics & Design</p>
               <p className="text-xl">Designs to make you stand out.</p>
               <button className="rounded-[4px] border border-white py-[10px] px-3 flex gap-2 items-center mt-6">
                  <IoPlayCircleSharp />
                  How Fiverr Works
               </button>
            </div>
         </div>
         <div className="mt-12">
            <p className="mb-4 text-2xl font-semibold text-secondary">
               Most popular in Graphics & Design
            </p>
            <div className="flex gap-5">
               <div className="flex items-center gap-3 p-3 rounded-lg cursor-pointer shadow-2 group">
                  <img
                     src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101614/Logo%20design_2x.png"
                     alt=""
                     className="w-12 h-12 rounded-[4px] object-cover"
                  />
                  <p className="font-semibold group-hover:text-primary">
                     Minimalist Logo Design
                  </p>
                  <HiArrowNarrowRight />
               </div>
               <div className="flex items-center gap-3 p-3 rounded-lg cursor-pointer shadow-2 group">
                  <img
                     src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101618/Architecture%20_%20Interior%20Design_2x.png"
                     alt=""
                     className="w-12 h-12 rounded-[4px] object-cover"
                  />
                  <p className="font-semibold group-hover:text-primary">
                     Architecture & Interior Design
                  </p>
                  <HiArrowNarrowRight />
               </div>
               <div className="flex items-center gap-3 p-3 rounded-lg cursor-pointer shadow-2 group">
                  <img
                     src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101624/Photoshop%20Editing_2x.png"
                     alt=""
                     className="w-12 h-12 rounded-[4px] object-cover"
                  />
                  <p className="font-semibold group-hover:text-primary">
                     Image Editing
                  </p>
                  <HiArrowNarrowRight />
               </div>
               <div className="flex items-center gap-3 p-3 rounded-lg cursor-pointer shadow-2 group">
                  <img
                     src="https://fiverr-res.cloudinary.com/f_auto,q_auto/v1/attachments/generic_asset/asset/fc6c7b8c1d155625e7878252a09c4437-1653222039380/Nft%20Art%20%281%29.png"
                     alt=""
                     className="w-12 h-12 rounded-[4px] object-cover"
                  />
                  <p className="font-semibold group-hover:text-primary">
                     NFT Art
                  </p>
                  <HiArrowNarrowRight />
               </div>
               <div className="flex items-center gap-3 p-3 rounded-lg cursor-pointer shadow-2 group">
                  <img
                     src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/97477f04af40de3aa1f8d6aa21f69725-1626179101623/T-Shirts%20_%20Merchandise_2x.png"
                     alt=""
                     className="w-12 h-12 rounded-[4px] object-cover"
                  />
                  <p className="font-semibold group-hover:text-primary">
                     T-Shirts & Merchandise
                  </p>
                  <HiArrowNarrowRight />
               </div>
               {/*  */}
            </div>
         </div>
      </div>
   );
};

export default CategoryIntro;
