import React from "react";
import BannerSection from "../BannerSection/BannerSection";
import Carousel from "../Carousel/Carousel";
import Cloud from "../Carousel/Cloud/Cloud";
import Cyber from "../Cyber/Cyber";
import "./Home.css";

export default function Home() {
  return (
    <div>
      <BannerSection />
      <Cloud />

      <Carousel />
      <Cyber />
    </div>
  );
}
