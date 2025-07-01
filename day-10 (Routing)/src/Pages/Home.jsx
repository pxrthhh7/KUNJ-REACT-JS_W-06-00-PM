import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const Home = () => {
    return (
        <>
            <Navbar />

            <section class="h-screen bg-gradient-to-r from-orange-400 to-yellow-500 text-white flex items-center justify-center text-center px-4">
                <div>
                    <h2 class="text-5xl font-bold mb-4">Welcome to TailwindSite</h2>
                    <p class="text-lg max-w-xl mx-auto">We create stunning, responsive websites using only Tailwind CSS – no JavaScript, just clean design.</p>
                </div>
            </section>

            <section class="py-20 bg-gray-100">
                <div class="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-12 text-center">
                    <div>
                        <h3 class="text-xl font-bold mb-2">Responsive</h3>
                        <p>Fully responsive designs that adapt across all devices.</p>
                    </div>
                    <div>
                        <h3 class="text-xl font-bold mb-2">Clean UI</h3>
                        <p>Modern, minimal, and beautifully organized interfaces.</p>
                    </div>
                    <div>
                        <h3 class="text-xl font-bold mb-2">Performance</h3>
                        <p>Optimized layouts for fast loading and better engagement.</p>
                    </div>
                </div>
            </section>

            <section class="py-20 bg-white">
                <div class="max-w-6xl mx-auto px-4 text-center">
                    <h2 class="text-3xl font-bold mb-8">Who We Are</h2>
                    <p class="max-w-3xl mx-auto">We are a design-first web agency focused on delivering stunning and high-performing digital experiences. Our team believes in building from the ground up, ensuring every pixel is in place – and every line of code makes sense.</p>
                </div>
            </section>

            <section class="py-20 bg-indigo-50">
                <div class="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div>
                        <h3 class="text-4xl font-bold text-orange-500">300+</h3>
                        <p>Projects Completed</p>
                    </div>
                    <div>
                        <h3 class="text-4xl font-bold text-orange-500">150+</h3>
                        <p>Satisfied Clients</p>
                    </div>
                    <div>
                        <h3 class="text-4xl font-bold text-orange-500">10+</h3>
                        <p>Years Experience</p>
                    </div>
                    <div>
                        <h3 class="text-4xl font-bold text-orange-500">25</h3>
                        <p>Team Members</p>
                    </div>
                </div>
            </section>

            <section class="py-24 bg-orange-600 text-white text-center">
                <h2 class="text-4xl font-bold mb-4">Ready to Build Your Website?</h2>
                <p class="mb-8">Let’s collaborate and create something extraordinary.</p>
                <a href="contact.html" class="inline-block bg-white text-indigo-700 font-semibold py-3 px-6 rounded-full hover:bg-gray-100">Contact Us</a>
            </section>

            <section class="py-20 bg-white">
                <div class="max-w-6xl mx-auto px-4">
                    <h2 class="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
                    <div class="grid md:grid-cols-2 gap-8">
                        <div class="p-6 border rounded-xl shadow">
                            <p>"TailwindSite exceeded our expectations. The design is beautiful and fully responsive!"</p>
                            <p class="mt-4 font-bold text-orange-500">– Jessica L.</p>
                        </div>
                        <div class="p-6 border rounded-xl shadow">
                            <p>"Highly professional team and stunning website. No JavaScript, just clean UI."</p>
                            <p class="mt-4 font-bold text-orange-500">– Michael R.</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default Home
