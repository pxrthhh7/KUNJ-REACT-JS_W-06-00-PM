import React, { useState } from 'react'
import { Icon } from '@iconify-icon/react/dist/iconify.js'
import { useDispatch, useSelector } from 'react-redux'
import { editTodo, removeTodo, toggleTodo } from '../Redux/todoActions'

const TodoList = () => {

    const todos = useSelector((state) => state.todos)
    const dispatch = useDispatch()


    const [editIndex, setEditIndex] = useState(null)
    const [editTask, setEditTask] = useState('')

    const handelSave = (() => {
        console.log("Saved")
        dispatch(editTodo(editTask, editIndex))
        setEditIndex(null)
        setEditTask('')
    })


    return (
        <>
            <ul className="space-y-3 max-h-60 overflow-y-auto pr-1">
                {
                    todos.length === 0 ? (
                        <p className="text-gray-400 text-center">No tasks added yet.</p>
                    ) : (
                        todos.map((e, i) => (

                            <li key={i} className="flex items-center justify-between bg-gray-100 p-3 rounded-xl">

                                {
                                    editIndex === i ?
                                        <>
                                            <input value={editTask} onChange={(e) => setEditTask(e.target.value)} type="text" className='border-b outline-none' />
                                        </> 
                                        :
                                        <>
                                            <span className={`flex-grow cursor-pointer text-gray-700 ${e.completed ? 'line-through text-gray-500' : ''}`}>
                                                {e.text}
                                            </span>
                                        </>
                                }

                                <div className="flex items-center space-x-3 ml-2">

                                    {/* Mark as Completed or Not Completed */}
                                    <button onClick={() => dispatch(toggleTodo(i))} className='flex'>
                                        {
                                            e.completed ?
                                                <>
                                                    <Icon icon="mi:undo" className='text-[20px] text-red-500 hover:text-red-700 cursor-pointer' />
                                                </> :
                                                <>
                                                    <Icon icon="mi:check" className='text-[20px] text-green-600 hover:text-green-800 cursor-pointer' />
                                                </>
                                        }
                                    </button>

                                    {
                                        editIndex === i ?
                                            <>
                                                {/* Save Button */}
                                                <button onClick={handelSave} className='flex'>
                                                    <Icon icon="mi:save" className='text-[20px] text-blue-500 hover:text-blue-600 cursor-pointer' />
                                                </button>
                                            </> 
                                            :
                                            <>
                                                {/* Edit Button */}
                                                <button onClick={() => { setEditIndex(i); setEditTask(e.text) }} className='flex'>
                                                    <Icon icon="mi:edit" className='text-[20px] text-yellow-500 hover:text-yellow-600 cursor-pointer' />
                                                </button>
                                            </>
                                    }



                                    {/* Delete Button */}
                                    <button onClick={() => dispatch(removeTodo(i))} className='flex'>
                                        <Icon icon="mi:delete" className='text-[20px] text-red-500 hover:text-red-700 cursor-pointer' />
                                    </button>
                                </div>
                            </li>
                        ))
                    )
                }

            </ul>
        </>
    )
}

export default TodoList
