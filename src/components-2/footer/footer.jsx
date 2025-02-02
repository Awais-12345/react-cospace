import React from 'react';

const Footer = () => {
    return (
      <div className="bg-black py-4">
        <div className="container">
          {/* Footer Top Section */}
          <div className="row text-center text-md-start">
            <div className="col-sm-6 col-md-4 col-lg-2">
              <h2 className="text-white fw-bold py-2">Feature</h2>
              <p className="text-white fw-light">Team Management</p>
              <p className="text-white fw-light">Tasks Schedule</p>
              <p className="text-white fw-light">File Manager</p>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-2">
              <h2 className="text-white fw-bold py-2">Resources</h2>
              <p className="text-white fw-light">Blog</p>
              <p className="text-white fw-light">Support</p>
              <p className="text-white fw-light">Newsletter</p>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-2">
              <h2 className="text-white fw-bold py-2">Follow Us</h2>
              <p className="text-white fw-light">Twitter</p>
              <p className="text-white fw-light">Instagram</p>
              <p className="text-white fw-light">Facebook</p>
              <p className="text-white fw-light">YouTube</p>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-2">
              <h2 className="text-white fw-bold py-2">Support</h2>
              <p className="text-white fw-light">My Account</p>
              <p className="text-white fw-light">Help & Support</p>
              <p className="text-white fw-light">Contact Us</p>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-2">
              <h2 className="text-white fw-bold py-2">Company</h2>
              <p className="text-white fw-light">Privacy Policy</p>
              <p className="text-white fw-light">Terms of Service</p>
              <p className="text-white fw-light">Code of Conduct</p>
            </div>
          </div>
  
          {/* Divider Line */}
          <div className="border-2 my-3" style={{ borderTop: "1px solid #ffffff4d" }}></div>
  
          {/* Footer Bottom Section */}
          <div className="row d-flex flex-column flex-md-row justify-content-between align-items-center text-center text-md-start">
            <div className="col-md-6">
              <h2 className="text-white fw-bold">Cospace</h2>
            </div>
            <div className="col-md-6">
              <p className="text-white m-0">© 2022, Made with passion by Dkonten Studio</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export { Footer };
  