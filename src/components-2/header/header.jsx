import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './header.css';
const Header = () => {
    return (
        <div>
            <header className='header-background-img mb-5' >
                    <div className=' container-fluid  px-5'>
                        <div className="row">
                        <div className="col-7">
                        <Navbar.Brand href="#home" className='fs-1 fw-bold text-white'>Cospace</Navbar.Brand>
                        </div>
                        <div className="col-5">
                        <Nav className=''>
                            <Nav.Link href="#home"><span className='text-white'>Home</span></Nav.Link>
                            <Nav.Link href="#features"><span className='text-white'>Features</span></Nav.Link>
                            <Nav.Link href="#services"><span className='text-white'>Services</span></Nav.Link>
                            <Nav.Link href="#About Us"><span className='text-white'>About Us</span></Nav.Link>
                            <Nav.Link href="#Location"><span className='text-white'>Location</span></Nav.Link>
                        </Nav>
                        </div>
                        </div>
                    </div>
                <div className='pt-5 pb-5 ps-5'>
                    <h1 className='text-white text fs-1 fw-bold m-0 p-0'>Comfortable Coworking space</h1>
                <p className='text-white m-0 p-0'>
                    our coworking spaces let you chose to work with others in an open plan area or a shared office
                </p>
                </div>

                <div className="button d-flex align-items-center gap-4 ps-5">
                    <button type="button" class="btn btn-success">Book Now</button>
                    <h5 className='text-white'>About Us</h5>
                </div>
            </header>

        </div>
    )
}

export { Header }
