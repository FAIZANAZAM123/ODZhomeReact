import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="top d-flex flex-wrap justify-content-lg-between justify-content-center align-items-center">
        <div className="d-flex flex-wrap justify-content-lg-between justify-content-center align-items-center ">
          <p className="mt-3">
            <span className="topspan">Phone:</span>{" "}
            <span className="span-info">+440-98-5298</span>
          </p>

          <p  className="mt-3">
            {" "}
            <span className="topspan">Email:</span>{" "}
            <span className="span-info">info@example.com</span>
          </p>

          <p className="mt-3">
            {" "}
            <span className="topspan">Opening Hours:</span>{" "}
            <span className="span-info">08:00am to 06:00pm</span>{" "}
          </p>
        </div>

        <div class="icons    d-flex justify-content-center justify-content-md-center justify-content-sm-center">
          <i class="bi bi-twitter"></i>
          <i class="bi bi-facebook"></i>
          <i class="bi bi-youtube"></i>
        </div>
      </div>

      <nav class="navbar d-md-none d-lg-block d-none navbar-expand-lg px-5  ">
        <div class="container-fluid">
          <Link to="/" class="navbar-brand" >

            <img style={{maxWidth:"78%"}} className="img-fluid imglogo" height={73} src="https://wp2022.kodesolution.com/odhomz/wp-content/uploads/2022/05/logo-wide.png" alt="" />
            
          </Link>
          

            <button
              class="navbar-toggler "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mt-3 mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/" class="nav-link navitems fs-5 active" aria-current="page">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link to='/services' class="nav-link navitems fs-5 active" aria-current="page">
                  Services
                </Link>
              </li>
              <li class="nav-item">
                <Link to='/upload' class="nav-link navitems fs-5 active" aria-current="page">
                  UploadImages
                </Link>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <Link to='/contact'  class="btn appointment fs-6 mt-2 btn-outline-success" type="submit">
                Book An Appointment
              </Link>
            </form>
          </div>
        </div>
      </nav>



<nav class="navbar d-lg-none d-block navbar1 navbar-expand-lg   ">
        <div class="container-fluid">
          <Link class="navbar-brand1" to="/">

            <img style={{maxWidth:"70%"}} className="img-fluid " height={73} src="https://wp2022.kodesolution.com/odhomz/wp-content/uploads/2022/05/logo-wide.png" alt="" />
            
          </Link>
          

            <button
              class="navbar-toggler "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>


          <div style={{backgroundColor:"#222429"}} class="collapse   mt-3 text-light navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav navbar-navdark p-0 mb-2 mb-lg-0">
              <li class="nav-item ">
                <Link to="/" style={{color:"white"}} class="nav-link navitemsblack   fs-5 active" aria-current="page" >
                  Home
                </Link>
              </li>
              <li class="nav-item p-0">
                <Link to="/services" style={{color:"white"}} class="nav-link navitemsblack    fs-5 active" aria-current="page">
                  Services
                </Link>
              </li>
              <li class="nav-item">
                <Link to='/upload' style={{color:"white"}} class="nav-link navitemsblack    fs-5 active" aria-current="page" >
                  UploadImages
                </Link>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <Link to='/contact'>
              <button class="btn appointment ms-1 mt-1 mb-2 btn-outline-success" type="submit">
                Book An Appointment
              </button>
              </Link>
            </form>
          </div>
        </div>
      </nav>

      
    </>
  );
};

export default Navbar;
