import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { FaBookmark,FaTag  } from 'react-icons/fa';
import data from "../Data/Data";

const Homepage = () => {
const [index, setIndex] = useState(0);
const slides = data.slides;
const cards = data.cards;
const stats = data.stats;
const Mantra = data.Mantra;
const insights = data.insights;

  
  // Auto-play every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

const CounterBox = ({ end, label, className }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const increment = end / 50; // how fast to increment
    const step = () => {
      current += increment;
      if (current < end) {
        setCount(Math.ceil(current));
        requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };
    requestAnimationFrame(step);
  }, [end]);

  return (
    <div className={`counter-box ${className}`}>
      <div className="counter">{count}+</div>
      <div className="label">{label}</div>
    </div>
  );
};
  return(
    <>
{/* --- Hero Slider ---- */}
    <div className="hero-slider">
    <AnimatePresence>
      <motion.div key={index} className="slide"
        style={{ backgroundImage: `url(${slides[index].img})`}} initial={{ opacity: 0, x: 100 }}  animate={{ opacity: 1, x: 0 }}  exit={{ opacity: 0, x: -100 }} transition={{ duration: 0.8 }}
      >
        <div className="overlay" />
        <div className="slide-content">
          <motion.h2 className="title" initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }} >
            {slides[index].title}
          </motion.h2>
          <motion.div className="divider"  initial={{ scaleX: 0 }}  animate={{ scaleX: 1 }} transition={{ delay: 0.5 }}/>
          <motion.p  className="caption"  initial={{ y: 30, opacity: 0 }}  animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6 }} >
            {slides[index].caption}
          </motion.p>
          <motion.a href="/"  target="_blank" rel="noreferrer" className="btn" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.8 }}  >
            Learn more
          </motion.a>
        </div>
      </motion.div>
    </AnimatePresence>
  </div>

