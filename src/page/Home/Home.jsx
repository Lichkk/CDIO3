import React from "react";
import Banner from "../../components/Banner/Banner";
import BannerBottom from "../../components/Banner/BannerBottom";
import Header from "../../components/Header/Header";
import HeaderBottom from "../../components/Header/HeaderBottom";
import Image from "../../components/designLayouts/Image";
import {
  bannerImgOne,
  bannerImgTwo,
  bannerImgThree,
} from "../../assets/images";
import Notification from "../../components/Notification/Notification";
const Home = () => {
  return (
    <div className="w-full mx-auto">
      <Header />
      <HeaderBottom />
      <Banner />
      {/* <Image imgSrc={bannerImgOne} /> */}
      {/* <CardComponent /> */}
      <BannerBottom />
    </div>
  );
};

export default Home;
