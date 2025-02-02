import React from 'react'
import Pic1 from '../../images/icon1.png'
import Pic2 from '../../images/icon2.png'
import Pic3 from '../../images/icon3.png'
import Pic4 from '../../images/rate.png'
const Contentthree = () => {
  return (
    <div>
      <div className="container mb-5">
        <div className="row mb-5">
            <div className="col-md-6 text-center">
                <h1 className='text-black fw-medium'>They Satisfied With<br/> Our Coworking Space</h1>
            </div>
            <div className="col-md-6 text-center justify-content-between align-items-center text-md-start">
            <h2 className='text-success'>Testimonials</h2>
            Lorem ipsum dolor sit amet, consectetur dipiscing <br/> elit eiusmod dolor
              sit amet
            </div>
        </div>
        <div className="row">
            <div className="col-md-4">
                <div className="rounded-4 p-3 d-grid gap-4 mb-5" style={{backgroundColor:"#ecfef7"}}>
                <div className="d-flex gap-3">
                  <img className="size1" src={Pic1} alt="this is an image" />
                  <div className="direction1">
                    <h2>Celine Dion</h2>
                    <p>Cafe Owner</p>
                  </div>
                </div>
                <div className="d-grid gap-3">
                  <img  className="atia" src={Pic4} alt="this is an image" style={{width:"184px",height:"25px"}} />
                  <p>Lorem ipsum dolor sit amet,<br/> consectetur dipiscing elit<br/> eiusmod  dipiscing elit eiusmod </p>
                </div>
              </div>
              </div>
            <div className="col-md-4">
            <div className="d-grid gap-4 p-3">
                <div className="d-flex gap-3">
                  <img className="size2" src={Pic2} alt="this is an image" />
                  <div className="direction2">
                    <h2>Riana Madiva</h2>
                    <p>Digital Marketer</p>
                  </div>
                </div>
                <div className="d-grid gap-3">
                  <img className="lms" src={Pic4} alt="this is an image" style={{width:"170px",height:"25px"}}/>
                  <p>Lorem ipsum dolor sit amet,<br/> consectetur dipiscing elit<br/> eiusmod  dipiscing elit eiusmod </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
            <div className="rounded-3 p-3 d-grid gap-4" style={{backgroundColor:"#ecfef7"}}>
                <div className="d-flex gap-3">
                  <img className="size3" src={Pic3} alt="this is an image" />
                  <div className="direction3">
                    <h2>John Melon</h2>
                    <p>Freelancer</p>
                  </div>
                </div>
                <div className="d-grid gap-3">
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

export  {Contentthree}
