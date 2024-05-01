import React, { useEffect } from "react";
import Navbar from "./Navbar";
import ServicesCard from "./ServicesCard";
import Footer from "./Footer";
import BacktoTop from "./BacktoTop";
const Services = () => {

    useEffect(() => {
        document.getElementById("loader").style.display = "none";
      }, []);
  return (
    <div>
      <Navbar />
      {/* 
      <div className="servicesImage">

        <h1>yello</h1>

      </div> */}

      <div class="module">
        <div class="module-inside d-flex flex-column px-5 justify-content-center h-100">
          <h1 class="textservice">Latest News</h1>
          <p class="mt-4 d-flex align-items-center">
            <a href="#" class="text-decoration-none me-2">
              Home
            </a>
            <h1>
              <i class="bi shortarrow bi-arrow-right-short me-2"></i>
            </h1>
            <a href="#" class="text-decoration-none">
              Latest News
            </a>
          </p>
        </div>
      </div>

      {/* Cards */}


      <div className="loader" id="loader"></div>


      <div className=" container-lg  mt-5">
        <div className="d-flex justify-content-center justify-content-lg-between  align-items-center flex-wrap">
          <ServicesCard />
          <ServicesCard />
          <ServicesCard />
          <ServicesCard />
          <ServicesCard />
          <ServicesCard />

        </div>
      </div>

      <BacktoTop/>


      <Footer/>

    
    </div>
  );
};

export default Services;
