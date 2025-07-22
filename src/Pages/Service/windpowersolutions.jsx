import React, { useState, useEffect } from 'react';
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaTimesCircle,FaPlusCircle  } from "react-icons/fa";

const service = [
  {
    title: "Best Wind Energy Solution Provider In India",
    description:
      "At ZESPL , we specialize in the design, manufacturing, and installation of high-quality wind masts tailored to meet your unique needs. With years of experience in the renewable energy and meteorological sectors, we are committed to providing reliable, durable, and precision-engineered solutions for wind measurement and environmental monitoring.",
    position: "top right",
    image: "https://zelvoenergy.com/assets/home-img/services/windpowersolutions/1.png",
  },
  {
    title: "Our Services",
    description:
      "We provide comprehensive services to ensure your project’s success: Consultation & Site Analysis Expert advice on selecting the right wind mast and sensors for your specific needs.Custom Engineering & Design Tailor-made solutions for unique project challenges. Installation & Commissioning Professional setup and calibration for seamless operation. Maintenance & Support Ongoing care to keep your wind mast functioning at peak performance. Data Management Advanced telemetry systems for real-time data transmission and analysis",
    position: "bottom left",
    image: "https://zelvoenergy.com/assets/home-img/services/windpowersolutions/2.png",
  },
  {
    title: "Wind Energy",
    description:
      "Wind Energy, one of the most ancient forms of Renewable Energy, has been utilized by humanity for centuries. As a clean and sustainable resource, it can be harnessed without exhausting natural resources or producing harmful emissions. India has been a pioneer in the adoption of Wind Energy and continues to witness substantial growth in this sector. The Wind Energy industry has emerged as one of the fastest-expanding sources of electricity generation. Geographically, India is ideally situated to exploit wind energy, with its extensive coastlines and vast plains. Taking advantage of these advantageous conditions, ZESPL has established a robust suite of comprehensive capabilities. These capabilities cover all facets of wind project development, including site selection, construction, and ongoing management. By utilizing these strengths, ZESPL is dedicated to delivering top-tier Wind Energy projects that adhere to the highest standards of quality, efficiency, and reliability. We specialize in the development, production, installation, and maintenance of wind energy systems. These companies typically offer a range of services that enable the harnessing of wind energy to generate electricity. Wind power solution providers play a key role in the renewable energy industry and support the transition to more sustainable energy sources.",
    position: "bottom left",
    image: "https://zelvoenergy.com/assets/home-img/services/windpowersolutions/about.png",
  },
  {
    title: "Wind Power Solutions",
    description:
      "Using this indefatigable energy resource, our wind granges are driving the shift towards a sustainable future. For a business, sourcing of renewable energy achieves the binary pretensions of substantial savings on electricity as well as making large strides towards 100 sourcing of renewable power. Open access wind power is a popular power generation option that gives enterprises like yours an occasion to meet all your electricity needs at tariffs lower than prevailing grid electricity tariffs. 3 main steps are there, Constructs ,Operates ,Maintains",
    position: "bottom left",
    image: "https://zelvoenergy.com/assets/home-img/services/windpowersolutions/banner.png",
  },
 
];

const faqData = [
  {
    category: 'general',
    title: 'General Questions',
    items: [
      {
        question: 'IEC 61400-12-1: Wind Turbines – Power Performance Measurements of Electricity-Producing Wind Turbines',
        answer: 'The IEC 61400-12-1 standard specifies methods for measuring and analyzing the power performance of wind turbines. It ensures consistent and reliable data for assessing the energy output of wind turbines under various conditions.',
      },
      {
        question: 'MEASNET Standards',
        answer: 'MEASNET (Measurement Network for Wind Energy) is an international network of organizations focused on harmonizing and ensuring the quality of measurements and analyses in the wind energy sector.',
      },
      {
        question: 'Combination of IEC 61400- 12-1 [1] and MEASET standards',
        answer: 'IEC 61400-12-1 Focuses specifically on power performance measurements for wind turbines, providing the theoretical and technical foundation for assessing turbine output.MEASNET Standards Extend the IEC framework into practical applications, including certification and site-specific assessments, ensuring real-world reliability and consistency',
    },
    {
        question: 'IS 2062 for materials with yield stress of 250MPa for mast',
        answer: 'IS 2062 is the Indian Standard for hot-rolled steel products for structural use. It specifies the requirements for steel used in general structural purposes, including masts, towers, bridges, and other similar structures. For materials with a yield stress of 250 MPa, IS 2062 provides specific guidelines and classifications.',
    },
    {
        question: 'IS 2266 for guy ropes =6x37M steel core (8mm and 10mm dia) with yield stress of 1770MPa',
        answer: 'IS 2266 defines the characteristics of steel wire ropes and specifies their construction, dimensions, testing, and properties. These ropes are usually made from carbon steel wires and may be subjected to tensile loads, bending, and torsion during use.',
    },
    {
        question: 'IS:875-2015 for wind loads',
        answer: '6x37 construction refers to the rope construction, meaning that the rope has 6 strands, and each strand consists of 37 wires. This is a common type of construction for guy ropes due to its flexibility, strength, and durability. Steel Core This indicates that the core of the rope is made from steel, which provides higher strength and resistance to deformation under load compared to fiber cor Diameters: 8 mm and 10 mm The diameters of the ropes you mentioned (8 mm and 10 mm) are the overall diameters of the steel wire ropes, which will influence both their strength and flexibility. The choice of diameter will affect the load-bearing capacity and other performance characteristics. Yield Stress of 1770 MPa The yield stress (also called the yield strength) of 1770 MPa indicates that the steel used in the core and wires of the rope has a yield strength of 1770 megapascals (MPa). Yield strength is the stress at which the material will begin to deform plastically. Beyond this point, the material will not return to its original shape, and the rope could fail or stretch permanently. Yield Stress = 1770 MPa: This is a relatively high-strength steel, suitable for applications where high tensile strength is required, such as in guy ropes supporting heavy loads (e.g., for towers, masts, or overhead lines).',
    },
    {
        question: 'IS 2266 for guy ropes =6x37M steel core (8mm and 10mm dia) with yield stress of 1770MPa',
        answer: 'The IS 875:2015 (Part 3) is an Indian Standard code that provides guidelines for calculating wind loads on buildings and structures. It is a part of the IS 875 series, which deals with design loads for buildings and structures. The official title is: Yield Stress = 1770 MPa: This is a relatively high-strength steel, suitable for applications where high tensile strength is required, such as in guy ropes supporting heavy loads (e.g., for towers, masts, or overhead lines).',
    },
     {
        question: 'IS:800-2007 for design of steel members',
        answer: 'The IS 800:2007 is an Indian Standard code that provides the general provisions and design requirements for steel structures.Our main focus is to provide accurate data and predictions for resource assessment to ensure your renewable energy project is a success.Join with ZESPL to harness the power of wind with precision and reliability. Together, we can build a sustainable future powered by clean energy.',
    },
    ],
  },
  
];

