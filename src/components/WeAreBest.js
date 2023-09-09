import React from "react";
import Ifeat from "../img/features-section-bg.jpg"

function WeAreBest() {
  return (
    <div>
      <section class="features-section v2">
        <div class="container-fluid">
          <div class="row bg-alfa pos-relative">
            <div class="col-md-6 no-padding pos-static">
              <div class="row-bg">
                <img src={Ifeat} alt="features bg" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="section-header">
                <h5 class="subtitle">Our Skills</h5>
                <h2>We are the best in</h2>
                <span>
                  <i></i>
                </span>
                <p>
                  Building skyscrapers is like building the relationships.
                  Steady construction requires solid and robust foundation as
                  well as prosperous relations are built only on faith and
                  mutual respect. We pay attention to all small details for best
                  results.
                </p>
              </div>

              <div class="row content">
                <div class="col-lg-8 col-lg-offset-2">
                  <div class="feature-line">
                    <img src="img/feature-line-1.png" alt="features img" />
                    <h6>House construction</h6>
                    <p>
                      Aenean vel purus non lorem malesuada ultricies. Phasellus
                      nibh odio, facilisis nec turpis ut, elementum scelerisque
                      arcu qui dolorem ipsum.
                    </p>
                  </div>
                  <div class="feature-line">
                    <img src="img/feature-line-2.png" alt="features img" />
                    <h6>Scale modelling</h6>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusant doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo.
                    </p>
                  </div>
                  <div class="feature-line">
                    <img src="img/feature-line-3.png" alt="features img" />
                    <h6>interior solutions</h6>
                    <p>
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      aut odit aut fugit, sed quia consequuntur magni dolores
                      eos qui ratione voluptate.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WeAreBest;
