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
      img: "newImg/feature-line-1.png",
      description:
        "Our team comprises highly qualified, experienced, and dynamic professionals, including Chartered Accountants, Company Secretaries, Advocates, Lawyers, MBAs, Chartered Engineers, Architects, and Government Approved Valuators.",
    },
    {
      icon: <FaFileAlt style={{ color: "#ffc425" }} />,
      title: "Customized Reports",
      subtitle: "Tailored reports for your needs",
      img: "newImg/feature-line-2.png",
      description:
        "Our expert team provides various tailored reports, including Survey, Analysis, Investigation, and Search Reports. These reports cover technical, legal, financial, marketing, and operational aspects.",
    },
    {
      icon: <FaLightbulb style={{ color: "#ffc425" }} />,
      title: "Comprehensive Services",
      subtitle: "Specializing in licenses, approvals, permissions & more",
      img: "newImg/feature-line-3.png",
      description:
        "We specialize in licenses, approvals, permissions, consents, NOCs, subsidies, incentives, and project finance consultancy. Our comprehensive range of services ensures that you have all the support you need for your manufacturing projects.",
    },
    {
      icon: <FaBriefcase style={{ color: "#ffc425" }} />,
      title: "Client-Centric Approach",
      subtitle: "Committed to your project's success",
      img: "newImg/feature-line-1.png",
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
              <h2>{companyData.name}</h2>
              <span>
                <i></i>
              </span>
              <p>{companyData.description}</p>
            </div>

            <div class="row content">
              <div class="col-lg-8 col-lg-offset-2">
                {services.map((data, index) => {
                  return (
                    <div class="feature-line" key={index}>
                      <img src={`${data.img}`} alt={data.title} />
                      <h6>{data.title}</h6>
                      <p>{data.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
