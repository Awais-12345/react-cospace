import React from 'react'
import vibe1 from '../../images/mask.png';
import vibe2 from  '../../images/g1.png';
import vibe3 from  '../../images/slide.jpg';
import vibe4 from  '../../images/g2.png';
import  './componentfour.css'
function ComponentFour() {
  return (
    <div>
       <div className="container1">
      <div className="abc">
        <h2>Space Overview</h2>
        <p>
          Generate Lorem ipsum dolor sit amet, consectetur adipiscing<br/> elit, sed do
          eiusmod tempor incididunt ut labore et dolore
        </p>
      </div>
        <div className="carousel-container">
        <div className="card-slider">
        <img className="card" src={vibe1} alt=""/>
        <img className="card" src={vibe2} alt=""/>
        <img className="card" src={vibe1} alt=""/>
        <img className="card" src={vibe2} alt=""/>
        <img className="card" src={vibe1} alt=""/>
        <img className="card" src={vibe2} alt=""/>
        <img className="card" src={vibe1} alt=""/>
        <img className="card" src={vibe2} alt=""/>
        <img className="card" src={vibe3} alt=""/>
        <img className="card" src={vibe3} alt=""/>
        <img className="card" src={vibe3} alt=""/>
        <img className="card" src={vibe4} alt=""/>
        <img className="card" src={vibe4} alt=""/>
        <img className="card" src={vibe4} alt=""/>
        <img className="card" src={vibe4} alt=""/>
        <img className="card" src={vibe1} alt=""/>
        </div>
        <button className="prev" onclick="prevSlide()">&#10094;</button>
        <button className="next" onclick="nextSlide()">&#10095;</button>
        </div>
      </div>
    </div>
  )
}

export  {ComponentFour}
