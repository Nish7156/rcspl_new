import React from "react";

function NewAbout() {
  const RRR = [1, 2, 4, 5];
  return (
    <>
      <section class="team-members-section">
        <div class="container">
          <div class="section-header white">
            {/* <h5 class="subtitle">Our Team</h5> */}
            <h2> About Us</h2>
            <span>
              <i></i>
            </span>
            <p>
              Realm Consulting Services Pvt. Ltd. (formerly Realm Financial
              Consultants Pvt. Ltd.), established in 2006, is your trusted
              partner for comprehensive project-related services. With branches
              in Thane, Nashik, and Aurangabad in Maharashtra, we excel in
              providing one-stop solutions for manufacturing projects. Our
              services include licenses, approvals, permissions, consents,
              NOC’s, subsidies, incentives, and project finance consultancy. We
              are proud to be led by a team of highly qualified, experienced,
              and dynamic professionals, including Chartered Accountants,
              Company Secretaries, Advocates, Lawyers, MBAs, Chartered
              Engineers, Architects, and Government-Approved Valuators. This
              diverse expertise allows us to deliver tailored solutions to meet
              the unique needs of our esteemed clients. Our offerings extend to
              providing various reports such as Survey, Analysis, Investigation
              & Search Reports, tailored to the specific requirements of
              entrepreneurs. These reports provide comprehensive insights into
              technical, legal, financial, marketing, and operational aspects of
              proposed projects, ensuring feasibility and viability.
            </p>
          </div>

          <div className="aboutCards">
          {RRR.map((data) => {
                return (
                  <div class="team-member">
                    <h6 class="name">KATHIE EVANS</h6>
                    <span class="position">Lead Designer</span>
                    <img
                      class="avatar"
                      src="newImg/team-member-2.png"
                      alt="team-member"
                    />
                    <p class="description">
                      Nullam erat ipsum, tincidunt id luctus eu, rhoncus
                      tincidunt orci. Sed quis arcu elit lobortis fringi.
                    </p>
                    <ul class="socials clean-list">
                      <li>
                        <a href="#" tabindex="0">
                          <i class="fa fa-facebook-square facebook"></i>
                        </a>
                      </li>

                      <li>
                        <a href="#" tabindex="0">
                          <i class="fa fa-twitter-square twitter"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
}

export default NewAbout;
