import React from 'react';

const Card = ({ image, title, description }) => {
    return (

        <>
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-48 object-cover"
                />
                <div className="p-4">
                    <h2 className="text-lg font-semibold text-gray-800 mb-2">{title}</h2>
                    <p className="text-gray-600 text-sm">{description}</p>
                </div>
            </div>
        </>
    );
};

export default Card;
