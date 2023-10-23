import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const Address = () => {
  return (
    <section className="container">
      <div
        style={{
          fontSize: "14px",
          color: "#656b6f",
          width: "100%",
          maxWidth: "1150px",
          margin: "2px auto",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            margin: "20px 0px",
          }}
          id="main-title"
        >
          About Us
        </h2>
        <p
          style={{
            margin: "20px 0px",
          }}
        >
          Realm Consulting Services Pvt. Ltd. (formerly Realm Financial
          Consultants Pvt. Ltd.), established in 2006, is your trusted partner
          for comprehensive project-related services. With branches in Thane,
          Nashik, and Aurangabad in Maharashtra, we excel in providing one-stop
          solutions for manufacturing projects. Our services include licenses,
          approvals, permissions, consents, NOC’s, subsidies, incentives, and
          project finance consultancy. We are proud to be led by a team of
          highly qualified, experienced, and dynamic professionals, including
          Chartered Accountants, Company Secretaries, Advocates, Lawyers, MBAs,
          Chartered Engineers, Architects, and Government-Approved Valuators.
          This diverse expertise allows us to deliver tailored solutions to meet
          the unique needs of our esteemed clients. Our offerings extend to
          providing various reports such as Survey, Analysis, Investigation &
          Search Reports, tailored to the specific requirements of
          entrepreneurs. These reports provide comprehensive insights into
          technical, legal, financial, marketing, and operational aspects of
          proposed projects, ensuring feasibility and viability.
        </p>
      </div>
      <div className="features-row">
        <div className="row">
          <div className="col-sm-4">
            <div className="feature-box">
              <i className="icon">
                <FaMapMarkerAlt />
              </i>
              <h5 className="title">NASHIK</h5>
              <p className="description">
                1, Niwas Blossom, Sharanpur, Trimbak Link Road, Canada Corner,
                Nashik - 422005 Maharashtra.
              </p>
              <h6>Call US ON: +91 253 2317160</h6>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="feature-box">
              <i className="icon">
                <FaMapMarkerAlt />
              </i>
              <h5 className="title">THANE</h5>
              <p className="description">
                2, Chandranil, Gawand Path, Behind State Bank Colony, Next to
                Gurudwara, Naupada, Thane - 400602
              </p>
              <h6>Call US ON: +91 9130091205</h6>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="feature-box">
              <i className="icon">
                <FaMapMarkerAlt />
              </i>
              <h5 className="title">AURANGABAD</h5>
              <p className="description">
                ‘Saket’, 115, Mahatma Gandhi Nagar, Behind Fire Brigade, Station
                Road, Aurangabad – 431005.
              </p>
              <h6>Call US ON: +91 9130079875</h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Address;
