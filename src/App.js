import { React } from "react";
// import { CounterProps } from "./counter-props/counter-props";
// import { Home } from "./navbar-component/home";
// import { Features } from "./navbar-component/features";
// import { Services } from "./navbar-component/services";
// import { About } from "./navbar-component/about";
// import { Location } from "./navbar-component/location";
// import { Button } from "./navbar-component/button";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Header } from "./components-2/header/header";
// import { Contentone } from "./components-2/content-one/contentone";
// import { ContentTwo } from "./components-2/content-two/contenttwo";
// import { Contentthree } from "./components-2/content-three/contentthree";
// import { Contentfour } from "./components-2/content-four/contentfour";
// import { Contentfive } from "./components-2/content-five/contentfive";
// import { Contentsix } from "./components-2/content-six/contentssix";
// import { Footer } from "./components-2/footer/footer";
// import "./index.css";
import { Modal } from "./component-1/modal";
// import { Button } from "./component-1/button";
// import { Usestate } from "./component-3/usestate";
// import { Component } from "./component-4/component";
// import { Usestate } from "./component-4/usestate";
// import { MapData } from "./component-5/map-Data";
// import { DetailPage } from "./component-5/detail-page";
function App() {
  return (
    <div>
      {/* <Header />
      <Contentone />
      <ContentTwo />
      <Contentthree />
      <Contentfour />
      <Contentfive />
      <Contentsix />
      <Footer /> */}
      {/* <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/location" element={<Location />} />
          <Route path="/button" element={<Button />} />
        </Routes>
        <Footer />
      </BrowserRouter> */}
      <Modal />
      {/* <Button /> */}
      {/* <Usestate />  */}
      {/* <Component /> */}
      {/* <CounterProps /> */}
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<MapData />} />
          <Route path="/detail-page/:id" element={<DetailPage />} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
