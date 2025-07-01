import React from 'react'

const SignUp = () => {
    return (
        <>
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Create Account</h2>

            <form className="flex flex-col space-y-4">
                {/* Name Input */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Name</label>
                    <input type="text" placeholder="Enter your name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400" />
                </div>

                {/* Email Input */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" placeholder="Enter your email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400" />
                </div>

                {/* Password Input */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Password</label>
                    <input type="password" placeholder="Create a password" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400" />
                </div>

                {/* Submit Button */}
                <button type="submit" className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
                    Sign Up
                </button>
            </form>
        </>
    )
}

export default SignUp
