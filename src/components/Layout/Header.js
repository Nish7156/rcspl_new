import React from "react";
import { mainMenus } from "../../lib/constant";

function Header() {
  const createSubMenu = (subMenuData) => {
    return (
      <ul className="sub-menu">
        {subMenuData.map((item, index) => (
          <li key={index} className="menu-item current-menu-parent">
            <a href={`#${item.id}`}>{item.subTitle}</a>
          </li>
        ))}
      </ul>
    );
  };

  const createMenuItem = (menuItem) => {
    return (
      <li
        key={menuItem.id}
        className={`menu-item ${
          menuItem.subMenu ? "menu-item-has-children" : ""
        }`}
      >
        <a href={menuItem.link || "#"}>{menuItem.title}</a>
        {menuItem.subMenu && createSubMenu(menuItem.subMenu)}
      </li>
    );
  };
  return (
    <>
       <header>
          <div>
            <div>
              <ul>
                <li><i>98220 59460</i></li>
                <li>
                  <a href="mailto:info@rcspl.co.in">
                    <i>info@rcspl.co.in</i>
                  </a>
                </li>
              </ul>

              <ul>
                <li>
                  <a href="#">
                    <i></i>
                  </a>
                </li>

                <li>
                  <a href="#">
                    <i></i>
                  </a>
                </li>

                <li>
                  <a href="#">
                    <i></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <div>
              <span>
                <span></span>
                <span></span>
                <span></span>
              </span>

              <div>
                <a href="/"> RCSPL<span>.</span> </a>
              </div>

              <nav>
                <div>
                  <img src="./img/slider/cross-png-29390.png" />
                </div>
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a data-scroll href="#about">About us</a>
                  </li>
                  <li>
                    <a href="#service">Services</a>
                    <ul>
                      <li>
                        <a href="#service_1"
                          >Comprehensive Project Reports and Credit Facility
                          Procurement</a
                        >
                      </li>
                      <li>
                        <a href="#service_2">MIDC Plot Allotment</a>
                      </li>
                      <li>
                        <a href="#service_3">MIDC Approvals Process</a>
                      </li>
                      <li>
                        <a href="#service_4">Non-Agriculture (NA) Conversion</a>
                      </li>
                      <li>
                        <a href="#service_5"
                          >Integrated Logistic Parks (ILP) in Maharashtra</a
                        >
                      </li>
                      <li>
                        <a href="#service_6"
                          >Incentives for Developing Integrated Industrial
                          Areas</a
                        >
                      </li>
                      <li>
                        <a href="#service_7"
                          >IT/ITES Parks and Data Centers in Maharashtra</a
                        >
                      </li>
                      <li>
                        <a href="#service_8"
                          >Securing Mega Status for Industrial and Manufacturing
                          Projects in Maharashtra</a
                        >
                      </li>
                      <li>
                        <a href="#service_9"
                          >HOTEL & RESORTS APPROVALS & INCENTIVES</a
                        >
                      </li>
                      <li>
                        <a href="#service_10"
                          >Incentives and Subsidies under Various Government
                          Policies</a
                        >
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="/contact-us">Contact us</a>
                  </li>
                </ul>
              </nav>

              <ul>
                <li>Your Cost-Saving Partner</li>
              </ul>
            </div>
          </div>
        </header>
    </>
  );
}

export default Header;

