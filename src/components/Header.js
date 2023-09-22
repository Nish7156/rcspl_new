import React from "react";

const Header = () => {
  return (
    <header className='header-v2 fixed'>
      <div className='top-header'>
        <div className='container-fluid'>
          <ul className='contacts'>
            <li>
              <i className='fa fa-phone'></i>98220 59460
            </li>
            <li>
              <a href='mailto:info@rcspl.co.in'>
                <i className='fa fa-envelope'></i>info@rcspl.co.in
              </a>
            </li>
          </ul>

          <ul className='socials'>
            <li>
              <a href='#'>
                <i className='fa fa-facebook-square'></i>
              </a>
            </li>

            <li>
              <a href='#'>
                <i className='fa fa-instagram'></i>
              </a>
            </li>

            <li>
              <a href='#'>
                <i className='fa fa-linkedin-square'></i>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className='bottom-header'>
        <div className='container-fluid'>
          <span className='mobile-navigation-toggle hidden-md hidden-lg'>
            <span className='menui top-menu'></span>
            <span className='menui mid-menu'></span>
            <span className='menui bottom-menu'></span>
          </span>

          <div className='logo'>
            <a href='/'>
              {" "}
              RCSPL<span>.</span>{" "}
            </a>
          </div>

          <nav className='main-nav' id='mobile-nav'>
            <div
              id='cross'
              style={{
                color: "black",
                top: "25px",
                left: "25px",
                position: "absolute",
                height: "20px",
                width: "20px",
              }}
            >
              <img src='./img/slider/cross-png-29390.png' alt='Cross' />
            </div>
            <ul>
              <li className='menu-item current-menu-parent'>
                <a href='/'>Home</a>
              </li>
              <li className='menu-item'>
                <a data-scroll href='#about'>
                  About us
                </a>
              </li>
              <li className=''>
                <a href='#service'>Services</a>
                <ul>
                  <li>
                    <a href='#service_1'>
                      Comprehensive Project Reports and Credit Facility
                      Procurement
                    </a>
                  </li>
                  <li class='menu-item'>
                    <a href='#service_2'>MIDC Plot Allotment</a>
                  </li>
                  <li class='menu-item'>
                    <a href='#service_3'>MIDC Approvals Process</a>
                  </li>
                  <li class='menu-item'>
                    <a href='#service_4'>Non-Agriculture (NA) Conversion</a>
                  </li>
                  <li class='menu-item'>
                    <a href='#service_5'>
                      Integrated Logistic Parks (ILP) in Maharashtra
                    </a>
                  </li>
                  <li class='menu-item'>
                    <a href='#service_6'>
                      Incentives for Developing Integrated Industrial Areas
                    </a>
                  </li>
                  <li class='menu-item'>
                    <a href='#service_7'>
                      IT/ITES Parks and Data Centers in Maharashtra
                    </a>
                  </li>
                  <li class='menu-item'>
                    <a href='#service_8'>
                      Securing Mega Status for Industrial and Manufacturing
                      Projects in Maharashtra
                    </a>
                  </li>
                  <li class='menu-item'>
                    <a href='#service_9'>
                      HOTEL & RESORTS APPROVALS & INCENTIVES
                    </a>
                  </li>
                  <li class='menu-item'>
                    <a href='#service_10'>
                      Incentives and Subsidies under Various Government Policies
                    </a>
                  </li>
                </ul>
              </li>
              <li className='menu-item'>
                <a href='/contact-us'>Contact us</a>
              </li>
            </ul>
          </nav>

          <ul className='actions'>
            <li>Your Cost-Saving Partner</li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
