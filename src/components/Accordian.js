import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp, FaCircle } from "react-icons/fa";
import keyAreas from "../lib/KeyAreas"; // Import the keyAreas data

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="container">
      <div className="service-header">
        <div className="section-head center">
          <h2
            className="aon-title"
            style={{ fontSize: "32px", fontWeight: "bold" }}
          >
            Our Services
          </h2>
        </div>
      </div>
      <div className="accordion " style={{ padding: "8px" }}>
        {keyAreas.map((item, index) => (
          <div
            style={{ marginBottom: "32px", padding: "16px" }}
            key={item.id}
            id={item.id}
            className={`accordion-item ${
              index === activeIndex ? "active" : ""
            }`}
          >
            <div
              className="accordion-title"
              onClick={() => handleItemClick(index)}
              style={{ borderRadius: "8px" }}
            >
              <span>
                <FaCircle className="bullet-icon" /> {/* Use the bullet icon */}
                {item.title}
              </span>
              {index === activeIndex ? (
                <FaChevronUp className="arrow-icon" /> // Up arrow icon when active
              ) : (
                <FaChevronDown className="arrow-icon" /> // Down arrow icon when inactive
              )}
            </div>
            {index === activeIndex && (
              <div className="accordion-content">
                <div className="acc-image">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="accordion-image"
                  />
                </div>
                <h5 className="subtitle">{item.subtitle} </h5>
                {item.description && <p>{item.description}</p>}
                <ul>
                  {!item.keyPoints[0].title &&
                    item.keyPoints.map((point, i) => (
                      <li key={i} className="li">
                        {point}
                      </li>
                    ))}
                </ul>
                <div>
                  {item.keyPoints[0].title &&
                    item.keyPoints.map((point, i) => (
                      <div className="point">
                        <div key={i} className="title">
                          {point.title}
                        </div>
                        <div className="description">{point.description}</div>
                      </div>
                    ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
