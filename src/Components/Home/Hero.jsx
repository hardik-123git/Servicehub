import React from "react";

import {
  Search,
  MapPin,
  ShieldCheck,
  Clock3,
  CreditCard,
  Wrench,
  Droplets,
  Hammer,
  Sparkles
} from "lucide-react";

import "./Hero.css";
import HeroImage from "../../assets/HeroImagePerson.png";

const Hero = () => {
  return (
    <section className="hero">

      <div className="hero-container">

        <div className="hero-content">

          <h1>
            Find trusted professionals
            <br />
            for <span>any job.</span>
          </h1>

          <p>
            Electricians, plumbers, carpenters,
            painters, cleaners and more — near you.
          </p>

          <div className="search-box">

            <Search size={21} />

            <input
              type="text"
              placeholder="Search for a service or professional..."
            />

            <div className="near-me">
              <MapPin size={18} />
              <span>Near me</span>
            </div>

            <button className="search-btn">
              <Search size={21} />
            </button>

          </div>

          <div className="trust-points">

            <div>
              <ShieldCheck size={18} />
              <span>Verified Professionals</span>
            </div>

            <div>
              <ShieldCheck size={18} />
              <span>Background Checked</span>
            </div>

            <div>
              <Clock3 size={18} />
              <span>On-time Service</span>
            </div>

            <div>
              <CreditCard size={18} />
              <span>Secure Payments</span>
            </div>

          </div>

        </div>


        <div className="hero-image-area">

          <div className="hero-circle"></div>

          <div className="hero-person">
            <img
              src={HeroImage}
              alt="Professional"
            />
          </div>

          <div className="floating-card electrician">
            <Wrench size={30} />

            <div>
              <strong>Electrician</strong>
              <span>From ₹299</span>
            </div>
          </div>

          <div className="floating-card plumber">
            <Droplets size={30} />

            <div>
              <strong>Plumber</strong>
              <span>From ₹249</span>
            </div>
          </div>

          <div className="floating-card carpenter">
            <Hammer size={30} />

            <div>
              <strong>Carpenter</strong>
              <span>From ₹399</span>
            </div>
          </div>

          <div className="floating-card cleaning">
            <Sparkles size={30} />

            <div>
              <strong>Cleaning</strong>
              <span>From ₹499</span>
            </div>
          </div>

          <div className="customer-badge">
            <strong>10K+</strong>
            <span>Happy Customers</span>
          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;