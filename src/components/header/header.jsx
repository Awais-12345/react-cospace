import React, { useEffect, useState } from 'react'
import { ObjHeaderP } from './map-header'
import './header.css'
import { Link } from 'react-router-dom'
import { IoCloseSharp } from "react-icons/io5";
import { FaHamburger } from "react-icons/fa";
function Header() {
  const [isOpen, SetIsOpen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 650) {
        SetIsOpen(false); 
      }
    };
  
    window.addEventListener('resize', handleResize);
  
    handleResize();
  
    return () => window.removeEventListener('resize', handleResize);
  }, []); 
  
  function toggleNavbar() {
    SetIsOpen(!isOpen)
  }
  return (
    <div>
      <div className="back">
        <div className="container1">
          <div className="parent1">
            <div className="child1">
              <h3>cospace</h3>
            </div>
            <ul className={ `nav_ul ${isOpen && "nav_ul2"}`}>
              <li><Link className='change' onClick={toggleNavbar} to={'/home'}>Home</Link></li>
              <li><Link className='change' onClick={toggleNavbar} to={'/features'}>Features</Link></li>
              <li><Link className='change' onClick={toggleNavbar} to={'/services'}>Services</Link></li>
              <li><Link className='change' onClick={toggleNavbar} to={'/about'}>About</Link></li>
              <li><Link className='change' onClick={toggleNavbar} to={'/location'}>Location</Link></li>
              <li>

              <Link className='change' onClick={toggleNavbar} to={'/button'}>Book now</Link>
              </li>
            </ul>
            <div className='hamburger'>
              {!isOpen ? 
              <FaHamburger  onClick={toggleNavbar} />:
              <IoCloseSharp className='right' onClick={toggleNavbar} />
            }
            </div>
          </div>

          <div className="content">
            <h1>Comfortable Coworking dssd space</h1>
            {ObjHeaderP.map((text) =>
              <p>{text.paragraph}</p>
            )}
            <div className="btn">
              <button>Book now</button>
              <h2>About us</h2>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export { Header }
