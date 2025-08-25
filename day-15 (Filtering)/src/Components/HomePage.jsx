import React, { useState } from 'react'
import { clothesData } from '../clothesData'
import { Icon } from '@iconify-icon/react/dist/iconify.js'
import Card from './Card'

const HomePage = () => {
    const [sidebar, setSidebar] = useState(false)

    const handelSidebar = () => {
        setSidebar(!sidebar)
    }

    return (
        <div className="min-h-screen w-full bg-gray-100 p-4">
            <div className="max-w-7xl mx-auto relative flex gap-6">

                {/* Sidebar */}
                <aside className={`bg-white rounded-lg shadow-md transition-all duration-300 overflow-hidden z-10
          ${sidebar
                        ? 'w-full md:w-1/4 p-4 static'
                        : 'w-[60px] p-2 absolute md:static'}`}>

                    <div className="flex justify-center">
                        <div
                            onClick={handelSidebar}
                            className="w-[45px] h-[45px] bg-gray-300 flex justify-center items-center rounded-full cursor-pointer"
                        >
                            <Icon className="text-[25px]" icon="mdi:filter" />
                        </div>
                    </div>

                    {sidebar && (
                        <>
                            <h2 className="text-xl font-semibold my-4">Filter</h2>

                            <div className="mb-4">
                                <label className="font-medium">Gender</label>
                                <div className="mt-2 space-y-1">
                                    <label className="flex items-center"><input type="checkbox" /> <span className="ml-2">Men</span></label>
                                    <label className="flex items-center"><input type="checkbox" /> <span className="ml-2">Women</span></label>
                                    <label className="flex items-center"><input type="checkbox" /> <span className="ml-2">Kids</span></label>
                                </div>
                            </div>

                            <div className="mb-4">
                                <label className="font-medium">Category</label>
                                <div className="mt-2 space-y-1">
                                    <label className="flex items-center"><input type="checkbox" /> <span className="ml-2">T-Shirts</span></label>
                                    <label className="flex items-center"><input type="checkbox" /> <span className="ml-2">Jeans</span></label>
                                    <label className="flex items-center"><input type="checkbox" /> <span className="ml-2">Shoes</span></label>
                                </div>
                            </div>

                            <div className="mb-4">
                                <label className="font-medium">Color</label>
                                <div className="mt-2 space-y-1">
                                    <label className="flex items-center"><input type="checkbox" /> <span className="ml-2">Black</span></label>
                                    <label className="flex items-center"><input type="checkbox" /> <span className="ml-2">White</span></label>
                                    <label className="flex items-center"><input type="checkbox" /> <span className="ml-2">Blue</span></label>
                                </div>
                            </div>

                            <div>
                                <label className="font-medium">Size</label>
                                <div className="mt-2 space-y-1">
                                    <label className="flex items-center"><input type="checkbox" /> <span className="ml-2">S</span></label>
                                    <label className="flex items-center"><input type="checkbox" /> <span className="ml-2">M</span></label>
                                    <label className="flex items-center"><input type="checkbox" /> <span className="ml-2">L</span></label>
                                    <label className="flex items-center"><input type="checkbox" /> <span className="ml-2">XL</span></label>
                                </div>
                            </div>
                        </>
                    )}
                </aside>

                {/* Products Section */}
                <main className={`transition-all duration-300 grid gap-6 
          ${sidebar
                        ? 'w-full md:w-3/4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                        : 'w-full md:w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'}`}>

                    {clothesData.map((e, i) => (
                        <Card key={i} data={e} />
                    ))}
                </main>
            </div>
        </div>
    )
}

export default HomePage
