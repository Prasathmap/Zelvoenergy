import React from "react";

const ContactSection = () => {
  return (
    <>
      {/* Contact Address Section */}
      <section className="contact-address-area">
        <div className="container">
          <div className="sec-title-style1 text-center max-width">
            <div className="title">Contact Us</div>
            <div className="text">
              <div className="decor-left"><span></span></div>
              <p>Quick Contact</p>
              <div className="decor-right"><span></span></div>
            </div>
            <div className="bottom-text">
              <p>
                Fixyman is proud to be the name that nearly 1 million homeowners
                have trusted since 1996 for home improvement and repair,
                providing virtually any home repair.
              </p>
            </div>
          </div>

          <div className="contact-address-box row">
            {/* Left box */}
            <div className="col-sm-12 col-md-4 single-contact-address-box text-center">
              <div className="icon-holder">
                <span className="icon-clock-1"></span>
              </div>
              <h2>Phone Numbers:</h2><br/>
              <h3>+91 9444 444 516</h3>
            </div>

            {/* Middle box */}
            <div className="col-sm-12 col-md-4 single-contact-address-box main-branch">
              <h3>Address:</h3>
              <div className="inner">
                <ul>
                  <li>
                    <div className="title">
                      <h4>Corporate Office:</h4>
                    </div><br/><br/>
                    <div className="text">
                      <p>
                      No.150/1B, Nethaji Nagar,
                      Thanakkankulam Main Road,
                      Thirunagar(PO),
                      Madurai, Tamil Nadu, India<br/>
                      Zip – 625 006.
                      </p>
                    </div>
                  </li>
                  
                  <li>
                    <div className="title">
                      <h4>Office Hrs:</h4>
                    </div>
                    <div className="text">
                      <p>Mon-Fri: 9:30am - 6:30pm<br /> Sat-Sun: Closed</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right box */}
            <div className="col-sm-12 col-md-4 single-contact-address-box text-center">
              <div className="icon-holder">
                <span className="icon-question-2"></span>
              </div>
              <h2>Email Addresses:</h2> <br/>
              <h3>business@zelvoenergy.com<br/>
engineering@zelvoenergy.com</h3>
            </div>
          </div>
        </div>
      </section>

    
    </>
  );
};

export default ContactSection;
