import React from 'react'
import Navbar from '../Components/Navbar'

const HomePage = () => {
    return (
        <div className="h-screen flex flex-col">
            {/* Navbar */}
            <Navbar />

            {/* Hero Section */}
            <section className="flex-1 relative bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('https://image.tmdb.org/t/p/original/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg')",}}>
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-80"></div>

                {/* Hero Content */}
                <div className="relative z-10 flex flex-col justify-center items-start h-full px-6 md:px-20 text-white">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                        The Dark Hero Returns
                    </h1>
                    <p className="text-lg md:text-xl max-w-xl mb-6 drop-shadow-md">
                        In a world torn by chaos, one hero rises from the shadows to save humanity from its greatest threat.
                    </p>
                    <div className="flex space-x-4">
                        <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition-all">
                            ▶ Watch Trailer
                        </button>
                        <button className="bg-white hover:bg-gray-200 text-gray-900 font-semibold py-2 px-6 rounded-full shadow-lg transition-all">
                            More Info
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HomePage
