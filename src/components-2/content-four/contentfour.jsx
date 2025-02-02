// import React from 'react'
// import vibe1 from '../../images/mask.png';
// import vibe2 from  '../../images/g1.png';
// import vibe3 from  '../../images/slide.jpg';
// import vibe4 from  '../../images/g2.png';
// import  './componentfour.css'
// const Contentfour = () => {
//   return (
//     <div>
//       <div className="container mb-5">
//         <div className="row">
//           <div className="col text-center">
//             <h2>Space Overview</h2>
//             <p> Generate Lorem ipsum dolor sit amet, consectetur adipiscing<br /> elit, sed do
//               eiusmod tempor incididunt ut labore et dolore</p>
//           </div>
//         </div>
//       </div>
//       <div className="carousel-container">
//         <div className="card-slider">
//         <img className="card" src={vibe1} alt=""/>
//         <img className="card" src={vibe2} alt=""/>
//         <img className="card" src={vibe1} alt=""/>
//         <img className="card" src={vibe2} alt=""/>
//         <img className="card" src={vibe1} alt=""/>
//         <img className="card" src={vibe2} alt=""/>
//         <img className="card" src={vibe1} alt=""/>
//         <img className="card" src={vibe2} alt=""/>
//         <img className="card" src={vibe3} alt=""/>
//         <img className="card" src={vibe3} alt=""/>
//         <img className="card" src={vibe3} alt=""/>
//         <img className="card" src={vibe4} alt=""/>
//         <img className="card" src={vibe4} alt=""/>
//         <img className="card" src={vibe4} alt=""/>
//         <img className="card" src={vibe4} alt=""/>
//         <img className="card" src={vibe1} alt=""/>
//         </div>
//         <button className="prev" onclick="prevSlide()">&#10094;</button>
//         <button className="next" onclick="nextSlide()">&#10095;</button>
//         </div>
//       </div>
//   )
// }

// export { Contentfour }
import React, { useState } from 'react';
import vibe1 from '../../images/mask.png';
import vibe2 from '../../images/g1.png';
import vibe3 from '../../images/slide.jpg';
import vibe4 from '../../images/g2.png';
import './componentfour.css';

const Contentfour = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    vibe1, vibe2, vibe1, vibe2, vibe1, vibe2, vibe1, vibe2,
    vibe3, vibe3, vibe3, vibe4, vibe4, vibe4, vibe4, vibe1
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div>
      <div className="container mb-5">
        <div className="row">
          <div className="col text-center">
            <h2 className='text-black fw-bold fs-2'>Space Overview</h2>
            <p>
              Generate Lorem ipsum dolor sit amet, consectetur adipiscing
              <br /> elit, sed do eiusmod tempor incididunt ut labore et dolore
            </p>
          </div>
        </div>
      </div>
      <div className="carousel-container mb-5">
        <div className="card-slider" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((image, index) => (
            <img key={index} className="card" src={image} alt={`Slide ${index}`} />
          ))}
        </div>
        <button className="prev" onClick={prevSlide}>&#10094;</button>
        <button className="next" onClick={nextSlide}>&#10095;</button>
      </div>
    </div>
  );
};

export { Contentfour };
