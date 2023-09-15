import React from "react";
import Slider from "react-slick";
import testmon from "../../src/lib/images/test.jpg";

const TestiMonials = () => {
  const testimonialData = [
    {
      //   avatarSrc: 'img/testimonial-1.png',
      message:
        "I am very satisfied and would like to express my appreciation for providing us consultancy services in a professional manner for successful establishment & implementation of our project within the scheduled time frame",
      userName: " Mr. Rajesh Dixit ( Director ) ",
      userRole: "For Moet Hennessy India Pvt. Ltd.",
    },
    {
      //   avatarSrc: 'img/testimonial-4.png',
      message:
        "Our experience of working with Realm Consulting Services Private Limited    has been very positive. They are well versed in the financial aspects and needs of a business. Being in a sector like wine, they were able to understand our unique requirements and tailor their advice for us accordingly",
      userName: "Mr. Ravi Gurnani ( Director ) -",
      userRole: "For York Winery.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  const customStyles = {
    backgroundImage: `url(${testmon})`, // Apply the background image
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    // opacity: '0.5',
  };

  return (
    <div className="">
      <div className="container">
        <div className="section-header">
          <h5 className="subtitle">Testimonials</h5>
          <h2 id="main-title">What people say</h2>
        </div>

        <Slider {...settings}>
          {testimonialData.map((testimonial, index) => (
            <div className="testimonial-big" key={index}>
              {/* <div className="member-cover">
              <img className="avatar" src={testimonial.avatarSrc} alt="testimonial" />
            </div> */}

              <div className="message">
                <p>{testimonial.message}</p>
              </div>

              <div className="user">
                <h6>{testimonial.userName}</h6>
                <p>{testimonial.userRole}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestiMonials;
