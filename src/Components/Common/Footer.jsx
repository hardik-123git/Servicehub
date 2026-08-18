import React from "react";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-brand">

          <div className="footer-logo">
            <div className="logo-icon">
              S
            </div>

            <div>
              <h2>ServiceHub</h2>
              <span>Connecting skills with needs.</span>
            </div>
          </div>

          <div className="social-links">
            <span>f</span>
            <span>◎</span>
            <span>𝕏</span>
            <span>▶</span>
            <span>in</span>
          </div>

        </div>

        <div className="footer-column">

          <h3>For Customers</h3>

          <a href="/">Find a Professional</a>
          <a href="/">Browse Services</a>
          <a href="/">My Bookings</a>
          <a href="/">Favorites</a>

        </div>

        <div className="footer-column">

          <h3>For Professionals</h3>

          <a href="/">Become a Pro</a>
          <a href="/">Seller Dashboard</a>
          <a href="/">Manage Services</a>
          <a href="/">Earnings</a>

        </div>

        <div className="footer-column">

          <h3>Company</h3>

          <a href="/">About Us</a>
          <a href="/">Contact</a>
          <a href="/">Help Center</a>
          <a href="/">Terms & Conditions</a>
          <a href="/">Privacy Policy</a>

        </div>

        <div className="footer-column">

          <h3>Download the App</h3>

          <button className="app-button">
            ▶ Google Play
          </button>

          <button className="app-button">
             App Store
          </button>

        </div>

      </div>

      <div className="copyright">
        © 2026 ServiceHub. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;