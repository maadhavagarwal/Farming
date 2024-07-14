import React from 'react';
import './footer.css'; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Soil Farming Agent</h5>
            <p>Your reliable source for soil and crop information.</p>
          </div>
          <div className="col-md-4">
            
          </div>
          <div className="col-md-4">
            <h5>Contact Information</h5>
            <p>Email: info@soilfarmingagent.com</p>
            <p>Phone: +123 456 7890</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <p>&copy; 2024 Soil Farming Agent. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
