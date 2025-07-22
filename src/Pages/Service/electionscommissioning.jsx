import React from "react";

const service = [
  {
    title: "Our Elections Commissioning Services for Wind and Solar Projects",
    description:
      "Zelvo Energy (ZESPL) has a leading role in the field of wind measurement systems, delivering cutting-edge turnkey solutions tailored to meet the unique Wind Resource Assessment needs of each client. Our comprehensive services cover the supply, installation, and commissioning of Wind Masts up to 150 meters in height. Whether you're starting a new wind farm project or assessing existing wind conditions, our expertise ensures accurate, reliable, and actionable data to optimize your wind energy initiatives.",
    image: "https://zelvoenergy.com/assets/home-img/services/electionscommissioning/1.png",
    services: [
        {
          subtitle: "Pre-Commissioning Inspections",
          content: "Conducting thorough checks of the installation, wiring, and structural integrity of the system before activation."
        },
        {
          subtitle: "System Integration Testing",
          content: "Ensuring that solar panels, inverters, batteries, and monitoring systems are properly integrated and functioning together."
        },
        {
          subtitle: "Performance Testing",
          content: "Verifying that the system is generating the expected amount of energy under various environmental conditions."
        },
        {
          subtitle: "Safety and Compliance Checks",
          content: "Ensuring that your solar system complies with all local and international electrical safety codes, grid connection standards, and environmental regulations."
        },
        {
          subtitle: "Post-Commissioning Support",
          content: "Providing guidance and assistance after commissioning to ensure optimal performance, troubleshoot any issues, and make adjustments as necessary."
        }
      ]
  },
  {
    title: "Wind Energy Commissioning",
    description:
      "For wind energy projects, our commissioning services ensure that your wind turbines and associated equipment are set up and functioning optimally. Our wind commissioning services include:",
    image: "https://zelvoenergy.com/assets/home-img/services/electionscommissioning/2.png",
    services: [
        {
          subtitle: "Mechanical and Electrical Testing",
          content: "Checking that the installation of turbines, towers, and other components meets design specifications.Testing the mechanical components (e.g., rotor, blades, gearbox) and electrical systems (e.g., power output, grid connection) to ensure proper functionality."
        },
        {
          subtitle: "Performance Evaluation",
          content: " Monitoring the turbine’s energy output under various wind conditions to confirm it meets the expected power curve."
        },
        {
          subtitle: "Safety Audits",
          content: " Ensuring all safety protocols are followed and that the system is safe for operation according to local and international standards."
        },
        {
          subtitle: "Grid Integration Testing ",
          content: "Verifying that the wind farm is successfully integrated into the grid and that energy is being transferred efficiently."
        },
      ]
  },
  {
    title: "Hybrid Wind-Solar Commissioning",
    description: "For hybrid systems that combine wind and solar energy, we provide comprehensive commissioning to ensure the seamless integration and optimal performance of both systems.",
    image: "https://zelvoenergy.com/assets/home-img/services/electionscommissioning/3.png",
    services: [
        {
          subtitle: "System Integration and Coordination",
          content: "Verifying that both wind and solar systems are operating together efficiently and delivering a reliable energy output."
        },
        {
          subtitle: "Energy Storage Testing",
          content: "Testing the energy storage systems (e.g., batteries) to ensure they are properly storing energy and providing backup power as needed."
        },
        {
          subtitle: "Grid Compliance and Optimization",
          content: "Ensuring that the combined system is compliant with grid requirements and is optimized for maximum energy efficiency."
        },
        {
          subtitle: "Performance Verification",
          content: "Conducting tests to ensure that the hybrid system produces energy reliably, even under varying weather conditions."
        }
      ]
  },
  {
    title: "Benefits of Elections Commissioning for Wind and Solar Projects",
    image: "https://zelvoenergy.com/assets/home-img/services/electionscommissioning/4.png",
    services: [
         {
          subtitle: "Ensures Optimal Performance",
          content: "Commissioning ensures that your wind or solar system is fully operational, generating energy as expected, and running efficiently."
        },
        {
          subtitle: "Reduces Risk",
          content: "Proper commissioning minimizes the risk of system failures, safety hazards, and costly repairs by identifying and correcting issues early."
        },
        {
          subtitle: "Compliance and Certification",
          content: "Helps ensure that your system meets local and international regulatory requirements and industry standards."
        },
        {
          subtitle: "Long-Term Reliability",
          content: "Commissioning improves the long-term reliability and performance of your renewable energy system, maximizing the return on investment."
        },
        {
          subtitle: "Smooth Transition to Operation",
          content: "The commissioning process ensures a smooth handover from installation to full operation, allowing you to start generating energy without delays."
        }
      ]
  },
  {
    title: "Why Choose ZESPL for Elections Commissioning?",
    image: "https://zelvoenergy.com/assets/home-img/services/electionscommissioning/5.png",
    services: [
         {
          subtitle: "Expert Team",
          content: "Our team of experienced engineers and technicians have deep expertise in wind and solar energy systems, ensuring a thorough and efficient commissioning process."
        },
        {
          subtitle: "End-to-End Service",
          content: "From pre-commissioning inspections to post-commissioning support, we handle every aspect of the process to ensure your system is set up for long-term success."
        },
        {
          subtitle: "Comprehensive Testing",
          content: "We conduct comprehensive testing and performance evaluations to guarantee that your system meets all design, safety, and efficiency standards."
        },
        {
          subtitle: "Global Experience",
          content: "With experience in commissioning projects worldwide, we understand the regulatory requirements and technical challenges of different regions."
        },
        {
          subtitle: "Customer Focused",
          content: "We work closely with you throughout the commissioning process to ensure that all your project goals and requirements are met."
        }
      ]
  },
  {
    title: "Get Started with Your Wind or Solar Commissioning Today",
    description:
      "Ensure the optimal performance and efficiency of your wind or solar energy system with our expert Elections Commissioning services. Whether you’re installing a new system or ensuring the performance of an existing one, we are here to guide you every step of the way.Contact us today to learn more about how our commissioning services can help ensure your renewable energy project operates smoothly and efficiently from day one.",
    image: "https://zelvoenergy.com/assets/home-img/services/electionscommissioning/6.png",
    services: []
  },
];

const Electionscommissioning = () => {
  return (
<>
<section className="services-section">
      <div className="section-heading">
      <span className="section-subtitle">
        what we're offering
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="arrow-icon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
          />
        </svg>
      </span>
      <h1 className="section-title">
        Electionscommissioning
      </h1>
    </div>
      <div className="services-grid">
        {service.map((service, index) => {
          const zigzagClass = index % 2 === 0 ? "zigzag-left" : "zigzag-right";

          return (
            <div
              className={`service-card ${zigzagClass} ${service.position?.replace(" ", "-")}`}
              key={index}
            >
              <div className="card-inner">
                <div className="card-front">
                  <img src={service.image} alt={service.title} />
                </div>
                <div className="card-back">
                  <h2>{service.title}</h2>
                  <p>{service.description}</p>
                  
                    <ul>
                    {service.services.map((item, i) => (
                      <li key={i}>
                        <strong>{item.subtitle}</strong>: {item.content}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  
</>  
);

};

export default Electionscommissioning;
