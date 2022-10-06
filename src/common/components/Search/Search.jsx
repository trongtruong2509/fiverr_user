import React, { useEffect, useState } from "react";
import Tippy from "@tippyjs/react/headless";
import SyncLoader from "react-spinners/SyncLoader";

import { IoSearch } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import {
   getJobsByName,
   getSearchJobs,
   updateSearchJobs,
} from "../../slices/jobSlice";

const Search = ({ content, header = false }) => {
   const dispatch = useDispatch();

   const jobSlice = useSelector((state) => state.job);
   const searchJobs = useSelector((state) => state.job.searchJobs);

   // const [loading, setLoading] = useState(true);
   const [searchText, setSearchText] = useState(content);
   // const [searchResult, setSearchResult] = useState([]);

   useEffect(() => {
      if (searchText === "") {
         dispatch(updateSearchJobs([]));
         return;
      }

      if (searchText !== "") {
         // setLoading(true);
         console.log("[searchText]", searchText);
         dispatch(getSearchJobs(searchText));
      }
   }, [searchText]);

   const btnStyle =
      "px-6 py-3 font-semibold text-white rounded-r-md bg-primary hover:bg-primary-dark";
   const btnHeaderStyle =
      "py-2 px-4 font-semibold bg-[#222325] rounded-r-[4px] flex items-center justify-center text-white";

   const inputStyle =
      "py-2 pl-12 leading-6 rounded-l-md w-[500px] outline-none";
   const inputHeaderStyle =
      "py-2 px-4 leading-6 rounded-l-[4px] w-[500px] outline-none border-l border-y border-[#c5c6c9] text-base";

   return (
      <Tippy
         interactive
         // hideOnClick="toggle"
         placement="bottom"
         appendTo={() => document.body}
         delay={[0, 700]}
         trigger="click"
         // reference={ref}
         render={(attrs) => (
            <div>
               {searchText && (
                  <div
                     className={`${
                        header ? "w-[550px]" : "w-[600px]"
                     } h-auto min-h-20 pb-3 bg-white rounded-b-md px-6 shadow-lg -m-[9px]`}
                     tabIndex="-1"
                     {...attrs}
                  >
                     <div className="w-full text-sm">
                        <div className="pt-4 pb-2">
                           {searchText && (
                              <>
                                 <h2 className="font-semibold">Top results</h2>
                              </>
                           )}
                        </div>
                        <div>
                           {jobSlice?.pending ? (
                              <div className="flex items-center justify-center w-full h-40">
                                 <SyncLoader
                                    color="#1dbf73"
                                    // loading={loading}
                                    cssOverride={{
                                       display: "block",
                                       margin: "0 auto",
                                       borderColor: "red",
                                    }}
                                    size={10}
                                 />
                              </div>
                           ) : (
                              <div>
                                 {searchJobs?.length ? (
                                    searchJobs.map((job) => (
                                       <SearchItem key={job.id} job={job} />
                                    ))
                                 ) : (
                                    <div className="w-full text-center">
                                       No result
                                    </div>
                                 )}
                              </div>
                           )}
                        </div>
                     </div>
                  </div>
               )}
            </div>
         )}
      >
         <div className={`${header ? "w-[550px]" : "w-[600px]"} flex relative`}>
            {!header && (
               <IoSearch className="absolute top-0 h-full text-xl leading-6 text-[#8e8e8e] opacity-80 left-4" />
            )}
            <input
               type="text"
               value={searchText}
               onChange={(e) => setSearchText(e.target.value)}
               className={header ? inputHeaderStyle : inputStyle}
               placeholder={
                  header
                     ? "What service are you looking for today?"
                     : `Try "building mobile app"`
               }
            />
            <button className={header ? btnHeaderStyle : btnStyle}>
               {header ? <IoSearch className="text-xl" /> : "Search"}
            </button>
         </div>
      </Tippy>
   );
};

const SearchItem = ({ job }) => {
   return (
      <div className="px-6 py-3 hover:bg-[#efeff0] cursor-pointer font-semibold rounded-md">
         {job?.congViec?.tenCongViec}
      </div>
   );
};

export default Search;
