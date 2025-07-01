import React from 'react'
// import { useState } from 'react'
import { useEffect } from 'react'

// const App = () => {

//   useEffect(() => {
//     alert("Hello")
//   })

//   return (
//     <>
//       <h1>Hello World</h1>
//     </>
//   )
// }

const App = () => {

  useEffect(() => {
    alert("Hello")
  },[])

  return (
    <>
      <h1>Hello World</h1>
    </>
  )
}

// const App = () => {

//   let [count, setCount] = useState(0)

//   let incr = (() => {
//     setCount(count + 1)
//   })
//   let dec = (() => {
//     setCount(count - 1)
//   })

//   useEffect(() => {
//     alert("Hello")
//   })

//   return (
//     <>
//       <button onClick={incr}>INC</button>
//       <h1>{count}</h1>
//       <button onClick={dec}>DEC</button>
//     </>
//   )
// }

export default App
