import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const HomeServices = () => {
   return (
      <div className="container mb-[96px] pb-[96px]">
         <p className="mb-8 text-4xl font-semibold text-secondary">
            Popular professional services
         </p>
         <Swiper
            navigation={true}
            modules={[Navigation]}
            className="w-full"
            spaceBetween={36}
            slidesPerView={1}
         >
            <SwiperSlide>
               <Swiper
                  spaceBetween={36}
                  slidesPerView={1}
                  breakpoints={{
                     788: {
                        slidesPerView: 2,
                        spaceBetween: 24,
                     },
                     900: {
                        slidesPerView: 3,
                        spaceBetween: 18,
                     },
                     1240: {
                        slidesPerView: 5,
                        spaceBetween: 36,
                     },
                  }}
               >
                  <SwiperSlide>
                     <ServiceItem
                        src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/logo-design-2x.png"
                        label="Build your brand"
                        title="Logo Design"
                     />
                  </SwiperSlide>
                  <SwiperSlide>
                     <ServiceItem
                        src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/ae11e2d45410b0eded7fba0e46b09dbd-1598561917003/wordpress-2x.png"
                        label="Customize your site"
                        title="WordPress"
                     />
                  </SwiperSlide>
                  <SwiperSlide>
                     <ServiceItem
                        src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741669/voiceover-2x.png"
                        label="Share your message"
                        title="Voice Over"
                     />
                  </SwiperSlide>
                  <SwiperSlide>
                     <ServiceItem
                        src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741663/animated-explainer-2x.png"
                        label="Engage your audience"
                        title="Video Explainer"
                     />
                  </SwiperSlide>
                  <SwiperSlide>
                     <ServiceItem
                        src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741667/social-2x.png"
                        label="Reach more customers"
                        title="Social Media"
                     />
                  </SwiperSlide>
               </Swiper>
            </SwiperSlide>
            <SwiperSlide>
               <Swiper
                  spaceBetween={36}
                  slidesPerView={1}
                  breakpoints={{
                     788: {
                        slidesPerView: 2,
                        spaceBetween: 24,
                     },
                     900: {
                        slidesPerView: 3,
                        spaceBetween: 18,
                     },
                     1240: {
                        slidesPerView: 5,
                        spaceBetween: 36,
                     },
                  }}
               >
                  <SwiperSlide>
                     <ServiceItem
                        src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741668/seo-2x.png"
                        label="Unlock growth online"
                        title="SEO"
                     />
                  </SwiperSlide>
                  <SwiperSlide>
                     <ServiceItem
                        src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/illustration-2x.png"
                        label="Color your dreams"
                        title="Illustration"
                     />
                  </SwiperSlide>
                  <SwiperSlide>
                     <ServiceItem
                        src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741674/translation-2x.png"
                        label="Go global"
                        title="Translation"
                     />
                  </SwiperSlide>
                  <SwiperSlide>
                     <ServiceItem
                        src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_360,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/data-entry-2x.png"
                        label="Learn your business"
                        title="Data Entry"
                     />
                  </SwiperSlide>
                  <SwiperSlide>
                     <ServiceItem
                        src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/book-covers-2x.png"
                        label="Showcase your story"
                        title="Book Covers"
                     />
                  </SwiperSlide>
               </Swiper>
            </SwiperSlide>
         </Swiper>
      </div>
   );
};

const ServiceItem = ({ src, title, label }) => {
   return (
      <div className="relative w-full rounded-md cursor-pointer">
         <img src={src} alt="img" className="object-cover w-full" />
         <div className="absolute text-white top-4 left-4">
            <p className="text-sm">{label}</p>
            <p className="text-2xl font-semibold">{title}</p>
         </div>
      </div>
   );
};

export default HomeServices;
