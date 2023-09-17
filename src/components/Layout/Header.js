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
      <header class="header-v2">
        <div class="top-header">
          <div class="container-fluid">
            <ul class="contacts">
              <li>
                <i class="fa fa-phone"></i>98220 59460
              </li>
              <li>
                <a href="mailto:info@rcspl.co.in">
                  <i class="fa fa-envelope"></i>info@rcspl.co.in
                </a>
              </li>
            </ul>

            <ul class="socials">
              <li>
                <a href="#">
                  <i class="fa fa-facebook-square"></i>
                </a>
              </li>

              <li>
                <a href="#">
                  <i class="fa fa-instagram"></i>
                </a>
              </li>

              <li>
                <a href="#">
                  <i class="fa fa-linkedin-square"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="bottom-header">
          <div class="container-fluid">
            <span class="mobile-navigation-toggle hidden-md hidden-lg">
              <span class="menui top-menu"></span>
              <span class="menui mid-menu"></span>
              <span class="menui bottom-menu"></span>
            </span>

            <div class="logo">
              <a href="index.html">
                RCSPL<span>.</span>
              </a>
            </div>

            <nav class="main-nav">
              <ul class="menu">
                {mainMenus.map((menuItem) => createMenuItem(menuItem))}
              </ul>
            </nav>

            <ul class="actions">
              <li>Your Cost-Saving Partner</li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
