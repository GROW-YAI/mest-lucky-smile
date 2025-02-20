import React, { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  // Navigation links
  const navLinks = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about-innovator" },
    { name: "Products", link: "/products" },
    { name: "Features", link: "/about-us" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <nav
      className={`p-4 fixed w-full top-0 z-50 ${
        darkMode ? "bg-gray-900 text-white" : "bg-amber-200 text-gray-900"
      } shadow-md`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="/logo.png" // Replace with your logo
            alt="Logo"
            className="w-10 h-10 rounded-full"
          />
          <h4 className="text-xl font-bold">Lucky Smile</h4>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.link} // Use `to` instead of `href`
                className={`hover:text-amber-600 transition-colors ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="hidden md:block p-2 rounded-full hover:bg-opacity-20 hover:bg-gray-700"
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {darkMode ? (
            <Sun size={20} className="text-white" />
          ) : (
            <Moon size={20} className="text-gray-800" />
          )}
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-lg hover:bg-opacity-20 hover:bg-gray-700"
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? (
            <X
              size={24}
              className={darkMode ? "text-white" : "text-gray-900"}
            />
          ) : (
            <Menu
              size={24}
              className={darkMode ? "text-white" : "text-gray-900"}
            />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className={`md:hidden mt-4 ${
            darkMode ? "bg-gray-800" : "bg-amber-100"
          } p-4 rounded-lg shadow-lg`}
        >
          <ul className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.link} // Use `to` instead of `href`
                  className={`block py-2 hover:text-amber-600 transition-colors ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          {/* Dark Mode Toggle for Mobile */}
          <button
            onClick={toggleDarkMode}
            className="mt-4 p-2 rounded-full hover:bg-opacity-20 hover:bg-gray-700"
            aria-label={
              darkMode ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {darkMode ? (
              <Sun size={20} className="text-white" />
            ) : (
              <Moon size={20} className="text-gray-800" />
            )}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
