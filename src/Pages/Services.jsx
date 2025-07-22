import React from "react";

const service = [
  {
    title: "Wind Power Solutions",
    description:
      "Zelvo Energy (ZESPL) has a leading role in the field of wind measurement systems, delivering cutting-edge turnkey solutions tailored to meet the unique Wind Resource Assessment needs of each client. Our comprehensive services cover the supply, installation, and commissioning of Wind Masts up to 150 meters in height. Whether you're starting a new wind farm project or assessing existing wind conditions, our expertise ensures accurate, reliable, and actionable data to optimize your wind energy initiatives.",
    position: "top right",
    image: "https://zelvoenergy.com/assets/home-img/services/1.png",
  },
  {
    title: "Solar Thermal Solutions",
    description:
      "ZESPL provides high-efficiency solar thermal energy solutions for industrial processes and district heating systems. By harnessing the sun's natural heat, we help businesses reduce their dependence on fossil fuels, cut CO2 emissions, and mitigate exposure to volatile energy prices. Our tailored solar thermal systems are designed to deliver enhanced energy security and long-term savings, making them a smart choice for industries aiming for a more sustainable future.",
    position: "bottom left",
    image: "https://zelvoenergy.com/assets/home-img/services/2.png",
  },
  {
    title: "Industrial Electrification",
    description:
      "Our Industrial Electrification services focus on the optimization and implementation of advanced electrical systems to improve operational efficiency, sustainability, and cost-effectiveness. We assist industries in transitioning to renewable energy, enhancing their systems to support the growing need for electrification. By integrating efficient energy solutions, we help reduce operational emissions, lower energy consumption, and enable industries to thrive in a greener future.",
    position: "top right",
    image: "https://zelvoenergy.com/assets/home-img/services/3.png",
  },
  {
    title: "Land Procurement",
    description:
      "Land procurement is a critical aspect of successful wind and solar projects. At ZESPL, we understand that each landowner has unique circumstances. We offer flexible and effective solutions for site control, ensuring smooth and successful land acquisition processes. Our expert team navigates local regulations and market dynamics to secure prime locations for wind and solar installations, laying the foundation for a successful energy project.",
    position: "top right",
    image: "https://zelvoenergy.com/assets/home-img/services/4.png",
  },
  {
    title: "Operation and Maintenance (O&M)",
    description:
      "We ensure the ongoing performance and efficiency of renewable energy systems through our specialized Operation and Maintenance (O&M) services. ZESPL’s O&M services are designed to minimize downtime, maximize energy production, and extend the life of your wind and solar systems. Our proactive approach helps prevent potential failures, improves performance, and ensures that your renewable energy systems operate at peak efficiency throughout their operational lifespan.",
    position: "top left",
    image: "https://zelvoenergy.com/assets/home-img/services/5.png",
  },
  {
    title: "Security Man Power Management",
    description:
      "ZESPL offers specialized security solutions tailored to the renewable energy and industrial sectors. We provide expertly trained manpower to ensure the safety and security of wind and solar installations, offering services such as surveillance, access control, and emergency response planning. Our security teams are highly trained in handling the specific risks and challenges of the power sector, providing peace of mind to our clients in the fast-evolving energy landscape",
    position: "top right",
    image: "https://zelvoenergy.com/assets/home-img/services/6.png",
  },
];

const ServicesSection = () => {
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
        Services Built Specifically for your Business
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
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
    <section className="why-choose-us">
      <div className="choose-wrapper">
        <div className="choose-image">
          <img
            src="https://zelvoenergy.com/assets/home-img/services/whychoose.png"
            alt="Why Choose Us"
          />
        </div>
        <div className="choose-content">
          <h2 className="choose-heading">Why Choose Us?</h2>
          <ul className="choose-list">
            <li>
              <h3>Clean Energy</h3>
              <p>
                We focus on harnessing the power of nature through wind and solar technologies, offering environmentally friendly solutions that reduce emissions and reliance on fossil fuels.
              </p>
            </li>
            <li>
              <h3>Renewable Resources</h3>
              <p>
                Our solutions are based on renewable resources that are sustainable and efficient, ensuring long-term energy security and cost-effectiveness.
              </p>
            </li>
            <li>
              <h3>Efficient Systems</h3>
              <p>
                We implement high-efficiency systems that maximize output, minimize waste, and provide financial returns for our clients.
              </p>
            </li>
          </ul>
          <button className="choose-btn">
            Get more info here <span>&#10148;</span>
          </button>
        </div>
      </div>
    </section>
</>  
);

};

export default ServicesSection;
