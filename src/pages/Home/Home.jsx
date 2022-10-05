import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import debounce from "lodash.debounce";
import { BsSearch } from "react-icons/bs";
import SyncLoader from "react-spinners/SyncLoader";

// import FilmItem from "./FilmItem";
import { paths } from "../../app/routes";

import { fetchFilms, updateSuccessDelete } from "../../common/slices/filmSlice";
import { removeAccents } from "../../common/utils/helper";
import HomeCarousel from "./HomeCarousel";

import facebook from "../../assets/trusted-facebook.png";
import google from "../../assets/google.517da09.png";
import netflix from "../../assets/netflix.e3ad953.png";
import PnG from "../../assets/pandg.8b7310b.png";
import Paypal from "../../assets/paypal.ec56157.png";
import HomeServices from "./HomeServices";
import HomeIntro from "./HomeIntro";
import HomeTestimonial from "./HomeTestimonial";
import HomeMarketplace from "./HomeMarketplace";
import Footer from "../../common/components/Footer/Footer";

const Home = () => {
   const navigate = useNavigate();
   const dispatch = useDispatch();

   return (
      <div className="overflow-x-hidden overscroll-auto">
         <HomeCarousel />
         <div className="bg-[#fafafa] mb-[96px] w-screen">
            <div className="container flex items-center justify-center w-full h-[96px]">
               <span className="pr-5 font-semibold text-[#b5b6ba]">
                  Trusted by
               </span>
               <div className="flex items-center justify-center gap-[60px] px-6">
                  <img
                     src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/facebook.31d5f92.png"
                     alt="Facebook"
                  />
                  <img
                     src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/google.517da09.png"
                     alt="Google"
                  />
                  <img
                     src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/netflix.e3ad953.png"
                     alt="Netflix"
                  />
                  <img
                     src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/pandg.8b7310b.png"
                     alt="PnG"
                  />
                  <img
                     src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/paypal.ec56157.png"
                     alt="Paypal"
                  />
               </div>
            </div>
         </div>
         <HomeServices />
         <HomeIntro />
         <HomeTestimonial />
         <HomeMarketplace />
         <Footer />
      </div>
   );
};

export default Home;