import React from 'react'

const Card = ({ data, addToCart }) => {
    return (
        <div className="w-full max-w-xs bg-white rounded-2xl shadow-md overflow-hidden transform hover:scale-105 origin-center transition duration-300">
            <img src={data.image} alt={data.name} className="w-full h-60 object-contain bg-gray-100 p-2" />

            <div className="p-4 space-y-3">
                <div className="flex justify-between items-center">
                    <h2 className="text-lg font-semibold text-gray-800">{data.name}</h2>
                    <span className="text-md font-medium text-orange-500">${data.price.toFixed(2)}</span>
                </div>

                <p className="text-gray-600 text-sm">{data.description}</p>

                <button onClick={() => addToCart(data)}  className="w-full cursor-pointer bg-green-500 hover:bg-green-600 text-white text-sm font-medium py-2 px-4 rounded-md transition duration-200">
                    Add to Cart
                </button>
            </div>

        </div>
    )
}

export default Card
