import React from 'react'

const Card = ({ title, Poster, releaseDate }) => {

  const posterUrl = `https://image.tmdb.org/t/p/w500${Poster}`

  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 bg-gray-800 rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition duration-300">
      <img className="w-full h-60 object-cover" src={posterUrl} alt={title} />
      <div className="p-4">
        <h2 className="text-white text-xl font-bold mb-1">{title}</h2>
        <div className="flex items-center justify-between">
          <span className="text-gray-400 text-sm">{releaseDate}</span>
        </div>
      </div>
    </div>
  )
}

export default Card
