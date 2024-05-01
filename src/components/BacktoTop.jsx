import React, { useState } from 'react';

function BacktoTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  // Function to toggle button visibility based on scroll position
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Add event listener to window to track scroll position
  window.addEventListener("scroll", toggleVisibility);

  return (
    <button
      className={` fixed-bottom mb-3 border-0  backtotop ${isVisible ? 'visible' : 'invisible'}`}
      onClick={scrollToTop}
    >
  <i className="fas fa-angle-up fs-3"></i>{" "}


   </button>
  );
}

export default BacktoTop;
