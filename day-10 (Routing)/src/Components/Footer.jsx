import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <footer class="bg-gray-900 text-gray-300 py-16 mt-20">
                <div class="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-12 text-sm">

                    <div>
                        <h2 class="text-white text-xl font-bold mb-4">TailwindSite</h2>
                        <p class="mb-4">TailwindSite is your one-stop solution for clean, responsive web design using Tailwind CSS.</p>
                        <p>&copy; 2025 TailwindSite. All rights reserved.</p>
                    </div>

                    <div>
                        <h3 class="text-white text-lg font-semibold mb-4">Quick Links</h3>
                        <ul class="space-y-2">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/projects">Projects</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 class="text-white text-lg font-semibold mb-4">Contact</h3>
                        <ul class="space-y-2">
                            <li>Email: <a href="mailto:info@tailwindsite.com" class="hover:text-white">info@tailwindsite.com</a></li>
                            <li>Phone: +91 98765 43210</li>
                            <li>Address: 123 Web Street, Design City</li>
                        </ul>
                    </div>

                    <div>
                        <h3 class="text-white text-lg font-semibold mb-4">Subscribe to Newsletter</h3>
                        <p class="mb-4">Stay updated with our latest designs and tutorials.</p>
                        <form class="space-y-3">
                            <input type="email" placeholder="Enter your email" class="w-full px-4 py-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500" />
                            <button class="w-full bg-orange-500 hover:bg-indigo-500 text-white py-2 rounded font-semibold">Subscribe</button>
                        </form>
                    </div>

                </div>

                <div class="mt-12 border-t border-gray-700 pt-6 text-center text-xs">
                    <p>Follow us on: Facebook | Twitter | Instagram | LinkedIn</p>
                </div>
            </footer>
        </>
    )
}

export default Footer
