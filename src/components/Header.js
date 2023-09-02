import React from "react";

function Header() {
  return (
    <>
      <header className="header-v2" style={{ background: "red" }}>
        <div className="top-header">
          <div className="container-fluid">
            <ul className="contacts">
              <li>
                <i className="fa fa-phone"></i>+1 (800) 456 37 96
              </li>
              <li>
                <a href="mailto:info@company.com">
                  <i className="fa fa-envelope"></i>info@company.com
                </a>
              </li>
            </ul>

            <ul className="socials">
              <li>
                <a href="#">
                  <i className="fa fa-facebook-square"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-dribbble"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-pinterest"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-linkedin-square"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="bottom-header">
          <div className="container-fluid">
            <span className="mobile-navigation-toggle hidden-md hidden-lg">
              <span className="menui top-menu"></span>
              <span className="menui mid-menu"></span>
              <span className="menui bottom-menu"></span>
            </span>

            <div className="logo">
              <a href="index.html">
                BRICKS<span>.</span>
              </a>
            </div>

            <nav className="main-nav">
              <ul className="menu">
                <li className="menu-item menu-item-has-children current-menu-parent">
                  <a href="#">Home</a>
                  <ul className="sub-menu">
                    <li className="menu-item current-menu-item">
                      <a href="index.html">Home 1</a>
                    </li>
                    <li className="menu-item">
                      <a href="index-2.html">Home 2</a>
                    </li>
                    <li className="menu-item">
                      <a href="index-3.html">Home 3</a>
                    </li>
                    <li className="menu-item">
                      <a href="index-4.html">Home 4</a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item">
                  <a href="#">Pages</a>
                  <ul className="sub-menu">
                    <li className="menu-item">
                      <a href="about.html">About</a>
                    </li>
                    <li className="menu-item">
                      <a href="typography.html">Typography</a>
                    </li>
                    <li className="menu-item">
                      <a href="gallery.html">Gallery</a>
                    </li>
                    <li className="menu-item">
                      <a href="coming-soon.html">Coming Soon</a>
                    </li>
                    <li className="menu-item">
                      <a href="services.html">Services</a>
                    </li>
                    <li className="menu-item">
                      <a href="showreel.html">Showreel</a>
                    </li>
                    <li className="menu-item">
                      <a href="404.html">404</a>
                    </li>
                    <li className="menu-item">
                      <a href="faq.html">FAQ</a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item menu-item-has-children">
                  <a href="#">Portfolio</a>
                  <ul className="sub-menu">
                    <li className="menu-item">
                      <a href="portfolio-1col.html">1 Column</a>
                    </li>
                    <li className="menu-item">
                      <a href="portfolio-square.html">Grid</a>
                    </li>
                    <li className="menu-item">
                      <a href="portfolio.html">Grid 2</a>
                    </li>
                    <li className="menu-item">
                      <a href="portfolio-masonry.html">Masonry</a>
                    </li>
                    <li className="menu-item">
                      <a href="portfolio-wall.html">Wall</a>
                    </li>
                    <li className="menu-item">
                      <a href="single-portfolio.html">Single Portfolio</a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item menu-item-has-children">
                  <a href="#">Journal</a>
                  <ul className="sub-menu">
                    <li className="menu-item">
                      <a href="blog.html">Journal Listing</a>
                    </li>
                    <li className="menu-item">
                      <a href="single-gallery.html">Gallery Blog Post</a>
                    </li>
                    <li className="menu-item">
                      <a href="single-post.html">Quote Blog Post</a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item menu-item-has-children">
                  <a href="#">Shop</a>
                  <ul className="sub-menu">
                    <li className="menu-item">
                      <a href="shop.html">All Products</a>
                    </li>
                    <li className="menu-item">
                      <a href="single-product.html">Single Product</a>
                    </li>
                    <li className="menu-item">
                      <a href="cart.html">Cart</a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item menu-item-has-children">
                  <a href="#">Contact</a>
                  <ul className="sub-menu">
                    <li className="menu-item">
                      <a href="contact.html">With Sidebar</a>
                    </li>
                    <li className="menu-item">
                      <a href="contact-2.html">Without Sidebar</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>

            <ul className="actions">
              <li className="cart-btn">
                <a href="cart.html">
                  <i className="fa fa-shopping-cart"></i>$
                  <span className="cart-btn-price">80.00</span> (
                  <span className="cart-btn-count">2</span> items)
                </a>
                <div className="cart-items">
                  <div className="cart">
                    <ul>
                      <li className="cart-item">
                        <a href="#" className="remove-from-cart">
                          <i className="icon-deletepassive"></i>
                        </a>
                        <a className="cover" href="single-product.html">
                          <img
                            src="img/cart-thumbnail-2.jpg"
                            alt="cart cover"
                          />
                        </a>
                        <p className="title">
                          <a href="single-product.html">Impact Drill</a>
                        </p>
                        <span className="price">
                          <span className="item-price-number">1 x $1,190</span>
                        </span>
                      </li>

                      <li className="cart-item">
                        <a href="#" className="remove-from-cart">
                          <i className="icon-deletepassive"></i>
                        </a>
                        <a className="cover" href="single-product.html">
                          <img
                            src="img/cart-thumbnail-1.jpg"
                            alt="cart cover"
                          />
                        </a>
                        <p className="title">
                          <a href="single-product.html">
                            Temporibus Autem Quibus
                          </a>
                        </p>
                        <span className="price">
                          <span className="item-price-number">1 x $1,190</span>
                        </span>
                      </li>
                    </ul>

                    <div className="sub-total">
                      Subtotal: <span>$1,190</span>
                    </div>

                    <a href="cart.html" className="btn view-cart yellow">
                      view cart
                    </a>
                    <a href="#" className="btn white checkout">
                      checkout
                    </a>
                  </div>
                </div>
              </li>
              <li className="custom-select">
                <span className="default">
                  <i className="fa fa-globe"></i>
                  <span className="content">Eng</span>
                </span>
                <ul className="select-options dismiss">
                  <li>ENG</li>
                  <li>RUS</li>
                  <li>ESP</li>
                  <li>FRA</li>
                </ul>
              </li>
              <li className="search-trigger">
                <i className="icon fa fa-search dismiss"></i>
                <div className="search-box dismiss">
                  <form
                    className="search-form dismiss"
                    action="javascript:void(0)"
                  >
                    <div className="input-line dismiss">
                      <input
                        type="text"
                        className="search-input dismiss"
                        placeholder="Type and Hit Enter"
                      />
                    </div>
                  </form>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
