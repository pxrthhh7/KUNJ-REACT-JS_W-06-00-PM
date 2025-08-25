import React, { useState } from 'react'
import './App.css'
import { Icon } from '@iconify-icon/react/dist/iconify.js'

const App = () => {

  const [input, setInput] = useState("")
  const [task, setTask] = useState([])
  const [count, setCount] = useState(0)
  const [check, setCheck] = useState(0)
  const [filter, setFilter] = useState("all")
  const [editIndex, setEditIndex] = useState(null)
  const [editTask, setEditTask] = useState('')

  const handelAdd = (() => {
    if (input.trim()) {
      setTask([...task, { text: input, isCompleted: false }])
      setInput("")
      setCount(count + 1)
    }
  })

  const handelCheck = ((index) => (e) => {
    setCheck(e.target.checked ? check + 1 : check - 1)
    const updatedTask = [...task]
    updatedTask[index].isCompleted = e.target.checked
    setTask(updatedTask)
  })

  const handelDelete = ((index) => {
    const newTask = task.filter((_, i) => i != index)
    setTask(newTask)
    setCount(count - 1)
    if (task[index].isCompleted) setCheck(check - 1)
  })

  const handelSave = ((index) => {
    if (editIndex === index) {
      const updatedTask = [...task]
      updatedTask[index].text = editTask
      setTask(updatedTask)
      setEditIndex(null)
      setEditTask('')
    }
  })

  const filteredTask = task.filter((t) => {
    if (filter === "completed") return t.isCompleted
    if (filter === "unCompleted") return !t.isCompleted
    return true
  })

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-6 space-y-6 overflow-hidden">

        {/* HEADER */}
        <h1 className="text-lg sm:text-xl font-bold text-center text-gray-700">
          {check}/{count} Tasks Completed
        </h1>

        {/* INPUT + ADD TASK BUTTON */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
          <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder="Enter your task" className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400" />
          <button onClick={handelAdd} className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600 transition">
            Add
          </button>
        </div>

        {/* ACTION BUTTONS */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-sm">

          {/* BUTTON TO CLEAR ALL TASK */}
          <button onClick={() => { setTask([]); setCount(0); setCheck(0); }} className="bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition">
            Clear All
          </button>

          {/* BUTTON TO SHOW ALL TASK */}
          <button onClick={() => setFilter("all")} className="bg-gray-600 text-white py-2 rounded-lg hover:bg-gray-700 transition">
            Show All
          </button>

          {/* BUTTON TO SHOW COMPLETED TASK */}
          <button onClick={() => setFilter("completed")} className="bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition">
            Completed
          </button>

          {/* BUTTON TO SHOW UNCOMPLETED TASK */}
          <button onClick={() => setFilter("unCompleted")} className="bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 transition">
            UnCompleted
          </button>
        </div>

        {/* TASK LIST */}
        <ul className="max-h-64 overflow-y-auto space-y-2 pr-1">
          {
            filteredTask.map((e, i) => (
              <li key={i} className="flex justify-between items-center gap-3 bg-gray-100 px-3 py-2 rounded-lg text-sm">

                {
                  editIndex === i ?

                    // EDIT TASK INPUT SECTION
                    <input className='outline-none border-b-2' type="text" value={editTask} onChange={(element) => setEditTask(element.target.value)} />
                    
                    :

                    // CHECK & UNCHECK BUTTON WITH TASK 
                    <div className='flex items-center gap-[10px]'>
                      <input onClick={handelCheck(i)} type="checkbox" checked={e.isCompleted} className="accent-blue-600 w-4 h-4" />
                      <span className={`${e.isCompleted ? 'line-through text-gray-400' : 'text-gray-800'}`}>
                        {e.text}
                      </span>
                    </div>

                }


                <div className='flex gap-[15px]'>
                  {
                    editIndex === i ?

                      // SAVE BUTTON
                      <button onClick={() => handelSave(i)} className='cursor-pointer text-yellow-500 hover:text-yellow-700 text-[18px]'>
                        <Icon icon="fluent:save-16-filled" />
                      </button> :

                      // EDIT BUTTON
                      <button onClick={() => setEditIndex(i)} className='cursor-pointer text-blue-500 hover:text-blue-700 text-[18px]'>
                        <Icon icon="fluent:edit-16-filled" />
                      </button>
                  }

                  {/* TASK DELETE BUTTON */}
                  <button onClick={() => handelDelete(i)} className='cursor-pointer text-red-500 hover:text-red-700 text-[18px]'>
                    <Icon icon="fluent:delete-16-filled" />
                  </button>
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default App
