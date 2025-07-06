import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import Card from '../Components/Card'

const MoviePage = () => {
  let [movieData, setMovieData] = useState([])
  let [page, setPage] = useState(1)

  const fetchMovies = ((pageNum) => {
    fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=a2d86755e5d6eac04182233d4c6dcb1e&page=${pageNum}`)
      .then((req) => req.json())
      .then((res) => {
        setMovieData((perv)=> [...perv, ...res.results])
      })
  })

  useEffect(() => {
    fetchMovies(page)
  },[page])

  const viewMoreBtn = (() => {
    setPage(page + 1)
  })

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />

      {/* Card container */}
      <div className="p-6 flex flex-wrap justify-center gap-6">
        {
          movieData.map((e, i) => (
            <Card key={i} title={e.title} releaseDate={e.release_date} Poster={e.poster_path} />
          ))
        }
      </div>

      {/* View More Button */}
      <div className="w-full flex justify-center">
        <button onClick={viewMoreBtn} className="my-[30px] cursor-pointer bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-2 px-6 rounded-full shadow-lg transition duration-300">
          View More
        </button>
      </div>

    </div>
  )
}

export default MoviePage
