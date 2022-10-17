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
      <div className="relative w-full -mt-[82px]">
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
            <div className="relative w-screen umd:h-[680px] h-[410px] bg-[#7d1a00]">
               {/* <div className="w-screen h-2/5 bg-[#7d1a00] umd:hidden" /> */}
               <div className="hidden umd:block">
                  <img src={gabrielle} className="object-cover h-[680px]" />
                  <div className="container absolute bottom-0 left-0 right-0 w-full mb-8 text-[17px] text-right text-white">
                     <p>
                        Gabrielle, <b>Video Editor</b>
                     </p>
                  </div>
               </div>
            </div>
            <div className="w-screen bg-[#023a15] umd:h-[680px] h-[410px]">
               {/* <div className="w-screen h-2/5 bg-[#023a15] umd:hidden" /> */}
               <div className="hidden umd:block">
                  <img src={andrea} className="object-cover h-[680px]" />
                  <div className="container absolute bottom-0 left-0 right-0 w-screen mb-8 text-[17px] text-right text-white">
                     <p>
                        Andrea, <b>Fashion Designer</b>
                     </p>
                  </div>
               </div>
            </div>
            <div className="w-screen bg-[#b64762] umd:h-[680px] h-[410px]">
               {/* <div className="w-screen h-2/5 bg-[#b64762] umd:hidden" /> */}
               <div className="hidden umd:block">
                  <img src={moon} className="object-cover h-[680px]" />
                  <div className="container absolute bottom-0 left-0 right-0 w-screen mb-8 text-[17px] text-right text-white">
                     <p>
                        Moon, <b>Marketing Expert</b>
                     </p>
                  </div>
               </div>
            </div>
            <div className="w-screen bg-[#540e1f] umd:h-[680px] h-[410px]">
               {/* <div className="w-screen h-2/5 bg-[#540e1f] umd:hidden" /> */}
               <div className="hidden umd:block">
                  <img src={ritika} className="object-cover h-[680px]" />
                  <div className="container absolute bottom-0 left-0 right-0 w-screen mb-8 text-[17px] text-right text-white">
                     <p>
                        Ritika, <b>Shoemaker and Designer</b>
                     </p>
                  </div>
               </div>
            </div>
            <div className="w-screen bg-[#023a15] umd:h-[680px] h-[410px]">
               {/* <div className="w-screen h-2/5 bg-[#023a15] umd:hidden" /> */}
               <div className="hidden umd:block">
                  <img src={zach} className="object-cover h-[680px]" />
                  <div className="container absolute bottom-0 left-0 right-0 w-full mb-8 text-[17px] text-right text-white">
                     <p>
                        Zach, <b>Bar Owner</b>
                     </p>
                  </div>
               </div>
            </div>
         </Carousel>
         <div className="container umd:h-[680px] h-[410px] items-center umd:grid block grid-cols-4">
            <div className="flex flex-col items-center justify-center h-full col-span-3 gap-6 umd:items-start xl:col-span-2">
               <h1 className="text-5xl font-bold text-white leading-[3.5rem] mb-2 max-w-[620px] text-center umd:text-left">
                  Find the perfect <i className="font-playfair">freelance</i>{" "}
                  services for your business
               </h1>
               <Search />
               <div className="items-center hidden gap-3 umd:flex">
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
