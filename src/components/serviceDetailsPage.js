import { useParams } from "react-router-dom";
import React from "react";
import { useLocation } from "react-router-dom";

function PageTitle({ title, backgroundImg }) {
  const titleStyle = {
    backgroundImage: `url(${backgroundImg})`,
  };

  return (
    <section class="single-post-section" style={{ marginTop: "200px" }}>
      <div class="container">
        <div class="row">
          <div class="col-12 ">
            <div class="blog-posts-list single">
              <div class="blog-post">
                <div class="entry">
                  <p>
                    Duis eget fermentum est. Donec vel vehicula tellus. Nunc ac
                    risus eu nisl fringilla elementum. Integer faucibus
                    tincidunt nisl, vitae tincidunt nisl bibendum vitae.
                    Phasellus vulputate eget mauris in imperdiet. Etiam
                    consectetur metus libero, vitae malesuada quam vehicula
                    dictum. Nam eleifend nulla eu eros ultricies, eget sodales
                    metus ultrices. Praesent sit amet massa nunc. Vivamus
                    sagittis, felis vel tincidunt feugiat, leo ex imperdiet
                    nisl, eu sollicitudin sem dolor vitae felis. Maecenas in
                    lectus eu erat maximus malesuada sit amet non sapien.
                  </p>

                  <blockquote class="light">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    proin felis magna, lacinia ac aliquet vel, volutpat laoreet
                    sapien ali. Et harum quidem rerum facilis est et expedita
                    distinctio labu.
                  </blockquote>
                  <p>
                    Enim congue blandit. Lorem ipsum dolor sit amet, consectetur
                    adipiscin elit. Quisque consectetur interdum finibus.
                    Vestibulum ante ipsum primi in faucibus orci luctus et
                    ultrices posuere cubilia cras blandit finibusiet, id
                    porttitor arcu volutpat a. Integer iaculis erat nec justo
                    malesua sit amet, consectetur adipiscing elit. Quisque
                    consectetur interdum finibus. Vestibulum ante ipsum primis
                    in ultrices posuere cubilia cras blandit finibus ipsu, id
                    porttitor arcu volutpa. Integer iaculis erat nec justo
                    malesuada faucibus vel tempus sapien. Viva aliquam euismod
                    tristique. Aenean non tempus odio, non varius nulla aproin
                    eget lectus quis mi bibendum at at lectus morbi tempus
                    scelerisque. mattis. Interdum et malesuada fames ac ante
                    ipsum primis in faucibus. Donec fringilla mauris qui. eros
                    sodales ac arcu.
                  </p>

                  <p>
                    Temporibus autem quibusdam et aut officiis debitis aut rerum
                    necessitatibus saepe eveniet ut et voluptates repudian sint
                    et molestiae non recusandae. Itaque earum rerum hic.
                    Morbiset vene nisi sed enim vulputate, nec eleifend ex
                    imperdiet. Donec vitae sapien hendreri mole. Nullam sem dui,
                    faucibus vel vulputate sed, sodales vel leo. Se ornare nibh
                    faucibus eros ullamcorper dic. Curabitur condimentum, ligula
                    non convallis consectetur, urna massa cursus leo, et
                    sollicitudin dui ipsum sit amet leo. Donec eget elit mi.
                    Donec volutpat lacinia.
                  </p>
                </div>

                {/* <div class="post-footer">
                  <div class="tags">
                    <a class="custom-link" href="#">
                      concepts
                    </a>
                    <a class="custom-link" href="#">
                      ideas
                    </a>
                  </div>

                  <div class="like">
                    <a class="custom-link icon no-margin" href="#">
                      <i class="fa fa-heart"></i> like
                    </a>
                  </div>

                  <div class="share-box">
                    <span class="custom-link icon box-toggle">
                      <i class="fa fa-share-alt"></i>share
                    </span>

                    <ul class="socials clean-list">
                      <li>
                        <a href="#">
                          <i class="fa fa-facebook-square"></i>Facebook
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa fa-pinterest-square"></i>Pinterest
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa fa-twitter-square"></i>Twitter
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa fa-google-plus-square"></i>Google+
                        </a>
                      </li>
                    </ul>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
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
    <div className="container pt-12">
      <div className="row">
        <div className="col-12">
          <PageTitle title={service.title} backgroundImg={service.image} />
        </div>
      </div>
      <div className="row">{/* Rest of your content */}</div>
    </div>
  );
}

export default ServiceDetailsPage;
