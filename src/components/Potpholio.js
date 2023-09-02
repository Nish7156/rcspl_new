import React from "react";
import Iimage1 from '../img/portfolio-box-1.jpg'

function Potpholio() {
  const arr = [1, 2, 3, 4];
  return (
    <>
      <section className="portfolio-section v1">
        <div className="container-fluid">
          <div className="section-header">
            <h5 className="subtitle">Our Portfolio</h5>
            <h3>Latest Projects</h3>
          </div>

          <div className="row">
            {arr.map((data) => {
              return (
                <div key={data} className="col-md-3 col-xs-6">
                  <div className="portfolio-box">
                    <div className="cover">
                      <a href="single-portfolio.html">
                        <img
                          src={Iimage1}
                          alt="portfolio project"
                        />
                      </a>
                      <h6 className="title">Fullwidth video project</h6>
                      <ul className="categories clean-list">
                        <li>
                          <a href="#">Construction</a>
                        </li>
                        <li>
                          <a href="#">Design</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="section-header button">
            <h1>Let's make something great together</h1>
            <p>
              Get in touch with us and send some basic info for a quick quote
            </p>
            <a href="#" className="btn yellow medium dark-hover">
              Start a project
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Potpholio;
