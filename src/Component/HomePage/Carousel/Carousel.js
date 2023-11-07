import React, { Component } from "react";
import Slider from "react-slick";
import { Images } from "./Images";
import "./Carousel.css";

export default class Carousel extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <div className="main_carousel"> 
        <div className="carousel__content">
          <Slider {...settings}>
            {Images.map((img) => (
              <div key={img.id}>
                <img src={img.images} alt="logo" height="100px" width="100px" />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}
