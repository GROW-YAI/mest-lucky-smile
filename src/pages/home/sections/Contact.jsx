import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions or want to collaborate? Reach out to us! We'd love to
            hear from you.
          </p>
        </div>

        {/* Contact Information and Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="p-4 bg-amber-100 rounded-full">
                <FaEnvelope className="w-8 h-8 text-amber-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Email</h3>
                <p className="text-gray-600">janetweneboah@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="p-4 bg-amber-100 rounded-full">
                <FaPhone className="w-8 h-8 text-amber-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Phone</h3>
                <p className="text-gray-600">+233 246 552 072</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="p-4 bg-amber-100 rounded-full">
                <FaMapMarkerAlt className="w-8 h-8 text-amber-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Address</h3>
                <p className="text-gray-600">
                  Accra, Ghana
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-amber-500 focus:border-amber-500"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-amber-500 focus:border-amber-500"
                  placeholder="Your email"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-amber-500 focus:border-amber-500"
                  placeholder="Your message"
                  required
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-all"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
