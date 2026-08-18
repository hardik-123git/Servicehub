import React from "react";
import { ArrowRight } from "lucide-react";
import "./ServiceCard.css";
const ServiceCard = ({ service }) => {
  return (
    <div className="service-card">

      <div className="service-icon">
        {service.icon}
      </div>

      <h3>{service.name}</h3>

      <div className="service-bottom">

        <span>
          {service.name === "More Services"
            ? service.price
            : `From ${service.price}`}
        </span>

        <ArrowRight size={18} />

      </div>

    </div>
  );
};

export default ServiceCard;