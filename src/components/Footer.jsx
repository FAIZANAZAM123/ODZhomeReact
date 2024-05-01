import React from 'react';

function Footer() {
  return (

    <>
    <div className="container-fluid paddingfooter footer">
      <footer className="row  my-5  ">
        <div className="col-md-4 mb-3  first p-5">
          <a href="/" className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
            <img className="img-fluid" src="https://wp2022.kodesolution.com/odhomz/wp-content/uploads/2021/05/logo-wide-white.png" alt=""/>
          </a>
          <p className="fs-5" style={{ color: "#DDDDDD" }}>
            203, Envato Labs, Behind Alis Steet, Melbourne along the information close the loop on focusing
          </p>
          <div className="iconsfooter d-flex ">
            <i className="bi bi-twitter fs-4 me-2"></i>
            <i className="bi bi-facebook fs-4 me-2"></i>
            <i className="bi bi-youtube fs-4 me-2"></i>
            <i className="bi bi-linkedin fs-4"></i>
          </div>
        </div>

        <div  className="col-md-2 mb-5">
          <h5 className="mb-4 fs-3">Explore</h5>
          <ul className="nav flex-column type">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary fs-5">Help Center</a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary fs-5">Latest News</a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary fs-5">Our Story</a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary fs-5">Types Of Cares</a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary fs-5">FAQ'S</a>
            </li>
          </ul>
        </div>

        <div className="col-md-3 mb-5">
          <h5 className="mb-4 fs-3">Types Of Cares</h5>
          <ul className="nav flex-column type">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary fs-5">Senior Citizen</a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary fs-5">Latest News</a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary fs-5">Our Story</a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary fs-5">Types Of Cares</a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary fs-5">FAQ'S</a>
            </li>
          </ul>
        </div>

        <div className="col-md-3 mb-3">
          <h5 className="mb-5 fs-3">Latest News</h5>
          <div className="d-flex mb-5 align-items-center">
            <img className="rounded-circle footerimage img-fluid me-3" src="https://wp2022.kodesolution.com/odhomz/wp-content/uploads/2022/06/bg11-300x300.jpg" alt=""/>
            <div>
              <h6 style={{textTransform:"uppercase"}} className="text-white mb-2 fs-6">How To Protect Seniors From Falls</h6>
              <p style={{color:"#ddd"}} className=" fs-6">June 5, 2021</p>
            </div>


            
          </div>

          <div className="d-flex  align-items-center">
            <img className="rounded-circle footerimage img-fluid me-3" src="https://wp2022.kodesolution.com/odhomz/wp-content/uploads/2022/06/bg11-300x300.jpg" alt=""/>
            <div>
              <h6 style={{textTransform:"uppercase"}} className="text-white mb-2 fs-6">How To Protect Seniors From Falls</h6>
              <p style={{color:"#ddd"}} className=" mb-0 fs-6">June 5, 2021</p>
            </div>


            
          </div>
        </div>



      
      </footer>


     
    </div>

<div  className="bottom py-4 px-5 d-flex   w-100 flex-wrap justify-content-lg-between justify-content-center align-items-center">
<div className="d-flex flex-wrap justify-content-lg-between justify-content-center align-items-center ">
  <p style={{fontSize:"18px",color:"white"}} className="mt-3 ">
    <span className="topspanfooter"><i className="bi bi-geo-alt"></i></span>{" "}
    <span className="span-infofooter">121 King Street, Melbourne</span>
  </p>

  <p  className="mt-3">
    {" "}
    <span className="topspanfooter"><i class="bi bi-telephone"></i></span>{" "}
    <span className="span-infofooter"> +440-98-5298</span>
  </p>

  <p className="mt-3">
    {" "}
    <span className="topspanfooter"><i class="bi bi-envelope"></i></span>{" "}
    <span className="span-infofooter">info@example.com</span>{" "}
  </p>
</div>

<div className="div bg-dark fs-5 fw-700 pr-4 text-white p-3">
© 2022 ThemeMascot. All Rights Reserved.
</div>




</div>

</>
  );
}

export default Footer;
