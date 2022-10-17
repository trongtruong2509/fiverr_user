import React from "react";

const HomeMarketplace = () => {
   return (
      <div className="container mb-[96px]">
         <p className="pb-6 mb-10 text-4xl font-semibold text-secondary">
            Explore the marketplace
         </p>
         <ul className="flex flex-wrap">
            <li className="umd:w-1/5 w-1/3 pb-[55px] px-[10px] list-item text-center">
               <a
                  className="text-center text-[#222325] relative inline-block transition-colors duration-200 decoration-none hover:outline-none hover:text-black cate-list"
                  // href={`"/categories/graphics-design?source=hplo_cat_sepos=1"`}
               >
                  <img
                     className="block w-12 h-12 mb-[15px] mx-auto"
                     src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg"
                     alt="Graphics Design"
                  />
                  Graphics Design
               </a>
            </li>
            <li className="umd:w-1/5 w-1/3 pb-[55px] px-[10px] list-item text-center">
               <a
                  className="text-center text-[#222325] relative inline-block transition-colors duration-200 decoration-none hover:outline-none hover:text-black cate-list"
                  // href="/categories/online-marketing?source=hplo_cat_sepos=2"
               >
                  <img
                     className="block w-12 h-12 mb-[15px] mx-auto"
                     src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/online-marketing.74e221b.svg"
                     alt="Digital Marketing"
                  />
                  Digital Marketing
               </a>
            </li>
            <li className="umd:w-1/5 w-1/3 pb-[55px] px-[10px] list-item text-center">
               <a
                  className="text-center text-[#222325] relative inline-block transition-colors duration-200 decoration-none hover:outline-none hover:text-black cate-list"
                  // href="/categories/writing-translation?source=hplo_cat_sepos=3"
               >
                  <img
                     className="block w-12 h-12 mb-[15px] mx-auto"
                     src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/writing-translation.32ebe2e.svg"
                     alt="Writing Translation"
                     loading="lazy"
                  />
                  Writing Translation
               </a>
            </li>
            <li className="umd:w-1/5 w-1/3 pb-[55px] px-[10px] list-item text-center">
               <a
                  className="text-center text-[#222325] relative inline-block transition-colors duration-200 decoration-none hover:outline-none hover:text-black cate-list"
                  // href="/categories/video-animation?source=hplo_cat_sepos=4"
               >
                  <img
                     className="block w-12 h-12 mb-[15px] mx-auto"
                     src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/video-animation.f0d9d71.svg"
                     alt="Video Animation"
                     loading="lazy"
                  />
                  Video Animation
               </a>
            </li>
            <li className="umd:w-1/5 w-1/3 pb-[55px] px-[10px] list-item text-center">
               <a
                  className="text-center text-[#222325] relative inline-block transition-colors duration-200 decoration-none hover:outline-none hover:text-black cate-list"
                  // href="/categories/music-audio?source=hplo_cat_sepos=5"
               >
                  <img
                     className="block w-12 h-12 mb-[15px] mx-auto"
                     src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/music-audio.320af20.svg"
                     alt="Music Audio"
                  />
                  Music Audio
               </a>
            </li>
            <li className="umd:w-1/5 w-1/3 pb-[55px] px-[10px] list-item text-center">
               <a
                  className="text-center text-[#222325] relative inline-block transition-colors duration-200 decoration-none hover:outline-none hover:text-black cate-list"
                  // href="/categories/programming-tech?source=hplo_cat_sepos=6"
               >
                  <img
                     className="block w-12 h-12 mb-[15px] mx-auto"
                     src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/programming.9362366.svg"
                     alt="Programming Tech"
                  />
                  Programming Tech
               </a>
            </li>
            <li className="umd:w-1/5 w-1/3 pb-[55px] px-[10px] list-item text-center">
               <a
                  className="text-center text-[#222325] relative inline-block transition-colors duration-200 decoration-none hover:outline-none hover:text-black cate-list"
                  // href="/categories/business?source=hplo_cat_sepos=7"
               >
                  <img
                     className="block w-12 h-12 mb-[15px] mx-auto"
                     src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/business.bbdf319.svg"
                     alt="Business"
                  />
                  Business
               </a>
            </li>
            <li className="umd:w-1/5 w-1/3 pb-[55px] px-[10px] list-item text-center">
               <a
                  className="text-center text-[#222325] relative inline-block transition-colors duration-200 decoration-none hover:outline-none hover:text-black cate-list"
                  // href="/categories/lifestyle?source=hplo_cat_sepos=8"
               >
                  <img
                     className="block w-12 h-12 mb-[15px] mx-auto"
                     src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lifestyle.745b575.svg"
                     alt="Lifestyle"
                  />
                  Lifestyle
               </a>
            </li>
            <li className="umd:w-1/5 w-1/3 pb-[55px] px-[10px] list-item text-center">
               <a
               // href="/categories/data?source=hplo_cat_sepos=9"
               >
                  <img
                     className="block w-12 h-12 mb-[15px] mx-auto"
                     src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/data.718910f.svg"
                     alt="Data"
                  />
                  Data
               </a>
            </li>
         </ul>
      </div>
   );
};

export default HomeMarketplace;
