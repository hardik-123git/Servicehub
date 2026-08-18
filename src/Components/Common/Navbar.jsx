import{
    MapPin,
    Bell,
    ChevronDown,
    Menu,
    X
} from "lucide-react";
import "./Navbar.css";
import logoImage from "../../assets/logo-image-ServiceHub.jpeg";
import { useState } from "react";
function Navbar()
{
    const [mobileMenu, setMobileMenu]=useState(false);
     return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <div className="logo-section">
          <img src={logoImage} alt="LogoImage" />
          <div>
            <h2>ServiceHub</h2>
            <span>Connecting skills with needs.</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className={`nav-links ${mobileMenu ? "mobile-open" : ""}`}>
          <a href="/" className="active">
            Home
          </a>

          <a href="#services">
            Services
          </a>

          <a href="#professionals">
            Professionals
          </a>

          <a href="#become-pro">
            Become a Pro
          </a>

          <a href="#about">
            About Us
          </a>

          <a href="#help">
            Help
          </a>
        </nav>

        {/* Right Section */}
        <div className="nav-right">

          <button className="location-btn">
            <MapPin size={18} />
            Chandigarh
            <ChevronDown size={15} />
          </button>

          <button className="notification-btn">
            <Bell size={20} />
            <span className="notification-count">3</span>
          </button>

          <button className="login-btn">
            Log In
          </button>

          <button className="signup-btn">
            Sign Up
          </button>

        </div>

        {/* Mobile Menu */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          {mobileMenu ? <X /> : <Menu />}
        </button>

      </div>
    </header>
  );
};
export default Navbar;