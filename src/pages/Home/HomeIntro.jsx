import React from "react";
import { HiOutlineCheckCircle } from "react-icons/hi";

const HomeIntro = () => {
   return (
      <div className="w-screen py-[96px] bg-[#f1fdf7] mb-[96px]">
         <div className="container grid grid-cols-2">
            <div className="max-w-[500px]">
               <p className="mb-6 text-4xl font-semibold text-secondary">
                  A whole world of freelance talent at your fingertips
               </p>
               <ul>
                  <li className="mb-5 text-lg">
                     <div className="flex gap-3 mb-1">
                        <HiOutlineCheckCircle className="text-2xl font-bold opacity-80" />
                        <p className="font-semibold text-secondary">
                           Quality work done quickly
                        </p>
                     </div>
                     <p>
                        Find the right freelancer to begin working on your
                        project within minutes.
                     </p>
                  </li>
                  <li className="mb-5 text-lg">
                     <div className="flex gap-3 mb-1">
                        <HiOutlineCheckCircle className="text-2xl font-bold opacity-80" />
                        <p className="font-semibold text-secondary">
                           Quality work done quickly
                        </p>
                     </div>
                     <p>
                        Find the right freelancer to begin working on your
                        project within minutes.
                     </p>
                  </li>
                  <li className="mb-5 text-lg">
                     <div className="flex gap-3 mb-1">
                        <HiOutlineCheckCircle className="text-2xl font-bold opacity-80" />
                        <p className="font-semibold text-secondary">
                           Protected payments, every time
                        </p>
                     </div>
                     <p>
                        Always know what you'll pay upfront. Your payment isn't
                        released until you approve the work.
                     </p>
                  </li>
                  <li className="mb-5 text-lg">
                     <div className="flex gap-3 mb-1">
                        <HiOutlineCheckCircle className="text-2xl font-bold opacity-80" />
                        <p className="font-semibold text-secondary">
                           24/7 support
                        </p>
                     </div>
                     <p>
                        Questions? Our round-the-clock support team is available
                        to help anytime, anywhere.
                     </p>
                  </li>
               </ul>
            </div>
            <div className="relative flex items-center">
               <img
                  alt="Video teaser image"
                  src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_700,dpr_1.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png"
               />
               <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center w-full h-full cursor-pointer">
                  <img
                     src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/desktop-play-button.c1196d6.png"
                     alt="play icon"
                     className="w-20 h-20 "
                  />
               </div>
            </div>
         </div>
      </div>
   );
};

export default HomeIntro;
