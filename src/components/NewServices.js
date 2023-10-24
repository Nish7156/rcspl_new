import React from "react";
import keyAreas from "../lib/KeyAreas";

function NewServices() {
  return (
    <>
      <section className='features-section'>
        <div className='container'>
          <h1>Services</h1>
          <div className='row'>
            {keyAreas &&
              keyAreas.map((data) => {
                const truncatedDescription =
                  data.description.length > 100
                    ? data.description.substring(0, 100).trim() + "..."
                    : data.description;

                return (
                  <a href={`service?ref=${data.id}`} key={data.id}>
                    <div className='col-sm-4' style={{ cursor: "pointer" }}>
                      <div className='feature-md'>
                        <img src={data.image} alt={data.title} />
                        <h5>{data.title}</h5>
                        <p>{truncatedDescription}</p>
                      </div>
                    </div>
                  </a>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
}

export default NewServices;
