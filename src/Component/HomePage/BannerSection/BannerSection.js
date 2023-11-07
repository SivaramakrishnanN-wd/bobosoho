import React from "react";
import "./BannerSection.css"
import BgVideo from "../../../assets/video.mp4"


export default function BannerSection() {
  return (
    <div className="main">
    <div className="background-video">
      <video autoPlay loop muted>
        <source src={BgVideo} type="video/mp4" />
      </video>
      <div className="content">
        <div className="menu_content">
          <h1>Bobosoho Shop</h1>
          <h2>Selling Software And Cloud Services At Best Market Prices</h2>
          <p>
            With Bobosoho Shop, pay a yearly subscription of only 19.50 €
            per year for up to 15 users and select one of each of the
            following software.
          </p>
          <div className="menu__content__sub">
            <p>
              Software – Hosting private vault for individuals, IFGAAP a
              IFRS and GAAP reporting with GL Accounting, Omada HR payroll,
              Wordsxtra doc writer and pdf converter, Bitss C website
              contact anti-spam, IFGAAP invoicing, Classic payroll. Cloud
              services – Email anti-spam, Hosting private vault for
              individuals, family, and employees
            </p>
          </div>
        </div>
        <div className="front-video">
          <div className="video_bg">
            <video autoPlay loop muted>
              <source
                src="https://bobosoho.com/wp-content/uploads/2023/08/Bobosoho-all-Office-WordsXtra-Word-Doc-Creator-with-14-Office-Applications.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
