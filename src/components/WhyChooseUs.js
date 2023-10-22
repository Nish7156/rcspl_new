import React from "react";
import { FaHome, FaLightbulb, FaFileAlt, FaBriefcase } from "react-icons/fa";

function WhyChooseUs() {
  const companyData = {
    name: "Why Choose Realm Consulting Services ?",
    description:
      "Your reliable partner in the world of manufacturing projects. With a rich history dating back to 2006, we have been consistently delivering excellence in a one-stop solution for manufacturing projects related services.",
  };

  const services = [
    {
      icon: <FaHome style={{ color: "#ffc425" }} />,
      title: "Expertise",
      subtitle: "Highly qualified professionals",
      description:
        "Our team comprises highly qualified, experienced, and dynamic professionals, including Chartered Accountants, Company Secretaries, Advocates, Lawyers, MBAs, Chartered Engineers, Architects, and Government Approved Valuators.",
    },
    {
      icon: <FaFileAlt style={{ color: "#ffc425" }} />,
      title: "Customized Reports",
      subtitle: "Tailored reports for your needs",
      description:
        "Our expert team provides various tailored reports, including Survey, Analysis, Investigation, and Search Reports. These reports cover technical, legal, financial, marketing, and operational aspects.",
    },
    {
      icon: <FaLightbulb style={{ color: "#ffc425" }} />,
      title: "Comprehensive Services",
      subtitle: "Specializing in licenses, approvals, permissions & more",
      description:
        "We specialize in licenses, approvals, permissions, consents, NOCs, subsidies, incentives, and project finance consultancy. Our comprehensive range of services ensures that you have all the support you need for your manufacturing projects.",
    },
    {
      icon: <FaBriefcase style={{ color: "#ffc425" }} />,
      title: "Client-Centric Approach",
      subtitle: "Committed to your project's success",
      description:
        "We are committed to meeting the diverse needs of our esteemed clients. Your project's success is our top priority, and we work closely with you to achieve your goals.",
    },
  ];

  return (
    <section class="features-section v2">
      <div class="container-fluid">
        <div class="row bg-alfa pos-relative">
          <div class="col-md-6 no-padding pos-static">
            <div class="row-bg">
              <img src="newImg/features-section-bg.jpg" alt="features bg" />
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
                Building skyscrapers is like building the relationships. Steady
                construction requires solid and robust foundation as well as
                prosperous relations are built only on faith and mutual respect.
                We pay attention to all small details for best results.
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
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptate.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
