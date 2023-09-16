import React from "react";
import Map from "./Map";

function contactUs() {
  return (
    <>
      <section class="contact-section v2">
        <div class="container">
          <div class="row">
            <div class="col-md-9 col-content contact_form">
              <div id="note"></div>
              <div id="fields">
                <form class="respond-form" id="ajax-contact-form" action="#">
                  <h6>ENQUIRE NOW</h6>

                  <div class="input-line">
                    <input type="text" name="name" class="check-value" />
                    <span>Name</span>
                  </div>

                  <div class="input-line">
                    <input type="text" name="email" class="check-value" />
                    <span>Email</span>
                  </div>

                  <div class="input-line textarea">
                    <textarea
                      class="check-value"
                      name="message"
                      placeholder=""
                    ></textarea>
                    <span>Message</span>
                  </div>
                  <input
                    class="form-send btn yellow dark-hover"
                    type="submit"
                    value="submit"
                  />
                </form>
              </div>
            </div>

            <div class="col-md-3 col-sidebar">
              <div class="sidebar">
                <div class="row isotope">
                  <div class="col-md-12 col-sm-6 col-xs-12 isotope-item">
                    <div class="widget widget_contact">
                      <h4 class="widget-title">Contact Info</h4>
                      <div class="widget-body">
                        <ul class="contact-info clean-list">
                          <li>
                            <span class="title">Address:</span>
                            <p>
                              1314, 13th Floor, C1, Opal Square,CS. G. Barve
                              Road,
                            </p>
                            <p>
                              Wagle Estate, Thane - 400604, Maharashtra, India.
                            </p>
                          </li>
                          <li>
                            <span class="title">Phone:</span>
                            <p>Call Me 98220 59460</p>
                          </li>
                          <li>
                            <span class="title">Email:</span>
                            <p>
                              <a href="mailto:info@rcspl.co.in">
                                info@rcspl.co.in
                              </a>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Map />
    </>
  );
}

export default contactUs;
