import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0 rounded-full bg-white p-1 h-10 w-10 overflow-hidden">
          <img
            src="https://drive.google.com/uc?id=11NV0qDjL4ZPS2xCsS0q67CDrY37OJIXe"
            alt="Company Logo"
            className="w-full"
          />
          </div>
          <div>
            <h1 className="text-2xl font-semibold">Silabu</h1>
            <p className="text-sm">Providing excellent products and services</p>
          </div>
        </div>
        <div className="mt-4 md:mt-0">
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="hover:text-gray-400">About Us</a>
            </li>
            <li>
              <a href="/" className="hover:text-gray-400">Products</a>
            </li>
            <li>
              <a href="/" className="hover:text-gray-400">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
