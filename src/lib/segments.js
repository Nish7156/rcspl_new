import Islider1 from "./images/slider1.jpg";
import Islider2 from "./images/slider2.jpeg";
import Islider3 from "./images/slider3.jpeg";
import Icon1 from "./images/featuers-icon/pic1.png";
import Icon2 from "./images/featuers-icon/pic2.png";
import Icon3 from "./images/featuers-icon/pic3.png";
import Icon4 from "./images/featuers-icon/pic4.png";

const segments = [
  {
    category: "Project Reports and Approvals",
    img:Islider1,
    subTitle:"Streamline your project management with efficient reporting and timely approvals.",
    icon:Icon1,
    services: [
      "Preliminary Project Reports (PPR)",
      "Detailed Project Reports (DPR)",
      "Project Appraisal Reports (PAR)",
      "Techno-Economic Viability Reports",
    ],
  },
  {
    category: "Industrial Setup and Approvals",
    subTitle:"Your pathway to establishing a successful industrial venture with seamless regulatory approvals.",
    img:Islider1,
    icon:Icon3,
    services: [
      "MIDC Plot Allotment for Industries",
      "MIDC Pre & Post Setup Approvals",
      "Non-Agriculture (NA) Conversion",
      "Wine & Beer Industry Approvals",
    ],
  },
  {
    category: "Hospitality and Food Industry",
    subTitle:"Savor the flavors of success in the world of hospitality and food, where exceptional experiences and culinary delights meet.",
    img:Islider2,
    icon:Icon2,
    services: [
      "Hotel & Resorts Approvals",
      "Import Permits & DGFT Services",
      "FSSAI & FDA Approvals",
      "Mega Food Parks Approvals",
    ],
  },
  {
    category: "Regulatory Compliance and Environmental",
    subTitle:"Navigating the intricate landscape of regulations and sustainability to ensure responsible business practices and environmental stewardship.",
    img:Islider3,
    icon:Icon4,
    services: [
      "Petrochem (PESO) Approvals",
      "Infrastructure & Real Estates",
      "MPCB (Pollution) Consents",
      "Environmental Certification",
      "Intellectual Properties Rights",
    ],
  },
];

export default segments;
