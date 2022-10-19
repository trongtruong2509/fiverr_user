import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SyncLoader from "react-spinners/SyncLoader";

import Footer from "../../common/components/Footer/Footer";
import Header from "../../common/components/Header/Header";
import { getCategory } from "../../common/slices/categorySlice";
import CategoryGroupItem from "./CategoryGroupItem";
import CategoryIntro from "./CategoryIntro";
import CategoryServices from "./CategoryServices";

const Category = () => {
   const params = useParams();
   const dispatch = useDispatch();

   const categorySlice = useSelector((state) => state.category);

   useEffect(() => {
      dispatch(getCategory(params.id));
   }, [params]);

   return (
      <div>
         <Header />
         <div className="mt-8">
            <CategoryIntro />
         </div>
         <div className="container mt-14">
            <p className="mb-6 text-2xl font-semibold text-secondary">
               Explore{" "}
               <span>{categorySlice?.currentCategory?.tenLoaiCongViec}</span>
            </p>
         </div>

         <div className="container">
            {categorySlice?.pending ? (
               <div className="flex items-center justify-center w-full h-40">
                  <SyncLoader
                     color="#1dbf73"
                     cssOverride={{
                        display: "block",
                        margin: "0 auto",
                        borderColor: "red",
                     }}
                     size={10}
                  />
               </div>
            ) : (
               <div className="grid grid-cols-4 gap-8">
                  {categorySlice?.currentCategory?.dsNhomChiTietLoai.map(
                     (item) => (
                        <div className="col-span-1">
                           <CategoryGroupItem key={item.id} group={item} />
                        </div>
                     )
                  )}
               </div>
            )}
         </div>

         <div>
            <CategoryServices />
         </div>
         <Footer />
      </div>
   );
};

export default Category;
