import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
function Contact() {
  return (

    <>  
    <Navbar/>
    
    
    
    
    
      <div className="container contact-container">
    <h1 className="text-center mb-4">Contact Us</h1>
    <div className="row justify-content-center">
      <div className="col-md-6">
        <form className="contact-form">
          <div className="form-floating mb-3">
            <input type="text" className="form-control" id="name" placeholder="Enter your name" />
            <label htmlFor="name">Your Name</label>
          </div>
          <div className="form-floating mb-3">
            <input type="email" className="form-control" id="email" placeholder="Enter your email" />
            <label htmlFor="email">Your Email</label>
          </div>
          <div className="form-floating mb-3">
            <textarea className="form-control" id="message" rows="5" placeholder="Enter your message"></textarea>
            <label htmlFor="message">Your Message</label>
          </div>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </div>
  </div>

  <Footer/>

  </>

  );
}

export default Contact;
