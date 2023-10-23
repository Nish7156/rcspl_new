import React from "react";

function NewClients() {
  const clientRow1 = [
    {
      img: "newImg/client/clients1.jpg",
    },
    {
      img: "newImg/client/clients2.jpg",
    },
    {
      img: "newImg/client/clients3.jpg",
    },
  ];
  const clientRow2 = [
    {
      img: "newImg/client/clients4.jpg",
    },
    {
      img: "newImg/client/clients5.jpg",
    },
    {
      img: "newImg/client/clients6.jpg",
    },
  ];
  return (
    <>
      <section class="clients-section">
        <div class="container-fluid">
          <div class="row bg-alfa pos-relative">
            <div class="col-md-6">
              <div class="section-header">
                <h5 class="subtitle">Our Clients</h5>
                <h2>They trust in us</h2>
                <span>
                  <i></i>
                </span>
                <p>
                  Cras finibus non magna sed varius. Fusce risus eros, dapibus
                  vitae dignissim vel, consequat et dolor. Proin maximus posuere
                  felis a tincidunt. Etiam sit amet ligula eget libero suscipit
                  semper eget ornare magna. Phasellus non est ligula. Nulla
                  auctor neque non tortor.
                </p>
              </div>

              <div class="row content">
                <div class="col-md-10 col-md-offset-1">
                  <div class="clients-row">
                    <div class="row">
                      {clientRow1.map((data, index) => {
                        return (
                          <div class="col-xs-4" key={index}>
                            <a href="#">
                              <img src={`${data.img}`} alt="partner logo" />
                            </a>
                          </div>
                        );
                      })}
                    </div>
                    <div class="row">
                      {clientRow2.map((data, index) => {
                        return (
                          <div class="col-xs-4" key={index}>
                            <a href="#">
                              <img src={`${data.img}`} alt="partner logo" />
                            </a>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-6 no-padding pos-static">
              <div class="row-bg">
                <img src="newImg/clients-section.jpg" alt="clients bg" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default NewClients;
