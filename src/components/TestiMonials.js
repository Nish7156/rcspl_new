import React from "react";

const TestiMonials = () => {
  const testimonialData = [
    {
      avatarSrc: "newImg/testimonial-1.png",
      message:
        "I am very satisfied and would like to express my appreciation for providing us consultancy services in a professional manner for successful establishment & implementation of our project within the scheduled time frame",
      userName: " Mr. Rajesh Dixit ( Director ) ",
      userRole: "For Moet Hennessy India Pvt. Ltd.",
    },
    {
      avatarSrc: "img/testimonial-4.png",
      message:
        "Our experience of working with Realm Consulting Services Private Limited    has been very positive. They are well versed in the financial aspects and needs of a business. Being in a sector like wine, they were able to understand our unique requirements and tailor their advice for us accordingly",
      userName: "Mr. Ravi Gurnani ( Director ) -",
      userRole: "For York Winery.",
    },
  ];

  return (
    <>
      <section class="testimonials">
        <div class="container">
          <div class="section-header white">
            <h5 class="subtitle">Testimonials</h5>
            <h2>What people say</h2>
            <span>
              <i></i>
            </span>
            <p>
              REALM CONSULTING SERVICES PRIVATE LIMITED transformed my business
              journey. Expert guidance, personalized solutions, and unmatched
              support made them my strategic partner for success. Grateful for
              the invaluable insights that continue to drive my business
              forward."
            </p>
          </div>

          <div class="row">
            {testimonialData.map((data, index) => {
              return (
                <div class="col-md-4 col-sm-6" key={index}>
                  <div class="testimonial">
                    <div class="top">
                      <img
                        class="avatar"
                        src={`${data.avatarSrc}`}
                        alt="testimonial"
                      />
                      <h6 class="name">{data.userName}</h6>
                      <span class="position">{data.userRole}</span>
                    </div>

                    <p class="message">{data.message}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default TestiMonials;
