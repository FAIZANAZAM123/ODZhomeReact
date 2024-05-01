import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Services from './components/Services';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UploadImages from './components/UploadImages';
import Contact from './components/Contact';
import Home from './components/Home';


const App = () => {
  return (
    <div>



      <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="upload" element={<UploadImages />} />
          <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>




    </div>
  )
}

export default App