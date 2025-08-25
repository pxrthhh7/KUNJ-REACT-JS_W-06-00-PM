import React from 'react'
import Navbar from './Components/Navbar'

const HomePage = () => {
    return (
        <>
            <Navbar />

            {/* Hero Banner */}
            <div className="w-full h-[90vh] bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('/Hero-bg.jpg')" }}>
                <div className="bg-white bg-opacity-80 p-8 rounded-xl text-center">
                    <h1 className="text-4xl font-bold text-[#21606e] mb-4">Festival Mega Sale!</h1>
                    <p className="text-lg text-gray-700">Up to 70% Off on Festival Essentials</p>
                </div>
            </div>
        </>
    )
}

export default HomePage
