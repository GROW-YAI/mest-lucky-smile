import React from "react";

const Hero = () => {
  return (
    <div className="relative flex justify-center items-center h-[80vh] bg-gradient-to-r from-amber-500 to-amber-700 overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute w-64 h-64 bg-amber-400 rounded-full opacity-20 -top-32 -left-32 animate-float"></div>
      <div className="absolute w-48 h-48 bg-amber-400 rounded-full opacity-20 -bottom-24 -right-24 animate-float-delay"></div>

      {/* Hero Content */}
      <div className="relative text-center text-white max-w-2xl px-4">
        {/* Headline with Animation */}
        <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
          Empowering Communities Through{" "}
          <span className="text-amber-200">Sustainable Food</span> Preservation
        </h1>

        {/* Subheading with Animation */}
        <p className="text-lg md:text-xl mb-8 animate-fade-in-delay">
          Janet Tweneboah is revolutionizing food security with innovative
          preservation methods for tigernut, pepper, okro, and prekese. Join us
          in reducing food waste and creating sustainable food sources.
        </p>

        {/* CTA Buttons with Hover Effects */}
        <div className="flex justify-center space-x-4">
          <a
            href="/products"
            className="bg-white text-amber-700 px-8 py-3 rounded-full font-semibold hover:bg-amber-100 hover:scale-105 transition-all transform animate-bounce-in"
          >
            Explore Products
          </a>
          <a
            href="/contact"
            className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-amber-700 hover:scale-105 transition-all transform animate-bounce-in-delay"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Animated Scrolling Indicator */}
      <div className="absolute bottom-8 animate-bounce">
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
