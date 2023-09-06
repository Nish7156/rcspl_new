import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-green-300 text-white py-8 ">
      <div className=" mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="text-center lg:text-left">
            <h2 className="text-2xl font-bold">REALM CONSULTING SERVICES PVT LTD.</h2>
            <p className="text-lg mt-4">
              1314, 13th Floor, C1, Opal Square, S. G. Barve Road,<br />
              Wagle Estate, Thane - 400604, Maharashtra, India.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <p className="text-lg">
              E-mail: <a href="mailto:info@rcspl.co.in" className=" hover:underline">info@rcspl.co.in</a>
            </p>
            <p className="text-lg mt-2">
              Contact No: <a href="tel:9822059460" className="text-blue-400 hover:underline">98220 59460</a>
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Connect with Us</h3>
            <div className="flex justify-center ">
              <a href="#" className="text-blue-400 hover:underline mx-2">
                website
              </a>  
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;




