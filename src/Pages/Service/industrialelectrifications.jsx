import React from "react";

const service = [
  {
    title: "ZESPL Wind Energy for Industrial Electrification",
    description:
      "Wind Turbines in Industry Large-scale wind farms can generate substantial power, which is ideal for industries with high energy demands, such as manufacturing, mining, and heavy industries. Wind energy can be used to power operations directly or as part of a grid system. Off-Grid Wind SolutionsRemote industrial sites that are far from the grid can use small, off-grid wind turbines to meet their energy needs. These systems are particularly useful in rural or offshore locations where grid connectivity may be limited or non-existent.",
    position: "top right",
    image: "https://zelvoenergy.com/assets/home-img/services/industrialelectrifications/1.png",
  },
  {
    title: "ZESPL Solar Energy for Industrial Electrification",
    description:
      "Solar Panels on Industrial Roofs Many industries are turning to solar energy by installing photovoltaic (PV) panels on the roofs of warehouses, factories, and other buildings. This reduces dependence on the grid, helps reduce electricity costs, and improves the carbon footprint of the business.Solar Farms for Large-Scale Power For large industrial complexes or clusters of companies, setting up dedicated solar farms can be an effective solution. Solar farms generate energy during peak daylight hours, which can either be used directly or stored in batteries for later use.Hybrid Solar and Storage Solutions For round-the-clock power availability, industries can combine solar energy with energy storage solutions like lithium-ion or lead-acid batteries. These hybrid systems allow businesses to store excess energy produced during the day for use at night or during periods of low sunlight.",
    position: "bottom left",
    image: "https://zelvoenergy.com/assets/home-img/services/industrialelectrifications/2.png",
  },
  {
    title: "Benefits of Industrial Electrification via Wind & Solar",
    description:
      "Cost Reduction With declining prices of solar panels and wind turbines, industries can see significant savings in energy costs over time. The use of renewable energy reduces dependence on fossil fuels, which are often subject to price volatility.Sustainability Goals Incorporating wind and solar into industrial operations supports sustainability goals and helps companies meet regulatory requirements for reducing greenhouse gas emissions.Energy Independence By utilizing local wind and solar resources, industries can reduce their reliance on external energy providers and avoid issues like energy price hikes and supply disruptions.",
    position: "top right",
    image: "https://zelvoenergy.com/assets/home-img/services/industrialelectrifications/3.png",
  },
  {
    title: "Technological Integration for Efficiency",
    description:
      "Smart Grids & IoT Integrating wind and solar energy with smart grids and IoT-based solutions allows for real-time monitoring and optimization of energy consumption in industrial settings. ZESPL technologies can automatically adjust energy use based on supply conditions, reducing waste and improving overall efficiency.Energy Management Systems (EMS) Advanced EMS software allows industrial facilities to manage energy use from renewable sources, track real-time data, and forecast energy needs to optimize their energy strategy",
    position: "top right",
    image: "https://zelvoenergy.com/assets/home-img/services/industrialelectrifications/4.png",
  },
  {
    title: "Challenges and Solutions",
    description:
      "Intermittency of Renewable Energy Wind and solar energy generation can be intermittent, which may cause power shortages during periods of low wind or sunlight. This can be mitigated through energy storage solutions, hybrid systems, and by maintaining a connection to the grid.Initial Investment Costs The initial investment for wind turbines and solar panels, along with the installation and maintenance of energy storage systems, can be high. However, government incentives, subsidies, and the long-term savings on energy costs can make these investments financially viable over time.Energy Independence By utilizing local wind and solar resources, industries can reduce their reliance on external energy providers and avoid issues like energy price hikes and supply disruptions.",
    position: "top left",
    image: "https://zelvoenergy.com/assets/home-img/services/industrialelectrifications/5.png",
  },
  {
    title: "Future Trends in ZESPL Industrial Electrification",
    description:
      "Decentralized Energy Systems The growing trend of decentralized energy production, where industries generate their own power from renewable sources, is expected to expand. This includes microgrids, where companies can control their own energy supply, reducing their dependence on centralized utilities.Hybrid Solutions More industries are opting for hybrid solutions that combine wind, solar, and energy storage systems, ensuring a continuous and reliable energy supply with reduced carbon emissions.Carbon Capture & Storage (CCS) Integration For industries that cannot completely eliminate fossil fuel use, CCS technologies are being integrated with renewable systems to reduce emissions from remaining non-renewable energy sources.",
    position: "top right",
    image: "https://zelvoenergy.com/assets/home-img/services/industrialelectrifications/6.png",
  },
];
const cardData = [
  {
    headline: 'Better product quality',
    text: 'Electricity is more precise and controllable than combustion, which can lead to better product quality.',
  },
  {
    headline: 'Cost reduction',
    text: 'Electrification can reduce maintenance requirements and increase energy efficiency, which can lead to cost savings.',
  },
  {
    headline: 'Sustainability',
    text: 'Electrification can help achieve sustainability targets by reducing direct polluting emissions.',
  },
  {
    headline: 'Innovation',
    text: 'Electrification can involve adopting new technologies, digitizing services, and integrating with advanced systems. Here’s a breakdown of how wind and solar energy contribute to industrial electrification:',
  },
];

const industrialelectrifications = () => {
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
        Industrial Electrifications
      </h1>
    </div>

     <section className="why-choose-us">
      <div className="choose-wrapper">
        <div className="choose-image">
          <img
            src="https://zelvoenergy.com/assets/home-img/services/industrialelectrifications/banner.png"
            alt="Why Choose Us"
          />
        </div>
        <div className="choose-content">
          <h2 className="choose-heading">Industrial Electrifications</h2>
          <ul className="choose-list">
            <li>
              <p>
Industrial electrification is the process of replacing fossil fuels with electricity in industrial systems, processes, and spaces. It's a key strategy to help the world transition to renewable energy and reduce greenhouse gas emissions. Industrial electrification in ZESPL wind and solar solutions involves the integration of renewable energy technologies into industrial operations, helping companies transition away from traditional fossil fuel-based power sources. This transition not only aligns with sustainability goals but also offers significant economic benefits over the long term, such as reduced energy costs and improved energy security.
              </p>
            </li>
          </ul>
          <button className="choose-btn">
            Get more info here <span>&#10148;</span>
          </button>
        </div>
      </div>
    </section>

    <section className="amazing-section">
      <div className="amazing-left">
        <p className="about">ABOUT</p>
        <h2>Benefits of Industrial electrification include</h2>
        <p className="description">
          This transition not only aligns with sustainability goals but also offers significant economic benefits over the long term, such as reduced energy costs and improved energy security.
        </p>
        <button className="learn-more">LEARN MORE</button>
      </div>

      <div className="amazing-right">
        {cardData.map((card, index) => (
          <div key={index} className="design-card">
            <h3>{card.headline}</h3>
            <p>{card.text}</p>
          </div>
        ))}
      </div>
    </section>

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
    
</>  
);

};

export default industrialelectrifications;
