import React from "react";
import { FaTag  } from 'react-icons/fa';

const service = [
  {
    title: "Solar Thermal Solutions",
    description:
      "Switching to solar power has never been easier and more cost-effective. Our solar thermal systems offer an affordable solution that harnesses the Sun's energy for heating. Our solar thermal water heaters will ensure you always have access to hot water and are free from any dependency on gas or electricity. Hospitals, hotels, and industrial facilities will significantly benefit from these systems. Additionally, we manufacture solar thermal collectors that harvest solar energy and transform it into heat energy for various uses. By switching to solar, you can save money and reduce your carbon footprint.",
    position: "top right",
    image: "https://zelvoenergy.com/assets/home-img/services/solarsupportingstructure/4.png",
  },
  {
    title: "Solar LED Elements and Solar Lamps",
    description:
      "Our offer includes solar LED bulbs and solar-powered night lights. These lights are solar lights, which makes them environmentally friendly and saves on operational costs. Suppose you need lighting for your garden, pathways, or office outlets. In that case, our bulbs are a good substitute for other conventional light bulbs. Do not stress over exorbitant electricity fees while enjoying bright and dependable illumination.",
    position: "bottom left",
    image: "https://zelvoenergy.com/assets/home-img/services/solarsupportingstructure/3.png",
  },
  {
    title: "How Solar Power Works",
    description:
      "Utilizing solar energy makes it possible to harness the Sun's power. Solar panels receive sunlight, which they process and transform into solar energy. Solar thermal collectors gather and store the Sun's heat and puff it into water or air when needed. This describes how powering homes, industries, and even hospitals is possible. It is a robust, straightforward method of meeting power constraints using sustainable energy sources.",
    position: "top right",
    image: "https://zelvoenergy.com/assets/home-img/services/solarsupportingstructure/about.png",
  },
  
];

const SolarPower = [
    {
      title: "Financial Advantages",
      description:
        "Once constructed, solar systems help slash electricity bills by providing enough solar energy for appliances and heating water.",
    },
    {
      title: "Environmentally Friendly",
      description:
        "Compared to fossil fuels, solar energy does not produce any pollutants and can be utilized repeatedly as a continuous energy source, making it environmentally friendly.",
    },
     {
      title: "Reduced Maintenance Costs",
      description:
        "Solar systems are hassle-free, requiring little to no maintenance over time.",
    },
    {
      title: "Achieve self-sufficiency",
      description:
        "SolarSolar energy reduces dependency on conventional sources while protecting against sudden fuel inflation.",
    },
  ];

const solarthermalsolutions = () => {
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
        Solar Thermal Solutions
      </h1>
    </div>

      <section className="why-choose-us">
      <div className="choose-wrapper">
        <div className="choose-image">
          <img
            src="https://zelvoenergy.com/assets/home-img/services/solarthermalsolutions/banner.png"
            alt="Why Choose Us"
          />
        </div>
        <div className="choose-content">
          <h2 className="choose-heading">Transform The Way You Live With Zelvo Energy Solution Private Limited</h2>
          <ul className="choose-list">
            <li>
              <p>
Zelvo Energy Solution Private Limited is enthusiastic about offering cheap yet effective and sustainable energy solutions on a business and organizational scale, whether related to an industry, hotel, restaurant, apartment, or a hospital. As one of the best solar energy companies in India(Hyperlink to Home Page Url), Zelvo is known for its quality solar products and services that enable its customers to conserve energy, save money, and, most importantly, protect the environment.
              </p>
            </li>
          </ul>
          <button className="choose-btn">
            Get more info here <span>&#10148;</span>
          </button>
        </div>
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
   <div style={{  padding: '4rem 1rem',textAlign: 'center', maxWidth: '1200px', margin: '0 auto', }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem', color: '#333', textAlign: 'center', }} >
       Key Components of a Our  <span style={{ color: '#0066cc' }}>Solar Power Solutions</span>
     </h1>
     <hr style={{ width: '90px',  height: '4px', backgroundColor: '#0066cc', border: 'none', margin: '0 auto 2rem', }} />
     <div style={{  display: 'grid',  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', padding: '0 1rem', position: 'relative'}}>
       {SolarPower.map((item, index) => (
         <div key={index} style={{ backgroundColor: 'white',  borderRadius: '12px', padding: '2rem 1.5rem', boxShadow: '0 5px 15px rgba(0,0,0,0.08)', transition: 'all 0.3s ease', position: 'relative', overflow: 'hidden',':hover': { transform: 'translateY(-8px)',  boxShadow: '0 12px 20px rgba(0,0,0,0.12)',display: index >= 3 ? 'flex' : 'block', justifyContent: index >= 3 ? 'center' : 'initial', } }}>
           {/* Tag Symbol - Top Left Corner */}
           <div style={{ maxWidth: '400px', position: 'absolute', top: '0', left: '0', backgroundColor: '#0066cc', color: 'white', padding: '0.3rem 1rem', borderBottomRightRadius: '12px', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', fontWeight: '600'}}>
             <FaTag style={{ fontSize: '0.8rem' }} />
             <span>#{index + 1}</span>
           </div>
           
           {/* Title */}
           <h3 style={{  fontSize: '1.4rem', fontWeight: '600',color: '#2c3e50', marginBottom: '1rem', lineHeight: '1.3', marginTop: '1.5rem' }}>
             {item.title}
           </h3>
           
           {/* Description */}
           <p style={{ fontSize: '1rem', lineHeight: '1.6', color: '#7f8c8d',  marginBottom: '0'}}>
             {item.description}
           </p>
         </div>
       ))}
     </div>
   </div>
   <section className="industries-container">
      <div className="industries-content">
        <h2>Industries We Serve</h2>

        <div className="industry">
          <h3>Hotels and Catering</h3>
          <p>
            Provide clients with essential services using lighting and hot water supplied by solar energy
            while reducing market operational costs.
          </p>
        </div>

        <div className="industry">
          <h3>Hospitals</h3>
          <p>
            Having a solar thermal water heater installed provides facilities with efficient and highly
            dependable hot water solutions at low cost.
          </p>
        </div>

        <div className="industry">
          <h3>Apartments</h3>
          <p>
            Provide residents with the option of efficient lighting and heating while lowering energy expenses.
          </p>
        </div>

        <div className="industry">
          <h3>Industrial Businesses</h3>
          <p>
            Realize savings on energy costs by installing large-scale solar systems for your business.
          </p>
        </div>
      </div>

      <div className="industries-image">
        <img
          src="https://zelvoenergy.com/assets/home-img/services/solarsupportingstructure/1.png" 
          alt="Solar Panels"
        />
      </div>
    </section>
   
</>  
);

};

export default solarthermalsolutions;
