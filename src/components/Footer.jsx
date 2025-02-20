import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-gray-400">
              Janet Tweneboah is an innovative entrepreneur addressing food
              insecurity through sustainable food preservation methods. Our
              mission is to reduce food waste and provide nutritious,
              long-lasting food products for communities worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-gray-400 hover:text-amber-500 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-amber-500 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="text-gray-400 hover:text-amber-500 transition-colors"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-amber-500 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <FaEnvelope className="text-amber-500" />
                <a
                  href="mailto:janet@example.com"
                  className="text-gray-400 hover:text-amber-500 transition-colors"
                >
                  janet@example.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <FaPhone className="text-amber-500" />
                <a
                  href="tel:+1234567890"
                  className="text-gray-400 hover:text-amber-500 transition-colors"
                >
                  +123 456 7890
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">
              Subscribe to Our Newsletter
            </h3>
            <form className="flex flex-col space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <button
                type="submit"
                className="bg-amber-500 text-white px-4 py-2 rounded-lg hover:bg-amber-600 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mt-8">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-amber-500 transition-colors"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-amber-500 transition-colors"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-amber-500 transition-colors"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-amber-500 transition-colors"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Copyright Notice */}
        <div className="text-center mt-8 border-t border-gray-700 pt-8">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Janet Tweneboah. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
