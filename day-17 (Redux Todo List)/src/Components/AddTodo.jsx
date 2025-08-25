import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../Redux/todoActions'

const AddTodo = () => {

    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const handelAdd = (() => {
        if (input.trim()) {
            dispatch(addTodo(input))
            setInput('')
        }
    })

    return (
        <>
            <div className="flex items-center space-x-2">
                <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder="Add new task..." className="flex-grow px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
                <button onClick={handelAdd} className="bg-indigo-500 cursor-pointer text-white px-4 py-2 rounded-full hover:bg-indigo-600 transition">
                    Add
                </button>
            </div>
        </>
    )
}

export default AddTodo
