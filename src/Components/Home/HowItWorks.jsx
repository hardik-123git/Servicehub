import React from "react";
import {
  Search,
  UsersRound,
  CalendarCheck
} from "lucide-react";

const steps = [
  {
    number: 1,
    icon: Search,
    title: "Search",
    description: "Find the service you need."
  },
  {
    number: 2,
    icon: UsersRound,
    title: "Choose",
    description: "Compare trusted professionals."
  },
  {
    number: 3,
    icon: CalendarCheck,
    title: "Book",
    description: "Schedule and get the job done."
  }
];

const HowItWorks = () => {
  return (
    <section className="how-section">

      <h2>How ServiceHub Works</h2>

      <div className="steps-container">

        {steps.map((step) => {

          const Icon = step.icon;

          return (
            <div
              className="step"
              key={step.number}
            >

              <div className="step-icon-wrapper">

                <span>
                  {step.number}
                </span>

                <div className="step-icon">
                  <Icon size={30} />
                </div>

              </div>

              <h3>{step.title}</h3>

              <p>{step.description}</p>

            </div>
          );

        })}

      </div>

    </section>
  );
};

export default HowItWorks;