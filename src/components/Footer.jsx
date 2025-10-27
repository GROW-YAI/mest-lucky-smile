import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6"; // ✅ TikTok icon (from Font Awesome 6)

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-12">
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
                <Link
                  to="/"
                  className="text-gray-400 hover:text-amber-500 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about-innovator"
                  className="text-gray-400 hover:text-amber-500 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-gray-400 hover:text-amber-500 transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-amber-500 transition-colors"
                >
                  Contact
                </Link>
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
                  href="mailto:janetweneboah@gmail.com"
                  className="text-gray-400 hover:text-amber-500 transition-colors"
                >
                  janetweneboah@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <FaPhone className="text-amber-500" />
                <a
                  href="tel:+233246552072"
                  className="text-gray-400 hover:text-amber-500 transition-colors"
                >
                  +233 246 552 072
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mt-8">
          <a
            href="https://www.facebook.com/share/17QZRGfBhb/"
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
            href="https://www.linkedin.com/company/luckysmile/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-amber-500 transition-colors"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://www.tiktok.com/@luckysmile61"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-amber-500 transition-colors"
          >
            <FaTiktok size={24} />
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
