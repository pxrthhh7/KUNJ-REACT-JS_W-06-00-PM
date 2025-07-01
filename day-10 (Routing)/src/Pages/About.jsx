import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const About = () => {
    return (
        <>

            <Navbar />

            <section class="py-20 bg-white text-center">
                <div class="max-w-4xl mx-auto px-4">
                    <h2 class="text-4xl font-bold mb-6">Who We Are</h2>
                    <p class="text-lg">TailwindSite is a team of UI designers and front-end specialists who craft modern, clean, and fast websites using only Tailwind CSS. No JavaScript – just pure responsive design magic.</p>
                </div>
            </section>

            <section class="py-20 bg-emerald-50 text-center">
                <div class="max-w-6xl mx-auto px-4">
                    <h3 class="text-3xl font-bold mb-4">Our Mission</h3>
                    <p class="max-w-3xl mx-auto">We aim to simplify web development by building powerful, scalable layouts with zero JavaScript dependency – focusing entirely on Tailwind CSS and clean HTML structure.</p>
                </div>
            </section>

            <section class="py-20 bg-gray-100">
                <div class="max-w-6xl mx-auto px-4 text-center">
                    <h3 class="text-3xl font-bold mb-12">Meet Our Team</h3>
                    <div class="grid md:grid-cols-3 gap-8">
                        <div>
                            <div class="h-40 w-40 mx-auto rounded-full bg-emerald-300"></div>
                            <h4 class="mt-4 font-semibold text-lg">Priya D.</h4>
                            <p>Lead Designer</p>
                        </div>
                        <div>
                            <div class="h-40 w-40 mx-auto rounded-full bg-teal-300"></div>
                            <h4 class="mt-4 font-semibold text-lg">Nikhil S.</h4>
                            <p>Front-End Dev</p>
                        </div>
                        <div>
                            <div class="h-40 w-40 mx-auto rounded-full bg-emerald-400"></div>
                            <h4 class="mt-4 font-semibold text-lg">Jaya R.</h4>
                            <p>UI Engineer</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default About
