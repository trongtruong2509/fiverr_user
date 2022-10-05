import React from "react";
import { Carousel } from "antd";

import andrea from "../../assets/hero-andrea.png";
import moon from "../../assets/hero-moon.png";
import zach from "../../assets/hero-zach.webp";
import ritika from "../../assets/hero-ritika.webp";
import gabrielle from "../../assets/hero-gabrielle.png";
import Search from "../../common/components/Search/Search";

const contentStyle = {
   // height: "160px",
   // color: "#fff",
   // lineHeight: "160px",
   // textAlign: "center",
   // backgroundColor: "#023a15",
   // backgroundPosition: "bottom"
};

const HomeCarousel = () => {
   return (
      <div className="relative w-full">
         <Carousel
            effect="fade"
            autoplay
            dots={false}
            style={{
               position: "absolute",
               top: 0,
               left: 0,
               right: 0,
               bottom: 0,
               zIndex: -1,
               width: "100vw",
            }}
         >
            <div className="relative w-screen max-h-[680px]">
               <img src={gabrielle} className="object-cover w-full" />
               <div className="container absolute bottom-0 left-0 right-0 w-full mb-8 text-[17px] text-right text-white">
                  <p>
                     Gabrielle, <b>Video Editor</b>
                  </p>
               </div>
            </div>
            <div className="w-screen h-auto">
               <img
                  src={andrea}
                  className="object-cover max-h-[680px] w-screen"
               />
               <div className="container absolute bottom-0 left-0 right-0 w-screen mb-8 text-[17px] text-right text-white">
                  <p>
                     Andrea, <b>Fashion Designer</b>
                  </p>
               </div>
            </div>
            <div className="w-screen h-auto">
               <img
                  src={moon}
                  className="object-cover max-h-[680px] w-screen"
               />
               <div className="container absolute bottom-0 left-0 right-0 w-screen mb-8 text-[17px] text-right text-white">
                  <p>
                     Moon, <b>Marketing Expert</b>
                  </p>
               </div>
            </div>
            <div className="w-screen h-auto">
               <img
                  src={ritika}
                  className="object-cover max-h-[680px] w-screen"
               />
               <div className="container absolute bottom-0 left-0 right-0 w-screen mb-8 text-[17px] text-right text-white">
                  <p>
                     Ritika, <b>Shoemaker and Designer</b>
                  </p>
               </div>
            </div>
            <div className="w-screen h-auto">
               <img
                  src={zach}
                  className="object-cover max-h-[680px] w-screen"
               />
               <div className="container absolute bottom-0 left-0 right-0 w-full mb-8 text-[17px] text-right text-white">
                  <p>
                     Zach, <b>Bar Owner</b>
                  </p>
               </div>
            </div>
         </Carousel>
         <div className="container h-[680px] items-center grid grid-cols-2">
            <div className="flex flex-col col-span-1 gap-6">
               <h1 className="text-5xl font-bold text-white leading-[3.5rem] mb-2">
                  Find the perfect <i className="font-playfair">freelance</i>{" "}
                  services for your business
               </h1>
               <Search />
               <div className="flex items-center gap-3">
                  <p className="text-base text-white">Popular:</p>
                  <button
                     className="px-3 py-[2px] text-sm font-semibold text-white border border-white rounded-3xl
                  transition-all duration-200 ease-in 
                  hover:bg-white hover:border-white hover:text-black"
                  >
                     Website Design
                  </button>
                  <button
                     className="px-3 py-[2px] text-sm font-semibold text-white border border-white rounded-3xl
                  transition-all duration-200 ease-in 
                  hover:bg-white hover:border-white hover:text-black"
                  >
                     WordPress
                  </button>
                  <button
                     className="px-3 py-[2px] text-sm font-semibold text-white border border-white rounded-3xl
                  transition-all duration-200 ease-in 
                  hover:bg-white hover:border-white hover:text-black"
                  >
                     Logo Design
                  </button>
                  <button
                     className="px-3 py-[2px] text-sm font-semibold text-white border border-white rounded-3xl
                  transition-all duration-200 ease-in 
                  hover:bg-white hover:border-white hover:text-black"
                  >
                     Video Editing
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default HomeCarousel;
