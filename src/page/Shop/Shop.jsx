import React, { useState } from "react";
import Header from "../../components/Header/Header";
import HeaderBottom from "../../components/Header/HeaderBottom";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import ShopSideNav from "../../components/ShopPage/ShopSideNav";
import Pagination from "../../components/ShopPage/Pagination";

const Shop = () => {
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const itemsPerPageFromBanner = (itemsPerPage) => {
    setItemsPerPage(itemsPerPage);
  };
  return (
    <div>
      <Header />
      <HeaderBottom />
      <div className="max-w-container mx-auto px-4">
        <Breadcrumbs title="Products" />
        <div className="w-full h-full flex pb-20 gap-10">
          <div className="w-[20%] lgl:w-[25%] hidden mdl:inline-flex h-full">
            <ShopSideNav />
          </div>
          <div className="w-full mdl:w-[80%] lgl:w-[75%] h-full flex flex-col gap-10">
            {/* <ProductBanner itemsPerPageFromBanner={itemsPerPageFromBanner} /> */}
            <Pagination itemsPerPage={itemsPerPage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
