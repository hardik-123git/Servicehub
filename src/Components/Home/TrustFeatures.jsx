import React from "react";
import {
  CalendarDays,
  ShieldCheck,
  Tag,
  Award
} from "lucide-react";

const features = [
  {
    icon: CalendarDays,
    title: "Easy Booking",
    description: "Book in just a few clicks"
  },
  {
    icon: ShieldCheck,
    title: "Verified Professionals",
    description: "Background verified experts"
  },
  {
    icon: Tag,
    title: "Affordable Pricing",
    description: "Best prices in your area"
  },
  {
    icon: Award,
    title: "Satisfaction Guaranteed",
    description: "Quality service you can trust"
  }
];

const TrustFeatures = () => {
  return (
    <section className="trust-section">

      <div className="trust-container">

        {features.map((feature, index) => {

          const Icon = feature.icon;

          return (
            <div
              className="trust-feature"
              key={index}
            >

              <div className="trust-icon">
                <Icon size={27} />
              </div>

              <div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>

            </div>
          );

        })}

      </div>

    </section>
  );
};

export default TrustFeatures;