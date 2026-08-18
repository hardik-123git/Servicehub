import React from "react";
import { ArrowRight } from "lucide-react";

import { professionals } from "../../data/professionalData";
import ProfessionalCard from "../cards/ProfessionalCard";
import "./TopProfessionals.css";
const TopProfessionals = () => {
  return (
    <section
      className="section"
      id="professionals"
    >

      <div className="section-header">

        <h2>Top Rated Professionals</h2>

        <button className="view-all">
          View all professionals
          <ArrowRight size={18} />
        </button>

      </div>

      <div className="professionals-grid">

        {professionals.map((professional) => (
          <ProfessionalCard
            key={professional.id}
            professional={professional}
          />
        ))}

      </div>

    </section>
  );
};

export default TopProfessionals;