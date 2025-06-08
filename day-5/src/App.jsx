import React from 'react'
import './App.css'
import { useState } from 'react'
import Comp1 from "./Comp1";

const App = () => {

  let [count,setCount] = useState(0)

  let incr = (() => {
    setCount(count + 1)
  })

  let decr = (() => {
    if (count > 0) {
      setCount(count - 1)
    }
  })

  return (
    <>
      <div className='Main'>
        <button onClick={incr}>INC</button>
        <Comp1 count={count} />
        <button onClick={decr}>DEC</button>
      </div>
    </>
  )
}

export default App
