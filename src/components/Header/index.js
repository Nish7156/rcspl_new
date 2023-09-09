import React, { useEffect } from "react";
import "../../css/Header.css";
import keyAreas from "../../lib/KeyAreas";
import Ilogo from "../../img/Logo.png";
import { setupHeaderFunctions } from "../../js/headerFunctions";

function Header() {
  useEffect(() => {
    setupHeaderFunctions();
  }, []);
  return (
    <>
      <nav className="z-[9999]">
        <div class="navbar">
          <i class="bx bx-menu"></i>
          <div class="logo">
            <img src={Ilogo} alt="Logo" className="h-16 w-auto" />
          </div>
          <div class="nav-links">
            <div class="sidebar-logo">
              <span class="logo-name">CodingLab</span>
              <i class="bx bx-x"></i>
            </div>
            <ul class="links">
              <li>
                <a href="#">HOME</a>
              </li>
              <li>
                <a href="#">Services</a>
                <i class="bx bxs-chevron-down htmlcss-arrow arrow  "></i>
                <ul class="htmlCss-sub-menu sub-menu">
                  {keyAreas.map((data) => {
                    return (
                      <li>
                        <a href="#">{data.title}</a>
                      </li>
                    );
                  })}
                </ul>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
            </ul>
          </div>
          <div></div>
        </div>
      </nav>
    </>
  );
}

export default Header;
