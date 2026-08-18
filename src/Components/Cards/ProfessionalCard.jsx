import React from "react";
import {
  MapPin,
  Star,
  BadgeCheck
} from "lucide-react";
import "./ProfessionalCard.css";

const ProfessionalCard = ({ professional }) => {
  return (
    <div className="professional-card">

      <div className="professional-image">
        <img
          src={professional.image}
          alt={professional.name}
        />

        <span className="available">
          ✓ Available Today
        </span>
      </div>

      <div className="professional-info">

        <div className="professional-name">

          <h3>{professional.name}</h3>

          <BadgeCheck
            size={17}
            className="verified"
          />

        </div>

        <p className="profession">
          {professional.profession}
        </p>

        <div className="rating">

          <Star
            size={15}
            fill="currentColor"
          />

          <span>
            {professional.rating}
          </span>

          <span>
            ({professional.reviews} reviews)
          </span>

        </div>

        <p className="experience">
          {professional.experience}
        </p>

        <div className="location">
          <MapPin size={15} />
          {professional.location}
        </div>

        <div className="professional-bottom">

          <strong>
            From {professional.price}
          </strong>

          <button>
            View Profile
          </button>

        </div>

      </div>

    </div>
  );
};

export default ProfessionalCard;