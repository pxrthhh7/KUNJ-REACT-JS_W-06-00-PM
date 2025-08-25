import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import './App.css'


const App = () => {

  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  })

  const signUpUser = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("User created:", userCredential.user);
    } catch (error) {
      console.error("Error creating user:", error.code, error.message);
    }
  };

  const handelSignUp = (() => {
    signUpUser(userInfo.email, userInfo.password)
    setUserInfo({...userInfo, email : '' , password : ''})
  })

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 to-yellow-50 p-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Create Account</h2>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                value={userInfo.email}
                onChange={(e) => setUserInfo({...userInfo, email : e.target.value})}
                type="email"
                placeholder="Enter your email"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                value={userInfo.password}
                onChange={(e) => setUserInfo({...userInfo, password : e.target.value})}
                type="password"
                placeholder="Enter your password"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
                required
              />
            </div>

            <button
              onClick={handelSignUp}
              type="submit"
              className="w-full cursor-pointer bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-xl transition duration-200"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default App