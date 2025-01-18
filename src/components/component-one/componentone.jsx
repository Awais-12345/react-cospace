import React from 'react'
import img1 from '../../images/boy1.png';
import img2 from '../../images/boy2.png';
import img3 from '../../images/clock.png';
import img4 from '../../images/game.png';
import img5 from '../../images/snack.png';
import img6 from '../../images/pexels.png';
import './componentone.css';
function ComponentOne() {
  return (
    <div>
      <div className="container1">
      <div className="image-content">
        <div className="para1">
          <img
            className="smallpic1"
            src={img6}
            alt="this is image"
          
          />
          <div className="name1">
          <img
            className="smallpic2"
            src={img1}
            alt=" first boy image"
          />
          </div>
          <div className="name2">
          <img
            className="smallpic3"
            src={img2}
            alt="second boy image"

          />
          </div>
        </div>
        <div className="para2">
          <h2>Best creative working environments that suits your business.</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur dipiscing elit eius mod tempor
            incididunt ut labore
          </p>
          <div className="pk">
            <div className="q1">
            <img className="pk1" src={img3} />
            <div className="wrap">
            <h3>Open 24 hours</h3>
            <p className="x1">Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod</p>
            </div>
            </div>
            <div className="q2">
            <img className="pk2" src={img5}/>
            <div className="wrap">
            <h3>Free Snack & Drink</h3>
            <p className="x2">Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod</p>
            </div>
            </div>
            <div className="q3">
            <img className="pk3" src={img4}/>
            <div className="wrap">
            <h3>Enjoy Game Zone</h3>
            <p className="x3">Lorem ipsum dolor sit amet, consectetur dipiscing elit eiusmod</p>
            </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export  {ComponentOne}
