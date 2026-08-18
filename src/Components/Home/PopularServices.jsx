import React from "react";
import { ArrowRight } from "lucide-react";

import { services } from "../../data/serviceData";
import ServiceCard from "../cards/ServiceCard";
import "./PopularServices.css";
const PopularServices = () => {
  return (
    <section className="section" id="services">

      <div className="section-header">

        <h2>Popular Services</h2>

        <button className="view-all">
          View all services
          <ArrowRight size={18} />
        </button>

      </div>

      <div className="services-grid">

        {services.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
          />
        ))}

      </div>

    </section>
  );
};

export default PopularServices;