const windpowersolutions = () => {
    const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeItem, setActiveItem] = useState(null);

  const handleToggle = (index) => {
    setActiveItem(activeItem === index ? null : index);
  };


  const filteredFaqs = faqData
    .filter(section => activeCategory === 'all' || section.category === activeCategory)
    .map(section => ({
      ...section,
      items: section.items.filter(item =>
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter(section => section.items.length > 0);

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
        Wind Power Solutions
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
            src="https://zelvoenergy.com/assets/home-img/services/windpowersolutions/3.png"
            alt="Our Commitment to Quality"
          />
        </div>
        <div className="choose-content">
          <h2 className="choose-heading">Our Commitment to Quality</h2>
          <ul className="choose-list">
            <li>
              <p>
At ZESPL, quality is at the core of everything we do. Our wind masts are designed and tested to meet international standards for safety, performance, and reliability. Trust us to deliver solutions that exceed expectations and drive your project's success.

Zelvo Energy Solution Pvt Ltd (ZESPL), an ISO 9001-2015 certified company, specializes in delivering comprehensive solutions for the development of new wind and solar power projects.

In the rapidly evolving wind power industry, Wind Resource Assessment plays a critical role as the first and most essential step in project development. Zelvo Energy has established a strong presence in wind measurement systems, offering end-to-end turnkey solutions for Wind Resource Assessment. We provide a full suite of services for the supply, installation, and commissioning of wind masts up to 150 meters in height.

As a trusted designer, manufacturer, and supplier of wind resource monitoring towers, we pride ourselves on delivering cost-effective and robust solutions that are adaptable to any terrain. To complement our high-quality wind monitoring systems, we also offer a comprehensive range of ancillary equipment, including data loggers tailored to diverse requirements.
              </p>
            </li>
            <li>
              <p>
Design, Fabrication, Supply, Installation and Commissioning of Hot Dip Galvanized 150 mtr Wind mast as per IEC 61400- 12-1 [1] and MEASET standards, the following codes for loading and design which is equivalent to IEC Standard: IEC 61400- 12-1 [1] and MEASET standards.              </p>
            </li>
            <li>
              <p>
IS 2062 for materials with yield stress of 250MPa for mast
IS 2266 for guy ropes =6x37M steel core (8mm and 10mm dia) with yield stress of 1770MPa
IS:875-2015 for wind loads
IS:800-2007 for design of steel members
              </p>
            </li>
          </ul>
          <button className="choose-btn">
            Get more info here <span>&#10148;</span>
          </button>
        </div>
      </div>
    </section>
<div className="faq-container">
      <div className="faq-header">
        <h1>Frequently Asked Questions</h1>
        <p>Find answers to common questions about our products and services</p>

        {/* Search Bar */}
        <div className="search-container">
          <div className="search-box">
            <FaMagnifyingGlass  />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button
                className="clear-search visible"
                onClick={() => setSearchQuery('')}
              >
                <FaTimesCircle  />
              </button>
            )}
          </div>
        </div>

        {/* Category Filter */}
        
      </div>

      {/* FAQ Content */}
      <div className="faq-content">
        {filteredFaqs.map((section, sIdx) => (
          <div className="faq-category" key={sIdx} data-category={section.category}>
            <h2>{section.title}</h2>
            {section.items.map((item, iIdx) => {
              const idx = `${sIdx}-${iIdx}`;
              const isOpen = activeItem === idx;
              return (
                <div className={`faq-item ${isOpen ? 'active' : ''}`} key={idx}>
                  <div className="faq-question" onClick={() => handleToggle(idx)}>
                    <h3>{item.question}</h3>
                    <span className="faq-icon">
                      <FaPlusCircle  className={isOpen ? 'rotated' : ''} />
                    </span>
                  </div>
                  <div className="faq-answer" style={{ maxHeight: isOpen ? '1000px' : 0 }}>
                    <p>{item.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>

    </div>
</>  
);

};

export default windpowersolutions;
