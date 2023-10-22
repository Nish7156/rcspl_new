// import React from "react";
// import Slider from "react-slick";
// import client1 from "../lib/images/client/clients1.jpg";
// import client2 from "../lib/images/client/clients2.jpg";
// import client3 from "../lib/images/client/clients3.jpg";
// import client4 from "../lib/images/client/clients4.jpg";
// import client5 from "../lib/images/client/clients5.jpg";
// import client6 from "../lib/images/client/clients6.jpg";
// import client7 from "../lib/images/client/clients7.jpg";
// import client8 from "../lib/images/client/clients8.jpg";
// import client9 from "../lib/images/client/clients9.jpg";
// import client10 from "../lib/images/client/clients10.jpg";
// import client11 from "../lib/images/client/clients11.jpg";
// import client12 from "../lib/images/client/clients12.jpg";
// import client13 from "../lib/images/client/clients13.jpg";
// import client14 from "../lib/images/client/clients14.jpg";
// import client15 from "../lib/images/client/clients15.jpg";
// import client16 from "../lib/images/client/clients16.jpg";
// import client17 from "../lib/images/client/clients17.jpg";
// import client18 from "../lib/images/client/clients18.jpg";
// import client19 from "../lib/images/client/clients19.jpg";
// import client20 from "../lib/images/client/clients20.jpg";
// import client21 from "../lib/images/client/clients21.jpg";
// import client22 from "../lib/images/client/clients22.jpg";
// import client23 from "../lib/images/client/clients23.jpg";
// import client24 from "../lib/images/client/clients24.jpg";
// import client25 from "../lib/images/client/clients25.jpg";

// import Lubz from "../ClientsImages/lubz.jpeg";
// import sulaaa from "../ClientsImages/sulaaa.png";
// import sayadri from "../ClientsImages/sayadri.jpeg"

// const clientImages = [
//   // client1,
//   // client2,
//   // client3,
//   Lubz,
//   sulaaa,
//   sayadri,
//   Lubz,
//   client4,
//   client5,
//   client6,
//   client7,
//   client8,
//   client9,
//   client10,
//   client11,
//   client12,
//   client13,
//   client14,
//   client15,
//   client16,
//   client17,
//   client18,
//   client19,
//   client20,
//   client21,
//   client22,
//   client23,
//   client24,
//   client25,
// ];
// const Clients = () => {
//   const settings = {
//     dots: true,
//     speed: 400,
//     slidesToShow: 4,
//     slidesToScroll: 4,
//     arrows: false,
//     infinite: true,
//     speed: 1000,
//     autoplay: true,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           arrows: false,
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           arrows: false,
//           slidesToShow: 1,
//           speed: 1000,
//           autoplay: true,
//           slidesToScroll: 1,
//           dots: false,
//         },
//       },
//     ],
//   };

//   return (
//     <div className="" style={{ marginBottom: "20px" }}>
//       <div className="container" id="about">
//         <div className="section-header">
//           <h5 className="subtitle">Our Clients</h5>
//           <h2 id="main-title">They trust us</h2>
//           <span>
//             <i></i>
//           </span>
//         </div>

//         <Slider {...settings}>
//           {clientImages.map((item, index) => (
//             <div className="slider-flex" >
//               <img src={item} style={{height:"100px",width:"200px"}} />
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </div>
//   );
// };

// export default Clients;
