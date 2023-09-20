import React, { useState, useEffect } from "react";
import { FaChevronDown, FaChevronUp, FaCircle } from "react-icons/fa";
import keyAreas from "../lib/KeyAreas"; // Import the keyAreas data

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    // Preload images
    const imagePromises = keyAreas.map((item) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = item.image;
        img.onload = resolve;
      });
    });

    // Wait for all images to load
    Promise.all(imagePromises)
      .then(() => {
        // All images have loaded, set the state to true
        setImagesLoaded(true);
      })
      .catch((error) => {
        console.error("Error preloading images:", error);
      });
  }, []);

  const handleItemClick = (index) => {
    setActiveIndex((prevIndex) => (index === prevIndex ? null : index));
  };

  useEffect(() => {
    const hash = window.location.hash.substring(1);

    const index = keyAreas.findIndex((item) => item.id === hash);

    if (index !== -1) {
      setActiveIndex(index);
    }
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      const index = keyAreas.findIndex((item) => item.id === hash);
      if (index !== -1) {
        setActiveIndex(index);
      }
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  useEffect(() => {
    const hash = window.location.hash.substring(1);

    if (hash) {
      const targetElement = document.getElementById(hash);
      if (targetElement) {
        const windowHeight = window.innerHeight;
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
          blockOffset: windowHeight - 90,
        });
      }
    }
  }, []);

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
        {imagesLoaded &&
          keyAreas.map((item, index) => (
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
                  <FaCircle className="bullet-icon" /> {item.title}
                </span>
                {index === activeIndex ? (
                  <FaChevronUp className="arrow-icon" />
                ) : (
                  <FaChevronDown className="arrow-icon" />
                )}
              </div>
              {index === activeIndex && (
                <div className="accordion-content">
                  <div className="acc-image">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="accordion-image"
                      style={{ height: "50%" }}
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
                        <div className="point" key={i}>
                          <div className="title">{point.title}</div>
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
