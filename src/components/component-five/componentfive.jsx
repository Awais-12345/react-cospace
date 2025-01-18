import React from 'react'
import pit1 from '../../images/1imk.png';
import pit2 from '../../images/2img.png';
import pit3 from '../../images/3imd.png';
import './componentfive.css';
function ComponentFive() {
  return (
    <div>
       <div className="container1">
      <div className="bag1">
        <div className="res">
        <h2>Our Latest Blog</h2>
          <div className="main">
          <div className="internal1">
          <img className="at1" src={pit1} alt=""/>
          <p>Why your business absolutely<br/> needs a virtual office</p>
          </div>
          <div className="internal2">
          <img className="at2" src={pit2} alt=""/> 
          <p>How to Run Your Freelance<br/> Design Business on the Cheap</p> 
          </div>
          <div className="internal3">
          <img className="at3" src={pit3} alt=""/>
          <p>Getting Clients to Care About<br/> Their Website Long Term</p>
        </div>
          </div>
        </div>
      </div>

      </div>
    </div>
  )
}

export  {ComponentFive}
