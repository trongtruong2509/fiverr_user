import React from "react";
import { useEffect } from "react";
import { IoChevronForwardOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { paths } from "../../app/routes";
import Footer from "../../common/components/Footer/Footer";
import Header from "../../common/components/Header/Header";
import Star from "../../common/components/Star";
import { getCurrentJobs } from "../../common/slices/jobSlice";
import Comments from "./Comments";
import FAQ from "./FAQ";
import Package from "./Package";
import Reviews from "./Reviews";

const JobDetail = () => {
   const params = useParams();
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const jobSlice = useSelector((state) => state.job);
   const currentJob = useSelector((state) => state.job.currentJob);

   useEffect(() => {
      dispatch(getCurrentJobs(params.id));
   }, [params]);

   return (
      <div>
         <Header />
         <div className="container px-20 py-10">
            <div className="block grid-cols-10 gap-20 umd:grid">
               <div className="col-span-6">
                  <div className="flex items-center gap-1 mb-6">
                     <button className="text-[#446ee7] text-sm">
                        {currentJob?.tenLoaiCongViec}
                     </button>
                     <IoChevronForwardOutline />
                     <button className="text-[#446ee7] text-sm">
                        {currentJob?.tenNhomChiTietLoai}
                     </button>
                     <IoChevronForwardOutline />
                     <button className="text-[#446ee7] text-sm">
                        {currentJob?.tenChiTietLoai}
                     </button>
                  </div>
                  <div className="mb-6">
                     <p className="mb-3 text-2xl font-semibold text-secondary">
                        {currentJob?.congViec.tenCongViec}
                     </p>
                     <div className="flex items-center gap-4">
                        <div className="flex items-center gap-3">
                           <img
                              src={currentJob?.avatar}
                              alt={currentJob?.tenNguoiTao}
                              className="w-8 h-8 rounded-full"
                           />
                           <p
                              className="font-semibold cursor-pointer hover:underline text-secondary"
                              onClick={() =>
                                 navigate(
                                    paths.profile.replace(
                                       ":id",
                                       currentJob?.congViec.nguoiTao
                                    )
                                 )
                              }
                           >
                              {currentJob?.tenNguoiTao}
                           </p>
                        </div>
                        <div className="h-4 border border-[#c5c6c9]"></div>
                        <div className="flex items-center gap-1 text-[15px] font-semibold text-[#ffbe5b]">
                           <Star />
                           <Star />
                           <Star />
                           <Star />
                           <Star />
                           <p>
                              {parseFloat(
                                 currentJob?.congViec.saoCongViec
                              ).toFixed(1)}
                           </p>
                           <span className="font-normal text-accent">
                              ({currentJob?.congViec.danhGia})
                           </span>
                        </div>
                     </div>
                  </div>
                  <div className="w-full">
                     <img
                        src={currentJob?.congViec.hinhAnh}
                        alt={currentJob?.congViec.tenCongViec}
                        className="object-cover w-full"
                     />
                  </div>
                  <div className="block w-full mt-5 umd:hidden">
                     <Package job={currentJob} />
                  </div>
                  <div className="mb-16">
                     <div>
                        <p className="pt-12 mb-6 text-xl font-semibold capitalize text-secondary">
                           About this Gig
                        </p>
                        <p className="pr-8 mb-12 leading-relaxed">
                           {currentJob?.congViec.moTa}
                        </p>
                     </div>
                     <div>
                        <p className="mt-8 mb-4 text-xl font-semibold capitalize text-secondary">
                           About the Seller
                        </p>
                        <div className="flex gap-5">
                           <img
                              src={currentJob?.avatar}
                              alt={currentJob?.tenNguoiTao}
                              className="rounded-full w-28 h-28"
                           />
                           <div className="">
                              <p
                                 className="mb-1 font-semibold text-black cursor-pointer hover:underline hover:text-primary"
                                 onClick={() =>
                                    navigate(
                                       paths.profile.replace(
                                          ":id",
                                          currentJob?.congViec.nguoiTao
                                       )
                                    )
                                 }
                              >
                                 {currentJob?.tenNguoiTao}
                              </p>
                              <div className="flex items-center gap-1 text-[15px] font-semibold text-[#ffbe5b] mb-5">
                                 <Star />
                                 <Star />
                                 <Star />
                                 <Star />
                                 <Star />
                                 <p>
                                    {parseFloat(
                                       currentJob?.congViec.saoCongViec
                                    ).toFixed(1)}
                                 </p>
                                 <span className="font-normal text-accent">
                                    ({currentJob?.congViec.danhGia})
                                 </span>
                              </div>
                              <button className="py-[6px] px-4 border rounded-[4px] border-[#62646a] hover:bg-[#62646a] hover:text-white transition-all duration-200 ease-out">
                                 Contact Me
                              </button>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="mb-24">
                     <FAQ />
                  </div>
                  <div>
                     <Reviews job={currentJob} />
                  </div>
                  <div>
                     <Comments id={currentJob?.id} />
                  </div>
               </div>
               <div className="sticky hidden umd:block col-span-4 h-[600px] top-10">
                  <Package job={currentJob} />
               </div>
            </div>
         </div>
         <Footer />
      </div>
   );
};

export default JobDetail;
