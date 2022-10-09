import React from "react";
import { Select } from "antd";

import Star from "../../common/components/Star";

const { Option } = Select;

const Reviews = ({ job }) => {
   return (
      <div>
         <div className="flex items-center justify-between mb-6">
            <div className="flex gap-3">
               <p className="text-xl font-semibold">
                  {job?.congViec.danhGia} Reviews
               </p>
               <div className="flex items-center gap-1 text-[15px] font-semibold text-[#ffbe5b]">
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <p>{parseFloat(job?.congViec.saoCongViec).toFixed(1)}</p>
               </div>
            </div>
            <div className="flex items-center gap-3">
               <p>Sort By</p>
               <Select
                  defaultValue="relevent"
                  style={{ width: 150 }}
                  bordered={false}
               >
                  <Option value="recent">Most recent</Option>
                  <Option value="relevent">Most relevent</Option>
               </Select>
            </div>
         </div>
         <div className="grid grid-cols-2">
            <div className="flex flex-col col-span-1 gap-1">
               <div className="flex items-center gap-3 text-[#446ee7]">
                  <p className="font-semibold text-[446ee7]">5 Stars</p>
                  <div className="w-52 h-2 rounded-[999px] bg-[#ffb33e]"></div>
                  <p>(203)</p>
               </div>
               <div className="flex items-center gap-3 text-[#62646a] opacity-20">
                  <p className="font-semibold text-[446ee7]">4 Stars</p>
                  <div className="w-52 h-2 rounded-[999px] bg-[#62646a]"></div>
                  <p>(0)</p>
               </div>
               <div className="flex items-center gap-3 text-[#62646a] opacity-20">
                  <p className="font-semibold text-[446ee7]">3 Stars</p>
                  <div className="w-52 h-2 rounded-[999px] bg-[#62646a]"></div>
                  <p>(0)</p>
               </div>
               <div className="flex items-center gap-3 text-[#62646a] opacity-20">
                  <p className="font-semibold text-[446ee7]">2 Stars</p>
                  <div className="w-52 h-2 rounded-[999px] bg-[#62646a]"></div>
                  <p>(0)</p>
               </div>
               <div className="flex items-center gap-3 text-[#62646a] opacity-20">
                  <p className="font-semibold text-[446ee7]">1 Stars</p>
                  <div className="w-52 h-2 rounded-[999px] bg-[#62646a]"></div>
                  <p>(0)</p>
               </div>
            </div>
            <div className="col-span-1">
               <p className="mb-3 font-semibold">Rating Breakdown</p>
               <div className="flex flex-col gap-[6px]">
                  <div className="flex items-center justify-between w-full">
                     <p>Seller communication level</p>
                     <div className="flex gap-1 text-[#ffbe5b] font-semibold text-sm mt-1">
                        <Star />
                        <p>5</p>
                     </div>
                  </div>
                  <div className="flex items-center justify-between w-full">
                     <p>Recommend to a friend</p>
                     <div className="flex gap-1 text-[#ffbe5b] font-semibold text-sm mt-1">
                        <Star />
                        <p>5</p>
                     </div>
                  </div>
                  <div className="flex items-center justify-between w-full">
                     <p>Service as described</p>
                     <div className="flex gap-1 text-[#ffbe5b] font-semibold text-sm mt-1">
                        <Star />
                        <p>5</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Reviews;
