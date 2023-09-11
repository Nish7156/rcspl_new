import React, { useState } from 'react';
import keyAreas from '../lib/KeyAreas';

const Accordion = () => {
    const [activeItem, setActiveItem] = useState(0);

    const handleItemClick = (index) => {
        setActiveItem(index === activeItem ? null : index);
    };

    return (
        <div className='container'>
            <div className="section-head center">
                <h2 className="aon-title">Our Services</h2>
            </div>
            <div className="accordion" id="accordionExample">
                {keyAreas.map((data, index) => (
                    <div className="accordion-item my-4 p-2 rounded-2 border-top" key={index}>
                        <h2 className="accordion-header" id={`heading${index}`}>
                            <button
                                className={`accordion-button ${index === activeItem ? '' : 'collapsed'}`}
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#collapse${index}`}
                                aria-expanded={index === activeItem ? 'true' : 'false'}
                                style={{ fontWeight: 'bold', borderRadius: '0' }}
                                onClick={() => handleItemClick(index)}
                            >
                                {data.title}
                            </button>
                        </h2>
                        <div
                            id={`collapse${index}`}
                            className={`accordion-collapse collapse ${index === activeItem ? 'show' : ''}`}
                            aria-labelledby={`heading${index}`}
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body">
                                <div className="row">
                                    <div className="col-md-4">
                                        <img
                                            className="img-fluid rounded"
                                            title="title"
                                            alt=""
                                            src={data.image} // Use the image URL from your data
                                        />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="post-info d-flex flex-column h-100">
                                            <div>
                                                <div className="aon-post-text">
                                                    <p>{data.description}</p>
                                                </div>

                                                <div>
                                                    {data.keyPoints && data.keyPoints.length > 0 && !data.keyPoints[0].title && (
                                                        <ul className="list-unstyled">
                                                            {data?.keyPoints?.map((key, keyIndex) => (
                                                                <li className="mx-2 d-flex align-items-center" key={keyIndex}>
                                                                    <i className="feather-check m-2"></i>
                                                                    <div>
                                                                        {key}
                                                                    </div>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    )}


                                                    {data.keyPoints && data.keyPoints.length > 0 && data.keyPoints[0].title && (
                                                        <ul className="list-unstyled">
                                                            {data.keyPoints.map((keyPoint, keyIndex) => (
                                                                <li className="mx-2" key={keyIndex}>
                                                                    <div>
                                                                        <h5>{keyPoint.title}</h5>
                                                                        <p>{keyPoint.description}</p>
                                                                    </div>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Accordion;
