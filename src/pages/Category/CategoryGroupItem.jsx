import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const CategoryGroupItem = ({ group }) => {
   return (
      <div className="mb-6">
         <div>
            <img
               src={group?.hinhAnh}
               alt={group?.tenNhom}
               className="object-cover w-full rounded-lg"
            />
         </div>
         <div>
            <p className="pt-6 mb-4 text-xl font-semibold text-secondary">
               {group?.tenNhom}
            </p>
            {group?.dsChiTietLoai.map((item) => (
               <div
                  className="flex items-center justify-between p-2 -ml-2 rounded-lg cursor-pointer hover:bg-[#f5f5f5] group"
                  key={item.id}
               >
                  <p>{item.tenChiTiet}</p>
                  <HiArrowNarrowRight className="opacity-0 group-hover:opacity-100 text-secondary" />
               </div>
            ))}
         </div>
      </div>
   );
};

export default CategoryGroupItem;
