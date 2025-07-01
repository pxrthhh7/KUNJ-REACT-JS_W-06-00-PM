import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const Contact = () => {
    return (
        <>
            <Navbar />
            <section class="py-20 bg-white">
                <div class="max-w-4xl mx-auto px-4">
                    <h2 class="text-4xl font-bold mb-6 text-center">Get in Touch</h2>
                    <form class="grid gap-6">
                        <div>
                            <label class="block mb-1 font-semibold">Name</label>
                            <input type="text" class="w-full px-4 py-2 border border-gray-300 rounded" placeholder="Your name" />
                        </div>
                        <div>
                            <label class="block mb-1 font-semibold">Email</label>
                            <input type="email" class="w-full px-4 py-2 border border-gray-300 rounded" placeholder="Your email" />
                        </div>
                        <div>
                            <label class="block mb-1 font-semibold">Message</label>
                            <textarea class="w-full px-4 py-2 border border-gray-300 rounded h-32" placeholder="Your message"></textarea>
                        </div>
                        <button class="bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-6 rounded font-semibold w-full md:w-auto">Send Message</button>
                    </form>
                </div>
            </section>

            <section class="py-20 bg-gray-100">
                <div class="max-w-6xl mx-auto px-4">
                    <h3 class="text-3xl font-bold mb-8 text-center">FAQs</h3>
                    <div class="grid md:grid-cols-2 gap-8">
                        <div>
                            <h4 class="font-bold mb-2">Do you use JavaScript?</h4>
                            <p>No! All our sites are 100% built using HTML + Tailwind CSS only.</p>
                        </div>
                        <div>
                            <h4 class="font-bold mb-2">Do you offer custom design?</h4>
                            <p>Yes, we specialize in custom UI design with pixel-perfect layouts.</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Contact
