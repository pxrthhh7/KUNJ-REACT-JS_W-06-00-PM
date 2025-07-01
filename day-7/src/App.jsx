import React, { useState } from 'react'
import './style.css'
import Login from './Login'
import SignUp from './SignUp'

const App = () => {
  const [page, setPage] = useState("SignUp")

  const changePage = (() => {
    setPage(page == "SignUp" ? "Login" : "SignUp")
  })

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-400 to-blue-500">
        <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">


          {page === "SignUp" ? <SignUp /> : <Login />}

          {/* Optional: Sign-in link */}
          {
            page === "SignUp" ? (
              <div className="text-center mt-4 text-sm text-gray-600">
                Already have an account? <span onClick={changePage} className="text-green-600 hover:underline">Log in</span>
              </div>
            ) : null
          }


        </div>
      </div>
    </>
  )
}

export default App
