import { useEffect, useState } from 'react';
import data from "../Data/Data";
const cardData = data.cardData;
const teamMembers = data.teamMembers;

const StackedCards = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [activeIndex, setActiveIndex] = useState(Math.floor(cardData.length / 2));
  
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Auto-center on mobile
    if (windowWidth < 768) {
      setActiveIndex(0);
    } else {
      setActiveIndex(Math.floor(cardData.length / 2));
    }
  }, [windowWidth]);

  const handleCardClick = (index) => {
    setActiveIndex(index);
  };

  const handleSwipe = (direction) => {
    if (direction === 'left' && activeIndex < cardData.length - 1) {
      setActiveIndex(activeIndex + 1);
    } else if (direction === 'right' && activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  // Touch events for mobile swipe
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      handleSwipe('left');
    }
    if (touchStart - touchEnd < -50) {
      handleSwipe('right');
    }
  };

  const getCardStyle = (index) => {
    const isMobile = windowWidth < 768;
    const isActive = index === activeIndex;
    const distance = Math.abs(index - activeIndex);
    const direction = index > activeIndex ? 1 : -1;

    if (isMobile) {
      return {
        transform: `translateX(${(index - activeIndex) * 100}%)`,
        opacity: isActive ? 1 : 0.7,
        zIndex: isActive ? 10 : 1,
        position: isActive ? 'relative' : 'absolute',
        left: isActive ? '0' : `${(index - activeIndex) * 100}%`,
        transition: 'all 0.3s ease',
      };
    } else {
      const scale = 1 - (distance * 0.1);
      const translateX = direction * (distance * 20);
      const rotate = direction * (distance * 2);
      
      return {
        transform: `translate(calc(-50% + ${translateX}px), 0) scale(${scale}) rotate(${rotate}deg)`,
        zIndex: isActive ? 10 : 5 - distance,
        opacity: isActive ? 1 : 0.9 - (distance * 0.1),
      };
    }
  };

  return (
    <>   
    {/*--- About Section --- */}
      <div className="about-section" style={{ paddingTop: '60px', paddingInline: '20px' }}>
        <div className="about-wrapper" style={{ display: 'flex', flexWrap: 'wrap',gap: '2rem', justifyContent: 'center'  }} >
          <div className="about-text" style={{flex: '1 1 500px',minWidth: '300px',maxWidth: '700px'}}>
            <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', marginBottom: '1rem' }}>
              Zelvo Energy Solution Pvt Ltd <span className="highlight">(ZESPL)</span>
            </h2>
            <p>
              Zelvo Energy Solution Pvt Ltd (ZESPL) is a leading <strong>ISO 9001:2015 certified</strong> company dedicated to delivering solutions in the renewable energy sector. Founded in 2011 as <em>M/s. LIT Energy</em>, we have evolved into a trusted engineering and management service provider.
            </p>
            <p>
              Established as a corporate entity in 2018, ZESPL is now a leading turnkey developer for wind and solar projects, offering full-cycle services — from liaisons to execution.
            </p>
            <div style={{display: 'flex',  flexWrap: 'wrap',alignItems: 'center',justifyContent: 'center', gap: '20px', padding: '20px 0' }}>

        <div style={{ flex: '1 1 300px', maxWidth: '500px' }}>
          <img
            src="https://zelvoenergy.com/assets/home-img/solarfanright.png"
            alt="Solar Fan" style={{ width: '70%', height: 'auto', objectFit: 'contain' }}
          />
        </div>

        <div style={{ flex: '1 1 300px', maxWidth: '500px' }}>
          <ul style={{ lineHeight: 1.7, paddingLeft: 0, listStyleType: 'none' }}>
            <li>👉 End-to-end rooftop & residential solar panels</li>
            <li>👉 Home solar and wind systems</li>
            <li>👉 Affordable & commercial solar panel solutions</li>
            <li>👉 Infrastructure, electrical & sheet metal supply</li>
          </ul>
        </div>
     </div>
      <p className="small-text">
        With a legacy rooted in <strong>M/s. Lakshmutha Infratech (LIT)</strong>, we bring over 15 years of industry expertise.
      </p>
    </div>

    <div
      className="about-image-container"
      style={{ flex: '1 1 400px',display: 'flex',flexDirection: 'column',justifyContent: 'flex-end',alignItems: 'flex-start',minWidth: '300px',maxWidth: '500px'}}>
      <img
        src="https://zelvoenergy.com/assets/home-img/about/about-banner.png"
        alt="Energy Illustration"
        className="about-image" style={{width: '100%',height: 'auto',objectFit: 'contain',objectPosition: 'bottom left'}}/>
      <p style={{ marginTop: '1rem', lineHeight: '1.6' }}>
        ZESPL was formed by the team having strong technical background and committed to produce high quality products.<br /><br />
        ZESPL is backed by technocrats with in-depth knowledge and years of experience in the electrical industry. We are working right from the manufacturer of various products and backed by a good information network and other essential requirements to penetrate in the quality market.<br /><br />
        We are distinguished for our unique aptitude to supply premium quality products within a precise time frame. Within a short span of time, the organization has carved a niche for itself as a leading supplier of various products and services.<br /><br />
        We believe that there is only one way to earn trust — quality product by delivering in time.
      </p>
    </div>
  </div>
</div>



     
{/* key Services */}
   <div style={{ minHeight: '100vh', width: '100%',display: 'flex', flexDirection: 'row', flexWrap: 'wrap', padding: '20px', boxSizing: 'border-box',gap: '40px',justifyContent: 'center', alignItems: 'flex-start' }}>
  {/* Text Section */}
  <div style={{ flex: '1 1 500px',  maxWidth: '600px', display: 'flex',flexDirection: 'column',justifyContent: 'center', padding: '20px',textAlign: 'left'}}>
    <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)',fontWeight: '700', marginBottom: '1rem', lineHeight: '1.3'}}>
      Key Services <span style={{ color: '#0066cc', fontWeight: '600' }}>Offered by ZESPL</span>
    </h1>

    <ul style={{ lineHeight: 1.8, paddingLeft: '0', listStyleType: 'none', fontSize: '1.05rem' }}>
      <li>👉 ZESPL was formed by a team with a strong technical background, committed to producing high-quality products.</li>
      <li>👉 Backed by technocrats with deep knowledge and years of experience in the electrical industry.</li>
      <li>👉 We work directly with manufacturers and maintain a strong information network to penetrate the quality market.</li>
      <li>👉 Distinguished for our unique ability to supply premium quality products within precise timeframes.</li>
      <li>👉 In a short span, ZESPL has carved a niche as a leading supplier of various products and services.</li>
      <li>👉 We believe trust is earned by delivering quality products on time.</li>
    </ul>
  </div>

  {/* Card Section */}
  <div style={{ flex: '1 1 400px', maxWidth: '600px',display: 'flex',justifyContent: 'center', alignItems: 'center', position: 'relative',height: '600px',padding: '20px 0',width: '100%' }}>
    <div style={{ position: 'relative',width: '100%',height: '100%',maxWidth: '360px', touchAction: 'pan-y' }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {cardData.map((card, index) => (
        <div
          key={index}
          style={{ position: 'absolute', width: '100%',  height: '500px', borderRadius: '10px',  backgroundColor: card.color,  cursor: 'pointer',  boxShadow: index === activeIndex  ? '0 8px 24px rgba(0,0,0,0.3)' : '0 4px 16px rgba(0,0,0,0.15)', transition: 'all 0.3s ease', transformOrigin: 'center bottom', display: 'flex', flexDirection: 'column',overflow: 'hidden', left: '50%', transform: 'translateX(-50%)', ...getCardStyle(index) }}
          onClick={() => handleCardClick(index)}
        >
          <div style={{ height: '250px',backgroundImage: `url(${card.img})`, backgroundSize: 'cover',  backgroundPosition: 'center', position: 'relative'}}>
            <div style={{ position: 'absolute', bottom: 0,left: 0, right: 0,background: 'linear-gradient(transparent, rgba(0,0,0,0.6))', padding: '15px', color: 'white',  fontSize: '1.3rem', fontWeight: 'bold' }}>
              {card.title}
            </div>
          </div>
          <div style={{ padding: '20px', color: 'white', flex: 1,display: 'flex',flexDirection: 'column',justifyContent: 'space-between'}}>
            <p style={{ margin: 0, lineHeight: 1.5 }}>
              {card.description}
            </p>
            <button style={{ alignSelf: 'flex-start', background: 'white',  color: card.color,  border: 'none', padding: '10px 20px', borderRadius: '6px', marginTop: '15px', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer',transition: 'background 0.3s ease' }}>
              Learn More
            </button>
          </div>
        </div>
      ))}

      {/* Mobile Dots */}
      {windowWidth < 768 && (
        <div style={{
          position: 'absolute',
          bottom: '10px',
          left: 0,
          right: 0,
          display: 'flex',
          justifyContent: 'center',
          gap: '10px'
        }}>
          {cardData.map((_, idx) => (
            <div
              key={idx}
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: idx === activeIndex ? '#fff' : 'rgba(255,255,255,0.4)',
                cursor: 'pointer'
              }}
              onClick={() => handleCardClick(idx)}
            />
          ))}
        </div>
      )}
    </div>
  </div>
</div>

{/* -Our Certificates--- */}
<div style={{padding: '40px 20px', textAlign: 'center',}} >
  <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '10px', }}>
    Our <span style={{ color: '#0066cc' }}>Certificates</span>
  </h1>

  <hr style={{ width: '80px', borderTop: '2px solid #0ea5e9', margin: '0 auto 30px', }} />
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', flexWrap: 'wrap',}}>
    <figure style={{ margin: 0 }}>
      <img
        src="https://zelvoenergy.com/assets/home-img/about/certified/certified-one.png"
        alt="Certificate 1"
        style={{ maxWidth: '100%', width: '400px', height: 'auto', borderRadius: '8px',  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', }} />
    </figure>

    <figure style={{ margin: 0 }}>
      <img
        src="https://zelvoenergy.com/assets/home-img/about/certified/certified-two.png"
        alt="Certificate 2"
        style={{ maxWidth: '100%',width: '400px', height: 'auto', borderRadius: '8px',  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',  }} />
    </figure>

    <figure style={{ margin: 0 }}>
      <img
        src="https://zelvoenergy.com/assets/home-img/about/certified/certified-three.png"
        alt="Certificate 3"
        style={{ maxWidth: '100%', width: '400px', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', }} />
    </figure>
  </div>
</div>

{/* Mission and Vission */}
  <div className="mvv-container">
    <div className="mvv-card">
      <div className="corner corner-orange"></div>
      <div className="mvv-icon">🎯</div>
      <h3 className="mvv-title text-orange">MISSION</h3>
      <p className="mvv-text">
      Our mission is to provide a cleaner, greener future through reliable, 
      efficient, and safe energy solutions that benefit our customers, communities, and the environment.
      </p>
    </div>

    <div className="mvv-card">
      <div className="corner corner-green"></div>
      <div className="mvv-icon">👁️</div>
      <h3 className="mvv-title text-green">VISION</h3>
      <p className="mvv-text">
        "To be a leading provider of innovative, sustainable, and cost-effective energy solutions, empowering businesses and communities with clean and efficient energy technologies.
      </p>
    </div>

    <div className="mvv-card">
      <div className="corner corner-blue"></div>
      <div className="mvv-icon">💎</div>
      <h3 className="mvv-title text-blue">VALUES</h3>
      <p className="mvv-text">
        We aim to contribute to a greener future by delivering high-quality energy systems that promote environmental stewardship and enhance the quality of life for all."
      </p>
    </div>
  </div>

{/* ---Contact Section--- */}
    <div className="contact-section">
      <div className="contact-content">
        <div className="contact-text">
          <p className="subtitle">Get In <span className="bold">Touch</span></p>
          <h2 className="heading">Head Office</h2>
          <p className="company-name">Zelvo Energy Solution Pvt Ltd.</p>
          <p className="address">
            No.150/1B, Nethaji Nagar, Thanakkankulam Main Road,<br/> 
            Thirunagar(PO), Madurai, Tamil Nadu, India, Zip – 625 006
          </p>

          <button className="location-btn">
            <img src="https://img.icons8.com/color/48/000000/whatsapp--v1.png" alt="WhatsApp" />
            Get Location
          </button>
        </div>

        <div className="map-circle">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.591902479774!2d78.03194627480921!3d9.884563775010811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00cfcb90ddd6a1%3A0xb87d39f825a05f4b!2sZelvo%20Energy%20Solutions%20Private%20Limited!5e0!3m2!1sen!2sin!4v1752063272302!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
   
    <div className="team-wrapper">
      {teamMembers.map((member, index) => (
        <div className="profile-section" key={index}>
          <div className="profile-grid">
            <div className="image-container">
              <img src={member.image} alt={member.name} className="character-img" />
            </div>
            <div className="right-grid">
              <div className="bottom-right">
                <div className="vertical-line"></div>
                <div className="text-content">
                  <h1>
                    <span className="white">{member.name}</span>
                  </h1>
                <div className="tag">{member.role}</div>
                </div>
              </div>
              <div className="orange-box">
                <div className="text-box-content">
                  <p>{member.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
         </>
  );
};

export default StackedCards;