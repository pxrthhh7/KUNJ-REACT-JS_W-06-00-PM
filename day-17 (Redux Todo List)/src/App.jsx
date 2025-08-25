import React from 'react'
import './App.css'
import AddTodo from './Components/AddTodo'
import TodoList from './Components/TodoList'

const App = () => {

  return (
    <>
      <div className="min-h-screen w-full bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 flex items-center justify-center px-4">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-6 space-y-6">

          {/* Header */}
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800">My To-Do List</h1>
            <p className="text-sm text-gray-500 mt-1">Manage your tasks effectively</p>
          </div>

          {/* Input */}
          <AddTodo />

          {/* Task List */}
          <TodoList />

        </div>
      </div>
    </>
  )
}

export default App
