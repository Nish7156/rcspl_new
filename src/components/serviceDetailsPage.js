import { useParams } from "react-router-dom";
import React from "react";
import { useLocation } from "react-router-dom";

function PageTitle({ title, backgroundImg }) {
  const titleStyle = {
    backgroundImage: `url(${backgroundImg})`,
  };

  return (
    <section className='page-title' style={titleStyle}>
      <div className='pattern-layer' style={titleStyle}></div>
      <div className='auto-container'>
        <div className='content-box'>
          <div className='title-box centred'>
            <h1>{title}</h1>
          </div>
          <ul className='bread-crumb clearfix'>
            <li>
              <a href='https://www.primuspartners.in'>Home</a>
            </li>
            <li>{title}</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function ServiceDetailsPage() {
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);

  // Get the value of the 'ref' query parameter
  const refParam = searchParams.get("ref");

  const service = {
    title: "Public Policy Realization",
    description: "Your service description goes here...",
    image:
      "https://www.primuspartners.in/docs/images/page/74547_public-policy.jpeg", // Replace with your image path
  };
  console.log("refParam", refParam);
  return (
    <div className='container pt-12'>
      <div className='row'>
        <div className='col-12'>
          <PageTitle title={service.title} backgroundImg={service.image} />
        </div>
      </div>
      <div className='row'>{/* Rest of your content */}</div>
    </div>
  );
}

export default ServiceDetailsPage;
