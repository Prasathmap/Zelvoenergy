import React from "react";

const service = [
  {
    title: "Feasibility Assessment",
    description:
      "During the feasibility assessment phase, ZESPL conducts an Initial Evaluation for prospective clients. This Initial Evaluation serves as a detailed yet preliminary report aimed at assessing the project's scale, location, energy output, financial aspects, and overall feasibility. Our dedicated Project Planning team examines the specific elements of the project to ascertain its viability, define its dimensions, and provide guidance on whether to proceed.",
    position: "top right",
    image: "https://zelvoenergy.com/assets/home-img/services/land-procurement/1.png",
  },
  {
    title: "Development",
    description:
      "Upon the customer's decision to proceed with a project, we transition into the development phase. During this period, ZESPL will validate the findings and forecasts established during the feasibility stage and the Initial Evaluation.In this phase, ZESPL may also engage in activities aimed at mitigating execution risks prior to the signing of contracts.The completion of the Detailed Evaluation typically spans one to three months, contingent upon the project's complexity. Should an on-site wind resource measurement campaign be necessary, the final report may extend to eight months, particularly if a full six months of wind data collection is mandated.",
    position: "bottom left",
    image: "https://zelvoenergy.com/assets/home-img/services/land-procurement/2.png",
  },
  {
    title: "Contract Execution",
    description:
      "Many organizations have not previously engaged in a 20-year agreement, nor have they acquired a wind turbine. It is understood that the approval process requires considerable time, as does the review. and execution of contracts. Generally, contracts of this duration necessitate the approval of C-suite executives.We prefer to have the Contract Execution process occur simultaneously with the Development process to maximize efficiency for all parties involved.",
    position: "top right",
    image: "https://zelvoenergy.com/assets/home-img/services/land-procurement/3.png",
  },
  {
    title: "Project Execution",
    description:
      "The project execution phase consists of four simultaneous activities permitting, public announcement, procurement, and construction. This phase commences upon the signing of the contract.We are convinced that wind projects provide advantages not only to companies but also to their surrounding communities. The public announcement is crucial for ZESPL, as we feel a responsibility to maintain transparency with the communities in which we operate. When we launch a project, our goal is to disseminate information promptly and comprehensively.",
    position: "top right",
    image: "https://zelvoenergy.com/assets/home-img/services/land-procurement/4.png",
  },
  {
    title: "Project Operation",
    description:
      "Upon the commencement of project operations, ZESPL remains committed to ongoing monitoring and management.We assume responsibility for the operation of the turbines and the overall project throughout its entire lifespan. In the case of REA projects,we handle all operational expenses. Conversely, for CAPEX projects, the customer is accountable for operational costs and service charges.",
    position: "top left",
     image: "https://zelvoenergy.com/assets/home-img/services/land-procurement/5.png",
  },
 
];
const blocks = [
    { type: 'image', src: 'https://zelvoenergy.com/assets/home-img/services/land-procurement/about.png' },
    {
      type: 'text',
      title: 'SITE SELECTION',
      content:
        'ZESPL can find a viable wind or solar site in any market. Since its Leverage of market experience, ZESPL can find and secure a site faster and cheaper than the competition due to Substation capabilities, evacuation availability and interconnection.',
      bgColor: '#0e6b75',
    },
    { type: 'image', src: 'https://res.cloudinary.com/dl6ixqdqh/image/upload/v1752993648/FEASIBILITY_STUDY_buwabn.png' },
    {
      type: 'text',
      title: 'FEASIBILITY STUDY',
      content:
        'ZESPL is providing services to clients that their property is suitable for wind or solar energy development. Feasibility studies include preliminary market and transmission assessments, project site identification, energy resource assessment, and a permit summary matrix.',
      bgColor: '#ff473c',
    },
        { type: 'image', src: 'https://zelvoenergy.com/assets/home-img/services/land-procurement/directmanufacturing.jpg' },
    {
      type: 'text',
      title: 'LAND ACQUISITION',
      content: 'Land acquisition is a very critical factor in the Wind and Solar project recognizing that each landowner has its own set of circumstances; ZESPL can offer several forms of site control to enable successful land acquisition. ',
      bgColor: '#ff473c',
    },
    { type: 'image', src: 'https://res.cloudinary.com/dl6ixqdqh/image/upload/v1752993483/DUE_DELIGENCE_qk4eui.jpg' },
    {
      type: 'text',
      title: 'DUE DELIGENCE',
      content:
        'ZESPL is providing all the supporting services to do due diligence of land for Wind and Solar projects. Due diligence includes verification of original documents, consent approval & permission for land purchase from local authority, legal clearance of title documents from land owners, etc,.',
      bgColor: '#0e6b75',
    },
   { type: 'image', src: 'https://res.cloudinary.com/dl6ixqdqh/image/upload/v1752993369/Land_fz50r9.jpg' },
  ];

  const steps = [
    {
      title: "Screening",
      content:
        "To determine the feasibility of a Wind for Industry project, our initial step involves identifying potential obstacles that could hinder its success. In this phase, we aim to recognize any warning signs at the earliest opportunity. By promptly eliminating projects that lack viability, we enhance efficiency for both the customer and ourselves. The primary factors we evaluate during the project screening process include:",
      color: "#2196f3",
    },
    {
      title: "Proximity to Airports",
      content:
        "There are regulations that limit the construction of tall structures, including wind turbines, in the vicinity of airports. Generally, a project must be situated at least 15,000 feet away from a public airport. These regulations can differ based on the size of the airport and the height of the turbines.",
      color: "#00bcd4",
    },
    {
      title: "Wind Resource Assessment",
      content:
        "Given that wind serves as our primary energy source, a robust wind resource is essential for a successful wind energy project. Evaluating whether a potential site possesses favorable wind conditions can be complex; however, it is often straightforward to identify sites with poor wind resources. Typically, projects require a minimum capacity factor of 25% to be considered feasible. ZESPL employs regional datasets and specialized screening tools to identify sites with insufficient wind resources at an early stage",
      color: "#4caf50",
    },
    {
      title: "Land Requirements",
      content:
        "The installation of wind turbines necessitates a considerable amount of land due to their substantial size. Each turbine for Wind for Industry projects typically demands an area of approximately 800 square feet (1.5 acres) that is devoid of any structures or obstructions. During the initial screening phase, our focus is not on land acquisition; rather, we are assessing the availability of adequate land.",
      color: "#ffc107",
    },
    {
      title: "Energy Demand",
      content:
        "To qualify for a Wind for Industry project, facilities must have an annual electricity consumption of no less than 4,000,000 kilowatt hours. A higher energy consumption at a facility allows for the development of a larger Wind for Industry project. Additionally, larger projects benefit from economies of scale, often resulting in reduced energy costs.",
      color: "#ff5722",
    },
    {
      title: "Power Pricing",
      content:
        "For over a decade, OPC has been engaged in modeling wind projects, resulting in the creation of a comprehensive predictive data set that enables us to assess the financial viability of Wind for Industry initiatives. By focusing primarily on the customer's existing utility rate and the wind resources available in their region, ZESPL can ascertain whether a project is financially advantageous for the customer.",
      color: "#e91e63",
    },
  ];

 const StepItem = ({ step, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        margin: "40px 0",
        flexWrap: "wrap",
      }}
    >
      {/* Step box */}
      <div
        style={{
          backgroundColor: step.color,
          color: "#fff",
          padding: "20px",
          minWidth: "180px",
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "20px",
          borderRadius: isEven ? "6px 0 0 6px" : "0 6px 6px 0",
        }}
      >
        STEP <br />
        {String(index + 1).padStart(2, "0")}
      </div>

      {/* Arrow */}
      <div
        style={{
          width: 0,
          height: 0,
          borderTop: "25px solid transparent",
          borderBottom: "25px solid transparent",
          ...(isEven
            ? { borderLeft: `30px solid ${step.color}` }
            : { borderRight: `30px solid ${step.color}` }),
        }}
      ></div>

      {/* Content */}
      <div
        style={{
          flex: 1,
          background: "#f8f8f8",
          padding: "20px 30px",
          borderRadius: isEven ? "0 6px 6px 0" : "6px 0 0 6px",
          border: `1px solid ${step.color}`,
        }}
      >
        <h3 style={{ color: step.color, marginBottom: "10px" }}>{step.title}</h3>
        <p style={{ margin: 0 }}>{step.content}</p>
      </div>
    </div>
  );
};

