import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="bg-gray-900 text-white px-6 py-4 shadow-md">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="text-2xl font-bold text-yellow-400">
                    🎬 MovieZone
                </div>

                {/* Nav Links */}
                <ul className="hidden md:flex gap-8 text-sm font-medium">
                    <li>
                        <Link to="/" className="hover:text-yellow-400 cursor-pointer transition">Home</Link>
                    </li>
                    <li>
                        <Link to="/movies" className="hover:text-yellow-400 cursor-pointer transition">Movies</Link>
                    </li>
                </ul>

                {/* Mobile Menu Icon */}
                <div className="md:hidden text-xl cursor-pointer">
                    ☰
                </div>
            </div>
        </nav>
    )
}

export default Navbar
