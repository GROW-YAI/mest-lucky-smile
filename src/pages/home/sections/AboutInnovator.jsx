import React from "react";
import { FaLightbulb, FaHandsHelping, FaGlobeAfrica } from "react-icons/fa";

const AboutInnovator = () => {
  // Innovator details
  const innovatorDetails = [
    {
      icon: <FaLightbulb className="w-12 h-12 mb-4 text-amber-600" />,
      title: "Innovative Solutions",
      description:
        "Janet Tweneboah is revolutionizing food preservation with her innovative methods, ensuring that tigernut, pepper, okro, and prekese retain their nutritional value and flavor.",
    },
    {
      icon: <FaHandsHelping className="w-12 h-12 mb-4 text-amber-600" />,
      title: "Community Empowerment",
      description:
        "Through her work, Janet is creating jobs, reducing food waste, and empowering local communities to achieve food security.",
    },
    {
      icon: <FaGlobeAfrica className="w-12 h-12 mb-4 text-amber-600" />,
      title: "Global Impact",
      description:
        "Janet's vision extends beyond local markets. She aims to expand her sustainable food solutions to global markets, making a lasting impact on food security worldwide.",
    },
  ];

  return (
    <div className="py-20 bg-gradient-to-r from-amber-50 to-amber-100">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About the Innovator
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet Janet Tweneboah, the visionary entrepreneur behind sustainable
            food preservation methods that are transforming communities and
            reducing food waste.
          </p>
        </div>

        {/* Innovator Story */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Innovator Image */}
          <div className="flex justify-center">
            <img
              src="/janet-tweneboah.jpg" // Replace with the innovator's image
              alt="Janet Tweneboah"
              className="w-full max-w-md rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Innovator Details */}
          <div className="space-y-8">
            <p className="text-lg text-gray-600">
              Janet Tweneboah is an 18-30 female entrepreneur addressing food
              insecurity by developing innovative preservation methods for
              tigernut, pepper, okro, and prekese. Her dried, powdered products
              retain their nutritional value and flavor, reducing food waste and
              providing sustainable food sources, especially for toddlers. She
              aims to create jobs, expand to local and global markets, and seeks
              support to scale production and improve preservation methods.
            </p>

            {/* Key Achievements */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {innovatorDetails.map((detail, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-all transform hover:-translate-y-2"
                >
                  <div className="flex justify-center">{detail.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {detail.title}
                  </h3>
                  <p className="text-gray-600">{detail.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call-to-Action */}
        <div className="text-center mt-16">
          <a
            href="/contact"
            className="inline-block bg-amber-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-amber-700 transition-all transform hover:scale-105"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutInnovator;
