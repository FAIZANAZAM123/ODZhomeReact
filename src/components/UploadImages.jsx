import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
const UploadImages = () => {
  return (
    <div>
      <Navbar />

      <div className="upload-container">
      <h1>Upload Images</h1>
      <div className="upload-instructions">
        <p>Click the button below to select images from your device.</p>
        <p>Accepted file types: JPG, PNG</p>
      </div>
      <label className="upload-button" htmlFor="file-input">
        <div className="button-content">
          <i className="fas fa-cloud-upload-alt"></i>
          <span>Upload Images</span>
        </div>
      </label>
      <input id="file-input" type="file" accept="image/jpeg, image/png" multiple />
    </div>

      <Footer />
    </div>
  );
};

export default UploadImages;