const landprocurement = () => {
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
        Land Procurement
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
          <h2 className="choose-heading">Land Procurement</h2>
          <ul className="choose-list">
            <li>
              <p>
ZESPL Land acquisition has been recognized as a critical factor affecting the prompt implementation of solar and wind energy initiatives. Contributing factors encompass the scarcity of land, elevated population density, the necessity for numerous approvals, and competing land uses.
Additionally, land falls under the jurisdiction of individual states as per the Indian constitution, resulting in varying regulations from one state to another.
Land acquisition presents the most significant challenge for developers of solar and wind projects in India.
In the country, land falls under the jurisdiction of state governments, necessitating the involvement of multiple state agencies, 
such as the revenue department, panchayat, and state nodal agencies, in the approval process for land procurement or leasing. 
The participation of numerous entities renders the entire procedure exceedingly complex and protracted.
              </p>
            </li>
            <li><p>★ Detailed survey for proposed RE project land, Line route & logistics route, etc</p>  </li>
            <li><p> ★ Identification of the project land and its type/category </p></li>
            <li> <p>★ Collecting title documents of the approved land and carrying out complete due diligence of the land title </p></li>
            <li><p> ★  Procurement of the land parcel by way of sale deed or lease deed </p></li>
            <li><p> ★ Conversion of the land status </p></li>

          </ul>
          <button className="choose-btn">
            Get more info here <span>&#10148;</span>
          </button>
        </div>
      </div>
    </section>

      
    </section>

  <div className="grid-container">
      {blocks.map((block, idx) => {
        switch (block.type) {
          case 'text':
            return (
              <div
                key={idx}
                className="grid-item text"
                style={{ backgroundColor: block.bgColor }}
              >
                <h2>{block.title}</h2>
                <p>{block.content}</p>
              </div>
            );
          case 'quote':
            return (
              <div
                key={idx}
                className="grid-item quote"
                style={{ backgroundColor: block.bgColor }}
              >
                <blockquote>{block.content}</blockquote>
              </div>
            );
          case 'logo':
            return (
              <div
                key={idx}
                className="grid-item logo"
                style={{ backgroundColor: block.bgColor }}
              >
                <div className="logo-line">
                  <svg width="80" height="80" viewBox="0 0 100 100">
                    <polygon
                      points="30,10 70,10 90,50 50,90 10,50"
                      stroke="#fff"
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
                  <p>LOREM IPSUM</p>
                </div>
              </div>
            );
          case 'image':
            return (
              <div key={idx} className="grid-item image">
                <img src={block.src} alt="blurred city" />
              </div>
            );
          default:
            return null;
        }
      })}
    </div>

    <div className="vm-wrapper">
      <h2 className="vm-title">
        Comprehensive Guide to Establishing a <span>Solar Power Plant</span>
      </h2>

      <div className="vm-card-container">
     
        <div className="vm-card vm-blue">
          <div className="vm-icon">
            <img
              src="https://cdn-icons-png.flaticon.com/512/189/189664.png"
              alt="vision"
            />
          </div>
          <div className="vm-content">
            <h3>Conduct a Feasibility Study and Select a Site</h3>
            <p>
              Assess the solar potential of your land by considering factors such as sunlight exposure, 
              land area, and its distance from the electrical grid. Opt for locations that receive significant sunlight and are in 
              proximity to substations to facilitate efficient energy transmission.
            </p>
          </div>
        </div>
        <div className="vm-card vm-teal">
          <div className="vm-content">
            <h3>Secure Required Approvals and Permits</h3>
            <p>
              Acquire the necessary permits from both state and central authorities. 
              This process generally involves obtaining clearances related to environmental assessments,
               grid connectivity, and construction regulations.
            </p>
          </div>
          <div className="vm-icon">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3132/3132693.png"
              alt="mission"
            />
          </div>
        </div>
<div className="vm-card vm-blue">
          <div className="vm-icon">
            <img
              src="https://cdn-icons-png.flaticon.com/512/189/189664.png"
              alt="vision"
            />
          </div>
          <div className="vm-content">
            <h3>Estimate the Costs of the Solar Power Plant</h3>
            <p>
             Determine the overall costs, which encompass solar panels, inverters, installation, and grid connection expenses.
            The financial outlay for a 1 MW plant can fluctuate based on geographical location and project scale, with land and 
            equipment being key determinants.
            </p>
          </div>
        </div>
        <div className="vm-card vm-teal">
          <div className="vm-content">
            <h3>Apply for Solar Power Plant Subsidies</h3>
            <p>
             The Indian government provides various incentives, including subsidies at both central and state levels,
             through initiatives such as PM-KUSUM, which focus on solar installations for agricultural purposes and grid-connected solar systems
            in rural areas.
            </p>
          </div>
          <div className="vm-icon">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3132/3132693.png"
              alt="mission"
            />
          </div>
        </div>
<div className="vm-card vm-blue">
          <div className="vm-icon">
            <img
              src="https://cdn-icons-png.flaticon.com/512/189/189664.png"
              alt="vision"
            />
          </div>
          <div className="vm-content">
            <h3>Choose Technology and Components</h3>
            <p>
              Select dependable components, including high-efficiency solar panels, durable inverters, and sturdy mounting structures.
               Utilizing quality equipment is essential for ensuring optimal performance and durability.
            </p>
          </div>
        </div>
        <div className="vm-card vm-teal">
          <div className="vm-content">
            <h3>Proceed with Installation and Commissioning</h3>
            <p>
              The installation phase involves the arrangement of solar panels, setup of inverters, and wiring of the entire system. 
              It is vital to engage skilled contractors and adhere to safety standards throughout this process.
            </p>
          </div>
          <div className="vm-icon">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3132/3132693.png"
              alt="mission"
            />
          </div>
        </div>

<div className="vm-card vm-blue">
          <div className="vm-icon">
            <img
              src="https://cdn-icons-png.flaticon.com/512/189/189664.png"
              alt="vision"
            />
          </div>
          <div className="vm-content">
            <h3>Implement Maintenance and Monitoring</h3>
            <p>
              Regular maintenance of solar panels and inverters, along with ongoing performance monitoring, 
              is crucial for sustaining efficiency. Utilizing monitoring software can assist in tracking energy output and promptly 
              addressing any issues that arise.
            </p>
          </div>
        </div>
      </div>
    </div>

   <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "40px 20px" }}>
      <h2 style={{  textAlign: "center", fontSize: "32px", fontWeight: "800", marginBottom: "40px",  }}>
        Land Procurement for  <span style={{ color: "#00bcd4" }}>Wind step by step</span>
      </h2>
      <p>A Wind for Industry project goes through six main stages <span style={{ color: "#0020d4ff" }}> Screening, Feasibility, Development, Contract Execution, Project Delivery, and Project operation.</span> 

We progress through similar phases as typical large-scale wind initiatives. However, a notable distinction is that Wind for Industry projects encompass a broader spectrum of technical development activities, emphasizing the specific electrical requirements of an individual customer and the local permitting process.

A Wind for Industry project undergoes six primary stages: screening, feasibility assessment, development, contract execution, project delivery, and operational phase.</p>
      {steps.map((step, index) => (
        <StepItem key={index} step={step} index={index} />
      ))}
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
</>  
);

};

export default landprocurement;
