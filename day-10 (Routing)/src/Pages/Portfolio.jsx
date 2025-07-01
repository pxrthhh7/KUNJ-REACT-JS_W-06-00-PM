import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const Portfolio = () => {
    return (
        <>
            <Navbar />
            <section class="py-20 bg-white text-center">
                <h2 class="text-4xl font-bold mb-8">Our Work</h2>
                <p class="max-w-xl mx-auto text-lg mb-12">A glimpse into some of our most exciting Tailwind-only projects.</p>

                <div class="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-4">
                    <div class="bg-gray-100 rounded shadow p-4">
                        <div class="h-40 bg-emerald-200 mb-4 rounded"></div>
                        <h3 class="font-bold text-xl">Startup Landing Page</h3>
                        <p class="text-sm text-gray-600">A high-converting hero + features layout.</p>
                    </div>
                    <div class="bg-gray-100 rounded shadow p-4">
                        <div class="h-40 bg-emerald-300 mb-4 rounded"></div>
                        <h3 class="font-bold text-xl">Portfolio Website</h3>
                        <p class="text-sm text-gray-600">Multi-page site for creatives.</p>
                    </div>
                    <div class="bg-gray-100 rounded shadow p-4">
                        <div class="h-40 bg-emerald-400 mb-4 rounded"></div>
                        <h3 class="font-bold text-xl">E-Commerce UI</h3>
                        <p class="text-sm text-gray-600">Shop layout using only Tailwind CSS.</p>
                    </div>
                </div>
            </section>

            <section class="py-20 bg-emerald-50">
                <div class="max-w-4xl mx-auto text-center px-4">
                    <h3 class="text-3xl font-bold mb-6">Case Study: Speed & Simplicity</h3>
                    <p>We helped a client reduce page load time by 40% using a Tailwind-only build with zero JavaScript. Result: better SEO, more users, and happy clients.</p>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Portfolio
