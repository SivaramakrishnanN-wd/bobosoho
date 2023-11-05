import React from "react";
import "./Cloud.css";
import LImage from "../../../../assets/cloud_1.png";
import NavButton from "../../../Navigation/NavButton";

export default function Cloud() {
  return (
    <div className="cloud-container">
      <div className="cloud-background">
        <div className="cart-content">
          <img src={LImage} alt="logo" height="100px" width="100px" />
          <h2>Bobosoho Shop</h2>
          <p>
            For a one-time price of 19.50 euros per year, select any one of each
            of the following products: Wordsxtra doc writer with pdf converter,
            Email with antispam blocking system, Omada Hr Payroll and Project
            Management, Clasico Payslips, Vault Hosting (Photos & Video), IFGAAP
            - IFRS GAAP reporting and GL Accounting, IFGAAP - Invoicing, Omada
            Project manager, Bitss C - antispam contact form for websites
          </p>
          <div className="cart-button">
            <NavButton>Visit Bobosoho Shop</NavButton>
          </div>
        </div>
      </div>
    </div>
  );
}
