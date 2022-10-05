import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const HomeTestimonial = () => {
   return (
      <div>
         <div className="container mb-[96px]">
            <Swiper navigation={true} modules={[Navigation]} className="w-full">
               <SwiperSlide>
                  <div className="grid grid-cols-12">
                     <img
                        src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173399/testimonial-video-still-rooted.jpg"
                        alt="abc"
                        className="col-span-5 rounded-md"
                     />
                     <div className="col-span-7 px-10">
                        <p className="flex items-center gap-4 mb-4">
                           <span className="border-r pr-4 border-[#c5c6c9]">
                              Kay Kim, Co-Founder
                           </span>
                           <span class="">
                              <img
                                 alt="Company logo"
                                 src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/rooted-logo-x2.321d79d.png"
                                 className="object-cover h-[36px] inline-block align-middle"
                              />
                           </span>
                        </p>
                        <blockquote class="text-[30px] leading-[44px] text-[#003912] font-playfair font-bold tracking-wide">
                           <i>
                              "It's extremely exciting that Fiverr has
                              freelancers from all over the world — it broadens
                              the talent pool. One of the best things about
                              Fiverr is that while we're sleeping, someone's
                              working."
                           </i>
                        </blockquote>
                     </div>
                  </div>
               </SwiperSlide>
               <SwiperSlide>
                  <div className="grid grid-cols-12">
                     <img
                        src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173414/testimonial-video-still-naadam.jpg"
                        alt="abc"
                        className="col-span-5 rounded-md"
                     />
                     <div className="col-span-7 px-10">
                        <p className="flex items-center gap-4 mb-4">
                           <span className="border-r pr-4 border-[#c5c6c9]">
                              Caitlin Tormey, Chief Commercial Officer
                           </span>
                           <span class="">
                              <img
                                 alt="Company logo"
                                 src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/naadam-logo-x2.0a3b198.png"
                                 className="object-cover h-[36px] inline-block align-middle"
                              />
                           </span>
                        </p>
                        <blockquote class="text-[30px] leading-[44px] text-[#003912] font-playfair font-bold tracking-wide">
                           <i>
                              "We've used Fiverr for Shopify web development,
                              graphic design, and backend web development.
                              Working with Fiverr makes my job a little easier
                              every day."
                           </i>
                        </blockquote>
                     </div>
                  </div>
               </SwiperSlide>
               <SwiperSlide>
                  <div className="grid grid-cols-12">
                     <img
                        src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173396/testimonial-video-still-lavender.jpg"
                        alt="abc"
                        className="col-span-5 rounded-md"
                     />
                     <div className="col-span-7 px-10">
                        <p className="flex items-center gap-4 mb-4">
                           <span className="border-r pr-4 border-[#c5c6c9]">
                              Brighid Gannon (DNP, PMHNP-BC), Co-Founder
                           </span>
                           <span class="">
                              <img
                                 alt="Company logo"
                                 src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lavender-logo-x2.89c5e2e.png"
                                 className="object-cover h-[36px] inline-block align-middle"
                              />
                           </span>
                        </p>
                        <blockquote class="text-[30px] leading-[44px] text-[#003912] font-playfair font-bold tracking-wide">
                           <i>
                              "We used Fiverr for SEO, our logo, website, copy,
                              animated videos — literally everything. It was
                              like working with a human right next to you versus
                              being across the world."
                           </i>
                        </blockquote>
                     </div>
                  </div>
               </SwiperSlide>
               <SwiperSlide>
                  <div className="grid grid-cols-12">
                     <img
                        src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_560,dpr_1.0/v1/attachments/generic_asset/asset/42a6fd208670a0361b38bd72b47b9317-1599519173395/testimonial-video-still-haerfest.jpg"
                        alt="abc"
                        className="col-span-5 rounded-md"
                     />
                     <div className="col-span-7 px-10">
                        <p className="flex items-center gap-4 mb-4">
                           <span className="border-r pr-4 border-[#c5c6c9]">
                              Tim and Dan Joo, Co-Founders
                           </span>
                           <span class="">
                              <img
                                 alt="Company logo"
                                 src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/haerfest-logo-x2.03fa5c5.png"
                                 className="object-cover h-[36px] inline-block align-middle"
                              />
                           </span>
                        </p>
                        <blockquote class="text-[30px] leading-[44px] text-[#003912] font-playfair font-bold tracking-wide">
                           <i>
                              "When you want to create a business bigger than
                              yourself, you need a lot of help. That's what
                              Fiverr does."
                           </i>
                        </blockquote>
                     </div>
                  </div>
               </SwiperSlide>
            </Swiper>
         </div>
      </div>
   );
};

const ServiceItem = ({ src, title, label }) => {
   return (
      <div className="relative w-full rounded-md">
         <img src={src} alt="img" className="object-cover w-full" />
         <div className="absolute text-white top-4 left-4">
            <p className="text-sm">{label}</p>
            <p className="text-2xl font-semibold">{title}</p>
         </div>
      </div>
   );
};

export default HomeTestimonial;
