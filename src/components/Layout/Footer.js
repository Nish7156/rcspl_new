import React from "react";

function Footer() {
  return (
    <>
      <footer>
        <div class="top-footer">
          <div class="container">
            <div class="row isotope">
              <div class="col-md-3 col-sm-6 col-xs-12 isotope-item">
                <div class="widget widget_contact">
                  <h4 class="widget-title">Contact Info</h4>
                  <div class="widget-body">
                    <ul class="contact-info clean-list">
                      <li>
                        <span class="title">Address:</span>
                        <p>
                          1314, 13th Floor, C1, Opal Square,CS. G. Barve Road,
                        </p>
                        <p>Wagle Estate, Thane - 400604, Maharashtra, India.</p>
                      </li>
                      <li>
                        <span class="title">Phone:</span>
                        <p>Call Me 98220 59460</p>
                      </li>
                      <li>
                        <span class="title">Email:</span>
                        <p>
                          <a href="mailto:info@rcspl.co.in">info@rcspl.co.in</a>
                        </p>
                      </li>
                      <li>
                        <span class="title">Follow Us:</span>
                        <ul class="socials clean-list">
                          <li>
                            <a href="#">
                              <i class="fa fa-facebook-square"></i>
                            </a>
                          </li>

                          <li>
                            <a href="#">
                              <i class="fa fa-linkedin-square"></i>
                            </a>
                          </li>

                          <li>
                            <a href="#">
                              <i class="fa fa-instagram"></i>
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="col-md-3 col-sm-6 col-xs-12 isotope-item">
                <div class="widget widget_instagram">
                  <h4 class="widget-title">Follow Instagram</h4>
                  <div class="widget-body">
                    <ul
                      class="instagram-feed clean-list"
                      data-instagram="6"
                      data-instagram-username="paul_garrat"
                    ></ul>
                  </div>
                </div>
              </div>

              <div class="col-md-3 col-sm-6 col-xs-12 isotope-item">
                <div class="widget widget_recent_posts">
                  <h4 class="widget-title">Recent Posts</h4>
                  <div class="widget-body">
                    <ul class="recent-posts clean-list">
                      <li>
                        <h4>
                          <a href="#">Standard gallery post</a>
                        </h4>
                        <ul class="post-meta">
                          <li>June 09, 2018</li>
                          <li>
                            by <a href="#">Mixuha</a>
                          </li>
                          <li>
                            <a href="#">3 Comments</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <h4>
                          <a href="#">Post with couple photos inside</a>
                        </h4>
                        <ul class="post-meta">
                          <li>June 09, 2018</li>
                          <li>
                            by <a href="#">Mixuha</a>
                          </li>
                          <li>
                            <a href="#">3 Comments</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <h4>
                          <a href="#">Smart quote post</a>
                        </h4>
                        <ul class="post-meta">
                          <li>June 09, 2018</li>
                          <li>
                            by <a href="#">Mixuha</a>
                          </li>
                          <li>
                            <a href="#">3 Comments</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="col-md-3 col-sm-6 col-xs-12 isotope-item">
                <div class="widget widget_subscribe">
                  <h4 class="widget-title">Enquire Now</h4>
                  <div class="widget-body">
                    <p>
                      Realm Consulting Services: Your Trusted Partner for
                      Strategic Solutions and Growth
                    </p>
                    <form class="subscribe-form" action="javascript:void(0)">
                      <input
                        class="input-line"
                        type="text"
                        placeholder="Your Email"
                      />
                      <input
                        class="submit-btn"
                        type="submit"
                        value="subscribe"
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="bottom-footer">
          <div class="container">
            <p class="alignleft align-left copyright">
              Copyright © 2023 rcspl.co.in. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