{/* --- Credibility --- */}
      <div style={{ padding: '3rem 1rem', textAlign: 'center', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem',fontWeight: '800', marginBottom: '1rem', color: '#333' }}>
          We Are <span style={{ color: '#0066cc' }}>Credibility</span>
        </h1>
        <hr style={{ width: '80px', height: '4px', backgroundColor: '#0066cc', border: 'none', margin: '0 auto 2rem' }} />
        
        {/* Stats Container */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', padding: '0 1rem' }}>
          {stats.map((item, index) => (
            <div key={index} style={{ backgroundColor: 'white', borderRadius: '12px', padding: '2rem 1rem', boxShadow: '0 5px 15px rgba(0,0,0,0.05)', transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              position: 'relative', ':hover': { transform: 'translateY(-5px)', boxShadow: '0 8px 25px rgba(0,0,0,0.1)'}}}>
              <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', color: '#0066cc', fontSize: '24px', backgroundColor: 'white', borderRadius: '50%', width: '40px', height: '40px', display: 'flex',  alignItems: 'center',  justifyContent: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <FaBookmark />
              </div>
              <div style={{ fontSize: '1.1rem',fontWeight: '600',color: '#444',marginTop: '20px' }}>
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>

{/* --- who we are----  */}
        <div style={{ display: 'flex', flexWrap: 'wrap',justifyContent: 'space-between',alignItems: 'center', padding: '2rem',maxWidth: '1200px',margin: '0 auto', }}>
          <div style={{ flex: '1 1 50%', minWidth: '300px', padding: '1rem', }}>
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: '800', lineHeight: '1.2', marginBottom: '1.5rem', }}>
              Who We <span style={{ color: '#0066cc' }}>Are?</span>
            </h1>
            
            <p style={{ fontSize: '1rem',lineHeight: '1.6', marginBottom: '1rem', color: '#333',}}>
              <strong>Zelvo Energy Solution Pvt Ltd (ZESPL)</strong> is an <a href="/" style={{ fontWeight: 'bold', color: '#0066cc', textDecoration: 'none' }}>ISO 9001:2015 certified company</a> that has been actively offering a range of renewable energy solutions throughout India. Established in 2011, the company has positioned itself as a dependable supplier of <a href="/" style={{ fontWeight: 'bold', color: '#0066cc', textDecoration: 'none' }}>solar power plants</a>, <a href="/" style={{ fontWeight: 'bold', color: '#0066cc', textDecoration: 'none' }}>wind energy systems</a>, and <a href="/" style={{ fontWeight: 'bold', color: '#0066cc', textDecoration: 'none' }}>solar thermal power plants</a> in India and offers all-inclusive project management services.
            </p>
            
            <p style={{ fontSize: '1rem',lineHeight: '1.6', marginBottom: '1rem',color: '#333',}}>
              ZESPL works out to be one of the leading companies in the designing, construction, and maintenance of solar power, wind power and electrical panel providing for industries, and large-scale power generation. They also provide advisory services in regard to the <a href="/solar-subsidy" style={{ fontWeight: 'bold', color: '#0066cc', textDecoration: 'none' }}>solar water heater subsidy</a>, allowing clients to take advantage of government rebates. We will work on wind energy projects by giving efficient wind energy systems for India's growth and helping achieve the country's clean energy objectives.
            </p>
            
            <p style={{ fontSize: '1rem',lineHeight: '1.6',marginBottom: '2rem', color: '#333',}}>
              ZESPL takes pride in being a one-stop shop for its clients. Whether they need a solar thermal power, a rooftop solar setup, solar thermal or wind energy solutions, ZESPL guarantees exceptional service throughout the project lifecycle.
            </p>
            
            <button style={{ padding: '0.8rem 2rem', backgroundColor: '#0066cc',color: 'white', border: 'none',borderRadius: '30px', fontSize: '1rem',  fontWeight: '600', cursor: 'pointer',transition: 'all 0.3s ease', ':hover': {backgroundColor: '#e55a6e',  transform: 'translateY(-2px)',}}}>
              Get Quote →
            </button>
          </div>

          <div style={{ flex: '1 1 40%', minWidth: '330px', position: 'relative', padding: '2rem',marginTop: '2rem',}}>
            <div style={{  width: '100%',maxWidth: '400px',aspectRatio: '1/1', borderRadius: '50%', overflow: 'hidden', margin: '0 auto', position: 'relative', boxShadow: '0 10px 30px rgba(0,0,0,0.1)',}}>
              <img 
                src="https://res.cloudinary.com/dl6ixqdqh/image/upload/v1752141010/illustration-depicting-corporate-job_2_jr6qit.jpg" 
                alt="Team Member"   style={{ width: '100%',height: '100%',objectFit: 'cover', }}
              />
            </div>
            <div style={{  position: 'absolute', top: '10%', left: '0', display: 'flex', alignItems: 'center', backgroundColor: 'white', padding: '0.8rem', borderRadius: '50px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)', width: '120px', '@media (max-width: 768px)': { position: 'static', margin: '1rem auto', } }}>
              <img 
                src="https://png.pngtree.com/png-vector/20240914/ourmid/pngtree-cartoon-user-avatar-vector-png-image_13572228.png" 
                alt="icon"  style={{ width: '40px',height: '40px', marginRight: '0.8rem'}}
              />
              <div>
                <div style={{ fontWeight: '700', fontSize: '1.2rem' }}>100+</div>
                <div style={{ fontSize: '0.8rem', color: '#666' }}>Clients</div>
              </div>
            </div>

            <div style={{  position: 'absolute', bottom: '15%', left: '0', display: 'flex', alignItems: 'center', backgroundColor: 'white', padding: '0.8rem',  borderRadius: '50px',  boxShadow: '0 5px 15px rgba(0,0,0,0.1)',  width: '130px', '@media (max-width: 768px)': {  position: 'static',  margin: '1rem auto', } }}>
              <img 
                src="data:image/png;base64,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" 
                alt="icon"  style={{ width: '40px',  height: '40px', marginRight: '0.8rem', }}
              />
              <div>
                <div style={{ fontWeight: '700', fontSize: '1.2rem' }}>50+</div>
                <div style={{ fontSize: '0.8rem', color: '#666' }}>Countries</div>
              </div>
            </div>

            <div style={{ position: 'absolute', top: '20%',  right: '0', display: 'flex', alignItems: 'center', backgroundColor: 'white', padding: '0.8rem', borderRadius: '50px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)',  width: '130px',  '@media (max-width: 768px)': { position: 'static',  margin: '1rem auto',  } }}>
              <img 
                src="https://t4.ftcdn.net/jpg/06/05/33/75/360_F_605337567_cChSqVi0Xhiy8cLfB5bKw6lRJDKMbxKA.jpg" 
                alt="icon" style={{ width: '40px', height: '40px', marginRight: '0.8rem'}}
              />
              <div>
                <div style={{ fontWeight: '700', fontSize: '1.2rem' }}>100+</div>
                <div style={{ fontSize: '0.8rem', color: '#666' }}>Projects</div>
              </div>
            </div>
          </div>
        </div>
{/* --- Our Services ---*/}
      <div className="space" /> 
         <h1 style={{ fontSize: '2.5rem',fontWeight: '800', marginBottom: '1rem', color: '#333', textAlign:'center' }}>
          Our <span style={{ color: '#0066cc' }}>Services</span>
        </h1>
        <hr style={{ width: '80px', height: '4px', backgroundColor: '#0066cc', border: 'none', margin: '0 auto 2rem' }} />
      <div className="services-grid">
        {cards.map((cards, index) => {
          const zigzagClass = index % 2 === 0 ? "zigzag-left" : "zigzag-right";

          return (
            <div
              className={`service-card ${zigzagClass} ${cards.position?.replace(" ", "-")}`}
              key={index}
            >
              <div className="card-inner">
                <div className="card-front">
                  <img src={cards.image} alt={cards.title} />
                </div>
                <div className="card-back">
                  <h2>{cards.title}</h2>
                  <p>{cards.text}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

{/* ---Grid -1 --- */}
    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', padding: '2rem 1rem',  background: 'white'}}>
        {/* First Section */}
        <div style={{ display: 'flex', flexWrap: 'wrap-reverse', alignItems: 'center',  justifyContent: 'center',width: '100%', maxWidth: '1200px',  marginBottom: '3rem',  }}>
          {/* Image Container */}
          <div style={{ flex: '1 1 45%', minWidth: '350px',padding: '1rem',  textAlign: 'center',}}>
            <div style={{ width: '100%', maxWidth: '600px',height: 'auto', margin: '0 auto', }}>
              <img 
                src="https://zelvoenergy.com/assets/home-img/about.png" 
                alt="Renewable Energy"  className="jump-img" style={{ width: '100%', height: 'auto', objectFit: 'contain', borderRadius: '20%', }}
              />
            </div>
          </div>
          
          {/* Text Content */}
          <div style={{ flex: '1 1 45%', minWidth: '400px', padding: '1rem', }}>
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: '800', lineHeight: '1.2',marginBottom: '1rem',}}>
              Renewable <span style={{ color: '#0066cc' }}>Energy</span>
            </h1>
            <p style={{ fontSize: '1rem',  lineHeight: '1.6', color: '#333',}}>
              Renewable Energy: Discover the Power of Wind Energy Solutions Today! As we look toward a cleaner and more sustainable future,
              wind energy stands out as one of the most promising sources of renewable power. In recent years, the focus on renewable energy has grown tremendously in India. 
            <br/>  As concerns about pollution and climate change rise, many people are realizing that we need to find cleaner ways to power our lives.
              We Provide Renewable Energy can play a crucial role in this shift by offering solutions like solar panels, wind turbines, and bioenergy systems.
              We are thinking about how to contribute to this positive change, there are several steps we can take. You might even consider working with a Local Renewable Energy Service Providera to install solar panels on your home or school. 
              Every small action counts! By becoming informed and involved, you empower yourself and others to make decisions that benefit both our planet and our economy. Together, let's build a greener tomorrow!
            </p>
          </div>
        </div>

{/* --- Grid -2 --- */}
    <div style={{  display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center',width: '100%',  maxWidth: '1200px', }}>
      <div style={{ flex: '1 1 45%',minWidth: '300px', padding: '1rem',order: 1,}}>
          <h1 style={{fontSize: 'clamp(2rem, 5vw, 3rem)',fontWeight: '800',lineHeight: '1.2', marginBottom: '1rem',}}>
              Best Solar power solutions <span style={{ color: '#0066cc' }}>Company In India</span>
          </h1>
          <p style={{ fontSize: '1rem',  lineHeight: '1.6', color: '#333',}}>
              Zelvo Energy Solution Pvt Ltd (ZESPL) is an ISO 9001:2015 certified company offering end-to-end solutions in the energy sector. Starting in 2011 as M/s. LIT Energy, we have grown into a trusted provider of engineering and management services, including infrastructure development, construction, maintenance, and supply of electrical and sheet metal products.
              Established as a corporate entity in 2018, ZESPL is now a leading turnkey developer for wind and solar projects. We manage all aspects of energy projects, from liaisons to construction, ensuring comprehensive support for our clients. Our mission is to be the go-to partner for all energy needs in the renewable sector.
          </p>
        </div>
          
          {/* Image Container */}
          <div style={{  flex: '1 1 45%', minWidth: '300px',  padding: '1rem', textAlign: 'center',order: 2, }}>
            <div style={{ width: '100%', maxWidth: '600px',  height: 'auto', margin: '0 auto', }}>
              <img 
                src="https://zelvoenergy.com/assets/home-img/best-solar-power.png" 
                alt="Solar Power Solutions" className="jump-img"
                style={{ width: '100%', height: 'auto',  objectFit: 'contain',  borderRadius: '20%', }}
              />
            </div>
          </div>
        </div>
      </div>
{/* ---our Achievements ---  */}
            <div className="stats-section">
              <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem', color: '#333', textAlign: 'center', }} >
                Our <span style={{ color: '#0066cc' }}>Achievements</span>
              </h1>
            <hr style={{ width: '80px',  height: '4px', backgroundColor: '#0066cc', border: 'none', margin: '0 auto 2rem', }} />
              <p className="stats-subtext">
            "Shaping the Future, One Project at a Time! From Groundwork to Grand Solutions!"
          </p>

          <div className="counter-container">
            <div className="counter-box bg-purple">
              <div className="counter">50+</div>
              <div className="label">Clients</div>
            </div>
            <div className="counter-box bg-orange">
              <div className="counter">85+</div>
              <div className="label">Projects Executed</div>
            </div>
            <div className="counter-box bg-green">
              <div className="counter">2016</div>
              <div className="label">Incorporated Year</div>
            </div>
          </div>
        </div>
{/* ---Contact Us --- */}
      <div>
      <h1 style={{ fontSize: '2.5rem',fontWeight: '800', marginBottom: '1rem', color: '#333', textAlign:'center' }}>
          Contact <span style={{ color: '#0066cc' }}>Us</span>
        </h1>
      <hr style={{ width: '80px', height: '4px', backgroundColor: '#0066cc', border: 'none', margin: '0 auto 2rem' }} />
    <div className="mobile-container">
      <div className="section1">
        <div className="mobile">
          <div className="mobile-top">
            <div className="mobile-top-left"></div>
            <div className="mobile-top-center">
              <div className="prof-img">
                <img
                  src="https://zelvoenergy.com/assets/home-img/about/gurusamy.png"
                  alt=""
                />
              </div>
              <div className="prof-det">
                <div className="prof-name">Gurusamy Ramkrish</div>
                <div className="prof-status">Available</div>
              </div>
            </div>
            <div className="mobile-top-right"></div>
          </div>

          <div className="mobile-center">
            <div className="chat chat-left">
              I want the wind power solution.
            </div>
            <div className="chat chat-left">
              Could you send over some pictures of your Project, please?
            </div>
            <div className="chat chat-right">
              <img
                src="https://zelvoenergy.com/assets/home-img/our-services/1.png"
                alt="dog1"
              />
              
            </div>
            <div className="chat chat-right">
              Here are a few pictures
            </div>
            <div className="chat chat-right">Can you make it?</div>
            <div className="chat chat-left">
              She looks so happy! The time we discussed works. How long shall I
              take her out for?
            </div>
          </div>

          <div className="mobile-bottom">
            <div className="form">
              <input type="text" placeholder="Type a message…" />
            </div>
          </div>
        </div>
      </div>

      <div className="section2">
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Your Email" required />
          </div>
           <div className="form-group">
            <label htmlFor="email">Phone</label>
            <input type="number" id="phone" name="phone" placeholder="Your Phone" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Type your message..." rows="5" required></textarea>
          </div>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </div>
  </div>

{/* ---Our products--- */}
<section className="section products">
  <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem', color: '#333', textAlign: 'center', }} >
    Our <span style={{ color: '#0066cc' }}>Product</span>
  </h1>
  <hr style={{ width: '80px',  height: '4px', backgroundColor: '#0066cc', border: 'none', margin: '0 auto 2rem', }} />
  <div className="insights-wrapper">
    {insights.map((item, idx) => (
      <div className="insight-card light" key={idx}>
        <div className="insight-header">
          <span className="insight-type">{item.type}</span>
          <div className="insight-title">{item.title}</div>
        </div>
        <div className="insight-image-wrapper">
          <img className="insight-image"
            src={ item.image || 'https://via.placeholder.com/280x180?text=No+Image'}
            alt={item.title}     />
          {item.overlay && (
            <div className="insight-overlay">
              <p className="insight-description">{item.description}</p>
              {item.linkText && (
                <button className="expand-button" style={{alignItems: 'center'}}>
                  {item.linkText} <span>›</span>
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    ))}
  </div>
</section>

{/* ---Our Mantra--- */}

  <div style={{  padding: '4rem 1rem',textAlign: 'center', maxWidth: '1200px', margin: '0 auto', }}>
   <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem', color: '#333', textAlign: 'center', }} >
    Our <span style={{ color: '#0066cc' }}>Mantra</span>
  </h1>
  <hr style={{ width: '80px',  height: '4px', backgroundColor: '#0066cc', border: 'none', margin: '0 auto 2rem', }} />
  <div style={{  display: 'grid',  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', padding: '0 1rem', position: 'relative'}}>
    {Mantra.map((item, index) => (
      <div key={index} style={{ backgroundColor: 'white',  borderRadius: '12px', padding: '2rem 1.5rem', boxShadow: '0 5px 15px rgba(0,0,0,0.08)', transition: 'all 0.3s ease', position: 'relative', overflow: 'hidden',':hover': { transform: 'translateY(-8px)',  boxShadow: '0 12px 20px rgba(0,0,0,0.12)' } }}>
        {/* Tag Symbol - Top Left Corner */}
        <div style={{  position: 'absolute', top: '0', left: '0', backgroundColor: '#0066cc', color: 'white', padding: '0.3rem 1rem', borderBottomRightRadius: '12px', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', fontWeight: '600'}}>
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
  
  </>
);
}

export default Homepage;