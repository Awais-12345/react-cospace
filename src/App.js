import React from "react";
import { Header } from "./components/header/header";
// import { MainComponent } from "./components/main-component";
import { Home } from "./navbar-component/home";
import {Features} from "./navbar-component/features";
import { Services } from "./navbar-component/services";
import { About } from "./navbar-component/about";
import { Location } from "./navbar-component/location";
import { Button } from "./navbar-component/button";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/footer/footer";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
        <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/location" element={<Location />} />
        <Route path="/button" element={<Button/>}/>
        </Routes> 
        <Footer/>
      </BrowserRouter>
      {/* <MainComponent/> */}
    </div>
  );
}

export default App;
