import React,{useEffect} from "react";
import "./Cloud.css";
import LImage from "../../../../assets/cloud_1.png";
import LImage1 from "../../../../assets/soho_logo.png";
import AOS from 'aos'
import "aos/dist/aos.css"
import NavButton from "../../../Navigation/NavButton";

export default function Cloud() {
  useEffect(()=>{
    AOS.init({duration:2000})
})
  return (
    <div className="cloud-container">
      <div className="cloud-background">
        <div className="cloud_content">
        <div className="cart-content" data-aos="fade-up-left">
          <img src={LImage} alt="logo" height="100px" width="100px" />
          <h2>Bobosoho Shop</h2>
          <p>
            IFGAAP - IFRS GAAP reporting and GL Accounting, IFGAAP - Invoicing,
            Omada Project manager
          </p>
          <div className="cart-button">
            <NavButton>Visit Bobosoho Shop</NavButton>
          </div>
        </div>
        <div className="cart-content" data-aos="fade-up-left">
          <img src={LImage1} alt="logo" height="100px" width="100px" />
          <h2>Soho Server Hosting</h2>
          <p>
          Private vault hosting for individuals, families and employees, server and website hosting.
          </p>
          <div className="cart-button">
            <NavButton>Visit Server Products</NavButton>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
