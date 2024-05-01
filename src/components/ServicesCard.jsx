import React from 'react';

function ServicesCard() {
  return (
    <div className="card cardwidth mb-4 border-0" >
      <img
        src="https://wp2022.kodesolution.com/odhomz/wp-content/uploads/2022/06/bg11.jpg"
        className="card-img-top rounded-2"
        alt="..."
      />
      <div className="bannerimg pt-3">
        05
        <br />
        Jun
      </div>
      <div className="card-body entry mt-4 rounded-2 border">
        <h4
          style={{ lineHeight: "2rem", marginBottom: "10px" }}
          className="card-title fw-bolder"
        >
          How To Protect Seniors From Falls
        </h4>
        <p
          style={{ color: "#7c8186", lineHeight: "2rem" }}
          className="card-text"
        >
          Cursus libero viverra tempus netus diam vestibulum lorem
          tincidunt
        </p>
        <a className="readmore">
          <i className="bi bi-arrow-right-circle-fill iconsread"></i>{" "}
          <span className="ms-2">Read More</span>
        </a>

        <div className="d-flex endsectcard mt-auto">
          <div>
            <i className="bi bi-people"></i> BY ISMAIL
          </div>

          <div>
            <i className="bi bi-chat"></i> 1 COMMMENT
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesCard;
