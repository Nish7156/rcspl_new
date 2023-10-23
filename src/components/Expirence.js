import React from "react";
import Iimage from "../lib/images/head.jpg";
import Iimage1 from "../lib/images/head1.jpg";
import Iimage2 from "../lib/images/head2.jpg";
import { useNavigate } from "react-router-dom";

function Expirence() {
  return (
    <>
      <section class='about-us-section'>
        <div class='container'>
          <div class='section-header'>
            <h2 id='main-title'>Realm Consulting Services Private Limited</h2>
            <span>
              <i></i>
            </span>
            <p>
              An expert team of the professionals associated with the company
              comprises of Chartered Accountants, Company Secretaries,
              Advocates, Lawyers, MBAs, Chartered Engineers, Architects and
              Government Approved Valuers etc. This enables the company to
              efficiently deliver customized solutions for diverse needs of its
              reputed clients including business funding solutions, sanctions of
              subsidies, incentives, and grants in -aid & obtaining various
              industrial, business licenses, approvals, registration etc.
            </p>
          </div>

          <div class='row' style={{ cursor: "pointer" }}>
            <div class='col-md-6'>
              <img
                class='aligncenter about-img'
                src={Iimage}
                alt='about img'
                style={{ height: "100%" }}
              />
              <img
                class='aligncenter about-img'
                src={Iimage1}
                alt='about img'
                style={{ height: "100%" }}
              />
              <img
                class='aligncenter about-img'
                src={Iimage2}
                alt='about img'
                style={{ height: "100%" }}
              />
            </div>

            <div class='col-md-6'>
              <div class='feature-lg'>
                <i class='icon icon-Cog'></i>
                <h5>PROJECT FINANCE CONSULTANCY</h5>
                <p>
                  roject finance consultancy is a specialized financial advisory
                  service that assists businesses and organizations in securing
                  funding for large and complex projects. This consultancy
                  involves expertise in structuring financial arrangements,
                  conducting risk assessments, and navigating the intricate
                  financial landscape of project development.
                </p>
              </div>

              <div class='feature-lg'>
                <i class='icon icon-Target'></i>
                <h5>PREPARATION OF PROJECT REPORT</h5>
                <p>
                  A project report is a concise document that outlines the
                  objectives, plans, budget, risks, and other essential details
                  of a project. It serves as a roadmap and reference for project
                  stakeholders, providing a comprehensive overview of the
                  project's purpose and feasibility.
                </p>
              </div>

              <div class='feature-lg'>
                <i class='icon icon-Rocket'></i>
                <h5>PROJECT LOCATION & UTILITY SERVICES</h5>
                <p>
                  "Project location and utility services" refers to the
                  essential considerations regarding the geographical site where
                  a project will be executed and the availability of necessary
                  utilities. This component of project planning involves
                  assessing the suitability of the chosen location and ensuring
                  access to crucial services such as water, electricity,
                  transportation, and communication infrastructure. The
                  project's success often depends on careful evaluation and
                  integration of these factors into the overall project
                  strategy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Expirence;
