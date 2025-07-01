import React from 'react'

const Login = () => {
    return (
        <>
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>

            <form className="flex flex-col space-y-4">
                {/* Email Input */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    />
                </div>

                {/* Password Input */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Password</label>
                    <input
                        type="password"
                        placeholder="Enter your password"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    />
                </div>

                {/* Submit Button */}
                <button type="submit" className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
                    Log in
                </button>
            </form>
        </>
    )
}

export default Login
