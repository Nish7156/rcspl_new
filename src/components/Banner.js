import React, { useEffect } from "react";
import IBanner from "../img/slider-background-1.jpg";

function Banner() {
  const test = [1, 2, 3];

  return (
    <>
      <section className="hero-section">
        <h2 className="hidden">Slider Section</h2>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="rev_slider_wrapper">
                <div className="fullscreen_slider rev_slider">
                  <ul>
                    {test.map((data) => {
                      return (
                        <li key={data} data-transition="fade">
                          <img
                            src={IBanner}
                            alt="slide1"
                            data-bgfit="cover"
                            data-bgposition="center center"
                            data-kenburns="on"
                            data-duration="7000"
                            data-ease="Linear.easeNone"
                            data-scalestart="110"
                            data-scaleend="100"
                            data-rotatestart="0"
                            data-rotateend="0"
                            data-offsetstart="0 0"
                            data-offsetend="0 0"
                            data-bgparallax="10"
                            className="rev-slidebg"
                            data-no-retina
                          />

                          <div
                            className="tp-caption WhiteTtl tp-resizeme"
                            data-x="center"
                            data-hoffset="0"
                            data-y="middle"
                            data-voffset="-50"
                            data-whitespace="nowrap"
                            data-transform_idle="o:1;"
                            data-transform_in="y:-150px;opacity:0;s:1000;e:Power4.easeOut;"
                            data-transform_out="opacity:0;s:500;s:500;"
                            data-start="1300"
                            data-responsive_offset="on"
                          >
                            Construct your future
                          </div>

                          <div
                            className="tp-caption WhiteTtlp tp-resizeme"
                            data-x="center"
                            data-hoffset="0"
                            data-y="middle"
                            data-voffset="30"
                            data-whitespace="pre"
                            data-transform_idle="o:1;"
                            data-transform_in="y:-100px;opacity:0;s:1000;e:Power2.easeOut;"
                            data-transform_out="opacity:0;s:500;s:500;"
                            data-start="1700"
                            data-responsive_offset="on"
                          >
                            As the general contructor, we first create the
                            highest level of trust and integrity with our
                            clients. We value our role in the success of your
                            project.
                          </div>

                          <div
                            className="tp-caption tp-resizeme"
                            data-x="center"
                            data-hoffset="0"
                            data-y="middle"
                            data-voffset="92"
                            data-transform_idle="o:1;"
                            data-transform_in="y:100px;opacity:0;s:1000;e:Power4.easeOut;"
                            data-transform_out="y:0;opacity:0;s:300;e:Power4.easeIn;"
                            data-start="2000"
                            data-responsive_offset="on"
                          >
                            <a className="btn yellow medium" href="#">
                              view more
                            </a>
                          </div>
                        </li>
                      );
                    })}
                  </ul>

                  <span className="scroll">
                    <i className="icon-Down"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner;
