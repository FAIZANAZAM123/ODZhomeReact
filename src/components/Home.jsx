import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import $ from "jquery";
import ServicesCard from "./ServicesCard";
import BacktoTop from "./BacktoTop";
import { Link } from "react-router-dom";
const Home = () => {
  useEffect(() => {
    const carouselInner = $(".carousel-inner")[0];
    const carouselWidth = $(carouselInner).width(); // Width of the carousel container
    const cardWidth = 550;

    let scrollPosition = 0;

    const autoScrollInterval = 3000; // Auto scroll interval in milliseconds
    let autoScrollTimer; // Timer for auto-scrolling

    function startAutoScroll() {
      autoScrollTimer = setInterval(() => {
        if (scrollPosition < carouselInner.scrollWidth - carouselWidth) {
          // If there's still space to scroll, proceed as usual
          const scrollIncrement = cardWidth * 2.4; // Assuming the scroll increment is always cardWidth * 2.4
          scrollPosition += scrollIncrement; // Update scroll position
          $(carouselInner).animate({ scrollLeft: scrollPosition }, 600); // Scroll left
        } else {
          // If reached the end, smoothly scroll back to the beginning
          $(carouselInner).animate({ scrollLeft: 0 }, 600, function () {
            scrollPosition = 0; // Reset scroll position to 0
          });
        }
      }, autoScrollInterval);
    }

    function stopAutoScroll() {
      clearInterval(autoScrollTimer); // Stop auto-scrolling
    }

    $(".carousel-control-next").on("click", function () {
      stopAutoScroll(); // Stop auto-scrolling when manually navigating
      const maxScroll = carouselInner.scrollWidth - carouselWidth;
      const scrollIncrement = cardWidth * 2.4;
      scrollPosition += scrollIncrement; // Update scroll position

      if (scrollPosition >= maxScroll) {
        // If we've reached the end, smoothly scroll to the beginning
        $(carouselInner).animate({ scrollLeft: 0 }, 600, function () {
          scrollPosition = 0; // Reset scroll position to 0
        });
      } else {
        // Otherwise, scroll to the next position
        $(carouselInner).animate({ scrollLeft: scrollPosition }, 600);
      }
    });

    $(".carousel-control-prev").on("click", function () {
      stopAutoScroll(); // Stop auto-scrolling when manually navigating
      const scrollDecrement = cardWidth * 2.4; // Assuming the scroll decrement is always cardWidth * 2.4
      scrollPosition -= scrollDecrement; // Update scroll position

      if (scrollPosition < 0) {
        // If we've reached the beginning, smoothly scroll to the end
        const maxScroll = carouselInner.scrollWidth - carouselWidth;
        $(carouselInner).animate({ scrollLeft: maxScroll }, 600, function () {
          scrollPosition = maxScroll; // Reset scroll position to the end
        });
      } else {
        // Otherwise, scroll to the previous position
        $(carouselInner).animate({ scrollLeft: scrollPosition }, 600);
      }
    });

    const multipleCardCarousel = document.querySelector(
      "#carouselExampleControls"
    );
    if (window.matchMedia("(min-width: 768px)").matches) {
      /* global bootstrap */
      const carousel = new bootstrap.Carousel(multipleCardCarousel, {
        interval: false,
      });
      startAutoScroll(); // Start auto-scrolling on laptops
    } else {
      $(multipleCardCarousel).addClass("slide");
      startAutoScroll(); // Start auto-scrolling on mobile devices
    }

    return () => {
      clearInterval(autoScrollTimer); // Clean up auto-scroll timer
    };
  }, []);

  useEffect(() => {
    const carouselInner1 = $(".carousel-inner")[1];
    const carouselWidth1 = $(carouselInner1).width(); // Width of the carousel container
    const cardWidth = 160;
    let scrollPosition = 0;

    const autoScrollInterval = 3000; // Auto scroll interval in milliseconds
    let autoScrollTimer; // Timer for auto-scrolling

    function startAutoScroll() {
      autoScrollTimer = setInterval(() => {
        if (scrollPosition < carouselInner1.scrollWidth - carouselWidth1) {
          // If there's still space to scroll, proceed as usual
          const scrollIncrement = cardWidth * 2.4; // Assuming the scroll increment is always cardWidth * 2.4
          scrollPosition += scrollIncrement; // Update scroll position
          $(carouselInner1).animate({ scrollLeft: scrollPosition }, 600); // Scroll left
        } else {
          // If reached the end, smoothly scroll back to the beginning
          $(carouselInner1).animate({ scrollLeft: 0 }, 600, function () {
            scrollPosition = 0; // Reset scroll position to 0
          });
        }
      }, autoScrollInterval);
    }

    const multipleCardCarousel = document.querySelector(
      "#carouselExampleControls"
    );
    if (window.matchMedia("(min-width: 768px)").matches) {
      /* global bootstrap */
      const carousel = new bootstrap.Carousel(multipleCardCarousel, {
        interval: false,
      });
      startAutoScroll(); // Start auto-scrolling on laptops
    } else {
      $(multipleCardCarousel).addClass("slide");
      startAutoScroll(); // Start auto-scrolling on mobile devices
    }

    return () => {
      clearInterval(autoScrollTimer); // Clean up auto-scroll timer
    };
  }, []);

  useEffect(() => {
    const carouselInner2 = $(".carousel-inner")[2];
    const carouselWidth2 = $(carouselInner2).width(); // Width of the carousel container
    const cardWidth = 135;
    let scrollPosition = 0;

    const autoScrollInterval = 3000; // Auto scroll interval in milliseconds
    let autoScrollTimer; // Timer for auto-scrolling

    function startAutoScroll() {
      autoScrollTimer = setInterval(() => {
        if (scrollPosition < carouselInner2.scrollWidth - carouselWidth2) {
          // If there's still space to scroll, proceed as usual
          const scrollIncrement = cardWidth * 2.4; // Assuming the scroll increment is always cardWidth * 2.4
          scrollPosition += scrollIncrement; // Update scroll position
          $(carouselInner2).animate({ scrollLeft: scrollPosition }, 600); // Scroll left
        } else {
          // If reached the end, smoothly scroll back to the beginning
          $(carouselInner2).animate({ scrollLeft: 0 }, 600, function () {
            scrollPosition = 0; // Reset scroll position to 0
          });
        }
      }, autoScrollInterval);
    }

    const multipleCardCarousel = document.querySelector(
      "#carouselExampleControls"
    );

    // Check if the carousel element exists
    if (multipleCardCarousel) {
      // Start auto-scrolling only if the carousel element is found
      if ($(multipleCardCarousel).hasClass("carousel")) {
        // If the element has the 'carousel' class, it means Bootstrap carousel is initialized
        startAutoScroll();
      }
    }

    return () => {
      clearInterval(autoScrollTimer); // Clean up auto-scroll timer
    };
  }, []);

  return (
    <>
      <Navbar />

      <div className=" modulehome">
        <div className="module-inside row g-0 px-5 moduleinsidehome justify-content-center justify-content-lg-between h-100">
          <div className="col-md-8">
            <div>
              <h1 className="hometext">
                Live Like Your <br /> Own Home
              </h1>
              <p
                style={{ fontSize: "20px", fontWeight: "600" }}
                className="mt-4 d-flex align-items-center text-white"
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing <br /> elit.
                Porro nihil et, veniam labore alias quia maiores nostrum magni
                quidem,
              </p>
            </div>

            <div>
              <Link
                to="/contact"
                class="btn LearnMore fs-6 mt-2 btn-outline-success"
                type="submit"
              >
                Learn More
              </Link>
            </div>
          </div>

          <a href="/" className="col-md-4 mt-5 d-lg-block d-none  topplay ">
            <div className="   play-button ">
              <i class="bi bi-play-fill "></i>
            </div>
          </a>
        </div>
      </div>

      <div className="container mb-5 secondsection">
        <div className="row g-0 justify-content-between flex-wrap">
          <div className="main-section col-lg-5 col-md-12 mb-3 mb-lg-0">
            <img
              className="img-fluid imginside"
              src="https://wp2022.kodesolution.com/odhomz/wp-content/uploads/2021/05/09-600x800.jpg"
              alt=""
            />
            <a href="/" className="">
              <div className="play-buttoncard">
                <i class="bi bi-play-fill"></i>
              </div>
            </a>
          </div>
          <div className="col-lg-7 toppermainer col-md-12 ms-1 px-md-5">
            <a className="subtitle">Welcome To Best Senior Care Center</a>
            <h1 className="innerTitle">We Make A Difference In Senior Lives</h1>

            <div className="d-flex flex-column flex-lg-row">
              <div className="col-lg-7 col-12">
                <p className="texttitle">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered ligula lacus eget in
                  some form, by injected humour or randomised
                </p>

                <ul className="mainul">
                  <li>
                    <i class="bi bi-check-square"></i> Nsectetur cing elit
                  </li>
                  <li>
                    <i class="bi bi-check-square"></i> Nsectetur cing elit
                  </li>
                  <li>
                    <i class="bi bi-check-square"></i> Nsectetur cing elit
                  </li>
                  <li>
                    <i class="bi bi-check-square"></i> Nsectetur cing elit
                  </li>
                  <li>
                    <i class="bi bi-check-square"></i> Nsectetur cing elit
                  </li>
                  <li>
                    <i class="bi bi-check-square"></i> Nsectetur cing elit
                  </li>
                </ul>
              </div>

              <div className="col-lg-5 col-12 cardphonetopper">
                <div className="cardphone">
                  <div className="topphoen">
                    <div className="d-flex justify-content-center align-items-center">
                      <i class="bi bi-telephone iconphoe"></i>
                    </div>

                    <h4 className="phoenh4">
                      Clarify your queries call us now
                    </h4>

                    <div className="d-flex justify-content-center align-items-center">
                      <Link
                        to="/contact"
                        className="btn appointment number fs-6 mt-2 btn-outline-success"
                        type="submit"
                      >
                        000 666 9999
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cardsSection w-100 justify-content-center flex-wrap position-absolute d-flex justify-content-lg-around ">
        <div className="maincard">
          <div className="cardsss  w-25">
            <div className="help ">
              <div className="help1"></div>
            </div>

            <div className="p-4 mt-1">
              <div className="d-flex  align-items-center">
                <img
                  className="img-fluid imgagent pinkagent "
                  src="agent.png"
                  alt=""
                />
                <img
                  className="img-fluid imgagent  whiteagent"
                  src="agentwhite.png"
                  alt=""
                />

                <h3 className="resident" style={{ fontWeight: "bold" }}>
                  Resident Care
                </h3>
              </div>
              <div className="card-text card-texts">
                Resident Care Phaseus site amet tristique ligua donec iaculis
                leo sus cipit
              </div>
            </div>
          </div>
        </div>

        <div className="maincard">
          <div className="cardsss  w-25">
            <div className="help ">
              <div className="help1"></div>
            </div>

            <div className="p-4 mt-1">
              <div className="d-flex  align-items-center">
                <img
                  className="img-fluid imgagent pinkagent "
                  src="agent.png"
                  alt=""
                />
                <img
                  className="img-fluid imgagent  whiteagent"
                  src="agentwhite.png"
                  alt=""
                />

                <h3 className="resident" style={{ fontWeight: "bold" }}>
                  Resident Care
                </h3>
              </div>
              <div className="card-text card-texts">
                Resident Care Phaseus site amet tristique ligua donec iaculis
                leo sus cipit
              </div>
            </div>
          </div>
        </div>

        <div className="maincard">
          <div className="cardsss  w-25">
            <div className="help ">
              <div className="help1"></div>
            </div>

            <div className="p-4 mt-1">
              <div className="d-flex  align-items-center">
                <img
                  className="img-fluid imgagent pinkagent "
                  src="agent.png"
                  alt=""
                />
                <img
                  className="img-fluid imgagent  whiteagent"
                  src="agentwhite.png"
                  alt=""
                />

                <h3 className="resident" style={{ fontWeight: "bold" }}>
                  Resident Care
                </h3>
              </div>
              <div className="card-text card-texts">
                Resident Care Phaseus site amet tristique ligua donec iaculis
                leo sus cipit
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ourservices">
        <p className="text-center services-list text-decoration-underline">
          Our Service List
        </p>

        <h1 className="text-center fw-bold types">Types Of Care</h1>

        <div
          id="carouselExampleControls"
          class="carousel container4  container"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="card innercard">
                <img
                  src="08.jpg"
                  class="d-block w-100"
                  alt="..."
                />

                <div className="d-flex justify-content-center ">
                  <Link
                    to="/contact"
                    class="btn LearnMore  fs-6 mt-2 btnreadmorepl btn-outline-success"
                    type="submit"
                  >
                    Read More
                  </Link>
                </div>
                <div class="card-body togivepaddig">
                  <div className="d-flex align-items-center justify-content-between">
                    <h1 className="senior">Senior Citizen</h1>

                    <div className="detailscardnumber">01</div>
                  </div>
                  <p className="card-text">
                    We are Commited to provide Quality Care
                  </p>
                  <div className="cardhovereffect"></div>
                </div>
              </div>{" "}
            </div>

            <div class="carousel-item ">
              <div class="card innercard">
                <img
                  src="08.jpg"
                  class="d-block w-100"
                  alt="..."
                />

<div className="d-flex justify-content-center ">
                  <Link
                    to="/contact"
                    class="btn LearnMore  fs-6 mt-2 btnreadmorepl btn-outline-success"
                    type="submit"
                  >
                    Read More
                  </Link>
                </div>
                <div class="card-body togivepaddig">
                  <div className="d-flex align-items-center justify-content-between">
                    <h1 className="senior">Senior Citizen</h1>

                    <div className="detailscardnumber">02</div>
                  </div>
                  <p className="card-text">
                    We are Commited to provide Quality Care
                  </p>

                  <div className="cardhovereffect"></div>
                </div>
              </div>{" "}
            </div>

            <div class="carousel-item ">
              <div class="card innercard ">
                <img
                  src="08.jpg"
                  class="d-block w-100"
                  alt="..."
                />
                 <div className="d-flex justify-content-center ">
                  <Link
                    to="/contact"
                    class="btn LearnMore  fs-6 mt-2 btnreadmorepl btn-outline-success"
                    type="submit"
                  >
                    Read More
                  </Link>
                </div>
                <div class="card-body togivepaddig">
                  <div className="d-flex align-items-center justify-content-between">
                    <h1 className="senior">Senior Citizen</h1>

                    <div className="detailscardnumber">03</div>
                  </div>
                  <p className="card-text">
                    We are Commited to provide Quality Care
                  </p>
                  <div className="cardhovereffect"></div>
                </div>
              </div>{" "}
            </div>

            <div class="carousel-item ">
              <div class="card innercard">
                <img
                  src="08.jpg"
                  class="d-block w-100"
                  alt="..."
                />

<div className="d-flex justify-content-center ">
                  <Link
                    to="/contact"
                    class="btn LearnMore  fs-6 mt-2 btnreadmorepl btn-outline-success"
                    type="submit"
                  >
                    Read More
                  </Link>
                </div>
                <div class="card-body togivepaddig">
                  <div className="d-flex align-items-center justify-content-between">
                    <h1 className="senior">Senior Citizen</h1>

                    <div className="detailscardnumber">04</div>
                  </div>
                  <p className="card-text">
                    We are Commited to provide Quality Care
                  </p>
                  <div className="cardhovereffect"></div>
                </div>
              </div>{" "}
            </div>

            <div class="carousel-item ">
              <div class="card innercard">
                <img
                  src="08.jpg"
                  class="d-block w-100"
                  alt="..."
                />

<div className="d-flex justify-content-center ">
                  <Link
                    to="/contact"
                    class="btn LearnMore  fs-6 mt-2 btnreadmorepl btn-outline-success"
                    type="submit"
                  >
                    Read More
                  </Link>
                </div>
                <div class="card-body togivepaddig">
                  <div className="d-flex align-items-center justify-content-between">
                    <h1 className="senior">Senior Citizen</h1>

                    <div className="detailscardnumber">05</div>
                  </div>
                  <p className="card-text">
                    We are Commited to provide Quality Care
                  </p>
                  <div className="cardhovereffect"></div>
                </div>
              </div>{" "}
            </div>

            <div class="carousel-item ">
              <div class="card innercard">
                <img
                  src="08.jpg"
                  class="d-block w-100"
                  alt="..."
                />
                 <div className="d-flex justify-content-center ">
                  <Link
                    to="/contact"
                    class="btn LearnMore  fs-6 mt-2 btnreadmorepl btn-outline-success"
                    type="submit"
                  >
                    Read More
                  </Link>
                </div>
                <div class="card-body togivepaddig">
                  <div className="d-flex align-items-center justify-content-between">
                    <h1 className="senior">Senior Citizen</h1>

                    <div className="detailscardnumber">06</div>
                  </div>
                  <p className="card-text">
                    We are Commited to provide Quality Care
                  </p>
                  <div className="cardhovereffect"></div>
                </div>
              </div>{" "}
            </div>
          </div>
          <button
            class="carousel-control-prev shadow"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            {/* <span class="carousel-control-prev-icon" aria-hidden="true"></span> */}
            <i class="bi arrowss bi-arrow-left"></i>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next shadow"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            {/* <span class="carousel-control-next-icon" aria-hidden="true"></span> */}
            <i class="bi arrowss bi-arrow-right"></i>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="inspiration">
        <div className="row g-0">
          <div className="col-md-6">
            <img src="feature.jpg" className="img-fluid featurebg" alt="" />
          </div>

          <div className="col-md-6 setbg">
            <div className="d-flex flex-column flex-lg-row justify-content-between">
              <div className="imagetext ">
                <img className="img-fluid cofee" src="coffee.jpg" alt="" />
              </div>

              <div className="mt-5 p-5">
                <button className="btn-black">Sat Dec 21</button>

                <h3 className="instext mt-2"> Inspiration For The World</h3>

                <p className="instext1 mt-3">
                  We are calling all Super heroes to run, walk, push, pedal,
                  hand cycle, swim or tow in this fantastic, all-inclusive
                  family event!
                </p>
              </div>
            </div>

            <div className="d-flex flex-column flex-lg-row justify-content-between">
              <div className="imagetext ">
                <img className="img-fluid cofee" src="coffee.jpg" alt="" />
              </div>

              <div className="mt-5 p-5">
                <button className="btn-black">Sat Dec 21</button>

                <h3 className="instext mt-2"> Inspiration For The World</h3>

                <p className="instext1 mt-3">
                  We are calling all Super heroes to run, walk, push, pedal,
                  hand cycle, swim or tow in this fantastic, all-inclusive
                  family event!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Testimonials">
        <p className="text-center services-list testlist text-decoration-underline">
          Our Testimonials
        </p>

        <h1 className="text-center fw-bold types">What They Say</h1>
        <div className="cardsSection w-100 mt-5 mb-5 justify-content-center flex-wrap  d-flex justify-content-lg-around ">
          <div className="maincard   testimonialscards">
            <div className="cardsss testimonialscards  ">
              <div className="help ">
                <div className="help1"></div>
              </div>

              <div className="p-4 mt-1">
                <div className="card-text card-texts text-center">
                  I was impresed by the moling services, not lorem ipsum is
                  simply free text of
                </div>
              </div>

              <hr className="w-50 mx-auto" />

              <h5 className="testname my-5">Mark John</h5>

              <div className="stars mb-5">
                <i class="bi bi-star"></i>
                <i class="bi bi-star"></i>
                <i class="bi bi-star"></i>
                <i class="bi bi-star"></i>
                <i class="bi bi-star"></i>
              </div>

              <div className="d-flex justify-content-center">
                <img
                  className="img-fluid profileimagetest"
                  src="test.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="maincard  testimonialscards">
            <div className="cardsss testimonialscards  ">
              <div className="help ">
                <div className="help1"></div>
              </div>

              <div className="p-4 mt-1">
                <div className="card-text card-texts text-center">
                  I was impresed by the moling services, not lorem ipsum is
                  simply free text of
                </div>
              </div>

              <hr className="w-50 mx-auto" />

              <h5 className="testname my-5">Mark John</h5>

              <div className="stars mb-5">
                <i class="bi bi-star"></i>
                <i class="bi bi-star"></i>
                <i class="bi bi-star"></i>
                <i class="bi bi-star"></i>
                <i class="bi bi-star"></i>
              </div>

              <div className="d-flex justify-content-center">
                <img
                  className="img-fluid profileimagetest"
                  src="test.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="maincard  testimonialscards">
            <div className="cardsss testimonialscards  ">
              <div className="help ">
                <div className="help1"></div>
              </div>

              <div className="p-4 mt-1">
                <div className="card-text card-texts text-center">
                  I was impresed by the moling services, not lorem ipsum is
                  simply free text of
                </div>
              </div>

              <hr className="w-50 mx-auto" />

              <h5 className="testname my-5">Mark John</h5>

              <div className="stars mb-5">
                <i class="bi bi-star"></i>
                <i class="bi bi-star"></i>
                <i class="bi bi-star"></i>
                <i class="bi bi-star"></i>
                <i class="bi bi-star"></i>
              </div>

              <div className="d-flex justify-content-center">
                <img
                  className="img-fluid profileimagetest"
                  src="test.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="maincard  testimonialscards">
            <div className="cardsss testimonialscards  ">
              <div className="help ">
                <div className="help1"></div>
              </div>

              <div className="p-4 mt-1">
                <div className="card-text card-texts text-center">
                  I was impresed by the moling services, not lorem ipsum is
                  simply free text of
                </div>
              </div>

              <hr className="w-50 mx-auto" />

              <h5 className="testname my-5">Mark John</h5>

              <div className="stars mb-5">
                <i class="bi bi-star"></i>
                <i class="bi bi-star"></i>
                <i class="bi bi-star"></i>
                <i class="bi bi-star"></i>
                <i class="bi bi-star"></i>
              </div>

              <div className="d-flex justify-content-center">
                <img
                  className="img-fluid profileimagetest"
                  src="test.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="secondCarosel">
        <div
          id="carouselExampleRide"
          class="carousel m-0 slide"
          data-bs-ride="true"
        >
          <div class="carousel-inner carousel-inner1">
            <div class="carousel-item inner-img carousel-item1 active">
              <img
                src="https://wp2022.kodesolution.com/odhomz/wp-content/uploads/2022/05/video-bg1.jpg"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item carousel-item1">
              <img
                src="https://wp2022.kodesolution.com/odhomz/wp-content/uploads/2022/05/video-bg1.jpg"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item carousel-item1">
              <img
                src="https://wp2022.kodesolution.com/odhomz/wp-content/uploads/2022/05/video-bg1.jpg"
                class="d-block w-100"
                alt="..."
              />
            </div>

            <div class="carousel-item carousel-item1 ">
              <img
                src="https://wp2022.kodesolution.com/odhomz/wp-content/uploads/2022/05/video-bg1.jpg"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item carousel-item1">
              <img
                src="https://wp2022.kodesolution.com/odhomz/wp-content/uploads/2022/05/video-bg1.jpg"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item carousel-item1">
              <img
                src="https://wp2022.kodesolution.com/odhomz/wp-content/uploads/2022/05/video-bg1.jpg"
                class="d-block w-100"
                alt="..."
              />
            </div>
          </div>
        </div>
      </div>

      <div className="Third">
        <div id="" class=" " data-bs-ride="true">
          <div class="carousel-inner carousel-inner2">
            <div class="carousel-item carousel-item2 inner-img active">
              <img
                src="https://wp2022.kodesolution.com/odhomz/wp-content/uploads/2021/06/1.png"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item carousel-item2 inner-img  ">
              <img
                src="https://wp2022.kodesolution.com/odhomz/wp-content/uploads/2021/06/2.png"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item carousel-item2 inner-img  ">
              <img
                src="https://wp2022.kodesolution.com/odhomz/wp-content/uploads/2021/06/3.png"
                class="d-block w-100"
                alt="..."
              />
            </div>

            <div class="carousel-item carousel-item2 inner-img  ">
              <img
                src="https://wp2022.kodesolution.com/odhomz/wp-content/uploads/2021/06/2.png"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item carousel-item2 inner-img  ">
              <img
                src="https://wp2022.kodesolution.com/odhomz/wp-content/uploads/2021/06/3.png"
                class="d-block w-100"
                alt="..."
              />
            </div>

            <div class="carousel-item carousel-item2 inner-img  ">
              <img
                src="https://wp2022.kodesolution.com/odhomz/wp-content/uploads/2021/06/2.png"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item carousel-item2 inner-img  ">
              <img
                src="https://wp2022.kodesolution.com/odhomz/wp-content/uploads/2021/06/3.png"
                class="d-block w-100"
                alt="..."
              />
            </div>
          </div>
        </div>
      </div>

      <div className="facts  ">
        <div className="row g-0">
          <div className="col-md-6 p-4 ">
            <p className="text services-list testlist text-decoration-underline">
              Our Fun Facts Numbers
            </p>

            <h1 className="text fw-bold types">
              The Best Eldery Care Center For You
            </h1>

            <div className="card-text factstext mt-5">
              There are many variations of passages of Lorem Ipsum available but
              the majority have suffered alteration in some form injected humour
              randomised but the majority have suffered variations of passages
              of but majority have suffered alteration in some form by injected
              humour or randomised words
            </div>

            <div className="cardsSection w-100 mt-5 mb-5 justify-content-center flex-wrap  d-flex justify-content-lg-around ">
              <div className="maincard   testimonialscards">
                <div className="cardsss testimonialscards   ">
                  <div className="help ">
                    <div className="help1"></div>
                  </div>

                  <div className=" text-center numbercard mt-1">
                    <h1 className="textnumber">450</h1>

                    <h6 className="senior">Senior couples</h6>
                  </div>
                </div>
              </div>

              <div className="maincard   testimonialscards">
                <div className="cardsss testimonialscards   ">
                  <div className="help ">
                    <div className="help1"></div>
                  </div>

                  <div className=" text-center numbercard mt-1">
                    <h1 className="textnumber">450</h1>

                    <h6 className="senior">Senior couples</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <img
              className="img-fluid imagefact"
              src="https://wp2022.kodesolution.com/odhomz/wp-content/uploads/2022/04/06.jpg"
              alt=""
            />

            <div className="card cardonimage  cardwidth cardwidth5 mb-4 border-0">
              <div className="card-body  mt-4 rounded-0 border-0">
                <h4
                  style={{ lineHeight: "2rem", marginBottom: "10px" }}
                  className="card-title fw-bolder"
                >
                  We are committed to trusted senior care
                </h4>

                <a className="readmore">
                  <span className="">Visit Home</span>
                  <i className="bi ms-2 bi-arrow-right-circle-fill iconsread"></i>{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="nursing ">
        <div class="row">
          <div class="col-md-3 text-center mb-3 mb-md-0">
            <div class="icon">
              <img class="img-fluid nurseicons" src="nurse.png" alt="" />
            </div>
          </div>

          <div class="col-md-6 d-flex flex-column justify-content-center mb-3 mb-md-0">
            <div>
              <h1 class="mb-0 h1last ">Looking for a Career</h1>
              <h1 class="mb-0 h1last "> in Nursing?</h1>
            </div>
          </div>

          <div class="col-md-3 text-md-end text-center">
            <a
              href="/contact"
              class="btn appointment resumebutton btn-outline-success fs-6"
            >
              Post Your Resume
            </a>
          </div>
        </div>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14159985.113265185!2d58.347677784375975!3d29.949884283699703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38db52d2f8fd751f%3A0x46b7a1f7e614925c!2sPakistan!5e0!3m2!1sen!2s!4v1714066767990!5m2!1sen!2s"
        width="100%"
        height="700"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="fromtheblog container container4">
        <div className="d-flex justify-content-between">
          <div className="div">
            <p className="text services-list testlist text-decoration-underline">
              From The Blog
            </p>

            <h1 className="text fw-bold types">News & Articles</h1>
          </div>

          <div className="d-flex justify-content-center align-items-center">
            <Link
              to="/contact"
              className="btn appointment posts  fs-6 mt-2 border-0 btn-outline-success"
              type="submit"
            >
              View All Posts
            </Link>
          </div>
        </div>

        <div className="container mt-5">
          <div className="d-flex justify-content-center justify-content-lg-between  align-items-center flex-wrap">
            <ServicesCard />
            <ServicesCard />
            <ServicesCard />
          </div>
        </div>
      </div>

      <BacktoTop />
      <Footer />
    </>
  );
};

export default Home;
