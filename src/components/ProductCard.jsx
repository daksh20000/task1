import React from 'react'

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="max-w-xs w-full border-2 border-gray-300 bg-white rounded-lg shadow-lg shadow-gray-300 hover:shadow-2xl hover:shadow-gray-400 transform transition-all duration-300 hover:-translate-y-1 hover:scale-105">
      <div className="relative">
        <img 
          className="w-full h-64 object-cover rounded-t-lg"
          src={product.thumbnail}
          alt={product.title}
        />
        <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2">
          <span className="text-sm">-{product.discountPercentage}% OFF</span>
        </div>
      </div>
      
      <div className="p-4 space-y-2">
        <h3 className="text-xl font-bold text-gray-900">{product.title}</h3>
        <p className="text-lg font-bold text-green-600">${product.price} <span className="text-red-500 line-through">${(product.price + (0.1 * product.price)).toFixed(2)}</span></p>   {/* logic of disount is not given, added because of just normal design */}
        <button
          className="w-full py-2 px-4 text-white bg-green-500 hover:bg-green-600  rounded-lg font-medium text-sm transition ease-in-out duration-200"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;