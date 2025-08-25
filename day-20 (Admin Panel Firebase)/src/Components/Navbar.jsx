import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className="w-full h-[10vh] bg-white shadow-md px-4 py-3 flex items-center justify-between">
                {/* Left: Logo */}

                <Link to='/'>
                    <div className="text-xl font-bold text-[#21606e]">
                        MyLogo
                    </div>
                </Link>

                {/* Right: Products + Admin Panel */}
                <div className="flex items-center space-x-4">
                    {/* Products Link */}

                    <Link to='/product'>
                        <a href="#" className="text-[#21606e] hover:text-[#66a6b3] font-medium transition">
                            Products
                        </a>
                    </Link>


                    {/* Admin Panel Button */}
                    <Link to='/admin'>
                        <button className="bg-[#3c7682] hover:bg-[#21606e] text-white font-semibold px-4 py-2 rounded-lg transition">
                            Admin Panel
                        </button>
                    </Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar
