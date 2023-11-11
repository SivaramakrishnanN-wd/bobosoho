  import React from "react";
  import "./ImageContent.css";
  import LeftImage from "../../../assets/cloud-.jpg";
  import RightImage from "../../../assets/web.png";

  const ImageContentLayout = () => {
    return (
      <div className="container">
       <div className="imageContent_all">
       <div className="left">
          <img src={LeftImage} alt="Left Image" className="image" />
          <div className="left-content">
            <h2>Lorem ipsum</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              sollicitudin rhoncus metus, sed iaculis enim interdum at. Nunc
              vehicula, nunc vel tristique tincidunt, libero metus pharetra erat,
              ac ornare nisl justo sit amet massa.
            </p>
          </div>
        </div>
        <div className="right">
          <div className="right-content">
            <h2>Lorem ipsum</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              sollicitudin rhoncus metus, sed iaculis enim interdum at. Nunc
              vehicula, nunc vel tristique tincidunt, libero metus pharetra erat,
              ac ornare nisl justo sit amet massa.
            </p>
          </div>
          <img src={RightImage} alt="Right Image" className="image" />
        </div>
        <div className="left">
          <img src={LeftImage} alt="Left Image" className="image" />
          <div className="left-content">
            <h2>Lorem ipsum</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              sollicitudin rhoncus metus, sed iaculis enim interdum at. Nunc
              vehicula, nunc vel tristique tincidunt, libero metus pharetra erat,
              ac ornare nisl justo sit amet massa.
            </p>
          </div>
        </div>
        <div className="right">
          <div className="right-content">
            <h2>Lorem ipsum</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              sollicitudin rhoncus metus, sed iaculis enim interdum at. Nunc
              vehicula, nunc vel tristique tincidunt, libero metus pharetra erat,
              ac ornare nisl justo sit amet massa.
            </p>
          </div>
          <img src={RightImage} alt="Right Image" className="image" />
        </div>
       </div>
      </div>
    );
  };

  export default ImageContentLayout;
