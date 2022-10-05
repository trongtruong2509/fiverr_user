import React from "react";
import { IoSearch } from "react-icons/io5";

const Search = ({ small = false }) => {
   return (
      <div className="w-[600px] flex relative">
         <IoSearch className="absolute top-0 h-full text-xl leading-6 text-[#8e8e8e] opacity-80 left-4" />
         <input
            type="text"
            className="py-2 pl-12 leading-6 rounded-l-md w-[500px] outline-none"
            placeholder={`Try "building mobile app"`}
         />
         <button className="px-6 py-3 font-semibold text-white rounded-r-md bg-primary hover:bg-primary-dark">
            Search
         </button>
      </div>
   );
};

export default Search;
