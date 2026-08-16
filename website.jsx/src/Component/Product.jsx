import React, { useEffect, useState } from "react";

function Product() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProduct(data);
    };

    fetchProduct();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-10">
        Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {product.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-48 w-full object-contain mb-5"
            />

            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              {item.title.slice(0, 35)}...
            </h2>

            <p className="text-gray-600 mb-2">
              Category: 
              <span className="font-medium text-blue-600">
                {" "}{item.category}
              </span>
            </p>

            <p className="text-xl font-bold text-green-600">
              ${item.price}
            </p>

            <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
              Buy Now
            </button>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Product;