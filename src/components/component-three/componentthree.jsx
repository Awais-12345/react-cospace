import React from 'react'
import Pic1 from '../../images/icon1.png';
import Pic2 from '../../images/icon2.png';
import Pic3 from '../../images/icon3.png';
import Pic4 from '../../images/rate.png';

import './componentthree.css'
function ComponentThree() {
  return (
    <div>
       <div className="container1">
        <div className="align">
          <div className="box1">
            <div className="adjust1">They Satisfied With Our Coworking Space</div>
              <div className="adjust2">
              <h2>Testimonials</h2>
              Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod dolor
              sit amet
            </div>
          </div>
            <div className="horizontal1">
              <div className="card1">
                <div className="a1">
                  <img className="size1" src={Pic1} alt="this is an image" />
                  <div className="direction1">
                    <h2>Celine Dion</h2>
                    <p>Cafe Owner</p>
                  </div>
                </div>
                <div className="a2">
                  <img  className="atia" src={Pic4} alt="this is an image" style={{width:"184px",height:"25px"}} />
                  <p>Lorem ipsum dolor sit amet,<br/> consectetur dipiscing elit<br/> eiusmod  dipiscing elit eiusmod </p>
                </div>
              </div>
          
              <div className="card2">
                <div className="b1">
                  <img className="size2" src={Pic2} alt="this is an image" />
                  <div className="direction2">
                    <h2>Riana Madiva</h2>
                    <p>Digital Marketer</p>
                  </div>
                </div>
                <div className="b2">
                  <img className="lms" src={Pic4} alt="this is an image" style={{width:"170px",height:"25px"}}/>
                  <p>Lorem ipsum dolor sit amet,<br/> consectetur dipiscing elit<br/> eiusmod  dipiscing elit eiusmod </p>
                </div>
              </div>
          
              <div className="card3">
                <div className="c1">
                  <img className="size3" src={Pic3} alt="this is an image" />
                  <div className="direction3">
                    <h2>John Melon</h2>
                    <p>Freelancer</p>
                  </div>
                </div>
                <div className="c2">
                  <img className="lms2" src={Pic4} alt="this is an image" style={{width:"170px",height:"25px"}}/>
                  <p>Lorem ipsum dolor sit amet,<br/> consectetur dipiscing elit<br/> eiusmod  dipiscing elit eiusmod </p>
                </div>
              </div>
          </div>
        </div>
        </div>
    </div>
  )
}

export  {ComponentThree}
