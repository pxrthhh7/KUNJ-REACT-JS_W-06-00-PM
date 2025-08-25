import React from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import { increment, decrement } from './redux/Actions'
import C1 from './C1'

const App = () => {

  
  const dispatch = useDispatch()

  return (
    <div>
      <div class="min-h-screen bg-gray-100 flex items-center justify-center">
        <div class="bg-white shadow-lg rounded-2xl p-8 w-full max-w-sm text-center">
          <h1 class="text-3xl font-bold text-gray-800 mb-6">Counter</h1>

          <div class="flex items-center justify-center space-x-6">
            <button onClick={() => dispatch(decrement())} class="bg-red-500 cursor-pointer text-white px-5 py-2 rounded-full hover:bg-red-600 transition-all duration-200">
              -
            </button>
            <C1 />
            <button onClick={() => dispatch(increment())} class="bg-green-500 cursor-pointer text-white px-5 py-2 rounded-full hover:bg-green-600 transition-all duration-200">
              +
            </button>
          </div>
        </div>
      </div>
    </div>


  )
}

export default App
