import React from "react";
import { FaShoppingCart } from "react-icons/fa";


// Sample product data
const products = [
  {
    id: 1,
    name: "Tigernut Powder",
    description: "Rich in nutrients and perfect for smoothies.",
    price: "₵20.00",
    image: "https://images.pexels.com/photos/7615480/pexels-photo-7615480.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 2,
    name: "Pepper Powder",
    description: "Spicy and flavorful for your dishes.",
    price: "₵15.00",
    image: "https://images.pexels.com/photos/6690933/pexels-photo-6690933.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    name: "Okro Powder",
    description: "Adds thickness and nutrition to soups.",
    price: "₵18.00",
    image: "https://images.pexels.com/photos/4916115/pexels-photo-4916115.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 4,
    name: "Prekese Powder",
    description: "Enhances the flavor of your meals.",
    price: "₵25.00",
    image: "https://images.pexels.com/photos/4198712/pexels-photo-4198712.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const Showcase = () => {
  // Function to handle "Add to Cart"
  const handleAddToCart = (productId) => {
    alert(`Added product ${productId} to cart!`);
    // You can integrate this with a state management library (e.g., Redux, Context API) or a shopping cart library.
  };

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Product Showcase
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our range of sustainable food products designed to enhance
            your health and reduce food waste.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              {/* Product Image */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />

              {/* Product Details */}
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {product.name}
              </h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <p className="text-amber-600 font-bold mb-4">{product.price}</p>

              {/* Add to Cart Button */}
              <button
                onClick={() => handleAddToCart(product.id)}
                className="w-full bg-amber-600 text-white px-4 py-2 rounded-lg flex items-center justify-center hover:bg-amber-700 transition-all"
              >
                <FaShoppingCart className="mr-2" />
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Showcase;
