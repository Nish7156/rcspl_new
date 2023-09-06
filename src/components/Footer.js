import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2">
              <div className="flex items-center">
                <span className="font-semibold">Address:</span>
                <p className="ml-2">1314, 13th Floor, C1, Opal Square, S. G. Barve Road, Wagle Estate, Thane - 400604, Maharashtra, India</p>
              </div>
              <div className="flex items-center">
                <span className="font-semibold">Email:</span>
                <p className="ml-2"><a href="mailto:info@rcspl.co.in" className="text-blue-400">info@rcspl.co.in</a></p>
              </div>
              <div className="flex items-center">
                <span className="font-semibold">Contact No:</span>
                <p className="ml-2">+91 98220 59460</p>
              </div>
            </div>
          </div>

          {/* Add more columns as needed */}
        </div>
      </div>

      <div className="mt-8">
        <div className="container mx-auto">
          <p className="text-center">&copy; 2023 Rcspl. All Rights Reserved.</p>
          <p className="text-center text-gray-400">Get In Touch:<a href="http://www.rcspl.co.in/ " target='_blank' className="text-blue-400"> www.rcspl.co.in </a></p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;



