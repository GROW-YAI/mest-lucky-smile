import React from "react";
import { FaLeaf, FaSeedling, FaHeart, FaSmile } from "react-icons/fa";

const AboutProduct = () => {
  // Product features data
  const features = [
    {
      icon: <FaLeaf className="w-12 h-12 mb-4 text-amber-600" />,
      title: "Sustainable Preservation",
      description:
        "Our innovative preservation methods ensure that tigernut, pepper, okro, and prekese retain their nutritional value and flavor for longer periods.",
    },
    {
      icon: <FaSeedling className="w-12 h-12 mb-4 text-amber-600" />,
      title: "Eco-Friendly Packaging",
      description:
        "We use biodegradable and recyclable packaging to minimize environmental impact and promote sustainability.",
    },
    {
      icon: <FaHeart className="w-12 h-12 mb-4 text-amber-600" />,
      title: "Nutrient-Rich Products",
      description:
        "Our dried and powdered products are packed with essential nutrients, making them ideal for toddlers and health-conscious individuals.",
    },
    {
      icon: <FaSmile className="w-12 h-12 mb-4 text-amber-600" />,
      title: "Community Impact",
      description:
        "By reducing food waste and creating jobs, we empower local communities and contribute to global food security.",
    },
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Our Products & Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover how Janet Tweneboah's innovative solutions are transforming
            food preservation and creating sustainable food sources for
            communities worldwide.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Call-to-Action */}
        <div className="text-center mt-16">
          <a
            href="/products"
            className="bg-amber-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-amber-700 transition-all"
          >
            Explore Our Products
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutProduct;
