import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterestP,FaHeart  } from 'react-icons/fa';


const Layout = () => {
  const [loading, setLoading] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (key) => {
    setMobileMenuVisible(false);
    setLoading(true);
    setTimeout(() => {
      if (key === "signout") {
        window.location.reload();
      } else {
        navigate(`/${key}`);
      }
      setLoading(false);
    }, 500);
  };

  const menuItems = [
    { key: "", label: "Home" },
    { key: "about", label: "About Us" },
    { key: "service", label: "Services" ,
      children:[
          { key: "service", label: "Service" },
          { key: "service/wind-power-solutions", label: "Wind Power Solutions" },
          { key: "service/solar-power-solutions", label: "Solar Power Solutions" },
          { key: "service/solar-thermal-solutions", label: "Solar Thermal Solutions" },
          { key: "service/industrial-electrifications", label: "Industrial Electrifications" },
          { key: "service/land-procurement", label: "Land Procurement" },
          { key: "service/elections-commissioning", label: "Elections Commissioning" },
          { key: "service/security-manpower-management", label: "Security Man Power Management" },
],
    },
    { key: "product", label: "Product" },
    { key: "contact", label: "Contact Us" },
  ];

  return (
    <div className="layout-container">
      {loading && <div className="loader">Loading...</div>}

      <header className="navbar">
        <div className="logo">
        <img src="https://zelvoenergy.com/assets/home-img/logo.png" alt ="zel"  style={{paddingLeft: '25px'}}/>
        </div>
<nav className={`nav-links ${mobileMenuVisible ? "open" : ""}`}>
  {menuItems.map((item) => (
    <div key={item.key} className={`nav-item ${item.children ? "has-submenu" : ""}`}>
      <button
  onClick={() =>
    item.children
      ? setActiveSubMenu(activeSubMenu === item.key ? null : item.key)
      : handleNavigation(item.key)
  }
  className="nav-button"
>
  {item.label}
</button>


     {item.children && activeSubMenu === item.key && (
  <ul className="submenu">
    {item.children.map((sub) => (
      <li
        key={sub.key}
        className="submenu-item"
        onClick={() => {
          handleNavigation(sub.key);
          setActiveSubMenu(null); // close after click
        }}
      >
        {sub.label}
      </li>
    ))}
  </ul>
)}
    </div>
  ))}
</nav>


        <button
          className="mobile-toggle"
          onClick={() => setMobileMenuVisible(!mobileMenuVisible)}
        >
          ☰
        </button>
      </header>

      <main className="content">
        <Outlet />
      </main>


<footer className="footer_area">
      <div className="new_footer_top">
        <div className="container">
          <div className="row">
            {/* Column 1 */}
            <div className="col-lg-3 col-md-8">
              <div className="f_widget">
                <h3>Zelvo Energy Solution Pvt Ltd</h3>
                <p>Zelvo Energy Solution Pvt Ltd (ZESPL) is your reliable partner in the energy sector, offering end-to-end solutions from inception to execution.</p>
                <div className="f_social_icon">
                  <a href="#"><i className="fab fa-facebook-f"></i></a>
                  <a href="#"><i className="fab fa-twitter"></i></a>
                  <a href="#"><i className="fab fa-instagram"></i></a>
                </div>
              </div>
            </div>

            {/* Column 2 */}
            <div className="col-lg-3 col-md-6">
              <div className="f_widget">
                <h3>Services</h3>
                <ul>
                  <li><a href="service/wind-power-solutions">Wind-Power-Solutions</a></li>
                  <li><a href="service/solar-power-solutions">solar-power-solutions</a></li>
                  <li><a href="service/solar-thermal-solutions">solar-thermal-solutions</a></li>
                  <li><a href="service/industrial-electrifications">industrial-electrifications</a></li>
                  <li><a href="service/land-procurement">land-procurement</a></li>
                  <li><a href="service/elections-commissioning">elections-commissioning</a></li>
                  <li><a href="service/security-manpower-management">security-manpower-management</a></li>

                </ul>
              </div>
            </div>

            {/* Column 3 */}
            <div className="col-lg-3 col-md-6">
              <div className="f_widget">
                <h3>Quick Links</h3>
                <ul>
                  <li><a href="service">Services</a></li>
                  <li><a href="product">Products</a></li>
                  <li><a href="contact">Contact Us</a></li>
                  <li><a href="about">About us</a></li>
                  <li><a href="career">career</a></li>
                  <li><a href="policy">Policy</a></li>
                </ul>
              </div>
            </div>

            {/* Column 4 */}
            <div className="col-lg-3 col-md-6">
              <div className="f_widget">
                <h3>Contact</h3>
                <ul>
                  <li><h4>Location:</h4></li>
                  <li> Zelvo Energy Solution Pvt Ltd 
                    No.150/1B, Nethaji Nagar, Thanakkankulam Main Road, 
                    Thirunagar(PO), Madurai, Tamil Nadu, India, Zip – 625 006
                  </li>
                  <li><h4>Email:</h4></li>
                  <li> gsr@zelvoenergy.com | business@zelvoenergy.com </li>
                  <li><h4>Phone:</h4></li>
                  <li> +91 9600 888 600</li>
                  
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="footer_bg">
          <div className="footer_bg_one"></div>
          <div className="footer_bg_two"></div>
        </div>
      </div>

      <div className="footer_bottom">
        &copy; {new Date().getFullYear()} Zelvo Energy Solution Pvt Ltd. All rights reserved.
      </div>
    </footer>
    </div>
      );
};

export default Layout;
