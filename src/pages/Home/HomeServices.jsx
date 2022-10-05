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
         <Swiper navigation={true} modules={[Navigation]} className="w-full">
            <SwiperSlide>
               <div className="grid grid-cols-5 gap-[36px]">
                  <div className="col-span-1">
                     <ServiceItem
                        src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/logo-design-2x.png"
                        label="Build your brand"
                        title="Logo Design"
                     />
                  </div>
                  <div className="col-span-1">
                     <ServiceItem
                        src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/ae11e2d45410b0eded7fba0e46b09dbd-1598561917003/wordpress-2x.png"
                        label="Customize your site"
                        title="WordPress"
                     />
                  </div>
                  <div className="col-span-1">
                     <ServiceItem
                        src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741669/voiceover-2x.png"
                        label="Share your message"
                        title="Voice Over"
                     />
                  </div>
                  <div className="col-span-1">
                     <ServiceItem
                        src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741663/animated-explainer-2x.png"
                        label="Engage your audience"
                        title="Video Explainer"
                     />
                  </div>
                  <div className="col-span-1">
                     <ServiceItem
                        src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741667/social-2x.png"
                        label="Reach more customers"
                        title="Social Media"
                     />
                  </div>
               </div>
            </SwiperSlide>
            <SwiperSlide>
               <div className="grid grid-cols-5 gap-[36px]">
                  <div className="col-span-1">
                     <ServiceItem
                        src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741668/seo-2x.png"
                        label="Unlock growth online"
                        title="SEO"
                     />
                  </div>
                  <div className="col-span-1">
                     <ServiceItem
                        src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/illustration-2x.png"
                        label="Color your dreams"
                        title="Illustration"
                     />
                  </div>
                  <div className="col-span-1">
                     <ServiceItem
                        src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741674/translation-2x.png"
                        label="Go global"
                        title="Translation"
                     />
                  </div>
                  <div className="col-span-1">
                     <ServiceItem
                        src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_360,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/data-entry-2x.png"
                        label="Learn your business"
                        title="Data Entry"
                     />
                  </div>
                  <div className="col-span-1">
                     <ServiceItem
                        src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/book-covers-2x.png"
                        label="Showcase your story"
                        title="Book Covers"
                     />
                  </div>
               </div>
            </SwiperSlide>
         </Swiper>
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

export default HomeServices;
