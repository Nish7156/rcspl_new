import { useParams } from "react-router-dom";
import React from "react";
import { useLocation } from "react-router-dom";
import keyAreas from "../lib/KeyAreas";

function ServiceDetailsPage() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const refParam = searchParams.get("ref");
  const currentService = keyAreas?.find((area) => area.id === refParam);

  console.log("currentService", currentService);
  const containerStyle = {
    padding: "20px",
  };

  const imgStyle = {
    width: "100%",
    marginBottom: "20px",
  };

  const titleStyle = {
    textAlign: "center",
    fontSize: "24px",
    margin: "10px 0",
  };

  const descriptionStyle = {
    fontSize: "18px",
    marginBottom: "20px",
  };

  const listStyle = {
    margin: "20px 0",
    paddingLeft: "20px",
  };

  const listItemStyle = {
    listStyleType: "disc",
    marginBottom: "10px",
  };

  const nestedListItemStyle = {
    listStyleType: "circle",
    marginLeft: "20px",
  };

  return (
    <div style={containerStyle}>
      <div className='row'>
        <div className='col-12'>
          <img
            src={currentService.image}
            style={imgStyle}
            alt='Service Image'
          />
          <div className='container'>
            <h1 style={titleStyle}>{currentService.title}</h1>
            <p style={descriptionStyle}>{currentService.description}</p>
            <ul style={listStyle}>
              {currentService.keypoints.map((keypoint, index) => (
                <li key={index} style={listItemStyle}>
                  {keypoint.title}
                  <ul>
                    {keypoint.points.map((point, subIndex) => (
                      <li key={subIndex} style={nestedListItemStyle}>
                        {point}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceDetailsPage;
