import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const Services = () => {
    return (
        <>
            <Navbar />

            <section class="py-20 bg-white text-center">
                <h2 class="text-4xl font-bold mb-6">What We Offer</h2>
                <p class="max-w-xl mx-auto text-lg">A full suite of Tailwind CSS services — from design systems to complete responsive site builds.</p>
            </section>

            <section class="py-20 bg-gray-100">
                <div class="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-4">
                    <div class="p-6 bg-white rounded-lg shadow text-center">
                        <h3 class="text-xl font-bold mb-2">Landing Page Design</h3>
                        <p>Beautiful and optimized single-page layouts that convert.</p>
                    </div>
                    <div class="p-6 bg-white rounded-lg shadow text-center">
                        <h3 class="text-xl font-bold mb-2">Multi-page Sites</h3>
                        <p>From blogs to portfolios, complete responsive websites.</p>
                    </div>
                    <div class="p-6 bg-white rounded-lg shadow text-center">
                        <h3 class="text-xl font-bold mb-2">Tailwind UI Kits</h3>
                        <p>Reusable UI component libraries for rapid development.</p>
                    </div>
                </div>
            </section>

            <section class="py-20 bg-emerald-50 text-center">
                <h3 class="text-3xl font-bold mb-12">Pricing</h3>
                <div class="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
                    <div class="p-6 bg-white rounded-lg border border-emerald-200">
                        <h4 class="text-xl font-bold mb-4">Basic</h4>
                        <p class="text-2xl font-bold text-emerald-600 mb-4">$199</p>
                        <p>Landing Page Only</p>
                    </div>
                    <div class="p-6 bg-white rounded-lg border border-emerald-400">
                        <h4 class="text-xl font-bold mb-4">Pro</h4>
                        <p class="text-2xl font-bold text-emerald-600 mb-4">$499</p>
                        <p>5 Page Website</p>
                    </div>
                    <div class="p-6 bg-white rounded-lg border border-emerald-600">
                        <h4 class="text-xl font-bold mb-4">Custom</h4>
                        <p class="text-2xl font-bold text-emerald-600 mb-4">Let's Talk</p>
                        <p>Full UI Design + Dev</p>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Services
