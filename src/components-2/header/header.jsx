import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './header.css';
// import { BookNowModal } from './book-now-modal';
import { CustomModal } from './custom-modal';
// import { CustomButton } from './custom-button';
const Header = () => {
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    return (
        <div>
            <header className='header-background-img mb-5'   >
                <div className=' container'>
                    <div className="row">
                        <div className="col-lg-6 col-xl-7 col-md-4 col-sm-12 col-xs-12">
                            <Navbar.Brand href="#home" className='fs-1 fw-bold text-white'>Cospace</Navbar.Brand>
                        </div>
                        <div className="col-lg-6 col-xl-5 col-md-8 col-sm-12 col-xs-12">\
                            <Nav className=''>
                                <Nav.Link href="./home"><span className='text-white'>Home</span></Nav.Link>
                                <Nav.Link href="/features"><span className='text-white'>Features</span></Nav.Link>
                                <Nav.Link href="/services"><span className='text-white'>Services</span></Nav.Link>
                                <Nav.Link href="/About Us"><span className='text-white'>About Us</span></Nav.Link>
                                <Nav.Link href="/Location"><span className='text-white'>Location</span></Nav.Link>
                            </Nav>
                        </div>
                    </div>
                
                <div className='row pt-5'>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <h1 className='text-white fs-1 fw-bold'>Comfortable Coworking space</h1>
                    <p className='text-white'>
                        our coworking spaces let you chose to work with others in an open plan area or a shared office
                    </p>
                    </div>
                </div>

                <div className="row">
                    <div className="col button d-flex align-items-center gap-4">
                    <button type="button" class="btn btn-success " onClick={handleShow}>Book Now</button>
                    <h5 className='text-white'>About Us</h5>
                </div>
                </div>
                </div>
            </header>
            {/* <CustomButton children={'loremdsds'}/> */}
            <CustomModal title='asasasas' isOpen={show} handleClose={handleClose} Width={500} Height={300}>
                dskdhsjdhsjdhsdjhsdjhsdjhjhsdsdjhdjhs
            </CustomModal>
            {/* <BookNowModal show={show} handleClose={handleClose} /> */}
        </div>
    )
}

export { Header }
