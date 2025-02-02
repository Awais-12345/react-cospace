import React from "react";
// import { Header } from "./components/header/header";
// import { MainComponent } from "./components/main-component";
// import { Home } from "./navbar-component/home";
// import {Features} from "./navbar-component/features";
// import { Services } from "./navbar-component/services";
// import { About } from "./navbar-component/about";
// import { Location } from "./navbar-component/location";
// import { Button } from "./navbar-component/button";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Footer } from "./components/footer/footer";
import { Header } from "./components-2/header/header";
import { Contentone } from "./components-2/content-one/contentone";
import { ContentTwo } from "./components-2/content-two/contenttwo";
import { Contentthree } from "./components-2/content-three/contentthree";
import { Contentfour } from "./components-2/content-four/contentfour";
import { Contentfive } from "./components-2/content-five/contentfive";
import { Contentsix } from "./components-2/content-six/contentssix";
import { Footer } from "./components-2/footer/footer";
// import "./index.css";
// import { Modal } from './component/modal';
import { Button } from "./component/button";

function App() {
  return (
    <div>
      <Header />
      <Contentone />
      <ContentTwo />
      <Contentthree />
      <Contentfour />
      <Contentfive />
      <Contentsix />
      <Footer />
      {/* <BrowserRouter>
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
      </BrowserRouter> */}
      {/* <MainComponent/> */}
      {/* <Modal /> */}
      {/* <Button /> */}
    </div>
  );
}

export default App;
