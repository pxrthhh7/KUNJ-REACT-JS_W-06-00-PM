import './App.css'
import { useState } from 'react'
import React from 'react'


const App = () => {

  let [count, setCount] = useState(0)

  let incr = (() => {
    setCount(count + 1)
  })
  let dec = (() => {
    setCount(count - 1)
  })

  return (
    <>
      <h1>{count}</h1>
      <div className='btnMain'>
        <button onClick={incr}>+</button>
        <button onClick={dec}>-</button>
      </div>
    </>
  )
}

export default App
