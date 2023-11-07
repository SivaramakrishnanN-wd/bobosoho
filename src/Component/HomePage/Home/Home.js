import React from "react";
// import BgVideo from "../../../assets/video.mp4"
import BannerSection from "../BannerSection/BannerSection";
import Carousel from "../Carousel/Carousel"
import Cloud from "../Carousel/Cloud/Cloud";
import Cyber from "../Cyber/Cyber";
import "./Home.css"

export default function Home() {
  return (
    <div>
     <BannerSection /> {""} 
      <Carousel />
      <Cloud />
      <Cyber />
    </div>
  );
}
