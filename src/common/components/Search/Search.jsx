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
import { paths } from "../../../app/routes";
import { useNavigate } from "react-router-dom";
import { Button, Popover } from "antd";

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
         // console.log("[searchText]", searchText);
         dispatch(getSearchJobs(searchText));
      }
   }, [searchText]);

   const btnStyle =
      "px-6 py-3 font-semibold text-white rounded-r-[4px] bg-primary hover:bg-primary-dark";
   const btnHeaderStyle =
      "py-2 px-4 font-semibold bg-[#222325] rounded-r-[4px] flex items-center justify-center text-white umd:block hidden -ml-1";

   const inputStyle =
      "py-2 pl-12 leading-6 rounded-l-[4px] w-full outline-none";
   const inputHeaderStyle =
      "py-2 px-4 leading-6 rounded-[4px] umd:rounded-l-[4px] w-full outline-none umd:border-l border umd:border-y border-[#c5c6c9] text-base";

   return (
      <Tippy
         interactive
         // hideOnClick="toggle"
         placement="bottom"
         // appendTo={() => document.body}
         delay={[0, 700]}
         trigger="click"
         // reference={ref}
         render={(attrs) => (
            <div>
               {searchText && (
                  <div
                     className="w-full min-w-full lg:max-w-[600px] h-auto min-h-20 pb-3
                     bg-white rounded-md px-6 shadow-lg -mt-[8px] flex flex-col"
                     tabIndex="-1"
                     {...attrs}
                  >
                     <div className="text-sm">
                        <div className="pt-4 pb-2">
                           {searchText && (
                              <>
                                 <h2 className="w-full font-semibold">
                                    Top results
                                 </h2>
                              </>
                           )}
                        </div>
                        <div>
                           {jobSlice.pending ? (
                              <div className="flex items-center justify-center h-40">
                                 <SyncLoader
                                    color="#1dbf73"
                                    // loading={loading}
                                    cssOverride={{
                                       display: "block",
                                       // width: "100%",
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
                                       <SearchItem
                                          key={job.id}
                                          job={job}
                                          searchTerm={searchText}
                                       />
                                    ))
                                 ) : (
                                    <div className="text-center">No result</div>
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
         <div className="w-full lg:max-w-[600px] flex relative">
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

      // <Popover
      //    style={{ width: "100%" }}
      //    // content={hoverContent}
      //    title="Hover title"
      //    trigger="click"
      //    // open={hovered}
      //    // onOpenChange={handleHoverChange}
      // >
      //    <Popover
      //       content={
      //          <div>
      //             {searchText && (
      //                <div
      //                   className="w-full min-w-full lg:max-w-[600px] h-auto min-h-20 pb-3
      //                bg-white rounded-md px-6 shadow-lg -mt-[8px] flex flex-col"
      //                   tabIndex="-1"
      //                   // {...attrs}
      //                >
      //                   <div className="text-sm">
      //                      <div className="pt-4 pb-2">
      //                         {searchText && (
      //                            <>
      //                               <h2 className="w-full font-semibold">
      //                                  Top results
      //                               </h2>
      //                            </>
      //                         )}
      //                      </div>
      //                      <div>
      //                         {true ? (
      //                            <div className="flex items-center justify-center h-40">
      //                               <SyncLoader
      //                                  color="#1dbf73"
      //                                  // loading={loading}
      //                                  cssOverride={{
      //                                     display: "block",
      //                                     // width: "100%",
      //                                     margin: "0 auto",
      //                                     borderColor: "red",
      //                                  }}
      //                                  size={10}
      //                               />
      //                            </div>
      //                         ) : (
      //                            <div>
      //                               {searchJobs?.length ? (
      //                                  searchJobs.map((job) => (
      //                                     <SearchItem
      //                                        key={job.id}
      //                                        job={job}
      //                                        searchTerm={searchText}
      //                                     />
      //                                  ))
      //                               ) : (
      //                                  <div className="text-center">
      //                                     No result
      //                                  </div>
      //                               )}
      //                            </div>
      //                         )}
      //                      </div>
      //                   </div>
      //                </div>
      //             )}
      //          </div>
      //       }
      //       title="Click title"
      //       trigger="click"
      //       // open={clicked}
      //       // onOpenChange={handleClickChange}
      //    >
      //       <div className="w-full lg:max-w-[600px] flex relative">
      //          {!header && (
      //             <IoSearch className="absolute top-0 h-full text-xl leading-6 text-[#8e8e8e] opacity-80 left-4" />
      //          )}
      //          <input
      //             type="text"
      //             value={searchText}
      //             onChange={(e) => setSearchText(e.target.value)}
      //             className={header ? inputHeaderStyle : inputStyle}
      //             placeholder={
      //                header
      //                   ? "What service are you looking for today?"
      //                   : `Try "building mobile app"`
      //             }
      //          />
      //          <button className={header ? btnHeaderStyle : btnStyle}>
      //             {header ? <IoSearch className="text-xl" /> : "Search"}
      //          </button>
      //       </div>
      //    </Popover>
      // </Popover>
   );
};

const SearchItem = ({ job, searchTerm }) => {
   const navigate = useNavigate();

   return (
      <div
         className="px-6 py-3 hover:bg-[#efeff0] cursor-pointer font-semibold rounded-md"
         onClick={() => navigate(paths.search.replace(":id", searchTerm))}
      >
         {job?.congViec?.tenCongViec}
      </div>
   );
};

export default Search;
