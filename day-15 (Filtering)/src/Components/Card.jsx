import React from 'react'

const Card = ({key,data}) => {
    return (
        <>
            <div key={key} className="bg-white rounded-lg overflow-hidden shadow-md cursor-pointer hover:shadow-lg transition">
                <img className="h-52 w-full object-cover" src={data.image} alt={data.name} />
                <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">{data.name}</h3>
                    <p className="text-sm text-gray-600 mb-1">{data.category}</p>
                    <p className="text-sm text-gray-800 font-medium">₹{data.price}</p>
                </div>
            </div>
        </>
    )
}

export default Card
